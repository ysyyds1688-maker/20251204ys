export interface ForumTopic {
  id: string;
  slug: string;
  title: string;
  categoryId: string;
  author: string;
  date: string;
  views: number;
  replies: number;
  tags: string[];
  summary: string;
  content: string; // 這裡存儲 HTML 內容或 Markdown
  image: string; // 新增圖片欄位
}

export interface ForumCategory {
  id: string;
  name: string;
  description: string;
  icon: string; // Lucide icon name or image path
}

export const FORUM_CATEGORIES: ForumCategory[] = [
  {
    id: '1',
    name: '綜合討論',
    description: '博弈產業新聞、八卦爆料、新手發問區。',
    icon: 'MessageSquare'
  },
  {
    id: '2',
    name: '娛樂城評價',
    description: '真實玩家出金實測，黑網避雷名單。',
    icon: 'Star'
  },
  {
    id: '3',
    name: '遊戲攻略',
    description: '百家樂看路、體育賠率分析、電子爆分技巧。',
    icon: 'BookOpen'
  },
  {
    id: '4',
    name: '優惠情報',
    description: '全台娛樂城體驗金、首存優惠資訊彙整。',
    icon: 'Gift'
  }
];

export const FORUM_TOPICS: ForumTopic[] = [
  {
    id: '1',
    slug: '2025-top-10-casinos-review',
    categoryId: '2',
    title: '【2025年度評測】十大娛樂城推薦總整理：出金速度、優惠力度實測',
    author: '賭場老司機',
    date: '2025-11-20',
    views: 12580,
    replies: 45,
    tags: ['娛樂城推薦', '出金實測', '2025排名'],
    summary: '經過團隊實測，整理出 2025 年最值得遊玩的十大娛樂城。我們針對出金速度、遊戲種類、客服品質進行了全方位的評比...',
    image: '/images/已使用/首頁文章1.png',
    content: `
      <h2>為什麼選擇正確的娛樂城很重要？</h2>
      <p>在網路上搜尋娛樂城，成千上萬的結果讓人眼花撩亂。選錯平台不僅可能遇到不出金的詐騙，還可能因為遊戲公平性問題而輸得不明不白。本篇評測旨在幫助玩家避開黑網，找到真正安全、好玩的平台。</p>
      
      <h2>評測標準說明</h2>
      <ul>
        <li><strong>出金速度：</strong> 我們實際存款並申請提款，記錄到帳時間。</li>
        <li><strong>遊戲豐富度：</strong> 是否包含主流的真人百家樂、老虎機品牌。</li>
        <li><strong>優惠誠意：</strong> 流水倍數是否合理，是否為看得到吃不到的優惠。</li>
      </ul>

      <h2>Top 1. YS (MR9) 娛樂城</h2>
      <p>作為目前市場上信譽最好的平台之一，YS 運營的 MR9 娛樂城以其穩定的出金和高水位的賠率著稱。我們測試了 5 筆大額提款，平均到帳時間在 10 分鐘以內。</p>
      
      <h2>總結</h2>
      <p>選擇娛樂城時，切記不要被過於誇張的優惠（如存1000送5000）所迷惑，安全出金才是最重要的。</p>
    `
  },
  {
    id: '2',
    slug: 'dg-baccarat-road-reading',
    categoryId: '3',
    title: 'DG真人百家樂實戰：利用多檯介面抓長龍技巧',
    author: '百家樂算牌手',
    date: '2025-11-26',
    views: 8960,
    replies: 32,
    tags: ['真人視訊', 'DG百家樂', '長龍技巧'],
    summary: 'DG 真人是目前市佔率極高的視訊平台。本文將教你如何利用多檯監控功能，快速鎖定好路長龍，並推薦適合的平台...',
    image: '/images/已使用/首頁文章2.png',
    content: `
      <h2>為什麼選擇 DG 真人？</h2>
      <p>DG (Dream Gaming) 以其高清流暢的視訊和美麗的荷官著稱。連線穩定度極高，幾乎不會出現卡頓情況，這對於抓路玩家來說至關重要。</p>

      <h2>多檯介面抓龍法</h2>
      <p>許多平台（如 YS/MR9）支援「多檯模式」，你可以同時監控 4-8 桌的牌路。當你發現某桌出現以下路單時，請立即切入：</p>
      <ul>
        <li><strong>長莊/長閒：</strong> 連續 6 口以上。</li>
        <li><strong>單跳路：</strong> 莊閒交替出現 6 口以上。</li>
      </ul>

      <h2>實戰心法</h2>
      <p>切記，跟長龍時要「敢贏怯輸」。第一注平注，贏了可以考慮適度加注（勝進），一旦斷龍立即停手或換桌，不要與趨勢作對。</p>
    `
  },
  {
    id: '3',
    slug: 'welcome-bonus-comparison-2025',
    categoryId: '4',
    title: '2025 娛樂城體驗金懶人包：這 3 家送最大方且免儲值',
    author: '優惠情報員',
    date: '2025-11-25',
    views: 15400,
    replies: 88,
    tags: ['體驗金', '免儲值', '首存紅利'],
    summary: '新手玩家必看！我們整理了全台 20 家娛樂城的註冊優惠，幫你篩選出流水最低、最容易提領的 3 家平台...',
    image: '/images/已使用/首頁文章3.png',
    content: `
      <h2>如何挑選體驗金活動？</h2>
      <p>很多平台打著送 1000 的旗號，卻要求 20 倍流水，甚至鎖住不讓提款。挑選時要注意：</p>
      <ul>
        <li><strong>流水倍數：</strong> 最好在 1-5 倍之間。</li>
        <li><strong>提款上限：</strong> 有些平台贏了只能提 500，要注意條款。</li>
      </ul>

      <h2>推薦名單</h2>
      <h3>1. MR9 娛樂城</h3>
      <p>註冊驗證後直接聯繫客服，體驗金領取流程最簡單，且首存優惠誠意十足。</p>

      <h3>2. 其他平台</h3>
      <p>（此處可列出其他競品進行比較，以示公正）</p>
    `
  },
  {
    id: '4',
    slug: '88soft-caishen-big-win',
    categoryId: '3',
    title: '電子遊戲選台指南：88SOFT《財神來了》爆分訊號解析',
    author: '老虎機殺手',
    date: '2025-11-22',
    views: 6700,
    replies: 12,
    tags: ['電子遊戲', '88SOFT', '爆分技巧'],
    summary: '88SOFT 是近期非常熱門的電子系統。本文分享如何觀察機台週期，以及我在《財神來了》贏得 5000 倍大獎的實戰過程...',
    image: '/images/articles/slots-rtp-guide.png',
    content: `
      <h2>遊戲介紹：財神來了</h2>
      <p>這款由 88SOFT 開發的《財神來了》，以其中獎率高、畫面喜氣著稱。遊戲採用 243 路賠付機制，只要連續出現相同符號即可中獎。</p>

      <h2>選台技巧</h2>
      <p>建議大家在選擇機台時，可以觀察「熱門遊戲」排行榜。通常榜上有名的遊戲，正處於吐分期，中獎機率相對較高。</p>
    `
  },
  {
    id: '5',
    slug: 'sports-odds-analysis-top-vs-others',
    categoryId: '3',
    title: '【體育實測】TOP體育 vs 熊貓體育：哪家賠率更好？實測數據大公開',
    author: '運彩分析師',
    date: '2025-11-28',
    views: 12580,
    replies: 45,
    tags: ['體育投注', 'TOP體育', '賠率分析'],
    summary: '許多玩家都在問，到底該玩 TOP 體育還是熊貓體育？我們團隊針對 NBA 和英超賽事進行了為期一週的賠率追蹤實測...',
    image: '/images/articles/sports-analysis.png',
    content: `
      <h2>為什麼選擇合適的體育平台很重要？</h2>
      <p>不同的體育平台在盤口開出時間、賠率水位以及滾球流暢度上都有差異。</p>
      
      <h2>TOP 體育實測優勢</h2>
      <ul>
        <li><strong>賠率水位：</strong> 經過比對，TOP 體育在五大聯賽的讓分盤賠率平均高出 0.02-0.03。</li>
        <li><strong>介面操作：</strong> 介面簡潔，特別適合手機端快速下注。</li>
      </ul>

      <h2>總結建議</h2>
      <p>如果你是足球迷或籃球迷，追求最高賠率，首選 **TOP 體育**。如果你喜歡玩電競或冷門賽事，建議選擇 **熊貓體育**。</p>
    `
  }
];
