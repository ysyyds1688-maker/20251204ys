# n8n 論壇文章自動發文完整指南

## 📋 概述

本指南說明如何使用 n8n 自動為四個論壇分類（綜合討論、娛樂城評價、遊戲攻略、優惠情報）生成並發布文章。

---

## 🎯 論壇分類與 Google Sheet 對應關係

### 論壇分類（前端顯示）

| ID | 分類名稱 | 描述 |
|----|---------|------|
| 1 | **綜合討論** | 博弈產業新聞、八卦爆料、新手發問區 |
| 2 | **娛樂城評價** | 真實玩家出金實測，黑網避雷名單 |
| 3 | **遊戲攻略** | 百家樂看路、體育賠率分析、電子爆分技巧 |
| 4 | **優惠情報** | 全台娛樂城體驗金、首存優惠資訊彙整 |

### Google Sheet 分頁對應

| Sheet 分頁 | GID | Category 值（必須） | 對應論壇分類 |
|-----------|-----|-------------------|------------|
| 娛樂城評價類 | 927317477 | `娛樂城評價` | ID: 2 |
| 優惠活動類 | 677810879 | `優惠情報` | ID: 4 |
| 真人百家樂類 | 80898864 | `遊戲攻略` | ID: 3 |
| 體育與電子類 | 1456663743 | `遊戲攻略` | ID: 3 |
| 綜合討論類 | 你的GID | `綜合討論` | ID: 1 |

### ⚠️ 重要：Category 欄位必須正確

**前端會根據 `Category` 欄位來篩選文章**，所以 n8n 寫入 Google Sheet 時，`Category` 欄位必須使用以下**精確值**：

- `娛樂城評價` → 顯示在「娛樂城評價」版塊
- `優惠情報` → 顯示在「優惠情報」版塊  
- `遊戲攻略` → 顯示在「遊戲攻略」版塊
- `綜合討論` → 顯示在「綜合討論」版塊

---

## 🔧 n8n 自動發文工作流設定

### 工作流程圖

```
[Schedule Trigger] 
  → [Google Sheets: Read Rows] (讀取 Status=pending 的關鍵字)
  → [Loop Over Items] (循環處理每個關鍵字)
    → [HTTP Request: Serper.dev] (搜尋關鍵字)
    → [AI Agent: OpenAI/Gemini] (生成文章)
    → [Code 節點：解析 AI 回應] (提取 title, body, description)
    → [Google Sheets: Update Row] (寫入文章，Status=done)
```

### 詳細設定步驟

#### 1. Schedule Trigger（排程觸發）

- **模式**：Cron
- **Cron 表達式**：`0 8 * * *`（每天上午 8 點執行）
- 或手動觸發測試

#### 2. Google Sheets: Read Rows（讀取待處理關鍵字）

- **操作**：Read Rows
- **Sheet ID**：`1eMQUXRcn9-wELa8cLoK6kXrdnEnkZoMyMzAtCH1Bmes`
- **Sheet Name**：選擇要處理的分頁（例如：`娛樂城評價類`）
- **篩選條件**：
  ```javascript
  Status = "pending"
  ```
- **輸出**：每個關鍵字一行

#### 3. Loop Over Items（循環處理）

- **模式**：Loop Over Items
- **批次大小**：1（一次處理一個關鍵字）

#### 4. HTTP Request: Serper.dev（搜尋關鍵字）

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

#### 5. AI Agent: OpenAI 或 Gemini（生成文章）

**使用 OpenAI：**
- **Model**：`gpt-4` 或 `gpt-3.5-turbo`
- **Prompt**：請參考 `n8n_自動補充關鍵字工作流指南.md` 中的 AI Prompt

**使用 Gemini：**
- **Model**：`gemini-pro`
- **API Key**：設定環境變數 `GEMINI_API_KEY`

**Prompt 範例**（根據分類調整）：
```
你是一位專業的娛樂城內容編輯。請根據以下搜尋結果，撰寫一篇關於「{{ $json.Keyword }}」的專業文章。

搜尋結果：
{{ $json.searchResults }}

要求：
1. 標題：吸引人且包含關鍵字
2. 內容：2000-3000 字，結構清晰（引言、正文、結論）
3. 風格：專業但易懂，適合台灣讀者
4. 分類：{{ $json.Category }}
5. 必須包含免責聲明（在結論中）

輸出格式（JSON）：
{
  "title": "文章標題",
  "body": "文章完整內容（HTML 格式）",
  "description": "文章摘要（150 字內）"
}
```

#### 6. Code 節點：解析 AI 回應

**功能**：
- 解析 AI 回傳的 JSON（處理 ` ```json ` 包裹、亂碼、前後雜訊）
- 提取 `title`、`body`、`description`
- 組裝標準化欄位

**Code 範例**：
```javascript
// 取得 AI 回應
const aiResponse = $input.item.json.response || $input.item.json.content || '';

// 移除可能的 markdown 包裹
let cleanedResponse = aiResponse
  .replace(/```json\s*/g, '')
  .replace(/```\s*/g, '')
  .trim();

// 嘗試解析 JSON
let articleData;
try {
  articleData = JSON.parse(cleanedResponse);
} catch (e) {
  // 如果解析失敗，嘗試提取 JSON 部分
  const jsonMatch = cleanedResponse.match(/\{[\s\S]*\}/);
  if (jsonMatch) {
    articleData = JSON.parse(jsonMatch[0]);
  } else {
    throw new Error('無法解析 AI 回應');
  }
}

// 組裝輸出
return {
  json: {
    Keyword: $input.item.json.Keyword,
    Category: $input.item.json.Category, // 保持原分類
    GEO: $input.item.json.GEO || 'TW',
    title: articleData.title || $input.item.json.Keyword,
    body: articleData.body || '',
    Content: articleData.body || '', // 兼容不同欄位名稱
    Excerpt: articleData.description || articleData.excerpt || '',
    Status: 'done', // 標記為已完成
    Date: new Date().toISOString().split('T')[0] // YYYY-MM-DD
  }
};
```

#### 7. Google Sheets: Update Row（寫入文章）

- **操作**：Update Row
- **Sheet ID**：`1eMQUXRcn9-wELa8cLoK6kXrdnEnkZoMyMzAtCH1Bmes`
- **Sheet Name**：與步驟 2 相同的分頁
- **Row Index**：使用原始行的索引（從 Read Rows 取得）
- **欄位對應**：
  ```javascript
  {
    Keyword: $json.Keyword,
    GEO: $json.GEO,
    Category: $json.Category, // ⚠️ 必須正確！
    Content: $json.body || $json.Content,
    title: $json.title,
    Excerpt: $json.Excerpt,
    Status: 'done',
    Date: $json.Date
  }
  ```

---

## 📝 分類對應表（重要！）

### 確保 Category 欄位正確

| 要顯示在論壇 | Google Sheet Category 值 | Sheet 分頁 |
|------------|------------------------|-----------|
| **綜合討論** | `綜合討論` | 體育與電子類 |
| **娛樂城評價** | `娛樂城評價` | 娛樂城評價類 |
| **遊戲攻略** | `遊戲攻略` | 真人百家樂類 |
| **優惠情報** | `優惠情報` | 優惠活動類 |

### Code 節點中的分類映射（可選）

如果需要在 Code 節點中自動設定 Category，可以使用：

```javascript
// 根據 Sheet 分頁自動設定 Category
const categoryMap = {
  '927317477': '娛樂城評價',  // 娛樂城評價類
  '677810879': '優惠情報',    // 優惠活動類
  '80898864': '遊戲攻略',     // 真人百家樂類
  '1456663743': '綜合討論'    // 體育與電子類
};

const sheetGid = '{{ $json.sheetGid }}'; // 從 Read Rows 取得
const category = categoryMap[sheetGid] || $input.item.json.Category;
```

---

## 🔄 完整工作流範例（四個分頁）

### 方案 1：單一工作流處理所有分頁

```
[Schedule Trigger]
  → [Code: 定義分頁列表]
  → [Loop Over Items] (循環 4 個分頁)
    → [Google Sheets: Read Rows] (讀取該分頁的 pending 關鍵字)
    → [Loop Over Items] (循環關鍵字)
      → [HTTP Request: Serper.dev]
      → [AI Agent]
      → [Code: 解析]
      → [Google Sheets: Update Row]
```

### 方案 2：五個獨立工作流（推薦）

為每個分頁建立獨立工作流，更容易管理和調試：

1. **工作流 1**：娛樂城評價類 → Category: `娛樂城評價`
2. **工作流 2**：優惠活動類 → Category: `優惠情報`
3. **工作流 3**：真人百家樂類 → Category: `遊戲攻略`
4. **工作流 4**：體育與電子類 → Category: `遊戲攻略`
5. **工作流 5**：綜合討論類 → Category: `綜合討論`

**注意**：真人百家樂類和體育與電子類都對應到「遊戲攻略」分類，但建議分別建立工作流以便管理。

---

## ✅ 測試步驟

### 1. 手動測試單個關鍵字

1. 在 Google Sheet 中手動添加一個測試關鍵字：
   - Keyword: `YS娛樂城評價`
   - Category: `娛樂城評價`
   - Status: `pending`

2. 在 n8n 中手動執行工作流

3. 檢查結果：
   - ✅ Google Sheet 中該行的 Status 變為 `done`
   - ✅ `title`、`Content`、`Excerpt` 欄位有值
   - ✅ Category 欄位正確

4. 檢查前端：
   - ✅ 訪問 `/forum/c/2`（娛樂城評價版塊）
   - ✅ 確認文章出現在列表中

### 2. 測試所有分類

為每個分類各添加一個測試關鍵字，確認：
- ✅ 文章出現在正確的論壇版塊
- ✅ 分類篩選正常

---

## 🚨 常見問題

### Q1: 文章沒有出現在論壇分類中

**檢查清單**：
1. ✅ Category 欄位是否使用精確值（`娛樂城評價`、`優惠情報`、`遊戲攻略`、`綜合討論`）
2. ✅ Status 是否為 `done`
3. ✅ 前端是否有正確讀取 Google Sheet
4. ✅ 瀏覽器快取：嘗試硬刷新（Cmd+Shift+R）

### Q2: Category 欄位寫入錯誤

**解決方案**：
- 在 Code 節點中明確設定 Category，不要依賴 Sheet 的預設值
- 使用分類映射表確保一致性

### Q3: 多個分頁需要不同的 Prompt

**解決方案**：
- 在 Code 節點中根據 Category 動態調整 Prompt
- 或為每個分頁建立獨立工作流

---

## 📊 監控建議

### 每日檢查

1. **Google Sheet 狀態**：
   - 每個分頁的 `pending` 關鍵字數量
   - 新完成的文章數量

2. **前端顯示**：
   - 訪問 `/forum` 確認熱門討論有更新
   - 訪問各分類頁面確認文章正確顯示

3. **n8n 執行日誌**：
   - 檢查是否有錯誤
   - 確認執行時間正常

---

## 🎯 下一步

1. ✅ 建立 n8n 工作流（建議使用方案 2：四個獨立工作流）
2. ⏳ 測試單個關鍵字
3. ⏳ 測試所有分類
4. ⏳ 設定自動排程
5. ⏳ 監控執行結果

---

## 📚 相關文件

- `n8n_自動補充關鍵字工作流指南.md` - 關鍵字補充工作流
- `n8n_自動補充關鍵字_Code節點.txt` - 關鍵字處理 Code
- `WP_DEVELOPMENT_SPEC.md` - WordPress 遷移規格（未來參考）

