# YS 娛樂城論壇 - 前端原型專案 (React Prototype)

本專案為 **YS 娛樂城論壇** 的前端原型開發與 SEO 架構規劃站點。
此專案的主要目的是作為未來 **WordPress 正式站** 的視覺、架構與內容規劃參考。

> ⚠️ **重要提示**：本站點目前設定為 **Noindex (不被收錄)**，僅供內部測試與架構確認使用。

---

## 📂 專案結構與重要文件

本專案包含完整的 React 程式碼以及數份關鍵的規劃文件，請接手人員務必詳閱：

### 1. 技術規格文件
*   📄 **`WP_DEVELOPMENT_SPEC.md`** (核心文件): 詳細定義了未來 WordPress 網站的架構、CPT (自定義文章類型)、Taxonomies (分類法) 與 ACF 欄位規格。**開發 WP 主題前必讀。**
*   📄 **`WP_LAUNCH_SEO_CHECKLIST.md`**: WordPress 正式站上線前的 SEO 檢查清單 (包含解除 Noindex、Sitemap 設定等)。
*   📄 **`ys-seo-structure.md`**: 原始 SEO 架構規劃書。

### 2. 圖片與資源
*   📄 **`圖片資源清單.md`**: 完整的圖片使用清單與狀態追蹤（✅ 41 張已完成，❌ 3 張待補充）。
*   📄 **`IMAGE_REQUIREMENTS.md`**: 全站圖片尺寸規範與 AI 生成提示詞。
*   📂 **`public/images/`**: 存放已生成的圖片素材，已建立完整資料夾結構（articles, promotions, guides, recommendations, influencers）。

### 3. 程式碼結構
*   `pages/`: 所有頁面組件
    *   `pages/forum/`: **論壇功能原型** (首頁、版塊、內文)。
    *   `pages/games/`: 遊戲專區頁面。
    *   `pages/guides/`: 攻略教學頁面。
*   `components/`: 共用組件 (Navbar, Footer, SEO, Breadcrumb)。
*   `src/data/`: 模擬資料 (如 `mockForumData.ts` 用於生成論壇假資料)。

---

## 🚀 快速開始 (Development)

### 1. 安裝依賴
```bash
npm install
# 或
yarn install
# 或
pnpm install
```

### 2. 啟動開發伺服器
```bash
npm run dev
```
訪問 `http://localhost:3000` 即可預覽。

### 3. 部署 (Deployment)
本專案已配置好 Zeabur 部署設定 (`vite.config.ts` 已允許 `allowedHosts`)。
直接將代碼推送到 GitHub 並連接 Zeabur 即可自動部署。

---

## 🛡️ SEO 防護機制 (Test Site Protection)

為了防止測試站內容被 Google 收錄導致 Duplicate Content (重複內容) 問題，目前已實施以下防護：

1.  **`public/robots.txt`**: 設定為 `Disallow: /`。
2.  **`index.html`**: 包含 `<meta name="robots" content="noindex, nofollow" />`。
3.  **`components/SEO.tsx`**: 所有頁面強制輸出 `noindex` meta tag。

> **注意**: 未來遷移到 WordPress 正式站時，請務必依照 `WP_LAUNCH_SEO_CHECKLIST.md` 解除這些防護。

---

## 📝 功能對照 (React -> WP)

| 功能模組 | React 原型路徑 | 未來 WP 對應 |
| -------- | ------------ | ----------- |
| 論壇首頁 | `/forum` | Archive Template |
| 論壇版塊 | `/forum/c/:id` | Taxonomy Template |
| 論壇文章 | `/topic/:slug` | Single Post (CPT) |
| 娛樂城評測 | `/recommendations` | Page / Archive |
| 遊戲攻略 | `/guides` | Category Archive |

---

## 🖼️ 圖片資源狀態

### ✅ 已完成圖片：41 張

- **主要遊戲圖片**：27 張（導航欄 Banner、遊戲頁面 Banner、首頁遊戲卡片、遊戲專區卡片、首頁文章）
- **文章/新聞圖片**：6 張（已整理至 `articles/` 資料夾）
- **優惠活動圖片**：2 張（已整理至 `promotions/` 資料夾）
- **攻略教學圖片**：2 張（已整理至 `guides/` 資料夾）
- **推薦評測圖片**：4 張（已整理至 `recommendations/` 資料夾）

### ❌ 待補充圖片：3 張

- **網紅頭像**：`influencer-1.jpg`, `influencer-2.jpg`, `influencer-3.jpg`（需放置於 `influencers/` 資料夾）

### 📂 圖片資料夾結構

```
public/images/
├── 已使用/              # 主要遊戲圖片（19張）
├── articles/            # 文章圖片（6張）✅
├── promotions/          # 優惠活動圖片（2張）✅
├── guides/              # 攻略教學圖片（2張）✅
├── recommendations/     # 推薦評測圖片（4張）✅
└── influencers/         # 網紅頭像（待補充3張）❌
```

> 📄 **詳細清單**：請參考 `圖片資源清單.md` 查看完整的圖片使用狀況與規格說明。

---

## 📊 專案進度總覽

### ✅ 已完成項目

#### 1. 圖片資源整理（95% 完成）
- ✅ 建立完整的圖片資料夾結構（articles, promotions, guides, recommendations, influencers）
- ✅ 整理並移動所有已使用的圖片至 `已使用/` 資料夾
- ✅ 完成 41 張圖片的路徑更新與分類
- ✅ 建立 `圖片資源清單.md` 完整追蹤文件
- ⚠️ 待補充：3 張網紅頭像

#### 2. YS 頁面文章完善（100% 完成）
- ✅ **關於我們頁面** (`/trust/about`)：完整內容 + Organization schema
- ✅ **客服頁面** (`/trust/contact`)：完整內容 + ContactPage schema
- ✅ **出金保障頁面** (`/trust/security`)：完整內容 + FAQ schema
- ✅ 所有頁面包含完整的 SEO 優化（meta 標籤、結構化數據、內部連結）
- ✅ 建立 `YS頁面文章檢查清單.md` 追蹤文件

#### 3. SEO 優化
- ✅ 所有頁面包含完整的 meta 標籤
- ✅ 結構化數據（Schema.org）已實施
- ✅ 清晰的 H1/H2/H3 標題結構
- ✅ 內部連結優化

### ⚠️ 待完成項目

#### 1. 圖片補充
- ❌ 網紅頭像 3 張（`influencers/influencer-1.jpg`, `influencer-2.jpg`, `influencer-3.jpg`）

#### 2. 內容完善（可選）
- ⚠️ 其他頁面內容檢查與優化
- ⚠️ 更多內部連結建立
- ⚠️ 圖片 alt 標籤檢查

---

## 🤝 交接事項

1.  請先確認 React 站的 `/forum` 頁面，了解期望的論壇互動流程與視覺風格。
2.  依照 `WP_DEVELOPMENT_SPEC.md` 建立 WordPress 的後台欄位。
3.  使用 `src/data/mockForumData.ts` 中的內容作為初期填充資料。
4.  圖片素材請直接從 `public/images` 移植使用，已建立完整資料夾結構。
5.  **補充缺失的圖片**：僅需補充 3 張網紅頭像，詳細請參考 `圖片資源清單.md`。

---

## 📝 更新日誌

### 2025-01-XX (最新更新)
- ✅ **圖片資源整理完成**：41 張圖片已完成分類與路徑更新，建立完整資料夾結構
- ✅ **YS 頁面文章完善**：關於我們、客服、出金保障三個頁面已完成內容與 SEO 優化
- ✅ **SEO 優化完成**：所有頁面包含結構化數據、meta 標籤、內部連結
- ✅ **文件建立**：`圖片資源清單.md`、`YS頁面文章檢查清單.md`
- ⚠️ **待補充**：3 張網紅頭像

### 2025-01-XX (前期更新)
- ✅ 完成所有遊戲頁面 Banner (16:9 比例)
- ✅ 完成導航欄 Banner 圖片
- ✅ 完成首頁熱門遊戲區塊圖片
- ✅ 完成遊戲專區頁面所有卡片圖片

---

## 🔄 自動化內容系統狀態（n8n + Google Sheet）

### ✅ 已完成

- **Google Sheet 作為唯一文章資料來源**
  - 前端 `ArticleService.ts` 會從同一份 Google Sheet 的 **4 個分頁** 讀取 CSV：
    - 娛樂城評價類（高轉換意圖）
    - 優惠活動類（吸流量）
    - 真人百家樂類（高含金量）
    - 體育與電子類
  - 所有頁面共用這一份 Sheet：
    - 首頁「本週熱門話題」
    - `/topic/:slug` 文章頁（`ArticlePage`）
    - 論壇首頁 `/forum` 熱門討論
    - 論壇分類頁 `/forum/c/:id`

- **n8n 自動發文工作流**
  - 已串接：Google Sheets → Serper.dev 搜尋 → AI Agent（OpenAI/Gemini）→ Code 節點（`n8n_Code節點_最終版本.txt`）→ Google Sheets 寫回
  - AI Prompt 已整理成多個版本，最終使用：`n8n_AI_Agent_Prompt_完整版_含免責聲明.md`
    - 動態年份處理（根據搜尋結果或使用「目前/最新」等相對時間）
    - 風格智能匹配（`n8n_Code節點_風格智能匹配.txt`）
    - 免責聲明內嵌在文章 conclusion，前端只再顯示一次
  - Code 節點負責：
    - 解析 AI 回傳的 JSON（含處理 ```json 包裹、亂碼、前後雜訊）
    - 組裝標準化欄位：`title` / `body` / `description`
    - 輸出到 Sheet 的欄位：`Keyword` / `Category` / `GEO` / `title` / `body` / `description`

- **前端與 slug / 內容整合**
  - `ArticleService.ts`：
    - 支援多個欄位作為內容來源：`Content` / `content` / `body` / `Body`
    - 產生統一規則的 `slug`（支援中文、英文、數字與連字號）
    - 合併四個分頁、依日期排序
  - `ArticlePage.tsx` / `TopicPage.tsx`：
    - 使用相同的 `generateSlug` 邏輯做比對
    - 優先比對 `slug`，其次 `title` / 標準化 slug
    - 找不到文章時會輸出 debug log（方便開發時檢查）
  - 論壇頁面已全改為讀取 Google Sheet：
    - `ForumIndexPage` 熱門討論改用 `useArticles()`
    - `ForumCategoryPage` 依 `Category` 與論壇分類對應篩選文章

- **自動補充關鍵字工作流（規劃完成，Code 已就緒）**
  - 文件：`n8n_自動補充關鍵字工作流指南.md`
  - 方案 B（預定義列表，不用 AI）已提供完整 Code：
    - Code 檔：`n8n_自動補充關鍵字_Code節點.txt`
    - 每個分類有一組關鍵字庫（娛樂城評價 / 優惠活動 / 遊戲攻略 / 防詐騙 / 綜合討論）
    - 支援去重：不會重複現有關鍵字
    - 直接輸出標準欄位：`Keyword` / `Category` / `GEO` / `Status=pending`

### ⏳ 待完成 To-do（優先度由高到低）

> 以下對應內部 todo 工具中的項目，方便後續接手或自己回來繼續。

- **test-full-workflow**（高）  
  - 從「關鍵字 pending → n8n 發文 → Sheet `Status=done` → 前端顯示」跑一次完整流程  
  - 確認四個分頁的文章都能正常出現在網站上，slug 與內容無誤

- **confirm-5-sheets-structure**（中）  
  - 目前已整合 4 個主分頁，如未來新增第 5 類（例如「綜合討論類」）需：  
    - 在同一份 Sheet 新增分頁  
    - 依照現有欄位結構：`Keyword | GEO | Category | Content | title | Excerpt | Status | Date`
    - 更新 `SHEET_CSV_URLS` 與對應的 `Category` 邏輯（如有需要）

- **test-different-keywords**（中）  
  - 在每個分頁加入多組不同意圖的關鍵字，測試：  
    - AI 是否依關鍵字生成不同文章（不重複、不洗稿）  
    - 風格匹配是否正確（防詐騙/優惠/攻略/評價）

- **add-more-keywords**（中）  
  - 透過「自動補充關鍵字」 workflow 或手動方式，為四個分頁補足 20–30 組高品質關鍵字  
  - 建議先從方案 B（預定義列表）開始，之後再視需要接 AI 生成方案

- **setup-date-field**（中）  
  - 在 n8n 的「Google Sheets Update / Append」節點中，統一寫入 `Date` 欄位：  
    - 可用 n8n 表達式：`{{$now}}` 或格式化為 `YYYY-MM-DD`  
    - 確保前端排序與顯示日期正確

- **setup-auto-schedule**（中）  
  - 為以下 workflow 設定自動排程（Cron）：  
    - 每日自動發文 workflow（依各分頁/分類）  
    - 自動補充關鍵字 workflow（例如每天或每週補一次）

- **（可選）AI 版關鍵字補充**（低）  
  - 若之後要啟動 AI 生成關鍵字：  
    - 使用 `n8n_自動補充關鍵字_AI_Prompt.md` 作為 AI Agent 的 Prompt  
    - Code 解析：`n8n_自動補充關鍵字_AI生成版_Code節點.txt`  
    - 建議先小量測試，確認關鍵字品質與去重邏輯

