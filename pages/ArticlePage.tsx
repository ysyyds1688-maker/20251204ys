import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArticleService, Article, useArticles } from '../src/services/ArticleService';
import { SEO } from '../components/SEO';
import { ArrowLeft, Calendar, Tag, User, Clock } from 'lucide-react';

export const ArticlePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { articles, loading: articlesLoading } = useArticles();
  
  // 從已載入的文章列表中找出當前文章（避免重複請求）
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
    const matches = articleSlug === urlSlug || 
                    a.title === urlSlug || 
                    generateSlug(a.title) === urlSlug ||
                    generateSlug(a.title) === generateSlug(urlSlug);
    
    // 調試信息（只在開發環境）
    if (process.env.NODE_ENV === 'development' && matches) {
      console.log('Article matched:', {
        title: a.title,
        articleSlug,
        urlSlug,
        slug: a.slug
      });
    }
    
    return matches;
  }) || null;
  
  // 調試信息：如果找不到文章，輸出所有文章的 slug 和標題
  useEffect(() => {
    if (!article && !loading && slug) {
      console.warn('Article not found for slug:', slug);
      console.log('Available articles:', articles.map(a => ({
        title: a.title,
        slug: a.slug || a.title.replace(/\s+/g, '-').toLowerCase().replace(/[^\w-]/g, ''),
        id: a.id
      })));
    }
  }, [article, loading, slug, articles]);
  
  const loading = articlesLoading;

  // 捲動到頂部
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [article]);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center text-white">
        <h1 className="text-4xl font-bold mb-4">找不到文章</h1>
        <Link to="/" className="text-cyan-400 hover:underline">返回首頁</Link>
      </div>
    );
  }

  // 過濾出相關文章 (同分類或隨機，排除當前文章)
  const otherArticles = articles
    .filter(a => article && a.id !== article.id)
    .slice(0, 3);

  return (
    <>
      <SEO 
        title={`${article.title} - YS 娛樂論壇`}
        description={article.excerpt}
        keywords={article.tags.join(', ')}
      />
      
      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link to="/" className="inline-flex items-center text-slate-400 hover:text-cyan-400 transition-colors">
              <ArrowLeft size={16} className="mr-2" /> 返回首頁
            </Link>
          </div>

          {/* Article Header */}
          <header className="mb-12 text-center">
            <div className="inline-block px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-full text-sm font-bold mb-4">
              {article.category}
            </div>
            <h1 className="text-3xl md:text-5xl font-black mb-6 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-300">
              {article.title}
            </h1>
            
            <div className="flex flex-wrap justify-center gap-6 text-slate-400 text-sm">
              <div className="flex items-center">
                <User size={16} className="mr-2 text-cyan-500" />
                <span>YS 編輯部</span>
              </div>
              <div className="flex items-center">
                <Calendar size={16} className="mr-2 text-cyan-500" />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center">
                <Clock size={16} className="mr-2 text-cyan-500" />
                <span>5 分鐘閱讀</span>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="relative aspect-video rounded-2xl overflow-hidden mb-12 shadow-2xl shadow-cyan-900/20 border border-slate-800">
            <img 
              src={article.image} 
              alt={article.title} 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent"></div>
          </div>

          {/* Article Content */}
          {/* 注意：免責聲明已經包含在 AI 生成的文章內容中（conclusion 段落），不需要額外添加 */}
          {article.content && article.content.trim() ? (
            <article 
              className="prose prose-invert prose-lg max-w-none 
                prose-headings:text-white prose-headings:font-bold prose-headings:mt-8 prose-headings:mb-4
                prose-p:text-slate-300 prose-p:leading-relaxed prose-p:mb-6
                prose-a:text-cyan-400 prose-a:no-underline hover:prose-a:underline
                prose-strong:text-white prose-strong:font-bold
                prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-6 prose-ul:text-slate-300
                prose-li:mb-2
                prose-blockquote:border-l-4 prose-blockquote:border-cyan-500 prose-blockquote:bg-slate-900/50 prose-blockquote:p-4 prose-blockquote:rounded-r-lg"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          ) : (
            <div className="bg-yellow-500/10 border-l-4 border-yellow-500/50 rounded-r-lg p-6 mb-8">
              <p className="text-yellow-200">
                <strong>提示：</strong> 這篇文章的內容尚未完成，請稍後再來查看。
              </p>
            </div>
          )}

          {/* Tags */}
          {article.tags && article.tags.length > 0 && (
            <div className="mt-12 pt-8 border-t border-slate-800">
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag, index) => (
                  <span key={index} className="inline-flex items-center px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-sm hover:bg-slate-700 transition-colors cursor-pointer">
                    <Tag size={14} className="mr-2 text-cyan-500" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Related Articles */}
          {articles.length > 0 && (
            <div className="mt-16 pt-16 border-t border-slate-800">
              <h3 className="text-2xl font-bold mb-8">延伸閱讀</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {otherArticles.map(item => (
                  <Link key={item.id} to={`/topic/${item.slug}`} className="group block bg-slate-900 rounded-xl overflow-hidden border border-slate-800 hover:border-cyan-500/50 transition-all">
                    <div className="h-40 overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-bold text-white mb-2 line-clamp-2 group-hover:text-cyan-400 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-slate-500 text-sm line-clamp-2">{item.excerpt}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

