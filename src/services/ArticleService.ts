import { useState, useEffect } from 'react';

// 定義文章資料結構
export interface Article {
  id: string;
  keyword: string;
  title: string;
  content: string;
  excerpt: string;
  tags: string[];
  slug: string;
  date: string;
  category: string;
  image: string; // 預設圖片
}

// 多個 Google Sheet CSV 連結（支援多分頁）
// Sheet ID: 1eMQUXRcn9-wELa8cLoK6kXrdnEnkZoMyMzAtCH1Bmes
const SHEET_CSV_URLS = [
  // 分頁 1：娛樂城評價類 (高轉換意圖)
  'https://docs.google.com/spreadsheets/d/1eMQUXRcn9-wELa8cLoK6kXrdnEnkZoMyMzAtCH1Bmes/export?format=csv&gid=927317477',
  // 分頁 2：優惠活動類 (吸流量)
  'https://docs.google.com/spreadsheets/d/1eMQUXRcn9-wELa8cLoK6kXrdnEnkZoMyMzAtCH1Bmes/export?format=csv&gid=677810879',
  // 分頁 3：真人百家樂類 (高含金量)
  'https://docs.google.com/spreadsheets/d/1eMQUXRcn9-wELa8cLoK6kXrdnEnkZoMyMzAtCH1Bmes/export?format=csv&gid=80898864',
  // 分頁 4：體育與電子類
  'https://docs.google.com/spreadsheets/d/1eMQUXRcn9-wELa8cLoK6kXrdnEnkZoMyMzAtCH1Bmes/export?format=csv&gid=1456663743',
];

// 預設圖片庫 (隨機分配給文章)
const DEFAULT_IMAGES = [
  '/images/已使用/首頁文章1.png',
  '/images/已使用/首頁文章2.png',
  '/images/已使用/首頁文章3.png'
];

// 等待 PapaParse 載入的輔助函數
const waitForPapa = (): Promise<void> => {
  return new Promise((resolve) => {
    // @ts-ignore
    if (window.Papa) {
      resolve();
      return;
    }
    
    // 等待最多 5 秒
    let attempts = 0;
    const maxAttempts = 50; // 5秒 = 50 * 100ms
    const checkInterval = setInterval(() => {
      // @ts-ignore
      if (window.Papa) {
        clearInterval(checkInterval);
        resolve();
      } else if (++attempts >= maxAttempts) {
        clearInterval(checkInterval);
        console.error('PapaParse failed to load after 5 seconds');
        resolve(); // 仍然 resolve，讓後續邏輯處理錯誤
      }
    }, 100);
  });
};

// 解析單個 CSV 連結
const parseCSV = (url: string): Promise<Article[]> => {
  return waitForPapa().then(() => {
    return new Promise((resolve, reject) => {
      // @ts-ignore - Papa is loaded from CDN
      if (!window.Papa) {
        console.error('PapaParse not loaded');
        resolve([]); // 改為 resolve 空陣列，避免中斷其他分頁
        return;
      }

      // @ts-ignore
      window.Papa.parse(url, {
      download: true,
      header: true,
      skipEmptyLines: true,
      // 處理多行內容（HTML 可能包含換行）
      newline: '',
      // 引號處理，因為 Content 欄位可能包含引號和換行
      quoteChar: '"',
      escapeChar: '"',
      complete: (results: any) => {
        console.log(`CSV Parse Results from ${url}:`, results.data.length, 'rows');
        
        const articles: Article[] = results.data
          .filter((row: any) => {
            // 過濾掉空行
            if (!row || Object.keys(row).length === 0) return false;
            
            // 檢查 Status 欄位，支援 'done', 'Done', 'DONE' 等大小寫變化
            const status = (row['Status'] || '').toString().trim().toLowerCase();
            const isDone = status === 'done';
            
            // Debug: 輸出過濾狀態
            if (row['title']) {
              console.log(`Article "${row['title']}": Status="${status}", isDone=${isDone}`);
            }
            
            return isDone;
          })
          .map((row: any, index: number) => {
            // 處理 Excerpt 欄位（注意 CSV 中可能有尾隨空格）
            const excerpt = (row['Excerpt '] || row['Excerpt'] || '').toString().trim();
            const title = (row['title'] || '').toString().trim();
            
            return {
              id: `google-sheet-${url}-${index}`, // 使用 URL 作為 ID 的一部分，避免衝突
              keyword: (row['Keyword'] || '').toString().trim(),
              title: title || '無標題',
              content: (row['Content'] || row['content'] || row['body'] || row['Body'] || '').toString().trim(),
              excerpt: excerpt,
              // 處理 Tags：優先從 CSV 讀取，如果沒有則從 Category 和 Keyword 衍生
              tags: (() => {
                const csvTags = (row['Tags'] || row['tags'] || '').toString().trim();
                if (csvTags) {
                  // 如果有 Tags 欄位，分割並清理
                  return csvTags.split(',').map((t: string) => t.trim()).filter((t: string) => t.length > 0);
                }
                // 如果沒有 Tags，從 Category 和 Keyword 衍生
                const category = (row['Category'] || '').toString().trim();
                const keyword = (row['Keyword'] || '').toString().trim();
                const derivedTags: string[] = [];
                if (category && category !== '未分類') {
                  derivedTags.push(category);
                }
                // 從關鍵字提取主要詞彙作為標籤
                if (keyword) {
                  const keywordParts = keyword.split(/\s+/).filter((part: string) => part.length > 1);
                  derivedTags.push(...keywordParts.slice(0, 3)); // 最多取前 3 個詞
                }
                return derivedTags.filter((tag, index, self) => self.indexOf(tag) === index); // 去重
              })(),
              // 生成標準化的 slug（與前端匹配邏輯一致）
              slug: (() => {
                if (!title) return '';
                return title
                  .replace(/\s+/g, '-')
                  .toLowerCase()
                  .replace(/[^\w\u4e00-\u9fa5-]/g, '') // 保留中文、英文、數字和連字符
                  .replace(/-+/g, '-') // 將多個連字符合併為一個
                  .replace(/^-|-$/g, ''); // 移除開頭和結尾的連字符
              })(),
              // 優先從 Google Sheet 讀取 Date 欄位，如果沒有則使用當前日期
              date: (row['Date'] || row['date'] || new Date().toISOString().split('T')[0]).toString().trim(),
              category: (row['Category'] || '未分類').toString().trim(),
              image: DEFAULT_IMAGES[index % DEFAULT_IMAGES.length] // 輪播圖片
            };
          });
        
        console.log(`Filtered articles from ${url}:`, articles.length);
        resolve(articles);
      },
      error: (error: any) => {
        console.error(`CSV Parse Error for ${url}:`, error);
        // 不 reject，而是返回空陣列，這樣其他分頁仍可正常載入
        resolve([]);
      }
    });
  });
  });
};

export const ArticleService = {
  // 抓取所有文章（從多個分頁合併）
  async getAllArticles(): Promise<Article[]> {
    try {
      // 並行讀取所有 CSV 連結
      const parsePromises = SHEET_CSV_URLS
        .filter(url => url && url.trim().length > 0) // 過濾掉空字串和註釋
        .map(url => parseCSV(url.trim()));
      
      // 等待所有 CSV 解析完成
      const allArticlesArrays = await Promise.all(parsePromises);
      
      // 合併所有分頁的文章
      const allArticles = allArticlesArrays.flat();
      
      console.log(`Total articles from all sheets: ${allArticles.length}`);
      
      // 按日期排序（最新的在前）
      allArticles.sort((a, b) => {
        const dateA = new Date(a.date).getTime();
        const dateB = new Date(b.date).getTime();
        return dateB - dateA; // 降序
      });
      
      return allArticles;
    } catch (error) {
      console.error('Error fetching articles from multiple sheets:', error);
      // 如果全部失敗，返回空陣列而不是拋出錯誤
      return [];
    }
  },

  // 根據 Slug 抓取單篇文章
  async getArticleBySlug(slug: string): Promise<Article | undefined> {
    const articles = await this.getAllArticles();
    // 這裡做一個模糊比對，因為中文轉 slug 可能有編碼問題，暫時比對 title
    return articles.find(a => a.title === slug || a.slug === slug);
  }
};

// React Hook for easy usage
export const useArticles = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    ArticleService.getAllArticles()
      .then(data => {
        setArticles(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError('無法載入文章');
        setLoading(false);
      });
  }, []);

  return { articles, loading, error };
};

