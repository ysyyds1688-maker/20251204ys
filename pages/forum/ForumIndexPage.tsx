import React from 'react';
import { SEO } from '../../components/SEO';
import { Breadcrumb } from '../../components/Breadcrumb';
import { Link } from 'react-router-dom';
import { FORUM_CATEGORIES } from '@/data/mockForumData';
import { useArticles } from '../../src/services/ArticleService';
import { MessageSquare, Star, BookOpen, Gift, TrendingUp, Clock, Eye, MessageCircle } from 'lucide-react';

const IconMap: Record<string, React.ElementType> = {
  MessageSquare,
  Star,
  BookOpen,
  Gift
};

export const ForumIndexPage = () => {
  // 使用真實文章數據
  const { articles, loading } = useArticles();
  // 取前 5 篇作為熱門討論
  const recentTopics = articles.slice(0, 5);

  return (
    <>
      <SEO 
        title="論壇首頁" 
        description="YS 娛樂城論壇 - 討論最新娛樂城資訊、遊戲攻略與玩家心得。" 
        keywords="娛樂城論壇, 博弈討論區, 運彩分析, 老虎機攻略"
      />
      <div className="py-12 bg-slate-950 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ name: '論壇首頁', url: '/forum' }]} />
          
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-black text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600">
              YS 娛樂城論壇
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              匯集全台最專業的博弈玩家，分享最真實的<span className="text-cyan-400 font-bold">遊戲心得</span>與<span className="text-cyan-400 font-bold">實戰攻略</span>。
            </p>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
             {FORUM_CATEGORIES.map((category) => {
               const Icon = IconMap[category.icon] || MessageSquare;
               return (
                 <Link 
                   key={category.id} 
                   to={`/forum/c/${category.id}`} 
                   className="group block p-6 bg-slate-900 border border-slate-800 rounded-2xl hover:border-cyan-500/50 hover:bg-slate-800/50 transition-all duration-300 shadow-lg hover:shadow-cyan-900/20"
                 >
                   <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 group-hover:bg-cyan-900/30">
                     <Icon className="text-cyan-400 group-hover:text-cyan-300" size={24} />
                   </div>
                   <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">{category.name}</h3>
                   <p className="text-slate-400 text-sm leading-relaxed">{category.description}</p>
                 </Link>
               );
             })}
          </div>

          {/* Recent Topics Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                  <TrendingUp className="text-red-500" />
                  熱門討論
                </h2>
                <Link to="/forum/c/1" className="text-cyan-400 hover:text-cyan-300 text-sm">
                  查看更多 →
                </Link>
              </div>
              
              <div className="space-y-4">
                {loading ? (
                  <div className="text-center py-12 text-slate-400">載入中...</div>
                ) : recentTopics.length === 0 ? (
                  <div className="text-center py-12 text-slate-400">目前還沒有文章</div>
                ) : (
                  recentTopics.map((article) => (
                    <Link 
                      key={article.id} 
                      to={`/topic/${article.slug}`}
                      className="block bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-slate-700 hover:bg-slate-800/50 transition-all"
                    >
                      <div className="flex flex-col sm:flex-row h-full">
                         {/* Thumbnail */}
                         <div className="sm:w-48 h-48 sm:h-auto relative shrink-0">
                           <div 
                             className="absolute inset-0 bg-cover bg-center"
                             style={{ backgroundImage: `url("${article.image}")` }}
                           />
                           <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors" />
                         </div>
                         
                         {/* Content */}
                        <div className="flex-1 p-6 flex flex-col justify-between">
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <span className="px-2 py-1 bg-slate-800 text-cyan-400 text-xs rounded font-medium">
                                {article.category}
                              </span>
                              <span className="text-slate-500 text-xs flex items-center gap-1">
                                <Clock size={12} />
                                {article.date}
                              </span>
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2 line-clamp-1 hover:text-cyan-400 transition-colors">
                              {article.title}
                            </h3>
                            <p className="text-slate-400 text-sm line-clamp-2 mb-4">
                              {article.excerpt}
                            </p>
                          </div>
                          
                          <div className="flex items-center gap-4 text-xs text-slate-500 mt-auto">
                            <span className="flex items-center gap-1">
                              <span className="w-5 h-5 rounded-full bg-slate-700 flex items-center justify-center text-white text-[10px]">
                                Y
                              </span>
                              YS 編輯部
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))
                )}
              </div>
            </div>

            {/* Sidebar (Placeholder for now) */}
            <div className="hidden lg:block space-y-6">
              <div className="bg-gradient-to-b from-cyan-900/20 to-slate-900 border border-cyan-500/20 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-white mb-4">公告</h3>
                <ul className="space-y-3">
                  <li className="text-sm text-slate-300 pb-3 border-b border-slate-800">
                    <span className="block text-cyan-400 font-bold mb-1">置頂</span>
                    論壇發文版規說明（2025修訂版）
                  </li>
                  <li className="text-sm text-slate-300 pb-3 border-b border-slate-800">
                    <span className="block text-red-400 font-bold mb-1">重要</span>
                    防詐騙宣導：請勿輕信代操群組
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};
