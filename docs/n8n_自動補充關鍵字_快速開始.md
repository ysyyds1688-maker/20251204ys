# n8n 自動補充關鍵字 - 快速開始指南

## 🚀 5 分鐘快速設定

### 前置需求
- ✅ n8n 已安裝並可正常使用
- ✅ Google Sheets API 已設定（在 n8n 中已連接 Google 帳號）
- ✅ Google Sheet ID：`1eMQUXRcn9-wELa8cLoK6kXrdnEnkZoMyMzAtCH1Bmes`

---

## 📋 步驟 1：建立 Workflow

1. 在 n8n 中建立新 Workflow
2. 命名：`自動補充關鍵字`

---

## 📋 步驟 2：加入節點（依序）

### 節點 1：Schedule Trigger（排程，可選）
- **類型**：Schedule Trigger
- **設定**：
  - 模式：Cron
  - Cron：`0 2 * * *`（每天凌晨 2 點）
  - 或選擇「手動觸發」測試

### 節點 2：Google Sheets - Read Rows（讀取現有關鍵字）

**第一個分頁：娛樂城評價**
- **操作**：Read Rows
- **Spreadsheet ID**：`1eMQUXRcn9-wELa8cLoK6kXrdnEnkZoMyMzAtCH1Bmes`
- **Sheet Name**：`娛樂城評價`（或對應的 Sheet 名稱）
- **Range**：`A:A`（只讀 Keyword 欄位，或讀取整行）
- **輸出欄位**：確保包含 `Keyword` 欄位

**重複 3 次**（或使用 Loop）讀取其他 3 個分頁：
- 優惠活動類（GID: 677810879）
- 真人百家樂類（GID: 80898864）
- 體育與電子類（GID: 1456663743）

> **提示**：如果 4 個分頁 Sheet 名稱不同，需要分別設定 4 個 Google Sheets 節點，或使用 Loop 節點。

### 節點 3：Code 節點（關鍵字處理）

- **名稱**：`關鍵字處理與去重`
- **Code**：複製 `n8n_自動補充關鍵字_Code節點.txt` 的內容貼上
- **說明**：這個 Code 會：
  - 讀取前面節點的現有關鍵字
  - 比對預定義關鍵字庫
  - 去重，只輸出新關鍵字

### 節點 4：Split In Batches（批次處理，可選）

- **批次大小**：10（一次處理 10 個關鍵字）
- **說明**：如果新關鍵字很多，可以分批寫入，避免一次寫入太多

### 節點 5：Google Sheets - Append Row（寫入新關鍵字）

- **操作**：Append Row
- **Spreadsheet ID**：`1eMQUXRcn9-wELa8cLoK6kXrdnEnkZoMyMzAtCH1Bmes`
- **Sheet Name**：根據 `{{ $json.category }}` 動態選擇對應分頁
- **欄位對應**：
  ```
  Keyword: {{ $json.keyword }}
  Category: {{ $json.category }}
  GEO: {{ $json.geo }}
  Status: {{ $json.status }}
  Date: {{ $json.date }}
  ```

> **注意**：因為有 4 個分頁，可能需要用 **IF 節點** 或 **Switch 節點** 根據 `category` 判斷要寫入哪個分頁。

---

## 🔧 進階：使用 IF/Switch 節點分流

如果 4 個分頁的 Sheet 名稱不同，建議使用 **Switch 節點**：

```
[Code 節點] 
  → [Switch 節點：根據 category 分流]
    ├─ 娛樂城評價 → [Google Sheets: Append Row (分頁1)]
    ├─ 優惠活動 → [Google Sheets: Append Row (分頁2)]
    ├─ 真人百家樂 → [Google Sheets: Append Row (分頁3)]
    └─ 體育與電子 → [Google Sheets: Append Row (分頁4)]
```

**Switch 節點設定**：
- **模式**：Rules
- **規則**：
  - `{{ $json.category }}` equals `娛樂城評價` → 路由 1
  - `{{ $json.category }}` equals `優惠活動` → 路由 2
  - `{{ $json.category }}` equals `真人百家樂` → 路由 3
  - `{{ $json.category }}` equals `體育與電子` → 路由 4

---

## ✅ 測試步驟

### 1. 手動執行
- 點擊「Execute Workflow」
- 查看執行日誌

### 2. 檢查結果
- 打開 Google Sheet
- 確認新關鍵字已寫入，Status = `pending`
- 確認沒有重複寫入

### 3. 驗證去重
- 再次執行 workflow
- 確認：不會重複寫入已存在的關鍵字

---

## 🎯 完整 Workflow 範例結構

```
[Schedule Trigger] (每天凌晨 2 點)
  ↓
[Google Sheets: Read Rows] (讀取 4 個分頁的現有關鍵字)
  ↓
[Code 節點：關鍵字處理與去重]
  ↓
[Split In Batches] (可選，批次處理)
  ↓
[Switch 節點：根據 category 分流]
  ├─ 娛樂城評價 → [Google Sheets: Append Row (分頁1)]
  ├─ 優惠活動 → [Google Sheets: Append Row (分頁2)]
  ├─ 真人百家樂 → [Google Sheets: Append Row (分頁3)]
  └─ 體育與電子 → [Google Sheets: Append Row (分頁4)]
```

---

## 🚨 常見問題

### Q1: Code 節點讀不到現有關鍵字
**A**: 確認前面的 Google Sheets 節點有正確讀取資料，且輸出格式包含 `Keyword` 欄位

### Q2: 寫入到錯誤的分頁
**A**: 檢查 Switch 節點的規則設定，確認 `category` 值與 Sheet 名稱對應

### Q3: 關鍵字重複寫入
**A**: 檢查 Code 節點的去重邏輯，確認比對欄位正確

---

## 📚 相關文件

- `n8n_自動補充關鍵字工作流指南.md` - 完整說明文件
- `n8n_自動補充關鍵字_Code節點.txt` - Code 節點內容

---

## 🎉 完成！

設定完成後，workflow 會：
- ✅ 每天自動補充新關鍵字
- ✅ 自動去重，不會重複寫入
- ✅ 將新關鍵字設為 `Status=pending`，等待自動發文 workflow 處理

下一步：設定「自動發文 workflow」，讓 `pending` 的關鍵字自動生成文章！

