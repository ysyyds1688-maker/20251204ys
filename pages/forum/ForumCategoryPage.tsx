import React from 'react';
import { useParams } from 'react-router-dom';
import { SEO } from '../../components/SEO';
import { Breadcrumb } from '../../components/Breadcrumb';
import { Link } from 'react-router-dom';
import { FORUM_CATEGORIES } from '@/data/mockForumData';
import { useArticles } from '../../src/services/ArticleService';
import { Clock, Eye, MessageCircle, User, Hash } from 'lucide-react';

export const ForumCategoryPage = () => {
  const { category } = useParams<{ category: string }>();
  const { articles, loading } = useArticles();
  
  // 找到當前分類資訊（使用 id 或 name 匹配）
  const currentCategory = FORUM_CATEGORIES.find(c => c.id === category || c.name === category);
  
  // 從 Google Sheet 篩選該分類下的文章
  // 分類對應：id '1'='綜合討論', '2'='娛樂城評價', '3'='遊戲攻略', '4'='優惠情報'
  const categoryNameMap: Record<string, string> = {
    '1': '綜合討論',
    '2': '娛樂城評價',
    '3': '遊戲攻略',
    '4': '優惠情報'
  };
  
  const targetCategoryName = currentCategory ? currentCategory.name : categoryNameMap[category] || category;
  
  // 篩選該分類下的文章
  const topics = articles.filter(article => {
    return article.category === targetCategoryName || 
           article.category === category ||
           (currentCategory && article.category === currentCategory.name);
  });

  // 如果分類不存在，顯示錯誤或導回首頁（這裡簡單處理）
  if (!currentCategory && !targetCategoryName) {
    return <div className="text-white text-center py-20">找不到該版塊</div>;
  }

  return (
    <>
      <SEO 
        title={`${currentCategory?.name || targetCategoryName || '版塊'} - YS 論壇`} 
        description={currentCategory?.description || ''} 
      />
      <div className="py-12 bg-slate-950 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[
            { name: '論壇首頁', url: '/forum' },
            { name: currentCategory?.name || targetCategoryName || '版塊', url: `/forum/c/${category}` }
          ]} />
          
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-black text-white mb-2">{currentCategory?.name || targetCategoryName || '版塊'}</h1>
            <p className="text-slate-400 text-lg">{currentCategory?.description || ''}</p>
          </div>

          <div className="space-y-4">
            {loading ? (
              <div className="text-center py-20 text-slate-400">載入中...</div>
            ) : topics.length > 0 ? (
              topics.map((article) => (
                <Link 
                  key={article.id} 
                  to={`/topic/${article.slug}`} 
                  className="block bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-cyan-500/50 hover:bg-slate-800/50 transition-all duration-300 group"
                >
                   <div className="flex flex-col md:flex-row h-full">
                    {/* Thumbnail */}
                    <div className="md:w-64 h-48 md:h-auto relative shrink-0">
                      <div 
                        className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                        style={{ backgroundImage: `url("${article.image}")` }}
                      />
                      <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors" />
                    </div>

                    <div className="flex-1 p-6 flex flex-col justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                          {article.title}
                        </h3>
                        <p className="text-slate-400 text-sm line-clamp-2 mb-3 pr-4">
                          {article.excerpt}
                        </p>
                      </div>
                      
                      <div className="flex flex-wrap items-center justify-between gap-4 mt-4">
                        {/* Tags */}
                        {article.tags && article.tags.length > 0 && (
                          <div className="flex flex-wrap gap-2">
                            {article.tags.map((tag, idx) => (
                               <span key={idx} className="inline-flex items-center gap-1 px-2 py-1 bg-slate-800/50 text-cyan-500/80 text-xs rounded border border-slate-700/50">
                                 <Hash size={10} /> {tag}
                               </span>
                            ))}
                          </div>
                        )}

                        <div className="flex items-center gap-4 text-xs text-slate-500 shrink-0">
                          <div className="flex items-center gap-1 bg-slate-800 px-3 py-1 rounded-full">
                            <User size={12} />
                            <span className="text-slate-300">YS 編輯部</span>
                          </div>
                          <div className="flex items-center gap-3">
                             <span className="flex items-center gap-1" title="發布時間">
                              <Clock size={14} /> {article.date}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <div className="text-center py-20 bg-slate-900/50 rounded-xl border border-slate-800 border-dashed">
                <p className="text-slate-500">此版塊目前尚無話題，敬請期待。</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
