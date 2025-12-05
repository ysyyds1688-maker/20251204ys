# 文件索引

本資料夾包含 YS 娛樂論壇專案的所有技術文件與規劃文件。

## 📚 文件清單

### 🎯 WordPress 開發相關

- **`WP_DEVELOPMENT_SPEC.md`** (核心文件) ⭐ 必讀
  - WordPress 網站架構規格
  - CPT (自定義文章類型) 定義
  - Taxonomies (分類法) 定義
  - ACF 欄位規格
  - **開發 WP 主題前必讀**

- **`WordPress遷移完整指南.md`** ⭐ 新增
  - 從 React 原型遷移到 WordPress 的完整說明
  - 文章管理方式差異
  - WordPress 部署架構說明
  - n8n 工作流調整方法
  - Zeabur vs WordPress 對比

- **`WordPress開發與內容管理流程.md`** ⭐ 新增
  - 開發（程式碼）vs 內容管理的區別
  - 如果網站還要再改的處理方式
  - 本地開發環境設定
  - 實際範例說明

- **`SEO_IMPLEMENTATION.md`**
  - SEO 實作指南
  - 結構化數據 (Schema.org) 規格
  - Meta 標籤規範

### 🖼️ 資源管理

- **`圖片資源清單.md`**
  - 完整的圖片使用清單與狀態追蹤
  - ✅ 41 張已完成
  - ❌ 3 張待補充（網紅頭像）

- **`圖片管理完整指南.md`** ⭐ 整合文件
  - 圖片資料夾結構說明
  - 圖片命名規則
  - n8n 中的圖片處理
  - 圖片規格建議
  - 整合了：`文章圖片管理指南.md` + `圖片資料夾結構說明.md`

- **`YS頁面文章檢查清單.md`**
  - YS 頁面（關於我們、客服、出金保障）內容檢查清單
  - SEO 優化狀態追蹤

### 🔧 部署與維護

- **`部署完整指南.md`** ⭐ 整合文件
  - Zeabur 部署步驟
  - 構建錯誤修復
  - 常見問題排查
  - 整合了：`ZEABUR_DEPLOYMENT.md` + `BUILD_FIX.md` + `DEPLOYMENT_FIXES.md`

- **`Git_GitHub操作指南.md`** ⭐ 整合文件
  - Git 上傳步驟
  - GitHub 專案檢查
  - 常見問題
  - 整合了：`GIT_UPLOAD_GUIDE.md` + `GITHUB_CHECK_REPORT.md`

- **`文章管理指南.md`** ⭐ 新增
  - 刪除文章的方法（Google Sheets）
  - 批量操作說明
  - 恢復已刪除文章的方法

- **`後續步驟清單.md`**
  - 專案待完成項目
  - 優先度排序

### 📋 分類對應

- **`分類對應完整指南.md`** ⭐ 整合文件
  - 分類對應表
  - 測試步驟
  - 問題排查
  - 整合了：`分類對應更新說明.md` + `分類對應測試指南.md`

### 🤖 n8n 自動化工作流

- **`n8n_關鍵字管理完整指南.md`** ⭐ 整合文件
  - 預定義關鍵字補充（方案 B - 推薦）
  - AI 自動生成關鍵字（方案 A）
  - 智能補充關鍵字（方案 C）
  - 整合了：`n8n_自動補充關鍵字工作流指南.md` + `n8n_自動補充關鍵字_快速開始.md` + `n8n_AI自動生成關鍵字工作流.md` + `n8n_智能補充關鍵字工作流.md`

- **`n8n_論壇文章自動發文指南.md`** ⭐ 整合文件
  - Google Sheets 版本的自動發文工作流
  - 四個論壇分類的自動發文設定
  - Code 節點：解析 AI 回應（處理 article 結構）
  - 整合了：`n8n_綜合討論類自動發文指南.md`

- **`n8n_WordPress自動發文指南.md`** ⭐ 新增
  - WordPress 版本的自動發文工作流
  - WordPress REST API 設定
  - 從 Google Sheets 遷移到 WordPress 的完整指南
  - 兩種方案：保留 Google Sheets 或完全使用 WordPress

- **`n8n_自動補充關鍵字_Code節點.txt`**
  - n8n Code 節點的完整程式碼（預定義關鍵字庫版本）
  - 包含 4 個分類的預定義關鍵字庫
  - 自動去重邏輯

- **`n8n_Code節點_解析AI回應_完整版.txt`**
  - 解析 AI 回應的完整版 Code 節點
  - 包含詳細錯誤處理和日誌
  - 支援多種 AI 輸出格式

- **`n8n_Code節點_解析AI回應_處理article結構.txt`**
  - 專門處理 article 物件結構的 Code 節點
  - 自動將 article 轉換為 HTML 格式
  - 適用於 AI 返回結構化 article 的情況

- **`n8n_Code節點_解析AI回應_診斷版.txt`**
  - 診斷版 Code 節點，用於排查問題
  - 輸出詳細的診斷資訊
  - 幫助識別 AI Agent 的實際輸出格式

---

## 📖 使用建議

### 快速開始

1. **開始 WordPress 開發前**：
   - 先閱讀 `WP_DEVELOPMENT_SPEC.md`（核心規格）
   - 閱讀 `WordPress遷移完整指南.md`（了解差異）
   - 閱讀 `WordPress開發與內容管理流程.md`（開發流程）

2. **設定 n8n 自動化**：
   - **關鍵字管理**：參考 `n8n_關鍵字管理完整指南.md`
   - **自動發文（Google Sheets）**：參考 `n8n_論壇文章自動發文指南.md`
   - **自動發文（WordPress）**：參考 `n8n_WordPress自動發文指南.md`

3. **檢查資源狀態**：
   - 查看 `圖片資源清單.md` 和 `YS頁面文章檢查清單.md`

4. **遇到問題**：
   - **部署問題** → `部署完整指南.md`
   - **Git/GitHub 問題** → `Git_GitHub操作指南.md`
   - **文章管理問題** → `文章管理指南.md`

### 文件查找

- **WordPress 遷移** → `WordPress遷移完整指南.md`
- **WordPress 開發流程** → `WordPress開發與內容管理流程.md`
- **分類對應問題** → `分類對應完整指南.md`
- **圖片管理問題** → `圖片管理完整指南.md`
- **部署問題** → `部署完整指南.md`
- **Git/GitHub 問題** → `Git_GitHub操作指南.md`
- **n8n 工作流問題**：
  - 關鍵字管理 → `n8n_關鍵字管理完整指南.md`
  - Google Sheets 自動發文 → `n8n_論壇文章自動發文指南.md`
  - WordPress 自動發文 → `n8n_WordPress自動發文指南.md`

---

## 🔗 相關連結

- 主專案 README：`../README.md`
- 圖片資源：`../public/images/`
- 程式碼：`../pages/`, `../components/`, `../src/`

---

## 📝 文件整合說明

為了提高文件的可讀性和維護性，我們已將重複或相似的內容整合成完整的指南：

- ⭐ 標記的文件是整合文件，包含完整的相關內容
- 舊的分散文件已整合到對應的完整指南中
- 建議優先閱讀整合文件，內容更完整且結構更清晰
