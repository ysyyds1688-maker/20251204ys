import { SEO } from '../../components/SEO';
import { Breadcrumb } from '../../components/Breadcrumb';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Zap, ShieldCheck, Gift } from 'lucide-react';

export const RecommendationsIndexPage = () => {
  const categories = [
    {
      name: '2025年最佳娛樂城推薦',
      url: '/recommendations/best-casinos/2025',
      desc: '2025年最新娛樂城推薦清單，包含出金速度、優惠活動、安全性等全方位評比',
      icon: Star,
      color: 'text-yellow-400',
    },
    {
      name: '快速出金推薦',
      url: '/recommendations/best-casinos/fast-withdrawal',
      desc: '出金速度最快的娛樂城推薦，5分鐘內到帳',
      icon: Zap,
      color: 'text-cyan-400',
    },
    {
      name: '高額優惠推薦',
      url: '/recommendations/best-casinos/high-bonus',
      desc: '提供最高額優惠的娛樂城推薦',
      icon: Gift,
      color: 'text-fuchsia-400',
    },
    {
      name: 'USDT友好推薦',
      url: '/recommendations/best-casinos/usdt-friendly',
      desc: '最適合使用USDT的娛樂城推薦',
      icon: ShieldCheck,
      color: 'text-emerald-400',
    },
  ];

  return (
    <>
      <SEO
        title="娛樂城推薦 - 2025年最佳平台評比"
        description="YS 娛樂城推薦中心：提供2025年最佳娛樂城推薦、快速出金推薦、高額優惠推薦等，幫助玩家選擇最適合的平台。"
        keywords="娛樂城推薦,娛樂城推薦2025,最佳娛樂城,安全娛樂城,快速出金娛樂城"
        canonical="/recommendations"
      />
      <div className="min-h-screen bg-slate-950 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ name: '娛樂城推薦', url: '/recommendations' }]} />
          
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
              娛樂城推薦中心
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              2025年最新娛樂城推薦，包含出金速度、優惠活動、安全性等全方位評比
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {categories.map((category) => (
              <Link
                key={category.url}
                to={category.url}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-cyan-500/50 hover:bg-slate-800 transition-all group"
              >
                <div className="flex items-center mb-4">
                  <category.icon className={`${category.color} mr-3`} size={32} />
                  <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {category.name}
                  </h3>
                </div>
                <p className="text-slate-400 mb-4">{category.desc}</p>
                <div className="flex items-center text-cyan-400 font-bold text-sm">
                  查看推薦 <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">評選標準</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-slate-300">
              <div>
                <h3 className="text-white font-bold mb-2">出金速度</h3>
                <p className="text-sm">5分鐘內到帳為最佳</p>
              </div>
              <div>
                <h3 className="text-white font-bold mb-2">安全性</h3>
                <p className="text-sm">SSL加密、合法執照</p>
              </div>
              <div>
                <h3 className="text-white font-bold mb-2">優惠活動</h3>
                <p className="text-sm">體驗金、首存優惠等</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

