import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { SEO } from '../../components/SEO';
import { Breadcrumb } from '../../components/Breadcrumb';
import { ArticleService, useArticles } from '../../src/services/ArticleService';
import { Clock, Eye, MessageCircle, User, Calendar, Tag, Share2, ThumbsUp } from 'lucide-react';

export const TopicPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { articles, loading } = useArticles();
  
  // 從真實文章數據中查找
  const article = articles.find(a => {
    // 生成標準化的 slug（統一處理方式）
    const generateSlug = (text: string) => {
      return text
        .replace(/\s+/g, '-')
        .toLowerCase()
        .replace(/[^\w\u4e00-\u9fa5-]/g, '') // 保留中文、英文、數字和連字符
        .replace(/-+/g, '-') // 將多個連字符合併為一個
        .replace(/^-|-$/g, ''); // 移除開頭和結尾的連字符
    };
    
    // 比對 slug（優先）或 title
    const articleSlug = a.slug || generateSlug(a.title);
    const urlSlug = slug || '';
    
    // 多種比對方式：完全匹配、標題匹配、slug 匹配
    return articleSlug === urlSlug || 
           a.title === urlSlug || 
           generateSlug(a.title) === urlSlug ||
           generateSlug(a.title) === generateSlug(urlSlug);
  });
  
  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }
  
  if (!article) {
    return <div className="text-white text-center py-20">找不到該話題</div>;
  }

  // 相關文章（同分類）
  const relatedArticles = articles
    .filter(a => a.id !== article.id && a.category === article.category)
    .slice(0, 3);

  return (
    <>
      <SEO 
        title={`${article.title} - YS 論壇`} 
        description={article.excerpt}
        keywords={article.tags.join(',')}
      />
      <div className="py-12 bg-slate-950 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[
            { name: '論壇首頁', url: '/forum' },
            { name: article.category || '版塊', url: `/forum` },
            { name: article.title, url: `/topic/${article.slug}` }
          ]} />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden mb-8">
                
                {/* Featured Image */}
                <div 
                  className="w-full h-64 md:h-96 bg-cover bg-center"
                  style={{ backgroundImage: `url("${article.image}")` }}
                >
                  <div className="w-full h-full bg-gradient-to-t from-slate-900 to-transparent opacity-90"></div>
                </div>

                {/* Article Header - Now overlaying or below image */}
                <div className="px-8 py-6 border-b border-slate-800 bg-slate-900 -mt-20 relative z-10 mx-4 rounded-t-2xl border-t border-x shadow-xl">
                   <div className="flex items-center gap-2 mb-4">
                      <span className="px-3 py-1 bg-cyan-900/30 text-cyan-400 text-xs rounded-full border border-cyan-500/30 font-medium">
                        {article.category}
                      </span>
                      {article.tags && article.tags.map((tag, index) => (
                        <span key={index} className="text-slate-500 text-xs">#{tag}</span>
                      ))}
                   </div>
                   <h1 className="text-3xl md:text-4xl font-black text-white mb-6 leading-tight">
                     {article.title}
                   </h1>
                   
                   <div className="flex flex-wrap items-center gap-6 text-sm text-slate-400">
                     <div className="flex items-center gap-2">
                       <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold">
                         Y
                       </div>
                       <span className="text-white font-medium">YS 編輯部</span>
                     </div>
                     <span className="flex items-center gap-1">
                       <Calendar size={14} /> {article.date}
                     </span>
                   </div>
                </div>

                {/* Article Body */}
                <div className="p-8 prose prose-invert prose-lg max-w-none bg-slate-900">
                  {/* 使用 dangerouslySetInnerHTML 渲染 HTML 內容 */}
                  <div dangerouslySetInnerHTML={{ __html: article.content }} />
                </div>

                {/* Article Footer Actions */}
                <div className="px-8 py-6 bg-slate-800/30 border-t border-slate-800 flex items-center justify-between">
                  <button className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors">
                    <ThumbsUp size={18} />
                    <span>覺得實用</span>
                  </button>
                  <button className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
                    <Share2 size={18} />
                    <span>分享話題</span>
                  </button>
                </div>
              </div>
              
              {/* Comments Section (Mock) */}
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <MessageCircle className="text-cyan-400" />
                  最新回覆 (0)
                </h3>
                
                <div className="mt-8 pt-8 border-t border-slate-800 text-center">
                  <button className="px-6 py-2 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg font-medium transition-colors">
                    登入後參與討論
                  </button>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
               <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 sticky top-24">
                 <h3 className="text-lg font-bold text-white mb-4">推薦閱讀</h3>
                 <div className="space-y-4">
                   {relatedArticles.length > 0 ? (
                     relatedArticles.map(a => (
                       <Link key={a.id} to={`/topic/${a.slug}`} className="block group">
                         <div className="flex gap-3">
                            <div 
                              className="w-16 h-16 bg-cover bg-center rounded-lg shrink-0 border border-slate-700"
                              style={{ backgroundImage: `url("${a.image}")` }}
                            ></div>
                            <div>
                              <h4 className="text-sm font-medium text-slate-300 group-hover:text-cyan-400 transition-colors line-clamp-2 mb-1">
                                {a.title}
                              </h4>
                              <span className="text-xs text-slate-500">{a.date}</span>
                            </div>
                         </div>
                       </Link>
                     ))
                   ) : (
                     <p className="text-slate-500 text-sm">暫無相關文章</p>
                   )}
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
