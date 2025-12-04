import { SEO } from '../../../../components/SEO';
import { Breadcrumb } from '../../../../components/Breadcrumb';

export const SportsOddsAnalysisPage = () => {
  return (
    <>
      <SEO
        title="體育投注賠率分析 - 如何識別價值投注機會"
        description="學習如何分析體育投注賠率，識別價值投注機會，提高投注勝率與獲利。"
        keywords="賠率分析,價值投注,體育投注技巧,賠率計算"
        canonical="/guides/games/sports/odds-analysis"
      />
      <div className="min-h-screen bg-slate-950 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { name: '新手教學', url: '/guides' },
              { name: '遊戲攻略', url: '/guides/games' },
              { name: '體育投注攻略', url: '/guides/games/sports' },
              { name: '賠率分析', url: '/guides/games/sports/odds-analysis' },
            ]}
          />
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6">體育投注賠率分析</h1>
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 md:p-12">
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              賠率分析是體育投注的核心技能。學會如何分析賠率、識別價值投注機會，可以大大提高投注勝率與獲利。本教學將深入解析賠率的構成、計算方法，以及如何找到價值投注。
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">一、賠率的基本概念</h2>
              <div className="bg-slate-800 rounded-lg p-6 mb-4">
                <h3 className="text-xl font-bold text-white mb-3">賠率的三種表示方式</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <p className="text-cyan-400 font-bold mb-2">小數賠率（Decimal）</p>
                    <p className="text-slate-300 text-sm mb-2">例如：2.0</p>
                    <p className="text-slate-300 text-sm">下注 100 元，獲勝可得 200 元（含本金）</p>
                  </div>
                  <div>
                    <p className="text-fuchsia-400 font-bold mb-2">分數賠率（Fractional）</p>
                    <p className="text-slate-300 text-sm mb-2">例如：1/1</p>
                    <p className="text-slate-300 text-sm">下注 100 元，獲勝可得 100 元利潤 + 100 元本金</p>
                  </div>
                  <div>
                    <p className="text-emerald-400 font-bold mb-2">美式賠率（American）</p>
                    <p className="text-slate-300 text-sm mb-2">例如：+100 或 -100</p>
                    <p className="text-slate-300 text-sm">正數表示下注 100 元可得多少利潤，負數表示需要下注多少才能獲得 100 元利潤</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">二、隱含機率計算</h2>
              <div className="bg-slate-800 rounded-lg p-6 mb-4">
                <h3 className="text-xl font-bold text-white mb-3">如何從賠率計算隱含機率</h3>
                <div className="bg-slate-700 rounded-lg p-4 mb-3">
                  <p className="text-slate-300 mb-2"><strong className="text-white">公式：</strong></p>
                  <p className="text-slate-300 font-mono text-lg mb-2">
                    隱含機率 = 1 / 賠率
                  </p>
                </div>
                <div className="bg-slate-700 rounded-lg p-4">
                  <p className="text-slate-300 mb-2"><strong className="text-white">範例：</strong></p>
                  <ul className="list-disc pl-6 space-y-1 text-slate-300 text-sm">
                    <li>賠率 2.0 → 隱含機率 = 1 / 2.0 = 50%</li>
                    <li>賠率 3.0 → 隱含機率 = 1 / 3.0 = 33.3%</li>
                    <li>賠率 1.5 → 隱含機率 = 1 / 1.5 = 66.7%</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">三、價值投注（Value Betting）</h2>
              <div className="bg-slate-800 rounded-lg p-6 mb-4">
                <h3 className="text-xl font-bold text-white mb-3">什麼是價值投注？</h3>
                <p className="text-slate-300 mb-3">
                  價值投注是指當您評估的獲勝機率 &gt; 賠率隱含的機率時，這就是一個價值投注機會。
                </p>
                <div className="bg-slate-700 rounded-lg p-4 mb-3">
                  <p className="text-slate-300 mb-2"><strong className="text-white">判斷公式：</strong></p>
                  <p className="text-slate-300 mb-2">
                    價值 = (評估機率 × 賠率) - 1
                  </p>
                  <p className="text-slate-300 text-sm">
                    如果價值 &gt; 0，就是價值投注
                  </p>
                </div>
                <div className="bg-slate-700 rounded-lg p-4">
                  <p className="text-slate-300 mb-2"><strong className="text-white">範例：</strong></p>
                  <ul className="list-disc pl-6 space-y-1 text-slate-300 text-sm">
                    <li>賠率：2.5（隱含機率 40%）</li>
                    <li>您評估獲勝機率：50%</li>
                    <li>價值 = (0.5 × 2.5) - 1 = 0.25 = 25%</li>
                    <li>這是價值投注，建議下注</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">四、賠率比較技巧</h2>
              <div className="space-y-4 text-slate-300">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">1. 多平台比較</h3>
                  <p className="mb-3">不同平台的賠率可能不同，比較多個平台可以找到最佳賠率：</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>使用賠率比較網站</li>
                    <li>註冊多個平台帳號</li>
                    <li>選擇賠率最高的平台下注</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">2. 觀察賠率變化</h3>
                  <p className="mb-3">賠率會隨著投注量和資訊變化而調整：</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>賠率下降通常表示投注量增加或有利資訊出現</li>
                    <li>賠率上升可能表示不利資訊或投注量減少</li>
                    <li>觀察賠率變化可以幫助判斷市場趨勢</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8 bg-cyan-900/10 border border-cyan-500/20 rounded-xl p-6">
              <h2 className="text-xl font-bold text-cyan-400 mb-4">💡 分析技巧</h2>
              <ul className="space-y-2 text-slate-300">
                <li>• 結合賽事分析來評估真實獲勝機率</li>
                <li>• 尋找價值投注機會，而不是盲目跟隨熱門</li>
                <li>• 比較多個平台的賠率，選擇最佳賠率</li>
                <li>• 觀察賠率變化，了解市場動態</li>
                <li>• 不要只看賠率，要結合基本面分析</li>
              </ul>
            </section>

            <div className="bg-gradient-to-r from-cyan-600/20 to-fuchsia-600/20 border border-cyan-500/30 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-3">相關教學</h3>
              <div className="flex flex-wrap gap-3">
                <Link to="/guides/games/sports/bankroll-management" className="text-cyan-400 hover:text-cyan-300 text-sm">
                  資金管理法 →
                </Link>
                <Link to="/guides/games/sports/live-betting" className="text-cyan-400 hover:text-cyan-300 text-sm">
                  滾球投注技巧 →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

