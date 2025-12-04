import { SEO } from '../components/SEO';
import { Breadcrumb } from '../components/Breadcrumb';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Users, Clock, ArrowLeft, Share2, Bookmark } from 'lucide-react';

export const NewsDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  
  // 模拟文章数据，实际应该从API获取
  const article = {
    id: id || '1',
    title: '百家樂技巧全攻略',
    date: '2024-03-20',
    category: '遊戲技巧',
    author: 'YS 編輯部',
    readTime: '5 min',
    content: `
      <p class="mb-6 text-lg text-slate-300">百家樂是世界上最受歡迎的賭場遊戲之一，掌握正確的技巧可以大大提高獲勝機率。</p>
      <h3 class="text-xl font-bold text-white mb-4">基礎技巧</h3>
      <p class="mb-6 text-slate-300">首先，了解百家樂的基本規則和點數計算方式是基礎。建議從下注「莊家」開始，因為莊家勝率略高於閒家。</p>
      <h3 class="text-xl font-bold text-white mb-4">看路法應用</h3>
      <p class="mb-6 text-slate-300">學會看路法是提升勝率的關鍵。通過觀察大路、小路、蟑螂路等路單，可以判斷趨勢並制定下注策略。</p>
      <h3 class="text-xl font-bold text-white mb-4">資金管理</h3>
      <p class="mb-6 text-slate-300">無論技巧多好，資金管理都是最重要的。建議每次下注不超過總資金的 5%，並設定止損點。</p>
    `,
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.title,
    author: {
      '@type': 'Organization',
      name: article.author,
    },
    datePublished: article.date,
    dateModified: article.date,
  };

  return (
    <>
      <SEO
        title={`${article.title} - YS 娛樂城`}
        description={`${article.title} - YS 娛樂城提供專業的遊戲技巧與攻略教學。`}
        keywords={`${article.category},遊戲技巧,百家樂技巧`}
        canonical={`/news/${id}`}
        structuredData={articleSchema}
      />
      
      <div className="min-h-screen bg-slate-950 animate-fade-in-up">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Breadcrumb
            items={[
              { name: '最新消息', url: '/news' },
              { name: article.title, url: `/news/${id}` },
            ]}
          />
          
          <Link
            to="/news"
            className="flex items-center text-slate-400 hover:text-white mb-6 group transition-colors"
          >
            <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
            返回新聞列表
          </Link>

          <article className="bg-slate-900 border border-slate-800 rounded-2xl p-8 md:p-12">
            {/* Article Hero Image */}
            <div 
              className="w-full h-64 md:h-96 rounded-xl mb-8 bg-cover bg-center relative overflow-hidden"
              style={{
                backgroundImage: `url("/images/articles/${id === '1' ? 'baccarat-tips' : id === '2' ? 'slots-recommendation' : id === '3' ? 'sports-analysis' : 'casino-recommendation'}.png")`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
              <span className="absolute top-4 left-4 px-3 py-1 bg-cyan-600/80 backdrop-blur-sm border border-cyan-500/50 text-cyan-100 text-xs font-bold rounded">
                {article.category}
              </span>
            </div>
            
            <div className="mb-6">
              <h1 className="text-3xl md:text-4xl font-black text-white mb-4">
                {article.title}
              </h1>
              <div className="flex items-center text-slate-400 text-sm space-x-6">
                <span className="flex items-center">
                  <Calendar size={14} className="mr-2" />
                  {article.date}
                </span>
                <span className="flex items-center">
                  <Users size={14} className="mr-2" />
                  {article.author}
                </span>
                <span className="flex items-center">
                  <Clock size={14} className="mr-2" />
                  {article.readTime}
                </span>
              </div>
            </div>

            <div
              className="prose prose-invert prose-lg max-w-none prose-headings:text-cyan-50 text-slate-300 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            <hr className="my-12 border-slate-800" />

            <div className="flex justify-between items-center">
              <div className="flex space-x-4">
                <button className="flex items-center space-x-2 text-slate-400 hover:text-white transition-colors">
                  <Share2 size={18} />
                  <span>分享</span>
                </button>
                <button className="flex items-center space-x-2 text-slate-400 hover:text-white transition-colors">
                  <Bookmark size={18} />
                  <span>收藏</span>
                </button>
              </div>
              <Link
                to="/news"
                className="text-cyan-400 font-bold hover:text-cyan-300 transition-colors"
              >
                閱讀更多文章
              </Link>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

