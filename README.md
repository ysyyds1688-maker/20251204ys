# YS 娛樂城論壇 - 前端原型專案 (React Prototype)

本專案為 **YS 娛樂城論壇** 的前端原型開發與 SEO 架構規劃站點。
此專案的主要目的是作為未來 **WordPress 正式站** 的視覺、架構與內容規劃參考。

> ⚠️ **重要提示**：本站點目前設定為 **Noindex (不被收錄)**，僅供內部測試與架構確認使用。

---

## 📂 專案結構與重要文件

本專案包含完整的 React 程式碼以及數份關鍵的規劃文件，請接手人員務必詳閱：

### 1. 技術規格文件
*   📄 **`docs/WP_DEVELOPMENT_SPEC.md`** (核心文件): 詳細定義了未來 WordPress 網站的架構、CPT (自定義文章類型)、Taxonomies (分類法) 與 ACF 欄位規格。**開發 WP 主題前必讀。**
*   📄 **`docs/WordPress遷移完整指南.md`** ⭐ 新增: 從 React 原型遷移到 WordPress 的完整說明，包含文章管理差異、部署架構、n8n 工作流調整。
*   📄 **`docs/WordPress開發與內容管理流程.md`** ⭐ 新增: 說明開發（程式碼）與內容管理的區別，以及網站持續改進的處理方式。
*   📄 **`docs/SEO_IMPLEMENTATION.md`**: SEO 實作指南、結構化數據規格、Meta 標籤規範。

### 2. 圖片與資源
*   📄 **`docs/圖片資源清單.md`**: 完整的圖片使用清單與狀態追蹤（✅ 41 張已完成）。
*   📄 **`docs/圖片管理完整指南.md`** ⭐ 整合文件: 圖片資料夾結構、命名規則、n8n 處理、規格建議。
*   📂 **`public/images/`**: 存放已生成的圖片素材，已建立完整資料夾結構：
    - `articles/` - 文章圖片（按分類分資料夾）
    - `banners/` - 所有 banner 圖片
    - `promotions/` - 優惠活動圖片
    - `guides/` - 攻略教學圖片
    - `recommendations/` - 推薦評測圖片
    - `influencers/` - 網紅頭像

### 3. 程式碼結構
*   `pages/`: 所有頁面組件（統一位置）
    *   `pages/forum/`: **論壇功能原型** (首頁、版塊、內文)。
    *   `pages/games/`: 遊戲專區頁面。
    *   `pages/guides/`: 攻略教學頁面。
*   `components/`: 共用組件 (Navbar, Footer, SEO, Breadcrumb)。
*   `src/`: 源碼目錄
    *   `src/services/`: 服務層（如 `ArticleService.ts` 用於讀取 Google Sheet 文章）。
    *   `src/data/`: 模擬資料 (如 `mockForumData.ts` 用於生成論壇假資料)。
*   `docs/`: 所有技術文件與規劃文件（統一位置）
    *   詳細文件索引請參考 `docs/README.md`

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

> **注意**: 未來遷移到 WordPress 正式站時，請務必依照 `docs/WP_LAUNCH_SEO_CHECKLIST.md` 解除這些防護。

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

> 📄 **詳細清單**：請參考 `docs/圖片資源清單.md` 查看完整的圖片使用狀況與規格說明。

---

## 📊 專案進度總覽

### ✅ 已完成項目

#### 1. 圖片資源整理（95% 完成）
- ✅ 建立完整的圖片資料夾結構（articles, promotions, guides, recommendations, influencers）
- ✅ 整理並移動所有已使用的圖片至 `已使用/` 資料夾
- ✅ 完成 41 張圖片的路徑更新與分類
- ✅ 建立 `docs/圖片資源清單.md` 完整追蹤文件
- ⚠️ 待補充：3 張網紅頭像

#### 2. YS 頁面文章完善（100% 完成）
- ✅ **關於我們頁面** (`/trust/about`)：完整內容 + Organization schema
- ✅ **客服頁面** (`/trust/contact`)：完整內容 + ContactPage schema
- ✅ **出金保障頁面** (`/trust/security`)：完整內容 + FAQ schema
- ✅ 所有頁面包含完整的 SEO 優化（meta 標籤、結構化數據、內部連結）
- ✅ 建立 `docs/YS頁面文章檢查清單.md` 追蹤文件

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

## ⚠️ 正式上架前需修改項目清單

> **重要**：以下項目在正式上架前必須修改，否則會影響 SEO、功能或安全性。

### 🔒 SEO 防護機制（必須解除）

#### 1. `public/robots.txt`
- **目前狀態**：`Disallow: /`（禁止所有爬蟲）
- **需要修改**：
  - 改為 `Allow: /` 或移除 `Disallow: /`
  - 更新 Sitemap URL 為正式域名
  - **檔案位置**：`public/robots.txt`
  - **參考**：`docs/部署完整指南.md`

#### 2. `index.html`
- **目前狀態**：包含 `<meta name="robots" content="noindex, nofollow" />`
- **需要修改**：
  - 移除或改為 `<meta name="robots" content="index, follow" />`
  - **檔案位置**：`index.html` 第 7 行

#### 3. `components/SEO.tsx`
- **目前狀態**：所有頁面強制輸出 `noindex` meta tag
- **需要修改**：
  - 移除強制 `noindex` 邏輯
  - 改為根據環境變數或設定動態控制
  - **檔案位置**：`components/SEO.tsx` 第 45 行

### 🌐 域名與 URL 設定（必須更新）

#### 4. `public/sitemap.xml`
- **目前狀態**：所有 URL 使用 `https://ys-entertainment.com`
- **需要修改**：
  - 將所有 `https://ys-entertainment.com` 替換為正式域名
  - 更新所有 `<lastmod>` 日期為實際日期
  - **檔案位置**：`public/sitemap.xml`
  - **影響範圍**：整個檔案（約 383 行）

#### 5. `public/robots.txt`
- **目前狀態**：Sitemap URL 為 `https://ys-entertainment.com/sitemap.xml`
- **需要修改**：
  - 更新為正式域名的 sitemap URL
  - **檔案位置**：`public/robots.txt` 第 7 行

#### 6. 結構化數據（Schema.org）中的 URL
- **需要檢查**：所有頁面中的結構化數據（Organization, ContactPage, FAQ 等）
- **檔案位置**：
  - `pages/trust/AboutPage.tsx`
  - `pages/trust/ContactPage.tsx`
  - `pages/trust/SecurityPage.tsx`
- **需要修改**：將所有 `https://ys-entertainment.com` 替換為正式域名

### 📊 Google Sheet 配置（必須確認）

#### 7. `src/services/ArticleService.ts`
- **目前狀態**：
  - Sheet ID: `1eMQUXRcn9-wELa8cLoK6kXrdnEnkZoMyMzAtCH1Bmes`（測試用）
  - 綜合討論類的 CSV URL 被註解
- **需要修改**：
  - 確認是否使用正式 Google Sheet（或保持測試 Sheet）
  - 如果新增「綜合討論類」分頁，需要：
    1. 在 Google Sheet 中新增分頁並取得 GID
    2. 取消註解第 29 行的 CSV URL
    3. 將 `新的GID` 替換為實際 GID
  - **檔案位置**：`src/services/ArticleService.ts` 第 18-29 行
  - **參考**：`docs/分類對應完整指南.md`

### 🔑 環境變數與 API 金鑰（必須設定）

#### 8. 環境變數設定
- **需要設定**：
  - `GEMINI_API_KEY`（如果使用 Gemini AI）
  - 其他 API 金鑰（Serper.dev、OpenAI 等）
- **設定位置**：
  - 本地開發：`.env.local`（不要提交到 Git）
  - 部署環境：Zeabur Dashboard → Environment Variables
- **參考**：`docs/部署完整指南.md`

### 📝 n8n 工作流配置（必須更新）

#### 9. n8n 工作流中的 Google Sheet ID
- **需要修改**：所有 n8n 工作流中的 Google Sheet ID
- **影響範圍**：
  - 自動發文工作流
  - 關鍵字管理工作流
  - 智能補充關鍵字工作流
- **參考文件**：
  - `docs/n8n_自動發文完整指南.md`
  - `docs/n8n_關鍵字管理完整指南.md`

#### 10. n8n 工作流中的分類映射
- **需要確認**：所有工作流中的 Category 值是否正確
- **必須使用精確值**：
  - `娛樂城評價`
  - `優惠情報`
  - `遊戲攻略`
  - `綜合討論`
- **參考**：`docs/分類對應完整指南.md`

### 🖼️ 圖片與資源（必須檢查）

#### 11. 圖片路徑與 CDN
- **需要檢查**：
  - 所有圖片路徑是否正確
  - 如果使用 CDN，需要更新所有圖片 URL
  - 確認所有圖片已上傳到正式環境
- **參考**：`docs/圖片管理完整指南.md`

#### 12. 網紅頭像補充
- **待補充**：3 張網紅頭像
  - `influencers/influencer-1.jpg`
  - `influencers/influencer-2.jpg`
  - `influencers/influencer-3.jpg`
- **參考**：`docs/圖片資源清單.md`

### 📚 教學內容與流程說明（必須更新為正確版）

> **重要**：以下教學頁面目前為 demo/範例內容，正式上架前必須根據實際平台流程更新為正確版本。

#### 15. 註冊相關教學頁面
- **需要更新**：所有註冊流程說明必須與實際平台一致
- **檔案位置**：
  - `pages/guides/RegisterGuidePage.tsx` - 基本註冊教學
  - `pages/guides/casino/registration/RegistrationStepByStepPage.tsx` - 完整註冊流程
  - `pages/guides/casino/registration/RegistrationVerificationPage.tsx` - 身份驗證教學
  - `pages/guides/casino/registration/RegistrationBonusClaimPage.tsx` - 優惠領取教學
- **需要確認的內容**：
  - 註冊表單欄位是否正確（手機、Email、帳號名稱、密碼等）
  - 驗證流程是否正確（手機驗證碼、Email 驗證等）
  - 服務條款確認流程
  - 體驗金領取方式與金額
  - 註冊按鈕位置與文字（「VIP 登入」、「立即註冊」等）

#### 16. 出金相關教學頁面
- **需要更新**：所有出金流程說明必須與實際平台一致
- **檔案位置**：
  - `pages/guides/WithdrawalGuidePage.tsx` - 基本出金教學
  - `pages/guides/casino/withdrawal/WithdrawalIndexPage.tsx` - 出金總覽
  - `pages/guides/casino/withdrawal/WithdrawalSpeedComparisonPage.tsx` - 出金速度比較
  - `pages/guides/casino/withdrawal/WithdrawalTroubleshootingPage.tsx` - 出金問題排除
- **需要確認的內容**：
  - 出金步驟是否正確（登入 → 進入出金頁面 → 選擇方式 → 填寫資訊 → 確認申請 → 審核 → 到帳）
  - 出金方式是否正確（USDT、銀行轉帳等）
  - 出金時間是否正確（5分鐘內到帳等）
  - 出金限額是否正確（最低100元、最高100萬元等）
  - 出金手續費說明是否正確
  - 出金頁面路徑是否正確（「我的帳戶」→「出金」等）

#### 17. 儲值相關教學頁面
- **需要更新**：所有儲值流程說明必須與實際平台一致
- **檔案位置**：
  - `pages/guides/USDTDepositGuidePage.tsx` - USDT 儲值教學
  - `pages/guides/casino/deposit/DepositIndexPage.tsx` - 儲值總覽
  - `pages/guides/casino/deposit/DepositMethodsPage.tsx` - 儲值方式比較
  - `pages/guides/casino/deposit/DepositBankTransferPage.tsx` - 銀行轉帳教學
- **需要確認的內容**：
  - 儲值方式是否正確（USDT、銀行轉帳等）
  - USDT 協議支援是否正確（TRC20、ERC20 等）
  - 儲值步驟是否正確
  - 儲值限額是否正確
  - 儲值手續費說明是否正確

#### 18. 遊戲遊玩相關教學頁面
- **需要更新**：所有遊戲攻略與遊玩說明必須與實際平台一致
- **檔案位置**：
  - `pages/guides/games/baccarat/` - 百家樂攻略系列
    - `BaccaratBasicsPage.tsx` - 基礎教學
    - `BaccaratRoadReadingPage.tsx` - 看路法教學
    - `BaccaratBettingStrategyPage.tsx` - 下注策略
    - `BaccaratAdvancedTipsPage.tsx` - 進階技巧
  - `pages/guides/games/slots/` - 老虎機攻略系列
    - `SlotsRTPGuidePage.tsx` - RTP 選擇指南
    - `SlotsVolatilityPage.tsx` - 波動率分析
    - `SlotsJackpotStrategyPage.tsx` - 獎池策略
  - `pages/guides/games/sports/` - 體育投注攻略系列
    - `SportsOddsAnalysisPage.tsx` - 賠率分析
    - `SportsBankrollManagementPage.tsx` - 資金管理
    - `SportsLiveBettingPage.tsx` - 滾球投注
  - `pages/guides/games/poker/` - 德州撲克攻略系列
    - `PokerStartingHandsPage.tsx` - 起手牌選擇
    - `PokerPositionPlayPage.tsx` - 位置策略
    - `PokerTournamentStrategyPage.tsx` - 錦標賽策略
- **需要確認的內容**：
  - 遊戲規則說明是否正確
  - 遊戲玩法是否與實際平台一致
  - 遊戲按鈕位置與文字（「立即遊玩」等）
  - 遊戲連結是否正確
  - 範例與計算是否正確

#### 19. 其他教學頁面
- **需要更新**：其他教學內容必須與實際平台一致
- **檔案位置**：
  - `pages/guides/ForgotPasswordGuidePage.tsx` - 忘記密碼教學
  - `pages/guides/ScamPreventionGuidePage.tsx` - 詐騙避免指南
  - `pages/guides/casino/bonuses/` - 優惠相關教學
    - `BonusesTypesPage.tsx` - 優惠類型
    - `BonusesWageringRequirementsPage.tsx` - 流水要求計算
    - `BonusesBestPracticesPage.tsx` - 優惠使用最佳實踐
- **需要確認的內容**：
  - 密碼重置流程是否正確
  - 優惠類型與金額是否正確
  - 流水要求計算是否正確
  - 所有流程說明是否與實際平台一致

#### 20. 遊戲專區頁面
- **需要更新**：遊戲專區頁面中的「立即遊玩」按鈕與連結
- **檔案位置**：
  - `pages/games/BaccaratPage.tsx`
  - `pages/games/SlotsPage.tsx`
  - `pages/games/SportsPage.tsx`
  - `pages/games/PokerPage.tsx`
  - `pages/games/LotteryPage.tsx`
- **需要確認的內容**：
  - 「立即遊玩」按鈕連結是否正確
  - 遊戲註冊連結是否正確
  - 體驗金說明是否正確（「註冊即送體驗金168」等）
  - 遊戲介紹是否與實際平台一致

### 🔧 其他配置檢查

#### 21. 部署配置
- **需要確認**：
  - `zeabur.json` 配置是否正確
  - `vite.config.ts` 中的環境變數設定
  - 構建命令和輸出目錄
- **參考**：`docs/部署完整指南.md`

#### 22. 測試資料清理
- **需要檢查**：
  - `src/data/mockForumData.ts` 中的測試資料
  - 確認正式環境不使用模擬資料
- **檔案位置**：`src/data/mockForumData.ts`

---

## 📋 正式上架檢查清單

### SEO 相關
- [ ] 移除 `robots.txt` 中的 `Disallow: /`
- [ ] 移除 `index.html` 中的 `noindex, nofollow`
- [ ] 移除 `components/SEO.tsx` 中的強制 `noindex`
- [ ] 更新 `sitemap.xml` 中的所有 URL 為正式域名
- [ ] 更新 `robots.txt` 中的 Sitemap URL
- [ ] 更新所有結構化數據中的 URL

### 配置相關
- [ ] 確認 Google Sheet ID 是否使用正式版本
- [ ] 確認綜合討論類分頁的 GID（如需要）
- [ ] 設定所有環境變數（API Keys）
- [ ] 更新 n8n 工作流中的 Google Sheet ID
- [ ] 確認 n8n 工作流中的 Category 值正確

### 資源相關
- [ ] 確認所有圖片已上傳
- [ ] 補充 3 張網紅頭像
- [ ] 檢查所有圖片路徑是否正確
- [ ] 如果使用 CDN，更新所有圖片 URL

### 教學內容相關（重要）
- [ ] 更新所有註冊教學頁面為正確流程
- [ ] 更新所有出金教學頁面為正確流程
- [ ] 更新所有儲值教學頁面為正確流程
- [ ] 更新所有遊戲攻略頁面為正確內容
- [ ] 確認所有「立即遊玩」按鈕連結正確
- [ ] 確認所有體驗金說明正確
- [ ] 確認所有流程步驟與實際平台一致
- [ ] 確認所有限額、手續費、時間說明正確
- [ ] 確認所有範例與計算正確

### 測試相關
- [ ] 移除或禁用測試資料
- [ ] 確認所有功能正常運作
- [ ] 測試所有頁面載入正常
- [ ] 測試文章顯示正常
- [ ] 測試所有教學頁面內容正確
- [ ] 測試所有連結正常運作

### 文件相關
- [ ] 更新所有文件中的測試 URL
- [ ] 確認所有文件中的域名正確

---

## 🤝 交接事項

1.  請先確認 React 站的 `/forum` 頁面，了解期望的論壇互動流程與視覺風格。
2.  依照 `docs/WP_DEVELOPMENT_SPEC.md` 建立 WordPress 的後台欄位。
3.  使用 `src/data/mockForumData.ts` 中的內容作為初期填充資料。
4.  圖片素材請直接從 `public/images` 移植使用，已建立完整資料夾結構。
5.  **補充缺失的圖片**：僅需補充 3 張網紅頭像，詳細請參考 `docs/圖片資源清單.md`。

---

## 📝 更新日誌

### 2025-12-05 (最新更新)
- ✅ **綜合討論類整合完成**：已更新 GID (1435096533)，前端可正常讀取綜合討論文章
- ✅ **熱門討論排序優化**：只顯示有完整內容的文章，按日期排序
- ✅ **Content 欄位讀取優化**：加入詳細 Debug 日誌，確保完整文章內容正確讀取
- ✅ **n8n Code 節點完善**：
  - 完整版：`docs/n8n_Code節點_解析AI回應_完整版.txt`
  - 處理 article 結構：`docs/n8n_Code節點_解析AI回應_處理article結構.txt`
  - 診斷版：`docs/n8n_Code節點_解析AI回應_診斷版.txt`
- ✅ **WordPress 遷移指南**：
  - `docs/WordPress遷移完整指南.md` - 完整遷移說明
  - `docs/WordPress開發與內容管理流程.md` - 開發與內容管理流程
  - `docs/n8n_WordPress自動發文指南.md` - WordPress 自動發文設定
- ✅ **文章管理指南**：`docs/文章管理指南.md` - 刪除、更新文章的方法
- ✅ **文件整理**：更新 `docs/README.md`，整合所有文件索引

### 2025-12-04 (前期更新)
- ✅ **圖片資源整理完成**：41 張圖片已完成分類與路徑更新，建立完整資料夾結構
- ✅ **圖片資料夾重組**：建立 `banners/` 資料夾，所有 banner 圖片統一管理
- ✅ **網紅圖片處理**：3 張網紅圖片已壓縮並放置到 `influencers/` 資料夾
- ✅ **YS 頁面文章完善**：關於我們、客服、出金保障三個頁面已完成內容與 SEO 優化
- ✅ **SEO 優化完成**：所有頁面包含結構化數據、meta 標籤、內部連結
- ✅ **文件建立**：`docs/圖片資源清單.md`、`docs/YS頁面文章檢查清單.md`
- ⚠️ **待補充**：3 張網紅頭像（已處理，但可能需要替換為實際圖片）

### 2025-01-XX (前期更新)
- ✅ 完成所有遊戲頁面 Banner (16:9 比例)
- ✅ 完成導航欄 Banner 圖片
- ✅ 完成首頁熱門遊戲區塊圖片
- ✅ 完成遊戲專區頁面所有卡片圖片

---

## 🔄 自動化內容系統狀態（n8n + Google Sheet）

### ✅ 已完成

- **Google Sheet 作為唯一文章資料來源**
  - 前端 `ArticleService.ts` 會從同一份 Google Sheet 的 **5 個分頁** 讀取 CSV：
    - 娛樂城評價類（高轉換意圖）→ Category: `娛樂城評價`
    - 優惠活動類（吸流量）→ Category: `優惠情報`
    - 真人百家樂類（高含金量）→ Category: `遊戲攻略`
    - 體育與電子類 → Category: `遊戲攻略`
    - 綜合討論類 → Category: `綜合討論`（GID: 1435096533）
  - 所有頁面共用這一份 Sheet：
    - 首頁「本週熱門話題」
    - `/topic/:slug` 文章頁（`ArticlePage`）
    - 論壇首頁 `/forum` 熱門討論
    - 論壇分類頁 `/forum/c/:id`

- **n8n 自動發文工作流**
  - 已串接：Google Sheets → Serper.dev 搜尋 → AI Agent（OpenAI/Gemini）→ Code 節點 → Google Sheets 寫回
  - AI Prompt 已整理成多個版本（相關文件請參考 `docs/` 資料夾）
    - 動態年份處理（根據搜尋結果或使用「目前/最新」等相對時間）
    - 風格智能匹配
    - 免責聲明內嵌在文章 conclusion，前端只再顯示一次
  - Code 節點負責：
    - 解析 AI 回傳的 JSON（含處理 ```json 包裹、亂碼、前後雜訊）
    - 處理 `article` 物件結構（自動轉換為 HTML）
    - 組裝標準化欄位：`title` / `body` / `description`
    - 輸出到 Sheet 的欄位：`Keyword` / `Category` / `GEO` / `title` / `Content` / `Excerpt`
  - **Code 節點版本**：
    - 完整版：`docs/n8n_Code節點_解析AI回應_完整版.txt`
    - 處理 article 結構：`docs/n8n_Code節點_解析AI回應_處理article結構.txt`
    - 診斷版：`docs/n8n_Code節點_解析AI回應_診斷版.txt`

- **前端與 slug / 內容整合**
  - `ArticleService.ts`：
    - 支援多個欄位作為內容來源：`Content` / `content` / `body` / `Body`
    - 產生統一規則的 `slug`（支援中文、英文、數字與連字號）
    - 合併五個分頁、依日期排序（最新的在前）
    - 只顯示 `Status=done` 的文章
    - 加入詳細的 Debug 日誌（特別是優惠情報分類）
  - `ArticlePage.tsx` / `TopicPage.tsx`：
    - 使用相同的 `generateSlug` 邏輯做比對
    - 優先比對 `slug`，其次 `title` / 標準化 slug
    - 找不到文章時會輸出 debug log（方便開發時檢查）
  - 論壇頁面已全改為讀取 Google Sheet：
    - `ForumIndexPage` 熱門討論改用 `useArticles()`（只顯示有完整內容的文章）
    - `ForumCategoryPage` 依 `Category` 與論壇分類對應篩選文章

- **自動補充關鍵字工作流（已完成）**
  - 文件：`docs/n8n_關鍵字管理完整指南.md`
  - 方案 B（預定義列表，不用 AI）已提供完整 Code：
    - Code 檔：`docs/n8n_自動補充關鍵字_Code節點.txt`
    - 每個分類有一組關鍵字庫（娛樂城評價 / 優惠情報 / 遊戲攻略 / 綜合討論）
    - 支援去重：不會重複現有關鍵字（使用 Set 提高效率）
    - 直接輸出標準欄位：`Keyword` / `Category` / `GEO` / `Status=pending`

- **WordPress 遷移準備（已完成）**
  - 文件：`docs/WordPress遷移完整指南.md`
  - WordPress 開發規格：`docs/WP_DEVELOPMENT_SPEC.md`
  - WordPress 開發流程：`docs/WordPress開發與內容管理流程.md`
  - WordPress 自動發文：`docs/n8n_WordPress自動發文指南.md`

### ⏳ 待完成 To-do（優先度由高到低）

> 以下對應內部 todo 工具中的項目，方便後續接手或自己回來繼續。

- **test-full-workflow**（高）  
  - 從「關鍵字 pending → n8n 發文 → Sheet `Status=done` → 前端顯示」跑一次完整流程  
  - 確認五個分頁的文章都能正常出現在網站上，slug 與內容無誤
  - 確認 Content 欄位包含完整文章內容（不是只有 Excerpt）

- **test-different-keywords**（中）  
  - 在每個分頁加入多組不同意圖的關鍵字，測試：  
    - AI 是否依關鍵字生成不同文章（不重複、不洗稿）  
    - 風格匹配是否正確（優惠/攻略/評價/討論）

- **add-more-keywords**（中）  
  - 透過「自動補充關鍵字」 workflow 或手動方式，為五個分頁補足 20–30 組高品質關鍵字  
  - 建議先從方案 B（預定義列表）開始，之後再視需要接 AI 生成方案

- **setup-date-field**（中）  
  - 在 n8n 的「Google Sheets Update / Append」節點中，統一寫入 `Date` 欄位：  
    - 可用 n8n 表達式：`{{$now}}` 或格式化為 `YYYY-MM-DD`  
    - 確保前端排序與顯示日期正確

- **setup-auto-schedule**（中）  
  - 為以下 workflow 設定自動排程（Cron）：  
    - 每日自動發文 workflow（依各分頁/分類）  
    - 自動補充關鍵字 workflow（例如每兩週的禮拜一執行）

- **WordPress 遷移準備**（中）
  - 架設 WordPress 環境
  - 開發 WordPress 主題（參考 `docs/WP_DEVELOPMENT_SPEC.md`）
  - 調整 n8n 工作流（參考 `docs/n8n_WordPress自動發文指南.md`）

- **（可選）AI 版關鍵字補充**（低）  
  - 若之後要啟動 AI 生成關鍵字：  
    - 使用 `docs/n8n_關鍵字管理完整指南.md` 中的 AI 生成方案
    - 建議先小量測試，確認關鍵字品質與去重邏輯

