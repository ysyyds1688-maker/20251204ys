# n8n WordPress 自動發文指南

## 📋 概述

本指南說明如何調整 n8n 工作流，從原本的「寫入 Google Sheets」改為「直接發布到 WordPress」，實現自動發文功能。

---

## 🔄 工作流對比

### 目前（React 原型 + Google Sheet）

```
[Schedule Trigger]
  → [Google Sheets: Read Rows] (讀取 pending 關鍵字)
  → [Loop Over Items]
    → [HTTP Request: Serper.dev] (搜尋關鍵字)
    → [AI Agent] (生成文章)
    → [Code 節點：解析 AI 回應]
    → [Google Sheets: Update Row] (寫入文章到 Sheet)
```

**資料流向**：
```
n8n → Google Sheets (寫入)
前端 → Google Sheets CSV API (讀取)
```

---

### WordPress 遷移後

```
[Schedule Trigger]
  → [Google Sheets: Read Rows] (讀取 pending 關鍵字) [可選]
  或
  → [HTTP Request: WordPress REST API] (讀取 pending 文章)
  → [Loop Over Items]
    → [HTTP Request: Serper.dev] (搜尋關鍵字)
    → [AI Agent] (生成文章)
    → [Code 節點：解析 AI 回應]
    → [HTTP Request: WordPress REST API] (直接發布到 WordPress)
```

**資料流向**：
```
n8n → WordPress REST API (直接發布)
WordPress → MySQL 資料庫 (儲存)
前端 → WordPress (讀取)
```

---

## 🚀 WordPress REST API 設定

### 1. 啟用 WordPress REST API

WordPress REST API 預設已啟用，無需額外設定。

**測試 API 是否可用**：
```
GET https://your-domain.com/wp-json/wp/v2/posts
```

### 2. 建立應用程式密碼（Application Password）

WordPress 5.6+ 支援應用程式密碼，用於 API 認證。

**步驟**：
1. **WordPress 後台** → **使用者** → **個人資料**
2. 滾動到「應用程式密碼」區塊
3. 輸入應用程式名稱（例如：`n8n Auto Post`）
4. 點擊「新增應用程式密碼」
5. 複製生成的密碼（只會顯示一次，請妥善保存）

**格式**：
- 使用者名稱：你的 WordPress 使用者名稱
- 密碼：應用程式密碼（例如：`xxxx xxxx xxxx xxxx xxxx xxxx`）

---

## 📝 n8n 工作流設定

### 方案 A：保留 Google Sheets 作為關鍵字管理（推薦）

**優點**：
- 保留 Google Sheets 的關鍵字管理功能
- 可以手動管理關鍵字列表
- 可以追蹤哪些關鍵字已處理

**工作流程**：
```
[Schedule Trigger]
  → [Google Sheets: Read Rows] (讀取 Status=pending 的關鍵字)
  → [Loop Over Items]
    → [HTTP Request: Serper.dev] (搜尋關鍵字)
    → [AI Agent] (生成文章)
    → [Code 節點：解析 AI 回應]
    → [HTTP Request: WordPress REST API] (發布到 WordPress)
    → [Google Sheets: Update Row] (更新 Status=done)
```

---

### 方案 B：完全使用 WordPress（進階）

**優點**：
- 不依賴 Google Sheets
- 所有資料都在 WordPress 中

**工作流程**：
```
[Schedule Trigger]
  → [HTTP Request: WordPress REST API] (讀取自定義欄位 Status=pending 的文章)
  → [Loop Over Items]
    → [HTTP Request: Serper.dev] (搜尋關鍵字)
    → [AI Agent] (生成文章)
    → [Code 節點：解析 AI 回應]
    → [HTTP Request: WordPress REST API] (更新文章內容)
```

**需要設定**：
- 在 WordPress 中建立「草稿文章」作為關鍵字容器
- 使用 ACF 欄位儲存 `Keyword`、`Status` 等資訊

---

## 🔧 詳細設定步驟（方案 A - 推薦）

### 1. Google Sheets: Read Rows（讀取關鍵字）

**設定**（與目前相同）：
- **操作**：Read Rows
- **Sheet ID**：`1eMQUXRcn9-wELa8cLoK6kXrdnEnkZoMyMzAtCH1Bmes`
- **Sheet Name**：選擇分頁（例如：優惠活動類）
- **篩選條件**：`Status = "pending"`

---

### 2. HTTP Request: Serper.dev（搜尋關鍵字）

**設定**（與目前相同）：
- **方法**：POST
- **URL**：`https://google.serper.dev/search`
- **Headers**：
  ```json
  {
    "X-API-KEY": "你的 Serper.dev API Key",
    "Content-Type": "application/json"
  }
  ```
- **Body**：
  ```json
  {
    "q": "{{ $json.Keyword }}",
    "num": 10
  }
  ```

---

### 3. AI Agent（生成文章）

**設定**（與目前相同）：
- **Model**：`gpt-4` 或 `gpt-3.5-turbo`
- **Prompt**：參考 `docs/n8n_論壇文章自動發文指南.md`

---

### 4. Code 節點：解析 AI 回應

**設定**（與目前相同）：
- 使用 `docs/n8n_Code節點_解析AI回應_處理article結構.txt` 或完整版

**輸出格式**：
```javascript
{
  json: {
    Keyword: "...",
    Category: "...",
    GEO: "TW",
    title: "...",
    body: "...", // HTML 格式的完整文章
    Content: "...", // 同上
    Excerpt: "...",
    Status: "done",
    Date: "2025-12-05"
  }
}
```

---

### 5. HTTP Request: WordPress REST API（發布文章）⭐ 新增

**設定**：

- **方法**：POST
- **URL**：`https://your-domain.com/wp-json/wp/v2/posts`
- **Authentication**：Basic Auth
  - **Username**：你的 WordPress 使用者名稱
  - **Password**：應用程式密碼（不是 WordPress 登入密碼）
- **Headers**：
  ```json
  {
    "Content-Type": "application/json"
  }
  ```
- **Body**：
  ```json
  {
    "title": "{{ $json.title }}",
    "content": "{{ $json.body }}",
    "excerpt": "{{ $json.Excerpt }}",
    "status": "publish",
    "categories": [{{ $json.categoryId }}],
    "meta": {
      "keyword": "{{ $json.Keyword }}",
      "geo": "{{ $json.GEO }}"
    }
  }
  ```

**分類 ID 對應**：
- 需要先在 WordPress 後台建立分類，取得分類 ID
- 或使用 Code 節點動態取得分類 ID

---

### 6. Code 節點：取得分類 ID（可選）

如果需要在發布前取得分類 ID：

```javascript
// 根據 Category 名稱取得分類 ID
const categoryMap = {
  '娛樂城評價': 2,  // 需要在 WordPress 後台確認實際 ID
  '優惠情報': 4,
  '遊戲攻略': 3,
  '綜合討論': 1
};

const categoryName = $input.item.json.Category;
const categoryId = categoryMap[categoryName] || 1; // 預設為 1

return {
  json: {
    ...$input.item.json,
    categoryId: categoryId
  }
};
```

---

### 7. Google Sheets: Update Row（更新狀態）

**設定**（與目前相同）：
- **操作**：Update Row
- **Sheet ID**：`1eMQUXRcn9-wELa8cLoK6kXrdnEnkZoMyMzAtCH1Bmes`
- **Sheet Name**：與步驟 1 相同的分頁
- **Row Index**：使用原始行的索引
- **欄位對應**：
  ```javascript
  {
    Status: 'done',
    Date: $json.Date
  }
  ```

---

## 🔐 WordPress REST API 認證方式

### 方法 1：應用程式密碼（推薦）⭐

**優點**：
- 安全（可以隨時撤銷）
- 不需要外掛
- WordPress 5.6+ 內建支援

**設定**：
1. WordPress 後台 → 使用者 → 個人資料
2. 建立應用程式密碼
3. 在 n8n 中使用 Basic Auth：
   - Username：WordPress 使用者名稱
   - Password：應用程式密碼

---

### 方法 2：JWT Authentication（進階）

**需要外掛**：JWT Authentication for WP REST API

**優點**：
- 更靈活的認證方式
- 適合多個應用程式使用

**設定**：
1. 安裝外掛
2. 設定 JWT Secret Key
3. 在 n8n 中使用 JWT Token

---

### 方法 3：OAuth（最安全，但較複雜）

**需要外掛**：OAuth Server

**適用場景**：需要最高安全性的情況

---

## 📋 WordPress 分類設定

### 建立分類

1. **WordPress 後台** → **文章** → **分類**
2. 建立以下分類：
   - 綜合討論（ID: 1）
   - 娛樂城評價（ID: 2）
   - 遊戲攻略（ID: 3）
   - 優惠情報（ID: 4）

3. **取得分類 ID**：
   - 滑鼠移到分類名稱上，查看網址中的 `tag_ID=數字`
   - 或使用 REST API：`GET /wp-json/wp/v2/categories`

---

## 🔄 完整工作流範例

### 工作流 1：優惠情報自動發文

```
[Schedule Trigger] (每天上午 8 點)
  → [Google Sheets: Read Rows] (優惠活動類，Status=pending)
  → [Loop Over Items]
    → [HTTP Request: Serper.dev] (搜尋關鍵字)
    → [AI Agent: OpenAI] (生成文章)
    → [Code 節點：解析 AI 回應]
    → [Code 節點：取得分類 ID] (優惠情報 = 4)
    → [HTTP Request: WordPress REST API] (發布文章)
    → [IF 節點] (檢查發布是否成功)
      → [是] → [Google Sheets: Update Row] (Status=done)
      → [否] → [Send Email] (通知錯誤)
```

---

## ⚠️ 注意事項

### 1. 分類對應

- 確保 WordPress 中的分類名稱與 Google Sheet 的 `Category` 欄位一致
- 或使用 Code 節點進行分類映射

### 2. 自定義欄位（ACF）

如果需要儲存 `Keyword`、`GEO` 等自定義欄位：

1. **安裝 ACF 外掛**
2. **建立欄位組**：
   - `Keyword` (Text)
   - `GEO` (Text)
3. **在 REST API Body 中使用**：
   ```json
   {
     "acf": {
       "keyword": "{{ $json.Keyword }}",
       "geo": "{{ $json.GEO }}"
     }
   }
   ```

### 3. 錯誤處理

建議加入錯誤處理節點：

```
[HTTP Request: WordPress REST API]
  → [IF 節點] (檢查回應狀態碼)
    → [200-299] → 成功，繼續
    → [其他] → 記錄錯誤，發送通知
```

### 4. 速率限制

- WordPress REST API 可能有速率限制
- 建議在 Loop 中加入延遲（Delay 節點）
- 或使用批次處理

---

## 🧪 測試步驟

### 1. 測試 WordPress REST API 連線

在 n8n 中建立測試工作流：

```
[Manual Trigger]
  → [HTTP Request: WordPress REST API]
    - Method: GET
    - URL: https://your-domain.com/wp-json/wp/v2/posts?per_page=1
    - Authentication: Basic Auth
```

**預期結果**：返回文章列表（JSON 格式）

---

### 2. 測試發布文章

```
[Manual Trigger]
  → [HTTP Request: WordPress REST API]
    - Method: POST
    - URL: https://your-domain.com/wp-json/wp/v2/posts
    - Body: {
        "title": "測試文章",
        "content": "這是測試內容",
        "status": "draft"  // 先使用草稿測試
      }
```

**預期結果**：在 WordPress 後台看到新文章（草稿狀態）

---

### 3. 完整流程測試

1. 在 Google Sheet 中建立一個測試關鍵字（Status=pending）
2. 執行 n8n 工作流
3. 檢查：
   - WordPress 後台是否有新文章
   - Google Sheet 中 Status 是否更新為 done
   - 文章內容是否正確

---

## 🔗 相關文件

- `docs/n8n_論壇文章自動發文指南.md` - 目前的 Google Sheets 版本
- `docs/WordPress遷移完整指南.md` - WordPress 遷移說明
- `docs/WP_DEVELOPMENT_SPEC.md` - WordPress 開發規格

---

## 📝 WordPress REST API 參考

### 常用端點

- **發布文章**：`POST /wp-json/wp/v2/posts`
- **更新文章**：`PUT /wp-json/wp/v2/posts/{id}`
- **取得文章**：`GET /wp-json/wp/v2/posts/{id}`
- **取得分類**：`GET /wp-json/wp/v2/categories`
- **取得標籤**：`GET /wp-json/wp/v2/tags`

### 官方文件

- WordPress REST API Handbook: https://developer.wordpress.org/rest-api/
- REST API Reference: https://developer.wordpress.org/rest-api/reference/

