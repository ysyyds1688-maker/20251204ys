# WordPress 開發規格書 (React to WP Spec)

本文件旨在將目前的 React 測試站架構，轉換為 WordPress 正式站的技術開發規格。請 WordPress 開發團隊依照此規格進行主題與外掛的配置。

## 1. 核心架構對照 (Architecture Mapping)

| React 路由 (Prototype) | WordPress 頁面類型 (Template) | 說明 |
| ---------------------- | ---------------------------- | ---- |
| `/` | `front-page.php` | 首頁，包含 Hero Section、遊戲入口、最新文章聚合。 |
| `/games` | `page-games.php` / `archive-game.php` | 遊戲專區總覽。 |
| `/games/:type` | `taxonomy-game_type.php` | 特定遊戲分類頁 (百家樂、老虎機...)。 |
| `/recommendations` | `page-recommendations.php` | 娛樂城推薦總覽。 |
| `/recommendations/best-casinos/2025` | `single-ranking.php` (或 Page) | 特定榜單頁面。 |
| `/forum` | `archive-forum_topic.php` | 論壇首頁 (客製化 Archive)。 |
| `/forum/c/:category` | `taxonomy-forum_category.php` | 論壇版塊列表頁。 |
| `/topic/:slug` | `single-forum_topic.php` | 論壇話題內文頁。 |
| `/news` | `home.php` (Blog Home) | 一般文章/新聞列表。 |
| `/news/:id` | `single.php` | 一般文章內文。 |

---

## 2. 自定義內容類型 (Custom Post Types - CPT)

除了 WordPress 預設的 `Post` (文章) 與 `Page` (頁面)，需建立以下 CPT：

### A. 娛樂城 (Casino)
*   **Slug**: `casino`
*   **支援**: Title, Editor, Thumbnail, Excerpt, Custom Fields
*   **用途**: 儲存單一娛樂城的詳細評測資料。

### B. 遊戲 (Game)
*   **Slug**: `game`
*   **支援**: Title, Editor, Thumbnail, Excerpt, Custom Fields
*   **用途**: 儲存單一遊戲介紹 (如某款老虎機、某種百家樂玩法)。

### C. 論壇話題 (Forum Topic)
*   **Slug**: `topic`
*   **支援**: Title, Editor, Author, Comments, Custom Fields
*   **用途**: 模擬論壇結構的 SEO 文章。**注意**：這不是 bbPress，而是用 CPT 模擬論壇帖子的形式，以獲得更好的 SEO 控制權。

---

## 3. 自定義分類法 (Custom Taxonomies)

### A. 遊戲類型 (Game Type)
*   **關聯 CPT**: `game`
*   **範例**: 真人百家樂, 電子老虎機, 體育投注, 彩票
*   **Slug**: `game_type`

### B. 論壇版塊 (Forum Category)
*   **關聯 CPT**: `topic`
*   **範例**: 綜合討論, 娛樂城評價, 遊戲攻略, 優惠情報
*   **Slug**: `forum_category`

---

## 4. 自定義欄位 (ACF Fields)

建議使用 **Advanced Custom Fields (ACF)** 外掛實作。

### A. 娛樂城欄位 (Group: Casino Info)
*   **評分 (Rating)**: Number (0-5)
*   **特色標籤 (Features)**: Repeater / Text (e.g., "出金快", "加密貨幣")
*   **優惠文字 (Bonus Text)**: Text (e.g., "註冊送 168")
*   **推薦連結 (Affiliate Link)**: URL
*   **出金速度 (Withdrawal Speed)**: Text
*   **官方 Logo (Logo)**: Image

### B. 遊戲欄位 (Group: Game Info)
*   **RTP**: Text (e.g., "96.5%")
*   **波動率 (Volatility)**: Select (Low, Medium, High)
*   **最大倍數 (Max Win)**: Text
*   **供應商 (Provider)**: Text (或關聯 Taxonomy)

### C. 論壇話題欄位 (Group: Topic Meta)
*   **瀏覽數 (Views)**: Number (可由程式自動計數或手動設定假資料)
*   **置頂狀態 (Is Sticky)**: Boolean

---

## 5. 功能模組需求

### A. SEO 配置
*   **外掛**: Rank Math SEO (推薦) 或 Yoast SEO。
*   **需求**:
    *   每個 CPT 都必須支援獨立的 Title & Meta Description 設定。
    *   需支援 Schema Markup (Review Schema 用於娛樂城，Article/DiscussionForumPosting Schema 用於話題)。
    *   **麵包屑 (Breadcrumbs)**: 必須依照階層顯示 (首頁 > 論壇 > 版塊 > 話題)。

### B. 圖片優化
*   **外掛**: WebP Express 或類似工具。
*   **需求**: 自動轉換 WebP，並設定 Lazy Load。
*   **尺寸**: 依照 `IMAGE_REQUIREMENTS.md` 設定縮圖尺寸 (Thumnail sizes)。

### C. 效能優化
*   **外掛**: WP Rocket 或 LiteSpeed Cache。
*   **需求**: HTML/CSS/JS Minification, Database Cleanup。

---

## 6. 遷移執行步驟 (Migration Steps)

1.  **架設 WordPress 環境**。
2.  **安裝必要外掛**:
    *   ACF Pro (自定義欄位)
    *   CPT UI (如果不想寫 code 建立 CPT)
    *   Rank Math SEO
    *   Classic Editor (視需求而定，若要複雜排版建議用 Gutenberg 或 Elementor)
3.  **建立 CPT 與 Taxonomies** (依照第 2, 3 點)。
4.  **建立 ACF 欄位** (依照第 4 點)。
5.  **開發主題 (Theme Development)**:
    *   參考 React 專案的 `src/pages` 與 `src/components` 進行樣式切版。
    *   使用 Tailwind CSS for WP 或是將 React 樣式轉譯為標準 CSS。
6.  **內容遷移**:
    *   將 React 站中的假資料 (Mock Data) 轉入 WordPress 資料庫。

---

## 7. 附錄：樣式參考
*   **色調**: Slate-950 (背景), Cyan-400 (主色), Slate-300 (文字)。
*   **字體**: Noto Sans TC (Google Fonts)。
*   **Icon**: Lucide React (WP 中可使用 SVG 或 FontAwesome 替代)。

