import { SEO } from '../../../components/SEO';
import { Breadcrumb } from '../../../components/Breadcrumb';
import { Star, ShieldCheck, Zap, Clock } from 'lucide-react';

export const BestCasinos2025Page = () => {
  const reviewSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: '2025年最佳娛樂城推薦',
    description: '2025年最新娛樂城推薦清單，包含出金速度、優惠活動、安全性等全方位評比',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        item: {
          '@type': 'Organization',
          name: 'YS 娛樂城',
          rating: {
            '@type': 'Rating',
            ratingValue: '4.9',
            bestRating: '5',
          },
        },
      },
    ],
  };

  const casinos = [
    {
      name: 'YS 娛樂城',
      rating: 4.9,
      features: ['5分鐘出金', '體驗金168', 'USDT支援', '24/7客服'],
      pros: ['出金速度最快', '優惠活動豐富', '安全性高'],
      cons: ['新平台知名度較低'],
      score: 98,
    },
    {
      name: '平台A',
      rating: 4.7,
      features: ['15分鐘出金', '首存100%', '多種遊戲'],
      pros: ['遊戲種類多', '介面友善'],
      cons: ['出金速度較慢'],
      score: 92,
    },
    {
      name: '平台B',
      rating: 4.6,
      features: ['30分鐘出金', '返水優惠', '體育投注'],
      pros: ['體育投注專業', '返水優惠高'],
      cons: ['出金速度一般'],
      score: 88,
    },
  ];

  return (
    <>
      <SEO
        title="2025年最佳娛樂城推薦 - 安全、快速、優惠完整評比"
        description="2025年最新娛樂城推薦清單，包含出金速度、優惠活動、安全性等全方位評比，幫助玩家選擇最適合的平台。"
        keywords="娛樂城推薦2025,最佳娛樂城,安全娛樂城,快速出金娛樂城,娛樂城評比"
        canonical="/recommendations/best-casinos/2025"
        structuredData={reviewSchema}
      />
      <div className="min-h-screen bg-slate-950 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { name: '娛樂城推薦', url: '/recommendations' },
              { name: '2025年最佳推薦', url: '/recommendations/best-casinos/2025' },
            ]}
          />
          
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6">
            2025年最佳娛樂城推薦
          </h1>
          
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">評選標準</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-slate-300">
              <div>
                <Zap className="text-cyan-400 mb-2" size={24} />
                <h3 className="text-white font-bold mb-1">出金速度</h3>
                <p className="text-sm">5分鐘內到帳為最佳</p>
              </div>
              <div>
                <ShieldCheck className="text-emerald-400 mb-2" size={24} />
                <h3 className="text-white font-bold mb-1">安全性</h3>
                <p className="text-sm">SSL加密、合法執照</p>
              </div>
              <div>
                <Star className="text-yellow-400 mb-2" size={24} />
                <h3 className="text-white font-bold mb-1">優惠活動</h3>
                <p className="text-sm">體驗金、首存優惠</p>
              </div>
              <div>
                <Clock className="text-fuchsia-400 mb-2" size={24} />
                <h3 className="text-white font-bold mb-1">客服品質</h3>
                <p className="text-sm">24/7在線客服</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {casinos.map((casino, index) => (
              <div
                key={casino.name}
                className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all"
              >
                {/* Casino Cover Image */}
                <div 
                  className="w-full h-48 bg-cover bg-center"
                  style={{
                    backgroundImage: `url("/images/recommendations/casino-${index + 1}.png")`,
                  }}
                >
                  <div className="w-full h-full bg-gradient-to-t from-slate-900 via-slate-900/70 to-transparent"></div>
                </div>
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <div className="flex items-center mb-2">
                        <span className="text-2xl font-black text-white mr-3">#{index + 1}</span>
                        <h3 className="text-2xl font-bold text-white">{casino.name}</h3>
                      </div>
                    </div>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={20}
                          fill={i < Math.floor(casino.rating) ? '#fbbf24' : 'none'}
                          className={i < Math.floor(casino.rating) ? 'text-yellow-400' : 'text-slate-700'}
                        />
                      ))}
                      <span className="ml-2 text-slate-400 font-bold">{casino.rating}</span>
                      <span className="ml-4 px-3 py-1 bg-cyan-900/30 text-cyan-400 border border-cyan-900 rounded-full text-sm font-bold">
                        總分: {casino.score}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-white font-bold mb-3">特色功能</h4>
                    <div className="flex flex-wrap gap-2">
                      {casino.features.map((feature) => (
                        <span
                          key={feature}
                          className="px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-sm"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-3">優點</h4>
                    <ul className="space-y-1 text-slate-300">
                      {casino.pros.map((pro) => (
                        <li key={pro} className="flex items-center">
                          <span className="text-emerald-400 mr-2">✓</span>
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

