import { SEO } from '../../components/SEO';
import { Breadcrumb } from '../../components/Breadcrumb';
import { ArrowRight, Play, Zap, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';

export const SlotsPage = () => {
  return (
    <>
      <SEO
        title="電子遊戲 - 老虎機推薦與玩法教學"
        description="YS 娛樂城提供最熱門的電子遊戲與老虎機，包含高RTP遊戲推薦、玩法介紹、入門技巧等完整教學。"
        keywords="電子遊戲,老虎機,線上老虎機,老虎機推薦,電子遊戲推薦,YS娛樂城"
        canonical="/games/slots"
      />
      
      <div className="min-h-screen bg-slate-950">
        {/* Hero Section with Cover Image */}
        <div className="relative w-full overflow-hidden" style={{ aspectRatio: '16/9', paddingTop: '80px' }}>
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(/images/已使用/電子banner1.png)',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/50 to-slate-950/80"></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
            <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
              電子遊戲 / 老虎機
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              高 RTP 遊戲，累積獎池，無限樂趣
            </p>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Breadcrumb
            items={[
              { name: '遊戲專區', url: '/games' },
              { name: '電子遊戲', url: '/games/slots' },
            ]}
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2 space-y-8">
              <section className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-4">遊戲玩法介紹</h2>
                <p className="text-slate-300 mb-4 leading-relaxed">
                  電子遊戲（老虎機）是最受歡迎的線上娛樂遊戲之一，玩法簡單、節奏快速，適合各種程度的玩家。
                </p>
                <p className="text-slate-300 leading-relaxed">
                  玩家只需選擇下注金額，按下旋轉按鈕，等待轉輪停止。當轉輪上的符號組成特定的組合時，即可獲得對應的獎金。不同的遊戲有不同的支付線（Paylines）和特殊功能，如免費旋轉、獎勵遊戲等。
                </p>
              </section>

              <section className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-4">優勢特色</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start space-x-3">
                    <Trophy className="text-cyan-400 mt-1" size={24} />
                    <div>
                      <h3 className="text-white font-bold mb-1">高 RTP 遊戲</h3>
                      <p className="text-slate-400 text-sm">精選 RTP 98% 以上優質遊戲，提高獲勝機率</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Zap className="text-fuchsia-400 mt-1" size={24} />
                    <div>
                      <h3 className="text-white font-bold mb-1">累積獎池</h3>
                      <p className="text-slate-400 text-sm">多款遊戲提供累積獎池，最高可達數百萬</p>
                    </div>
                  </div>
                </div>
              </section>

              <section className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-4">入門技巧</h2>
                <div className="space-y-4 text-slate-300">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">1. 了解 RTP 與波動率</h3>
                    <p>RTP（Return to Player）代表玩家回報率，選擇 RTP 較高的遊戲可以提高長期獲勝機率。同時要注意波動率，高波動率遊戲獎金大但頻率低。</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">2. 設定預算</h3>
                    <p>在開始遊戲前設定好預算和止損點，避免過度投入。建議每次遊戲時間不超過 1 小時。</p>
                  </div>
                </div>
                <Link 
                  to="/news/slots-tips"
                  className="inline-flex items-center mt-6 text-cyan-400 font-bold hover:text-cyan-300"
                >
                  閱讀完整攻略 <ArrowRight size={16} className="ml-2" />
                </Link>
              </section>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-cyan-900/30 to-fuchsia-900/30 border border-cyan-500/30 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">立即開始遊戲</h3>
                <Link
                  to="/register"
                  className="w-full flex items-center justify-center px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg text-white font-bold hover:from-cyan-500 hover:to-blue-500 transition-all"
                >
                  <Play size={20} className="mr-2" />
                  立即遊玩
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

