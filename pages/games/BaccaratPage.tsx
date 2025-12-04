import { SEO } from '../../components/SEO';
import { Breadcrumb } from '../../components/Breadcrumb';
import { ArrowRight, Play, ShieldCheck, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export const BaccaratPage = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '真人百家樂遊戲介紹與玩法教學',
    description: 'YS 娛樂城提供最優質的真人百家樂遊戲，包含玩法介紹、優勢特色、入門技巧等完整教學。',
    author: {
      '@type': 'Organization',
      name: 'YS 娛樂城',
    },
  };

  return (
    <>
      <SEO
        title="真人百家樂 - 玩法介紹與技巧教學"
        description="YS 娛樂城提供最優質的真人百家樂遊戲，包含玩法介紹、優勢特色、入門技巧等完整教學。立即體驗專業荷官發牌，享受最真實的賭場體驗。"
        keywords="真人百家樂,百家樂玩法,百家樂技巧,線上百家樂,YS娛樂城"
        canonical="/games/baccarat"
        structuredData={structuredData}
      />
      
      <div className="min-h-screen bg-slate-950">
        {/* Hero Section with Cover Image */}
        <div className="relative w-full overflow-hidden" style={{ aspectRatio: '16/9', paddingTop: '80px' }}>
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(/images/已使用/真人banner2.png)',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/50 to-slate-950/80"></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
            <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
              真人百家樂
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              專業荷官發牌，最真實的賭場體驗
            </p>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Breadcrumb
            items={[
              { name: '遊戲專區', url: '/games' },
              { name: '真人百家樂', url: '/games/baccarat' },
            ]}
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2 space-y-8">
              {/* 遊戲玩法介紹 */}
              <section className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-4">遊戲玩法介紹</h2>
                <p className="text-slate-300 mb-4 leading-relaxed">
                  真人百家樂是世界上最受歡迎的賭場遊戲之一，規則簡單易懂。遊戲中玩家可以選擇下注「莊家」、「閒家」或「和局」。
                </p>
                <ul className="list-disc pl-6 space-y-2 text-slate-300">
                  <li><strong className="text-white">莊家（Banker）：</strong>賠率 1:0.95，莊家獲勝時扣除 5% 佣金</li>
                  <li><strong className="text-white">閒家（Player）：</strong>賠率 1:1，閒家獲勝時獲得等額獎金</li>
                  <li><strong className="text-white">和局（Tie）：</strong>賠率 1:8，莊閒點數相同時獲勝</li>
                </ul>
                <p className="text-slate-300 mt-4 leading-relaxed">
                  遊戲使用 6-8 副標準撲克牌，每張牌都有對應點數：A=1、2-9=面值、10/J/Q/K=0。點數計算方式為將所有牌面點數相加後取個位數。
                </p>
              </section>

              {/* 優勢特色 */}
              <section className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-4">YS 娛樂城百家樂優勢特色</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start space-x-3">
                    <ShieldCheck className="text-cyan-400 mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="text-white font-bold mb-1">專業真人荷官</h3>
                      <p className="text-slate-400 text-sm">24/7 真人荷官發牌，高清直播，享受最真實的賭場體驗</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Zap className="text-fuchsia-400 mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="text-white font-bold mb-1">快速開獎</h3>
                      <p className="text-slate-400 text-sm">每局 30 秒快速開獎，節奏緊湊，刺激感十足</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <ShieldCheck className="text-emerald-400 mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="text-white font-bold mb-1">公平公正</h3>
                      <p className="text-slate-400 text-sm">採用 RNG 隨機數生成器，確保遊戲結果公平透明</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Zap className="text-amber-400 mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="text-white font-bold mb-1">多種下注選項</h3>
                      <p className="text-slate-400 text-sm">支援莊閒、和局、對子等多種下注方式，策略靈活</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* 入門技巧 */}
              <section className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-4">百家樂入門技巧</h2>
                <div className="space-y-4 text-slate-300">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">1. 看路法基礎</h3>
                    <p className="mb-2">百家樂路單是記錄歷史開獎結果的工具，常見的路單包括：</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li><strong className="text-white">大路：</strong>記錄莊閒勝負，用於判斷趨勢</li>
                      <li><strong className="text-white">小路：</strong>記錄莊閒交替情況</li>
                      <li><strong className="text-white">蟑螂路：</strong>記錄連續出現的情況</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">2. 資金管理</h3>
                    <p>建議採用「固定比例下注法」，每次下注金額不超過總資金的 5%，避免一次輸光。</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">3. 跟勢投注</h3>
                    <p>觀察路單趨勢，當出現明顯的「長龍」時，可以考慮跟勢投注，但切記設定止損點。</p>
                  </div>
                </div>
                <Link 
                  to="/news/baccarat-strategy"
                  className="inline-flex items-center mt-6 text-cyan-400 font-bold hover:text-cyan-300 transition-colors"
                >
                  閱讀完整攻略 <ArrowRight size={16} className="ml-2" />
                </Link>
              </section>
            </div>

            {/* 側邊欄 */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-cyan-900/30 to-fuchsia-900/30 border border-cyan-500/30 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">立即開始遊戲</h3>
                <p className="text-slate-300 mb-6 text-sm">
                  註冊即送體驗金168，無需存款即可體驗真人百家樂
                </p>
                <Link
                  to="/register"
                  className="w-full flex items-center justify-center px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg text-white font-bold hover:from-cyan-500 hover:to-blue-500 transition-all shadow-lg"
                >
                  <Play size={20} className="mr-2" />
                  立即遊玩
                </Link>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                <h3 className="text-white font-bold mb-4">相關教學</h3>
                <ul className="space-y-2">
                  <li>
                    <Link to="/guides/games/baccarat/basics" className="text-cyan-400 hover:text-cyan-300 text-sm">
                      百家樂基礎教學
                    </Link>
                  </li>
                  <li>
                    <Link to="/guides/games/baccarat/road-reading" className="text-cyan-400 hover:text-cyan-300 text-sm">
                      百家樂看路法
                    </Link>
                  </li>
                  <li>
                    <Link to="/guides/games/baccarat/betting-strategy" className="text-cyan-400 hover:text-cyan-300 text-sm">
                      百家樂下注策略
                    </Link>
                  </li>
                  <li>
                    <Link to="/news" className="text-cyan-400 hover:text-cyan-300 text-sm">
                      百家樂技巧分享
                    </Link>
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

