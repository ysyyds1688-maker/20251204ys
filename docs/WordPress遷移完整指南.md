# WordPress 遷移完整指南

## 📋 概述

本指南說明從目前的 React 原型遷移到 WordPress 自架站的重要差異和注意事項。

---

## 🔄 文章管理方式的差異

### 目前 React 原型（Google Sheet）

**文章儲存位置**：Google Sheet
- 所有文章資料存在 Google Sheet 的 5 個分頁中
- 前端透過 CSV API 讀取文章
- 刪除/更新：直接在 Google Sheet 中修改

**刪除文章方法**：
1. 修改 `Status` 欄位為 `deleted`（隱藏）
2. 或直接刪除 Google Sheet 中的行（永久刪除）

---

### WordPress 自架站

**文章儲存位置**：MySQL 資料庫
- 所有文章存在 WordPress 資料庫的 `wp_posts` 表中
- 透過 WordPress 後台管理介面管理文章
- 刪除/更新：在 WordPress 後台操作

**刪除文章方法**：
1. **WordPress 後台** → **文章** → 找到要刪除的文章
2. 點擊「移至垃圾桶」或「永久刪除」
3. 或使用「批量操作」批量刪除

**更新文章方法**：
1. **WordPress 後台** → **文章** → 點擊要編輯的文章
2. 在編輯器中修改內容
3. 點擊「更新」按鈕

---

## ⚠️ 重要差異說明

### 1. 文章管理介面完全不同

| 項目 | React 原型 | WordPress |
|------|-----------|-----------|
| **管理介面** | Google Sheet（網頁表格） | WordPress 後台（圖形化介面） |
| **刪除方式** | 修改 Status 或刪除行 | 後台「移至垃圾桶」或「永久刪除」 |
| **更新方式** | 直接在 Google Sheet 編輯 | 後台編輯器（Gutenberg 或 Classic Editor） |
| **資料儲存** | Google Sheet（雲端） | MySQL 資料庫（伺服器） |

### 2. 文章結構不同

**React 原型（Google Sheet）**：
```
Keyword | GEO | Category | Content | title | Excerpt | Status | Date
```

**WordPress**：
- **標題**：`post_title`
- **內容**：`post_content`（支援 HTML）
- **摘要**：`post_excerpt`
- **狀態**：`post_status`（publish, draft, trash, etc.）
- **自定義欄位**：透過 ACF（Advanced Custom Fields）外掛管理
  - `Keyword` → ACF 欄位
  - `Category` → WordPress 分類法（Taxonomy）
  - `GEO` → ACF 欄位

---

## 🚀 WordPress 部署架構說明

### ❌ 誤解：把 Code 放在 GitHub，WordPress 就會呈現頁面

**這是錯誤的理解！**

WordPress 的運作方式與 React 完全不同：

### React 原型（目前）
```
GitHub → Zeabur → 構建 (npm run build) → 靜態網站 → 用戶訪問
```
- Code 在 GitHub
- 部署平台（Zeabur）會構建並部署
- 用戶直接訪問構建後的靜態檔案

### WordPress 自架站
```
WordPress 核心 + 主題 (Theme) + 外掛 (Plugins) → MySQL 資料庫 → 用戶訪問
```
- WordPress 是 PHP 應用程式，需要安裝在伺服器上
- 主題（Theme）和外掛（Plugins）是擴展功能
- 所有內容存在 MySQL 資料庫中
- 用戶訪問時，WordPress 動態生成 HTML

---

## 📦 WordPress 架構組成

### 1. WordPress 核心（Core）
- **位置**：伺服器上的 WordPress 安裝目錄
- **功能**：核心系統，提供基本功能
- **更新**：透過 WordPress 後台自動更新

### 2. 主題（Theme）
- **位置**：`wp-content/themes/你的主題名稱/`
- **功能**：控制網站的外觀和佈局
- **開發**：可以放在 GitHub，但需要：
  1. 下載到伺服器的 `wp-content/themes/` 目錄
  2. 在 WordPress 後台啟用該主題
- **檔案結構**：
  ```
  your-theme/
  ├── style.css          # 主題樣式
  ├── functions.php      # 主題功能
  ├── index.php          # 主模板
  ├── single.php         # 單篇文章模板
  ├── archive.php        # 文章列表模板
  └── ...
  ```

### 3. 外掛（Plugins）
- **位置**：`wp-content/plugins/外掛名稱/`
- **功能**：擴展 WordPress 功能（如 ACF、SEO 外掛）
- **開發**：可以放在 GitHub，但需要：
  1. 下載到伺服器的 `wp-content/plugins/` 目錄
  2. 在 WordPress 後台啟用該外掛

### 4. 資料庫（MySQL）
- **位置**：MySQL 資料庫伺服器
- **功能**：儲存所有內容（文章、頁面、設定等）
- **管理**：透過 WordPress 後台或 phpMyAdmin

---

## 🔧 WordPress 部署流程

### 步驟 1：架設 WordPress 環境

1. **購買主機和網域**
   - 選擇支援 PHP 和 MySQL 的主機（如：Bluehost, SiteGround, Cloudways）
   - 購買網域（如：`ys-entertainment.com`）

2. **安裝 WordPress**
   - 透過主機控制台（cPanel）安裝 WordPress
   - 或手動下載 WordPress 並上傳到伺服器

3. **設定資料庫**
   - 建立 MySQL 資料庫和使用者
   - 在 WordPress 安裝過程中連接資料庫

### 步驟 2：開發主題（Theme）

1. **在本地開發**
   ```bash
   # 建立主題資料夾
   mkdir wp-content/themes/ys-entertainment-theme
   cd wp-content/themes/ys-entertainment-theme
   ```

2. **參考 React 原型**
   - 將 React 的 `pages/` 轉換為 WordPress 模板檔案
   - 將 React 的 `components/` 轉換為 WordPress 模板部分（template parts）
   - 將 CSS 樣式轉換為 WordPress 主題的 `style.css`

3. **上傳到 GitHub**（可選，用於版本控制）
   ```bash
   git init
   git add .
   git commit -m "Initial WordPress theme"
   git remote add origin https://github.com/your-username/ys-wp-theme.git
   git push -u origin main
   ```

4. **部署到伺服器**
   - 方法 1：從 GitHub 下載到伺服器
   - 方法 2：使用 FTP/SFTP 上傳
   - 方法 3：使用 Git 在伺服器上直接 clone

5. **在 WordPress 後台啟用主題**
   - **外觀** → **主題** → 啟用你的主題

### 步驟 3：安裝必要外掛

1. **ACF Pro**（自定義欄位）
   - 安裝並啟用
   - 建立自定義欄位組（參考 `docs/WP_DEVELOPMENT_SPEC.md`）

2. **Rank Math SEO**（SEO 優化）
   - 安裝並啟用
   - 設定 SEO 規則

3. **其他外掛**
   - 效能優化外掛（WP Rocket, LiteSpeed Cache）
   - 圖片優化外掛（WebP Express）

### 步驟 4：內容遷移

1. **從 Google Sheet 匯入文章**
   - 方法 1：使用 WordPress 匯入工具（CSV Import）
   - 方法 2：使用 n8n 工作流自動發布到 WordPress（透過 WordPress REST API）
   - 方法 3：手動在 WordPress 後台建立文章

2. **設定分類和標籤**
   - 在 WordPress 後台建立分類（對應 Google Sheet 的 Category）
   - 設定自定義分類法（參考 `docs/WP_DEVELOPMENT_SPEC.md`）

---

## 🔄 n8n 工作流調整

### 目前（React 原型）
```
n8n → Google Sheets (寫入文章)
前端 → Google Sheets CSV API (讀取文章)
```

### WordPress 遷移後

**✅ 可以繼續使用 n8n 自動發文！**

有兩種方案：

#### 方案 A：保留 Google Sheets 作為關鍵字管理（推薦）⭐

```
n8n → Google Sheets (讀取關鍵字)
  → AI 生成文章
  → WordPress REST API (發布文章)
  → Google Sheets (更新 Status=done)
```

**優點**：
- 保留 Google Sheets 的關鍵字管理功能
- 可以手動管理關鍵字列表
- 可以追蹤哪些關鍵字已處理

#### 方案 B：完全使用 WordPress

```
n8n → WordPress REST API (讀取 pending 文章)
  → AI 生成文章
  → WordPress REST API (更新文章內容)
```

**優點**：
- 不依賴 Google Sheets
- 所有資料都在 WordPress 中

**詳細設定請參考**：`docs/n8n_WordPress自動發文指南.md`

---

## 📝 WordPress 後台編輯說明

### ⚠️ 重要：後台編輯的是「內容」，不是「程式碼」

WordPress 後台編輯的是**網站內容**（文章、頁面、設定），不是程式碼。

### 後台可以編輯什麼？

#### 1. 文章內容（Content）
- **位置**：**文章** → **所有文章** → 點擊文章標題
- **編輯內容**：
  - 文章標題
  - 文章正文（HTML 格式）
  - 摘要（Excerpt）
  - 分類、標籤
  - 自定義欄位（如 Keyword、GEO）
  - 特色圖片
- **類似**：Google Sheet 中的 `Content`、`title`、`Excerpt` 欄位

#### 2. 頁面內容（Pages）
- **位置**：**頁面** → **所有頁面**
- **編輯內容**：靜態頁面的內容（如關於我們、客服頁面）

#### 3. 網站設定（Settings）
- **位置**：**設定** → **一般**
- **編輯內容**：
  - 網站標題、描述
  - 網址設定
  - 時區、語言

#### 4. 外觀設定（Appearance）
- **位置**：**外觀** → **自訂**
- **編輯內容**：
  - 顏色、字體
  - 選單設定
  - 小工具（Widgets）
- **注意**：這裡不能編輯主題的 PHP 程式碼

### ❌ 後台不能編輯什麼？

1. **主題程式碼**（PHP、CSS、JavaScript）
   - 這些需要在本地開發環境編輯
   - 或透過 FTP/SFTP 編輯伺服器上的檔案

2. **外掛程式碼**
   - 需要在本地開發環境編輯
   - 或透過 FTP/SFTP 編輯

3. **資料庫結構**
   - 需要透過 phpMyAdmin 或資料庫管理工具

---

## 🔧 如果網站還要再改（開發流程）

### 情況 1：修改網站外觀/功能（程式碼層面）

**需要修改程式碼時**：

1. **在本地開發環境編輯**
   ```bash
   # 下載主題到本地
   git clone https://github.com/your-username/ys-wp-theme.git
   cd ys-wp-theme
   
   # 修改程式碼（PHP、CSS、JS）
   # 例如：修改 single.php、style.css
   
   # 測試
   # 使用本地 WordPress 環境測試
   ```

2. **上傳到 GitHub**（版本控制）
   ```bash
   git add .
   git commit -m "修改文章頁面樣式"
   git push origin main
   ```

3. **部署到伺服器**
   - 方法 1：從 GitHub 下載到伺服器
   - 方法 2：使用 FTP/SFTP 上傳修改的檔案
   - 方法 3：使用 Git 在伺服器上 pull 最新版本

4. **在 WordPress 後台啟用/重新載入**
   - 如果主題已啟用，修改會自動生效
   - 或清除快取（如果有使用快取外掛）

### 情況 2：修改網站內容（內容層面）

**不需要修改程式碼時**：

1. **直接在 WordPress 後台編輯**
   - 修改文章內容
   - 新增/刪除文章
   - 修改頁面內容
   - 調整設定

2. **即時生效**
   - 點擊「更新」後立即生效
   - 不需要重新部署

---

## 📋 WordPress 文章管理操作

### 刪除文章

**方法 1：單篇文章**
1. **WordPress 後台** → **文章** → **所有文章**
2. 找到要刪除的文章
3. 滑鼠移到文章標題上 → 點擊「移至垃圾桶」
4. 或點擊文章標題進入編輯頁 → 點擊「移至垃圾桶」

**方法 2：批量刪除**
1. **WordPress 後台** → **文章** → **所有文章**
2. 勾選要刪除的文章
3. 選擇「批量操作」→「移至垃圾桶」→「套用」

**永久刪除**：
1. **WordPress 後台** → **文章** → **垃圾桶**
2. 找到要永久刪除的文章
3. 點擊「永久刪除」

### 更新文章

1. **WordPress 後台** → **文章** → **所有文章**
2. 點擊要編輯的文章標題
3. 在編輯器中修改內容（**這裡編輯的是文章內容，不是程式碼**）
4. 點擊「更新」按鈕

### 建立新文章

1. **WordPress 後台** → **文章** → **新增文章**
2. 輸入標題和內容
3. 設定分類、標籤、自定義欄位
4. 點擊「發布」

---

## 🔗 GitHub 在 WordPress 中的角色

### ✅ 正確使用方式

1. **主題開發（Theme Development）**
   - 將主題程式碼放在 GitHub
   - 用於版本控制和協作開發
   - 部署時：從 GitHub 下載到伺服器的 `wp-content/themes/` 目錄

2. **外掛開發（Plugin Development）**
   - 將自定義外掛程式碼放在 GitHub
   - 部署時：從 GitHub 下載到伺服器的 `wp-content/plugins/` 目錄

3. **版本控制**
   - 追蹤程式碼變更
   - 協作開發
   - 回滾到之前的版本

### ❌ 錯誤理解

- ❌ 把 Code 放在 GitHub，WordPress 就會自動呈現頁面
- ❌ WordPress 會自動從 GitHub 讀取程式碼
- ❌ 不需要安裝 WordPress，只需要 GitHub

**正確流程**：
```
開發主題 → 上傳到 GitHub → 下載到伺服器 → 在 WordPress 後台啟用主題 → 網站呈現
```

---

## 📚 相關文件

- **`docs/WP_DEVELOPMENT_SPEC.md`** - WordPress 開發規格書（必讀）
- **`docs/文章管理指南.md`** - 目前 React 原型的文章管理方法
- **`docs/n8n_論壇文章自動發文指南.md`** - n8n 自動發文工作流

---

## 🔄 Zeabur vs WordPress 對比

### 相似之處

| 項目 | Zeabur | WordPress |
|------|--------|-----------|
| **連接 GitHub** | ✅ 可以連接 GitHub 自動部署 | ✅ 主題/外掛可以放在 GitHub |
| **自動部署** | ✅ Push 到 GitHub 自動部署 | ❌ 需要手動上傳到伺服器 |
| **版本控制** | ✅ 透過 GitHub | ✅ 主題/外掛可以透過 GitHub |
| **環境變數** | ✅ 在 Dashboard 設定 | ✅ 在 wp-config.php 或外掛設定 |

### 關鍵差異

| 項目 | Zeabur | WordPress |
|------|--------|-----------|
| **本質** | 部署平台（Platform） | 內容管理系統（CMS） |
| **用途** | 部署靜態網站或 Node.js 應用 | 建立和管理網站內容 |
| **資料儲存** | 靜態檔案（HTML/CSS/JS） | MySQL 資料庫 |
| **內容管理** | 透過程式碼或 API | 透過後台管理介面 |
| **部署方式** | 連接 GitHub → 自動構建部署 | 安裝在伺服器 → 上傳主題 |
| **更新內容** | 修改程式碼 → Push → 自動部署 | 在後台編輯 → 點擊更新 |

### 類比說明

**Zeabur** = 自動化部署服務
- 類似：Vercel、Netlify、Railway
- 功能：幫你自動構建和部署網站
- 適合：前端專案、靜態網站、Node.js 應用

**WordPress** = 網站系統
- 類似：Drupal、Joomla
- 功能：提供完整的網站管理系統
- 適合：需要內容管理、後台編輯的網站

### 實際運作對比

#### Zeabur 流程（目前）
```
GitHub (程式碼)
    ↓
Zeabur (自動構建)
    ↓
靜態網站 (HTML/CSS/JS)
    ↓
用戶訪問
```

#### WordPress 流程
```
WordPress 核心 (安裝在伺服器)
    ↓
主題/外掛 (從 GitHub 下載或上傳)
    ↓
MySQL 資料庫 (儲存內容)
    ↓
用戶訪問 → WordPress 動態生成 HTML
```

---

## 🎯 總結

### 文章管理差異

| 操作 | React 原型 | WordPress |
|------|-----------|-----------|
| **刪除** | Google Sheet 修改 Status | WordPress 後台「移至垃圾桶」 |
| **更新** | Google Sheet 直接編輯 | WordPress 後台編輯器 |
| **建立** | Google Sheet 新增行 | WordPress 後台「新增文章」 |

### GitHub 角色

- ✅ **用於**：主題/外掛開發、版本控制
- ❌ **不用於**：直接部署、自動呈現頁面
- 📦 **需要**：安裝 WordPress 在伺服器上，然後上傳主題/外掛

### 遷移重點

1. **文章管理方式完全不同**：從 Google Sheet 改為 WordPress 後台
2. **資料儲存位置不同**：從 Google Sheet 改為 MySQL 資料庫
3. **部署方式不同**：需要安裝 WordPress 在伺服器上，不能只靠 GitHub
4. **n8n 工作流需要調整**：從寫入 Google Sheets 改為調用 WordPress REST API

