# WordPress 開發與內容管理流程

## 📋 概述

本文件說明 WordPress 網站中「開發（程式碼）」和「內容管理」的區別，以及如何處理網站持續改進的需求。

---

## 🎯 核心概念：開發 vs 內容管理

### 開發（Development）
- **編輯什麼**：程式碼（PHP、CSS、JavaScript）
- **在哪裡編輯**：本地開發環境或 GitHub
- **何時需要**：修改網站外觀、功能、結構
- **部署方式**：上傳到伺服器的主題/外掛目錄

### 內容管理（Content Management）
- **編輯什麼**：網站內容（文章、頁面、設定）
- **在哪裡編輯**：WordPress 後台
- **何時需要**：日常更新內容、發布新文章
- **部署方式**：直接在後台操作，即時生效

---

## 🔧 如果網站還要再改：兩種情況

### 情況 1：修改外觀/功能（需要改程式碼）

**範例**：
- 修改文章頁面樣式
- 新增功能按鈕
- 調整導航欄
- 修改顏色、字體

**流程**：

```
1. 本地開發環境
   ↓
   修改主題程式碼（PHP/CSS/JS）
   ↓
2. 本地測試
   ↓
   確認無誤
   ↓
3. 上傳到 GitHub（版本控制）
   ↓
4. 部署到伺服器
   - 方法 A：從 GitHub 下載
   - 方法 B：FTP/SFTP 上傳
   - 方法 C：Git pull（如果伺服器有 Git）
   ↓
5. 清除快取（如果有）
   ↓
6. 網站更新完成
```

**詳細步驟**：

1. **在本地開發環境編輯**
   ```bash
   # 下載主題到本地（如果還沒有的話）
   git clone https://github.com/your-username/ys-wp-theme.git
   cd ys-wp-theme
   
   # 修改檔案
   # 例如：修改 wp-content/themes/ys-theme/single.php
   # 或：修改 wp-content/themes/ys-theme/style.css
   ```

2. **本地測試**
   - 使用本地 WordPress 環境（如 Local by Flywheel、XAMPP）
   - 確認修改無誤

3. **提交到 GitHub**
   ```bash
   git add .
   git commit -m "修改文章頁面樣式"
   git push origin main
   ```

4. **部署到伺服器**
   - **方法 A：從 GitHub 下載**
     ```bash
     # 在伺服器上
     cd /path/to/wp-content/themes/ys-theme
     git pull origin main
     ```
   
   - **方法 B：FTP/SFTP 上傳**
     - 使用 FileZilla 或其他 FTP 工具
     - 上傳修改的檔案到伺服器
   
   - **方法 C：使用部署工具**
     - 使用 GitHub Actions 自動部署
     - 或使用 WP Pusher 外掛（從 GitHub 自動部署）

5. **清除快取**
   - 如果使用快取外掛（如 WP Rocket），清除快取
   - 或等待快取自動過期

---

### 情況 2：更新內容（不需要改程式碼）

**範例**：
- 發布新文章
- 修改現有文章內容
- 新增頁面
- 調整網站設定

**流程**：

```
WordPress 後台
   ↓
   編輯內容（文章、頁面、設定）
   ↓
   點擊「更新」或「發布」
   ↓
   即時生效（不需要重新部署）
```

**詳細步驟**：

1. **登入 WordPress 後台**
   - 網址：`https://your-domain.com/wp-admin`

2. **編輯內容**
   - **文章**：**文章** → **所有文章** → 點擊文章標題
   - **頁面**：**頁面** → **所有頁面** → 點擊頁面標題
   - **設定**：**設定** → **一般**

3. **保存**
   - 點擊「更新」或「發布」
   - 內容立即生效

---

## 📂 檔案結構對照

### 開發檔案（需要程式碼編輯）

```
wp-content/
├── themes/
│   └── ys-entertainment-theme/    ← 主題程式碼
│       ├── style.css              ← 樣式（需要編輯）
│       ├── functions.php          ← 功能（需要編輯）
│       ├── single.php             ← 單篇文章模板（需要編輯）
│       ├── archive.php            ← 文章列表模板（需要編輯）
│       └── ...
└── plugins/
    └── custom-plugin/              ← 自定義外掛（需要編輯）
        └── ...
```

**編輯方式**：
- 在本地開發環境編輯
- 上傳到 GitHub
- 部署到伺服器

### 內容資料（後台管理）

```
MySQL 資料庫
├── wp_posts                       ← 文章內容（後台編輯）
├── wp_postmeta                    ← 文章自定義欄位（後台編輯）
├── wp_options                     ← 網站設定（後台編輯）
└── ...
```

**編輯方式**：
- 在 WordPress 後台編輯
- 不需要接觸程式碼

---

## 🔄 日常運作流程

### 日常內容更新（每天）

1. **登入 WordPress 後台**
2. **發布新文章**
   - **文章** → **新增文章**
   - 輸入標題、內容
   - 設定分類、標籤
   - 點擊「發布」

3. **修改現有文章**
   - **文章** → **所有文章**
   - 點擊要編輯的文章
   - 修改內容
   - 點擊「更新」

**不需要**：
- ❌ 修改程式碼
- ❌ 重新部署
- ❌ 上傳檔案

### 網站改版（偶爾）

1. **在本地開發環境修改主題**
2. **測試確認**
3. **上傳到 GitHub**
4. **部署到伺服器**
5. **清除快取**

---

## 🛠️ 開發環境設定

### 本地開發環境選項

1. **Local by Flywheel**（推薦）
   - 免費
   - 圖形化介面
   - 自動設定 WordPress

2. **XAMPP / MAMP**
   - 免費
   - 需要手動設定 WordPress

3. **Docker**
   - 進階選項
   - 需要 Docker 知識

### 開發流程

```bash
# 1. 在本地建立 WordPress 環境
# 2. 下載主題到本地
git clone https://github.com/your-username/ys-wp-theme.git
cd ys-wp-theme

# 3. 修改程式碼
# 編輯 PHP、CSS、JS 檔案

# 4. 本地測試
# 在瀏覽器訪問本地 WordPress

# 5. 提交到 GitHub
git add .
git commit -m "修改描述"
git push origin main

# 6. 部署到伺服器
# （使用 FTP、Git 或其他方式）
```

---

## 📝 實際範例

### 範例 1：修改文章頁面顏色

**需要**：修改程式碼

1. **本地編輯** `wp-content/themes/ys-theme/style.css`
   ```css
   /* 修改文章標題顏色 */
   .article-title {
     color: #06b6d4; /* 從原本的顏色改為 cyan-400 */
   }
   ```

2. **本地測試**：確認顏色正確

3. **上傳到 GitHub**
   ```bash
   git add style.css
   git commit -m "修改文章標題顏色為 cyan-400"
   git push origin main
   ```

4. **部署到伺服器**：上傳 `style.css` 到伺服器

5. **完成**：網站顏色更新

---

### 範例 2：發布新文章

**需要**：後台編輯（不需要程式碼）

1. **WordPress 後台** → **文章** → **新增文章**

2. **輸入內容**：
   - 標題：「YS娛樂城最新優惠活動」
   - 內容：文章正文（HTML 格式）
   - 分類：優惠情報
   - 標籤：YS娛樂城、優惠

3. **點擊「發布」**

4. **完成**：文章立即上線

---

## 🎯 總結

### 後台編輯的是什麼？

✅ **可以編輯**：
- 文章內容（標題、正文、摘要）
- 頁面內容
- 網站設定
- 外觀設定（顏色、字體、選單）

❌ **不能編輯**：
- 主題程式碼（PHP、CSS、JS）
- 外掛程式碼
- 資料庫結構

### 如果網站還要再改

**改外觀/功能**：
- 在本地開發環境編輯程式碼
- 上傳到 GitHub
- 部署到伺服器

**改內容**：
- 直接在 WordPress 後台編輯
- 點擊「更新」即時生效

### 開發與內容管理分離

- **開發**：程式設計師負責（修改程式碼）
- **內容管理**：內容編輯負責（在後台編輯內容）
- **兩者互不干擾**：改程式碼不影響內容，改內容不影響程式碼

---

## 🔗 相關文件

- `docs/WordPress遷移完整指南.md` - WordPress 遷移完整說明
- `docs/WP_DEVELOPMENT_SPEC.md` - WordPress 開發規格書

