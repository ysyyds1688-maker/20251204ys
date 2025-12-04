import { SEO } from '../../../../components/SEO';
import { Breadcrumb } from '../../../../components/Breadcrumb';

export const SportsLiveBettingPage = () => {
  return (
    <>
      <SEO
        title="滾球投注技巧 - 掌握滾球投注的時機與策略"
        description="學習滾球投注（Live Betting）的技巧與策略，掌握最佳投注時機，提高獲勝機率。"
        keywords="滾球投注,Live Betting,滾球技巧,即時投注"
        canonical="/guides/games/sports/live-betting"
      />
      <div className="min-h-screen bg-slate-950 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { name: '新手教學', url: '/guides' },
              { name: '遊戲攻略', url: '/guides/games' },
              { name: '體育投注攻略', url: '/guides/games/sports' },
              { name: '滾球投注技巧', url: '/guides/games/sports/live-betting' },
            ]}
          />
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6">滾球投注技巧</h1>
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 md:p-12">
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              滾球投注（Live Betting）是在比賽進行中進行的即時投注，需要快速判斷和決策。掌握滾球投注的技巧與策略，可以在比賽進行中抓住最佳投注時機，提高獲勝機率。
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">一、滾球投注的優勢</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-slate-800 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-cyan-400 mb-3">優勢</h3>
                  <ul className="list-disc pl-6 space-y-2 text-slate-300">
                    <li>可以觀察比賽實際情況</li>
                    <li>賠率會根據比賽進展調整</li>
                    <li>可以找到更好的投注機會</li>
                    <li>增加投注靈活性</li>
                  </ul>
                </div>
                <div className="bg-slate-800 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-red-400 mb-3">挑戰</h3>
                  <ul className="list-disc pl-6 space-y-2 text-slate-300">
                    <li>需要快速決策</li>
                    <li>賠率變化快速</li>
                    <li>容易情緒化投注</li>
                    <li>需要專注觀察比賽</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">二、最佳投注時機</h2>
              <div className="space-y-4 text-slate-300">
                <div className="bg-slate-800 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-white mb-3">1. 開場階段（0-15分鐘）</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>觀察雙方開場狀態</li>
                    <li>注意陣容和戰術調整</li>
                    <li>如果發現明顯優勢，可以立即下注</li>
                    <li>賠率通常還接近賽前賠率</li>
                  </ul>
                </div>
                <div className="bg-slate-800 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-white mb-3">2. 進球後</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>進球後賠率會大幅調整</li>
                    <li>落後方賠率會上升，可能是價值投注機會</li>
                    <li>領先方可能放鬆，注意反擊機會</li>
                    <li>觀察球隊反應和戰術調整</li>
                  </ul>
                </div>
                <div className="bg-slate-800 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-white mb-3">3. 半場休息</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>教練可能調整戰術</li>
                    <li>觀察下半場開場狀態</li>
                    <li>賠率會根據半場結果調整</li>
                    <li>可以找到更好的投注機會</li>
                  </ul>
                </div>
                <div className="bg-slate-800 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-white mb-3">4. 比賽後段（75分鐘後）</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>如果平局，雙方可能更積極進攻</li>
                    <li>領先方可能保守，注意反擊機會</li>
                    <li>體能下降，失誤可能增加</li>
                    <li>賠率變化較大，需要謹慎判斷</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">三、滾球投注策略</h2>
              <div className="space-y-4 text-slate-300">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">1. 跟勢策略</h3>
                  <p className="mb-3">當一方明顯佔優勢時，跟隨優勢方下注：</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>觀察控球率、射門次數、威脅進攻</li>
                    <li>如果優勢明顯且持續，可以下注</li>
                    <li>注意優勢可能轉換，不要過度追勢</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">2. 反勢策略</h3>
                  <p className="mb-3">當賠率過度調整時，反向投注：</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>進球後落後方賠率大幅上升</li>
                    <li>如果實力差距不大，可能是價值投注</li>
                    <li>需要對球隊實力有準確評估</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">3. 補單策略</h3>
                  <p className="mb-3">賽前下注後，在比賽中根據情況補單：</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>如果賽前下注的球隊表現不如預期，可以補對手下注</li>
                    <li>降低風險，增加獲勝機會</li>
                    <li>需要計算好投注金額</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">四、注意事項</h2>
              <div className="bg-red-900/10 border border-red-500/20 rounded-xl p-6">
                <ul className="space-y-2 text-slate-300">
                  <li>• <strong className="text-white">快速決策：</strong>滾球投注需要快速判斷，但不要衝動下注</li>
                  <li>• <strong className="text-white">賠率變化：</strong>賠率變化很快，確認後立即下注，不要猶豫</li>
                  <li>• <strong className="text-white">情緒控制：</strong>比賽進行中容易情緒化，保持冷靜</li>
                  <li>• <strong className="text-white">資金管理：</strong>滾球投注風險較高，嚴格控制投注金額</li>
                  <li>• <strong className="text-white">專注觀察：</strong>需要專注觀察比賽，不要同時關注多場比賽</li>
                </ul>
              </div>
            </section>

            <section className="mb-8 bg-cyan-900/10 border border-cyan-500/20 rounded-xl p-6">
              <h2 className="text-xl font-bold text-cyan-400 mb-4">💡 實戰技巧</h2>
              <ul className="space-y-2 text-slate-300">
                <li>• 賽前做好功課，了解雙方實力和戰術</li>
                <li>• 觀察比賽實際情況，不要只依賴賽前分析</li>
                <li>• 抓住關鍵時刻（進球、紅牌、戰術調整）</li>
                <li>• 設定止損點，避免過度投注</li>
                <li>• 選擇自己熟悉的聯賽和球隊</li>
              </ul>
            </section>

            <div className="bg-gradient-to-r from-cyan-600/20 to-fuchsia-600/20 border border-cyan-500/30 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-3">相關教學</h3>
              <div className="flex flex-wrap gap-3">
                <Link to="/guides/games/sports/bankroll-management" className="text-cyan-400 hover:text-cyan-300 text-sm">
                  資金管理法 →
                </Link>
                <Link to="/guides/games/sports/odds-analysis" className="text-cyan-400 hover:text-cyan-300 text-sm">
                  賠率分析 →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

