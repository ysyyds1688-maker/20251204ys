# n8n 關鍵字管理完整指南

## 📋 概述

本指南整合了所有關鍵字管理相關的 n8n 工作流，包括：
1. **預定義關鍵字補充**（方案 B - 推薦）
2. **AI 自動生成關鍵字**（方案 A - 進階）
3. **智能補充關鍵字**（自動偵測 + AI 生成）

---

## 🎯 方案選擇

### 方案 A：AI 生成關鍵字（進階）

**優點**：
- 更靈活、可產生長尾關鍵字
- 可根據市場趨勢動態調整

**缺點**：
- 需要 API 費用
- 可能產生重複或低品質關鍵字
- 需要更複雜的去重邏輯

**適用場景**：預算充足，需要大量新關鍵字

### 方案 B：預定義關鍵字庫（推薦，穩定）

**優點**：
- 穩定、可控
- 無 API 費用
- 去重邏輯簡單

**缺點**：
- 需要手動維護關鍵字庫
- 關鍵字數量有限

**適用場景**：預算有限，需要穩定可控的關鍵字來源

### 方案 C：智能補充關鍵字（自動偵測 + AI 生成）

**優點**：
- 自動偵測關鍵字數量
- 只在需要時才生成（節省成本）
- 結合 AI 的靈活性和自動化

**缺點**：
- 設定較複雜
- 仍需要 API 費用（但更節省）

**適用場景**：需要自動化且成本可控的關鍵字管理

---

## 📊 Google Sheet 結構

### 欄位結構

```
Keyword | GEO | Category | Content | title | Excerpt | Status | Date
```

- **Keyword**：目標關鍵字（必填）
- **GEO**：地區（例如：`TW`，可選）
- **Category**：分類（必須使用精確值）
- **Status**：`pending` = 待處理，`done` = 已完成
- **Date**：日期（自動填入）

### 分類對應表

| 分頁名稱 | Category 值（必須精確） | Sheet GID |
|---------|---------------------|-----------|
| 娛樂城評價類 | `娛樂城評價` | 927317477 |
| 優惠活動類 | `優惠情報` | 677810879 |
| 真人百家樂類 | `遊戲攻略` | 80898864 |
| 體育與電子類 | `遊戲攻略` | 1456663743 |
| 綜合討論類 | `綜合討論` | 你的GID |

---

## 🔧 方案 B：預定義關鍵字補充工作流

### 工作流程

```
[Schedule Trigger] (每天凌晨 2 點)
  → [Google Sheets: Read Rows] (讀取 4 個分頁的現有關鍵字)
  → [Code 節點：關鍵字處理與去重]
  → [Split In Batches] (可選，批次處理)
  → [Switch 節點：根據 category 分流]
    ├─ 娛樂城評價 → [Google Sheets: Append Row (分頁1)]
    ├─ 優惠活動 → [Google Sheets: Append Row (分頁2)]
    ├─ 真人百家樂 → [Google Sheets: Append Row (分頁3)]
    └─ 體育與電子 → [Google Sheets: Append Row (分頁4)]
```

### 詳細設定步驟

#### 1. Schedule Trigger（排程觸發）

- **模式**：Cron
- **Cron 表達式**：`0 2 * * *`（每天凌晨 2 點）
- 或選擇「手動觸發」測試

#### 2. Google Sheets: Read Rows（讀取現有關鍵字）

**第一個分頁：娛樂城評價**
- **操作**：Read Rows
- **Spreadsheet ID**：`1eMQUXRcn9-wELa8cLoK6kXrdnEnkZoMyMzAtCH1Bmes`
- **Sheet Name**：`娛樂城評價類`（或對應的 Sheet 名稱）
- **Range**：`A:A`（只讀 Keyword 欄位，或讀取整行）

**重複 3 次**（或使用 Loop）讀取其他 3 個分頁

#### 3. Code 節點：關鍵字處理與去重

**完整 Code**：請參考 `n8n_自動補充關鍵字_Code節點.txt`

**功能**：
- 讀取前面節點的現有關鍵字
- 比對預定義關鍵字庫
- 去重，只輸出新關鍵字

**預定義關鍵字庫**（在 Code 中定義）：
```javascript
const keywordLibraries = {
  '娛樂城評價': [
    'YS娛樂城評價',
    'YS娛樂城出金',
    'YS娛樂城安全嗎',
    // ... 更多關鍵字
  ],
  '優惠活動': [
    'YS娛樂城體驗金',
    'YS娛樂城首存優惠',
    // ... 更多關鍵字
  ],
  // ... 其他分類
};
```

#### 4. Google Sheets: Append Row（寫入新關鍵字）

**欄位對應**：
```javascript
{
  Keyword: $json.keyword,
  Category: $json.category,
  GEO: $json.geo,
  Status: 'pending',
  Date: $json.date
}
```

---

## 🤖 方案 A：AI 自動生成關鍵字工作流

### 工作流程

```
[Schedule Trigger] (每天執行)
  → [Code 節點：定義分類列表]
  → [Loop Over Items] (循環 4 個分類)
    → [Google Sheets: Read Rows] (讀取現有關鍵字)
    → [Code 節點：提取現有關鍵字]
    → [AI Agent: 生成關鍵字] (OpenAI 或 Gemini)
    → [Code 節點：解析 AI 回應並去重]
    → [Google Sheets: Append Row] (寫入新關鍵字)
```

### 詳細設定步驟

#### 1. Code 節點：定義分類列表

```javascript
const categories = [
  {
    name: '娛樂城評價',
    sheetGid: '927317477',
    sheetName: '娛樂城評價類',
    description: '高轉換意圖的娛樂城評價關鍵字'
  },
  {
    name: '優惠情報',
    sheetGid: '677810879',
    sheetName: '優惠活動類',
    description: '吸流量的優惠活動關鍵字'
  },
  {
    name: '遊戲攻略',
    sheetGid: '80898864',
    sheetName: '真人百家樂類',
    description: '高含金量的遊戲攻略關鍵字'
  },
  {
    name: '綜合討論',
    sheetGid: '1456663743',
    sheetName: '體育與電子類',
    description: '綜合討論類關鍵字'
  }
];

return categories.map(cat => ({
  json: cat
}));
```

#### 2. AI Agent: 生成關鍵字

**使用 OpenAI**：
- **Model**：`gpt-3.5-turbo` 或 `gpt-4`
- **Prompt**：
```
你是一位 SEO 關鍵字專家。請為「{{ $json.category }}」分類生成 20 個高品質的 SEO 關鍵字。

要求：
1. 關鍵字必須包含「YS娛樂城」品牌
2. 關鍵字必須符合「{{ $json.category }}」分類的主題
3. 關鍵字必須有搜尋意圖（用戶會搜尋這些關鍵字）
4. 避免過於通用的關鍵字
5. 提供長尾關鍵字（3-5 個字）

輸出格式（JSON）：
{
  "keywords": ["關鍵字1", "關鍵字2", ...]
}
```

**使用 Gemini**：
- **Model**：`gemini-pro`
- **API Key**：設定環境變數 `GEMINI_API_KEY`

#### 3. Code 節點：解析 AI 回應並去重

```javascript
// 取得 AI 回應
const aiResponse = $input.item.json.response || $input.item.json.content || '';

// 取得現有關鍵字（從前面的節點）
const existingKeywords = $('Code 節點：提取現有關鍵字').item.json.existingKeywords || [];

// 清理 AI 回應
let cleanedResponse = aiResponse
  .replace(/```json\s*/g, '')
  .replace(/```\s*/g, '')
  .trim();

// 解析 JSON
let aiData;
try {
  aiData = JSON.parse(cleanedResponse);
} catch (e) {
  const jsonMatch = cleanedResponse.match(/\{[\s\S]*\}/);
  if (jsonMatch) {
    aiData = JSON.parse(jsonMatch[0]);
  } else {
    throw new Error('無法解析 AI 回應');
  }
}

// 取得關鍵字列表
const generatedKeywords = aiData.keywords || aiData.keyword || [];

// 去重：過濾掉已存在的關鍵字
const newKeywords = generatedKeywords.filter(keyword => {
  const normalized = keyword.trim().toLowerCase();
  return normalized && !existingKeywords.includes(normalized);
});

// 格式化輸出
return newKeywords.map(keyword => ({
  json: {
    Keyword: keyword.trim(),
    Category: category, // ⚠️ 必須使用精確的分類名稱
    GEO: 'TW',
    Status: 'pending',
    Date: new Date().toISOString().split('T')[0]
  }
}));
```

---

## 🧠 方案 C：智能補充關鍵字工作流（推薦）

### 工作流程

```
[Schedule Trigger] (每天執行)
  → [Code 節點：定義分頁列表]
  → [Loop Over Items] (循環 4-5 個分頁)
    → [Google Sheets: Read Rows] (讀取該分頁的 pending 關鍵字)
    → [Code 節點：檢查數量並判斷]
    → [IF 節點] (如果數量 < 閾值)
      → [AI Agent: 生成關鍵字]
      → [Code 節點：去重處理]
      → [Google Sheets: Append Row] (寫入新關鍵字)
```

### 詳細設定步驟

#### 1. Code 節點：定義分頁列表

```javascript
const sheets = [
  {
    name: '娛樂城評價類',
    gid: '927317477',
    category: '娛樂城評價',
    description: '高轉換意圖的娛樂城評價關鍵字',
    threshold: 5 // 如果 pending 關鍵字少於 5 個，就補充
  },
  {
    name: '優惠活動類',
    gid: '677810879',
    category: '優惠情報',
    description: '吸流量的優惠活動關鍵字',
    threshold: 5
  },
  {
    name: '真人百家樂類',
    gid: '80898864',
    category: '遊戲攻略',
    description: '高含金量的遊戲攻略關鍵字（真人百家樂）',
    threshold: 5
  },
  {
    name: '體育與電子類',
    gid: '1456663743',
    category: '遊戲攻略',
    description: '遊戲攻略相關關鍵字（體育、電子遊戲）',
    threshold: 5
  },
  {
    name: '綜合討論類',
    gid: '你的綜合討論類GID',
    category: '綜合討論',
    description: '綜合討論類關鍵字（產業新聞、八卦、新手問題）',
    threshold: 5
  }
];

return sheets.map(sheet => ({
  json: sheet
}));
```

#### 2. Code 節點：檢查數量並判斷

```javascript
// 取得分頁資訊
const sheetInfo = $input.item.json;

// 取得 pending 關鍵字數量
const pendingCount = $input.all().length;

// 判斷是否需要補充
const needsRefill = pendingCount < sheetInfo.threshold;

// 提取現有關鍵字（用於去重）
const existingKeywords = [];
$input.all().forEach(item => {
  const keyword = item.json.Keyword || item.json.keyword || '';
  if (keyword && keyword.trim()) {
    existingKeywords.push(keyword.trim().toLowerCase());
  }
});

return {
  json: {
    ...sheetInfo,
    pendingCount: pendingCount,
    needsRefill: needsRefill,
    existingKeywords: existingKeywords
  }
};
```

#### 3. IF 節點：判斷是否需要補充

- **條件**：`{{ $json.needsRefill }} === true`

#### 4. AI Agent: 生成關鍵字

**Prompt 範例**：
```
你是一位 SEO 關鍵字專家。請為「{{ $json.category }}」分類生成 20 個高品質的 SEO 關鍵字。

要求：
1. 關鍵字必須包含「YS娛樂城」品牌
2. 關鍵字必須符合「{{ $json.category }}」分類的主題
3. 關鍵字必須有搜尋意圖
4. 避免重複以下現有關鍵字：{{ $json.existingKeywords.join(', ') }}

輸出格式（JSON）：
{
  "keywords": ["關鍵字1", "關鍵字2", ...]
}
```

#### 5. Code 節點：去重處理

（與方案 A 的去重邏輯相同）

---

## ⚙️ 進階設定

### 1. 自訂閾值

為每個分頁設定不同的閾值：
```javascript
{
  name: '娛樂城評價類',
  threshold: 10, // 高轉換意圖，需要更多關鍵字
}
```

### 2. 生成數量控制

在 AI Prompt 中動態調整：
```javascript
const needed = threshold - pendingCount;
const generateCount = Math.min(needed + 5, 20); // 最多生成 20 個
```

### 3. 成本控制

- 只在需要時才呼叫 AI（透過 IF 節點）
- 使用 `gpt-3.5-turbo` 而非 `gpt-4`（更便宜）
- 設定每日生成上限

---

## ✅ 測試步驟

### 1. 手動測試

1. 在 Google Sheet 中手動添加測試關鍵字
2. 在 n8n 中手動執行工作流
3. 檢查結果：
   - ✅ 新關鍵字已寫入
   - ✅ Status = `pending`
   - ✅ Category 欄位正確
   - ✅ 沒有重複寫入

### 2. 驗證去重

1. 再次執行工作流
2. 確認：不會重複寫入已存在的關鍵字

---

## 🚨 常見問題

### Q1: 關鍵字重複寫入

**解決方案**：
- 檢查去重邏輯
- 確認比對欄位正確（使用 `.toLowerCase()` 標準化）

### Q2: Category 欄位寫入錯誤

**解決方案**：
- 在 Code 節點中明確設定 Category
- 使用分類映射表確保一致性

### Q3: AI 生成的重複關鍵字

**解決方案**：
- 加強去重邏輯
- 在 AI Prompt 中提供現有關鍵字列表
- 明確要求避免重複

---

## 📈 監控建議

### 每日檢查

1. **n8n 執行日誌**：
   - 檢查哪些分頁被補充了關鍵字
   - 檢查生成的關鍵字數量

2. **Google Sheet 狀態**：
   - 每個分頁的 pending 關鍵字數量
   - 新生成的關鍵字品質

3. **成本監控**：
   - AI API 呼叫次數
   - 每次生成的關鍵字數量

---

## 🔗 相關文件

- `n8n_自動發文完整指南.md` - 自動發文工作流
- `分類對應完整指南.md` - 分類對應關係
- `圖片管理完整指南.md` - 圖片管理說明

---

## 📝 Code 節點完整範例

完整的 Code 節點內容請參考：`n8n_自動補充關鍵字_Code節點.txt`

