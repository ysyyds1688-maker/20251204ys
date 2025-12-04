import { SEO } from '../../../../components/SEO';
import { Breadcrumb } from '../../../../components/Breadcrumb';
import { Link } from 'react-router-dom';

export const PokerTournamentStrategyPage = () => {
  return (
    <>
      <SEO
        title="德州撲克錦標賽策略 - 不同階段的策略調整"
        description="學習德州撲克錦標賽不同階段的策略調整，包含早期、中期、後期與決賽桌的策略。"
        keywords="錦標賽策略,撲克錦標賽,MTT策略,錦標賽技巧"
        canonical="/guides/games/poker/tournament-strategy"
      />
      <div className="min-h-screen bg-slate-950 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { name: '新手教學', url: '/guides' },
              { name: '遊戲攻略', url: '/guides/games' },
              { name: '德州撲克攻略', url: '/guides/games/poker' },
              { name: '錦標賽策略', url: '/guides/games/poker/tournament-strategy' },
            ]}
          />
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6">德州撲克錦標賽策略</h1>
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 md:p-12">
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              錦標賽（Tournament）是德州撲克最受歡迎的比賽形式之一。與現金桌不同，錦標賽有固定的買入費用，所有玩家從相同籌碼開始，直到決出冠軍。本教學將深入解析錦標賽不同階段的策略調整，幫助您提升錦標賽成績。
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">一、錦標賽階段</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-slate-800 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-cyan-400 mb-3">早期階段（Early Stage）</h3>
                  <ul className="list-disc pl-6 space-y-2 text-slate-300">
                    <li>盲注較小，籌碼深度大</li>
                    <li>可以玩較緊的範圍</li>
                    <li>避免不必要的風險</li>
                    <li>觀察對手，建立形象</li>
                  </ul>
                </div>
                <div className="bg-slate-800 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-amber-400 mb-3">中期階段（Middle Stage）</h3>
                  <ul className="list-disc pl-6 space-y-2 text-slate-300">
                    <li>盲注開始增加</li>
                    <li>需要更積極</li>
                    <li>開始累積籌碼</li>
                    <li>注意泡沫期</li>
                  </ul>
                </div>
                <div className="bg-slate-800 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-fuchsia-400 mb-3">後期階段（Late Stage）</h3>
                  <ul className="list-disc pl-6 space-y-2 text-slate-300">
                    <li>盲注很大，籌碼壓力大</li>
                    <li>需要非常積極</li>
                    <li>ICM（Independent Chip Model）很重要</li>
                    <li>爭取進入決賽桌</li>
                  </ul>
                </div>
                <div className="bg-slate-800 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-emerald-400 mb-3">決賽桌（Final Table）</h3>
                  <ul className="list-disc pl-6 space-y-2 text-slate-300">
                    <li>獎金差距大</li>
                    <li>ICM 壓力最大</li>
                    <li>需要平衡風險與獎金</li>
                    <li>爭取最高名次</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">二、籌碼管理</h2>
              <div className="bg-slate-800 rounded-lg p-6 mb-4">
                <h3 className="text-xl font-bold text-white mb-3">籌碼深度分類</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <p className="text-red-400 font-bold mb-2">短籌碼（&lt; 20 BB）</p>
                    <ul className="list-disc pl-6 space-y-1 text-slate-300 text-sm">
                      <li>需要立即行動</li>
                      <li>尋找全押機會</li>
                      <li>避免被盲注耗盡</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-amber-400 font-bold mb-2">中籌碼（20-50 BB）</p>
                    <ul className="list-disc pl-6 space-y-1 text-slate-300 text-sm">
                      <li>可以正常遊戲</li>
                      <li>尋找累積機會</li>
                      <li>注意籌碼壓力</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-emerald-400 font-bold mb-2">深籌碼（&gt; 50 BB）</p>
                    <ul className="list-disc pl-6 space-y-1 text-slate-300 text-sm">
                      <li>可以更靈活</li>
                      <li>可以玩更多起手牌</li>
                      <li>利用籌碼優勢</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">三、ICM（Independent Chip Model）</h2>
              <div className="bg-slate-800 rounded-lg p-6">
                <p className="text-slate-300 mb-4">
                  ICM 是錦標賽中最重要的概念之一，它計算籌碼的實際價值（考慮獎金結構）：
                </p>
                <ul className="list-disc pl-6 space-y-2 text-slate-300">
                  <li>籌碼的價值不是線性的，越接近獎金圈，籌碼價值越高</li>
                  <li>在泡沫期（接近獎金圈），應該更保守</li>
                  <li>短籌碼玩家應該更積極，因為籌碼價值較低</li>
                  <li>深籌碼玩家應該利用優勢，壓迫短籌碼</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">四、階段策略調整</h2>
              <div className="space-y-4 text-slate-300">
                <div className="bg-slate-800 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-white mb-3">早期階段策略</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>玩緊的起手牌範圍，避免不必要的風險</li>
                    <li>觀察對手，建立緊的形象</li>
                    <li>累積小額底池，不要冒大風險</li>
                    <li>為後期階段做準備</li>
                  </ul>
                </div>
                <div className="bg-slate-800 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-white mb-3">中期階段策略</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>開始更積極，尋找累積機會</li>
                    <li>注意泡沫期，接近獎金圈時要謹慎</li>
                    <li>利用位置優勢，偷取盲注</li>
                    <li>累積籌碼，為後期做準備</li>
                  </ul>
                </div>
                <div className="bg-slate-800 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-white mb-3">後期階段策略</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>非常積極，利用籌碼優勢</li>
                    <li>壓迫短籌碼玩家</li>
                    <li>注意ICM，不要冒不必要的風險</li>
                    <li>爭取進入決賽桌</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8 bg-cyan-900/10 border border-cyan-500/20 rounded-xl p-6">
              <h2 className="text-xl font-bold text-cyan-400 mb-4">💡 策略要點</h2>
              <ul className="space-y-2 text-slate-300">
                <li>• 早期階段要緊，後期階段要積極</li>
                <li>• 注意籌碼深度，根據BB數調整策略</li>
                <li>• 理解ICM，在關鍵時刻做出正確決策</li>
                <li>• 觀察對手，利用對手的弱點</li>
                <li>• 保持耐心，等待最佳時機</li>
              </ul>
            </section>

            <div className="bg-gradient-to-r from-cyan-600/20 to-fuchsia-600/20 border border-cyan-500/30 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-3">相關教學</h3>
              <div className="flex flex-wrap gap-3">
                <Link to="/guides/games/poker/starting-hands" className="text-cyan-400 hover:text-cyan-300 text-sm">
                  起手牌範圍 →
                </Link>
                <Link to="/guides/games/poker/position-play" className="text-cyan-400 hover:text-cyan-300 text-sm">
                  位置策略 →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

