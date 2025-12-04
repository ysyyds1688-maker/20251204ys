# n8n 自動補充關鍵字工作流指南

## 📋 功能概述

這個工作流會自動為 Google Sheet 的四個分頁補充關鍵字，確保每個分類都有足夠的關鍵字待處理。

### 工作流程
1. **讀取現有關鍵字**：從 Google Sheet 讀取所有分頁的現有關鍵字
2. **去重檢查**：比對預定義關鍵字庫，排除已存在的關鍵字
3. **批次寫入**：將新關鍵字寫入對應分頁，Status 設為 `pending`

---

## 🎯 方案選擇

### 方案 A：AI 生成關鍵字（可選，進階）
- 使用 AI Agent 根據分類動態生成關鍵字
- 優點：更靈活、可產生長尾關鍵字
- 缺點：需要 API 費用、可能產生重複或低品質關鍵字
- 文件：`n8n_自動補充關鍵字_AI_Prompt.md` + `n8n_自動補充關鍵字_AI生成版_Code節點.txt`

### 方案 B：預定義關鍵字庫（推薦，穩定）
- 使用預先整理好的高品質關鍵字列表
- 優點：穩定、可控、無 API 費用、去重邏輯簡單
- 缺點：需要手動維護關鍵字庫
- **本文件主要說明方案 B**

---

## 📊 Google Sheet 結構

### Sheet ID
```
1eMQUXRcn9-wELa8cLoK6kXrdnEnkZoMyMzAtCH1Bmes
```

### 四個分頁對應

| 分頁名稱 | GID | Category 值 | 用途 |
|---------|-----|------------|------|
| 娛樂城評價類 | 927317477 | `娛樂城評價` | 高轉換意圖 |
| 優惠活動類 | 677810879 | `優惠活動` | 吸流量 |
| 真人百家樂類 | 80898864 | `真人百家樂` | 高含金量 |
| 體育與電子類 | 1456663743 | `體育與電子` | 綜合內容 |

### 欄位結構
```
Keyword | GEO | Category | Content | title | Excerpt | Status | Date
```

- **Keyword**：目標關鍵字（必填）
- **GEO**：地區（例如：`TW`、`CN`，可選）
- **Category**：分類（必填，需與分頁對應）
- **Status**：狀態（`pending` = 待處理，`done` = 已完成）
- **Date**：日期（自動填入）

---

## 🔧 n8n Workflow 設定步驟

### 1. 建立新 Workflow
- 名稱：`自動補充關鍵字 - 方案B`

### 2. 節點流程

```
[Schedule Trigger] 
  → [Code 節點：關鍵字處理與去重]
  → [Google Sheets: Append Row] (循環 4 次，每個分頁一次)
```

### 3. 節點詳細設定

#### 節點 1：Schedule Trigger（排程觸發）
- **模式**：Cron
- **Cron 表達式**：`0 2 * * *`（每天凌晨 2 點執行）
- 或手動觸發測試

#### 節點 2：Code 節點（關鍵字處理）
- **名稱**：`關鍵字處理與去重`
- **Code**：請參考 `n8n_自動補充關鍵字_Code節點.txt`
- **功能**：
  - 讀取 Google Sheet 現有關鍵字（透過 HTTP Request 或 Google Sheets 節點）
  - 比對預定義關鍵字庫
  - 去重，只保留新關鍵字
  - 輸出格式化的資料陣列

#### 節點 3：Google Sheets: Append Row（寫入新關鍵字）
- **操作**：Append Row
- **Sheet ID**：`1eMQUXRcn9-wELa8cLoK6kXrdnEnkZoMyMzAtCH1Bmes`
- **循環設定**：使用 `Split In Batches` 或 `Loop Over Items`
- **欄位對應**：
  ```javascript
  {
    Keyword: $json.keyword,
    GEO: $json.geo || 'TW',
    Category: $json.category,
    Status: 'pending',
    Date: $now.format('YYYY-MM-DD')
  }
  ```

---

## 📝 預定義關鍵字庫結構

每個分類的關鍵字庫定義在 Code 節點中，格式如下：

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
  '真人百家樂': [
    'YS娛樂城真人百家樂',
    'YS娛樂城DG真人',
    // ... 更多關鍵字
  ],
  '體育與電子': [
    'YS娛樂城體育投注',
    'YS娛樂城電子遊戲',
    // ... 更多關鍵字
  ]
};
```

---

## ✅ 測試步驟

### 1. 手動觸發測試
- 在 n8n 中點擊「Execute Workflow」
- 檢查執行日誌，確認：
  - ✅ 成功讀取現有關鍵字
  - ✅ 正確去重
  - ✅ 新關鍵字成功寫入 Sheet

### 2. 驗證 Google Sheet
- 打開對應的 Google Sheet 分頁
- 確認：
  - ✅ 新關鍵字已寫入，Status = `pending`
  - ✅ Category 欄位正確
  - ✅ Date 欄位有值

### 3. 檢查去重邏輯
- 再次執行 workflow
- 確認：不會重複寫入已存在的關鍵字

---

## 🔄 與自動發文 Workflow 整合

### 完整流程
```
[自動補充關鍵字] 
  → Google Sheet (Status=pending)
  → [自動發文 Workflow] 
  → AI 生成文章
  → Google Sheet (Status=done)
  → 前端顯示
```

### 注意事項
- 確保「自動發文 Workflow」只處理 `Status=pending` 的關鍵字
- 建議設定排程：補充關鍵字（每天凌晨 2 點）→ 自動發文（每天上午 8 點）

---

## 📈 維護建議

### 定期更新關鍵字庫
- 每月檢查一次關鍵字庫
- 根據 SEO 數據（搜尋量、競爭度）調整
- 移除低轉換關鍵字，加入新熱門關鍵字

### 監控指標
- 每個分頁的 `pending` 關鍵字數量（建議維持 10-20 個）
- 關鍵字去重率（避免重複寫入）
- Workflow 執行成功率

---

## 🚨 常見問題

### Q1: 關鍵字重複寫入
**A**: 檢查 Code 節點的去重邏輯，確認比對欄位正確（Keyword 欄位）

### Q2: 寫入到錯誤的分頁
**A**: 確認 Loop 節點中的 GID 與 Category 對應關係正確

### Q3: Status 欄位沒有設為 pending
**A**: 檢查 Google Sheets Append Row 節點的欄位對應設定

---

## 📚 相關文件

- `n8n_自動補充關鍵字_Code節點.txt` - 方案 B 的完整 Code
- `n8n_自動補充關鍵字_AI_Prompt.md` - AI 版本的 Prompt（可選）
- `n8n_自動補充關鍵字_AI生成版_Code節點.txt` - AI 版本的 Code（可選）

---

## 🎯 下一步

1. ✅ 建立 n8n workflow（使用方案 B）
2. ⏳ 測試執行一次，確認功能正常
3. ⏳ 設定自動排程（Cron）
4. ⏳ 監控執行結果，調整關鍵字庫
5. ⏳ （可選）未來升級到 AI 版本

