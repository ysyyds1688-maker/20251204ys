import { SEO } from '../../components/SEO';
import { Breadcrumb } from '../../components/Breadcrumb';
import { Star, Users, CheckCircle } from 'lucide-react';

export const InfluencerPage = () => {
  const influencers = [
    {
      name: '網紅A',
      platform: 'YouTube',
      subscribers: '50萬',
      specialty: '百家樂教學',
      rating: 4.8,
      description: '專業百家樂教學，提供實戰技巧與看路法分析',
      avatar: '/images/influencers/influencer-1.jpg',
    },
    {
      name: '網紅B',
      platform: 'Twitch',
      subscribers: '30萬',
      specialty: '體育投注分析',
      rating: 4.7,
      description: '每日提供體育賽事分析與投注建議',
      avatar: '/images/influencers/influencer-2.jpg',
    },
    {
      name: '網紅C',
      platform: 'Instagram',
      subscribers: '100萬',
      specialty: '娛樂城推薦',
      rating: 4.9,
      description: '定期評測各大娛樂城，提供真實使用體驗',
      avatar: '/images/influencers/influencer-3.jpg',
    },
  ];

  return (
    <>
      <SEO
        title="合作網紅推薦 - 專業遊戲教學與平台評測"
        description="YS 娛樂城合作網紅推薦：專業遊戲教學、平台評測、實戰技巧分享，幫助玩家提升遊戲水平。"
        keywords="網紅推薦,遊戲教學,娛樂城評測,百家樂教學,體育投注分析"
        canonical="/trust/influencer"
      />
      <div className="min-h-screen bg-slate-950 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { name: '可信任信號頁', url: '/trust' },
              { name: '合作網紅推薦', url: '/trust/influencer' },
            ]}
          />
          
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6">
            合作網紅推薦
          </h1>
          <p className="text-xl text-slate-400 mb-12 max-w-3xl">
            我們與多位專業遊戲教學網紅合作，提供最實用的遊戲技巧與平台評測，幫助玩家提升遊戲水平。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {influencers.map((influencer, index) => (
              <div
                key={influencer.name}
                className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all"
              >
                {/* Influencer Avatar */}
                <div 
                  className="w-full h-48 bg-cover bg-center"
                  style={{
                    backgroundImage: `url("/images/influencers/influencer-${index + 1}.jpg")`,
                  }}
                >
                  <div className="w-full h-full bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white">{influencer.name}</h3>
                      <p className="text-sm text-slate-400">{influencer.platform}</p>
                    </div>
                    <div className="flex items-center">
                      <Star size={20} className="text-yellow-400 mr-1" fill="currentColor" />
                      <span className="text-white font-bold">{influencer.rating}</span>
                    </div>
                  </div>
                  <div className="flex items-center text-slate-400 text-sm mb-4">
                    <Users size={16} className="mr-2" />
                    {influencer.subscribers} 訂閱
                  </div>
                  <div className="mb-4">
                    <span className="px-3 py-1 bg-cyan-900/30 text-cyan-400 border border-cyan-900 rounded-full text-xs font-bold">
                      {influencer.specialty}
                    </span>
                  </div>
                  <p className="text-slate-300 text-sm">{influencer.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
            <div className="flex items-center mb-4">
              <CheckCircle className="text-emerald-400 mr-3" size={24} />
              <h2 className="text-2xl font-bold text-white">合作標準</h2>
            </div>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-start">
                <span className="text-emerald-400 mr-2">✓</span>
                <span>專業遊戲教學經驗至少 2 年以上</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-400 mr-2">✓</span>
                <span>訂閱人數超過 10 萬</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-400 mr-2">✓</span>
                <span>內容真實、專業，不誇大宣傳</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-400 mr-2">✓</span>
                <span>定期更新內容，保持活躍度</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

