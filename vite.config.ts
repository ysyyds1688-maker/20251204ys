import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      preview: {
        allowedHosts: true,
      },
      plugins: [react()],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, './src'),
        },
        dedupe: ['react', 'react-dom'], // 避免重複的 React 實例
      },
      optimizeDeps: {
        include: ['react', 'react-dom', 'react-router-dom'],
        force: true, // 強制重新優化依賴
      },
      build: {
        commonjsOptions: {
          include: [/node_modules/],
          transformMixedEsModules: true,
        },
        rollupOptions: {
          output: {
            // 完全禁用代碼分割，使用單一 bundle
            manualChunks: () => 'index',
            // 確保所有模組按順序初始化
            format: 'es',
            // 使用更保守的變數命名，避免 TDZ (Temporal Dead Zone) 問題
            generatedCode: {
              constBindings: false,
              objectShorthand: false,
            },
            // 確保模組按正確順序載入
            preserveModules: false,
          },
        },
        // 增加 chunk 大小限制
        chunkSizeWarningLimit: 2000,
        // 暫時禁用壓縮，排查問題
        minify: false,
        // 啟用源映射以便調試
        sourcemap: true,
      },
    };
});
