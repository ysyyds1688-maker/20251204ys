# 部署問題修復說明

## ✅ 已修復的問題

### 1. package.json name 字段非法字符

**問題**：
- 原值：`"name": "ys-娛樂論壇"`（包含中文字符）
- npm 要求 name 字段只能包含小寫字母、數字和連字符

**修復**：
- 已改為：`"name": "ys-entertainment-forum"`
- 符合 npm 命名規範

## ⚠️ publicProcedure 錯誤分析

### 錯誤信息
```
ReferenceError: publicProcedure is not defined
at file:///src/dist/index.js:331:11
```

### 問題分析

從 runtime log 來看，這個錯誤發生在：
- 路徑：`/src/dist/index.js:331`
- 錯誤：`publicProcedure is not defined`

**重要發現**：
1. 當前項目是**前端 React 項目**，不包含任何 `publicProcedure` 相關代碼
2. `publicProcedure` 是 **tRPC**（TypeScript RPC）框架的 API，通常用於後端
3. 錯誤發生在構建後的 `dist/index.js` 文件中

### 可能的原因

1. **混合部署問題**：
   - 可能在同一部署環境中部署了多個項目
   - 後端 API 項目的代碼被錯誤地包含在前端構建中

2. **構建配置問題**：
   - Vite 構建配置可能包含了不應該包含的文件
   - 可能有其他項目的代碼被意外打包

3. **部署環境問題**：
   - Zeabur 部署配置可能指向了錯誤的項目
   - 可能部署了錯誤的構建產物

### 解決方案

#### 方案 1：檢查構建產物
```bash
# 本地構建並檢查
npm run build
ls -la dist/
# 檢查 dist/index.js 是否包含 publicProcedure
```

#### 方案 2：檢查 Vite 配置
確認 `vite.config.ts` 沒有包含不應該包含的文件：
- 檢查 `include` 和 `exclude` 配置
- 確認沒有意外包含後端代碼

#### 方案 3：檢查部署配置
在 Zeabur 部署配置中：
1. 確認部署的是正確的項目
2. 確認構建命令正確：`npm run build`
3. 確認輸出目錄正確：`dist/`
4. 確認啟動命令正確（如果是 SPA，可能需要靜態文件服務器）

#### 方案 4：分離前後端
如果確實有後端項目：
1. 將前後端項目分開部署
2. 前端部署為靜態網站
3. 後端單獨部署為 API 服務

### 當前項目配置檢查

當前項目是純前端 React SPA，應該：
- ✅ 使用 `npm run build` 構建
- ✅ 輸出到 `dist/` 目錄
- ✅ 部署為靜態文件（不需要 Node.js 運行時）
- ✅ 使用靜態文件服務器（如 Nginx、Vercel、Netlify）

### 建議的部署配置（Zeabur）

如果是部署到 Zeabur：

```yaml
# 構建配置
Build Command: npm run build
Output Directory: dist
Install Command: npm install

# 如果是靜態網站，使用靜態文件服務器
# 或者使用 Zeabur 的靜態網站部署選項
```

### 驗證步驟

1. **本地測試構建**：
   ```bash
   npm run build
   npm run preview
   ```
   確認本地構建和預覽正常

2. **檢查構建產物**：
   ```bash
   # 檢查 dist 目錄內容
   ls -la dist/
   # 確認沒有後端相關文件
   ```

3. **檢查 package.json**：
   - ✅ name 字段已修復為 `ys-entertainment-forum`
   - ✅ 確認 scripts 正確

4. **重新部署**：
   - 提交修復後的代碼
   - 重新觸發部署
   - 檢查部署日誌

## 📝 檢查清單

- [x] package.json name 字段已修復
- [ ] 確認構建產物不包含後端代碼
- [ ] 確認部署配置正確
- [ ] 確認部署的是正確的項目
- [ ] 重新部署並驗證

## 🔍 如果問題持續

如果 `publicProcedure` 錯誤仍然存在：

1. **檢查是否有其他項目文件**：
   - 檢查項目根目錄是否有其他項目的文件
   - 檢查是否有隱藏的配置文件

2. **檢查構建日誌**：
   - 查看完整的構建日誌
   - 確認構建過程中是否有警告或錯誤

3. **聯繫 Zeabur 支援**：
   - 提供完整的錯誤日誌
   - 提供項目結構和配置信息

