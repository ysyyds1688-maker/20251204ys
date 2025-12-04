import { SEO } from '../../../../components/SEO';
import { Breadcrumb } from '../../../../components/Breadcrumb';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export const BaccaratRoadReadingPage = () => {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '百家樂看路法完整教學 - 大路、小路、蟑螂路解析',
    description: '深入解析百家樂看路法，包含大路、小路、蟑螂路等各種路單的判讀技巧，幫助玩家提高勝率。',
    author: {
      '@type': 'Organization',
      name: 'YS 娛樂城',
    },
    datePublished: '2025-01-01',
    dateModified: '2025-01-01',
  };

  return (
    <>
      <SEO
        title="百家樂看路法完整教學 - 大路、小路、蟑螂路解析"
        description="深入解析百家樂看路法，包含大路、小路、蟑螂路等各種路單的判讀技巧，幫助玩家提高勝率。完整教學包含實戰應用與常見問題。"
        keywords="百家樂看路法,百家樂路單,大路小路,百家樂技巧,看路教學,百家樂大路,百家樂小路,蟑螂路"
        canonical="/guides/games/baccarat/road-reading"
        structuredData={articleSchema}
      />
      
      <div className="min-h-screen bg-slate-950 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { name: '新手教學', url: '/guides' },
              { name: '遊戲攻略', url: '/guides/games' },
              { name: '百家樂攻略', url: '/guides/games/baccarat' },
              { name: '百家樂看路法', url: '/guides/games/baccarat/road-reading' },
            ]}
          />
          
          <article>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-6">
              百家樂看路法完整教學
            </h1>
            
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 md:p-12">
              {/* Hero Image */}
              <div 
                className="w-full h-64 rounded-xl mb-8 bg-cover bg-center"
                style={{
                  backgroundImage: 'url(/images/guides/baccarat-road-reading.png)',
                }}
              >
                <div className="w-full h-full bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent rounded-xl"></div>
              </div>
              
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                看路法是百家樂中最重要的技巧之一。通過觀察歷史開獎結果的路單，玩家可以判斷趨勢、制定下注策略。本教學將深入解析大路、小路、蟑螂路等各種路單的判讀技巧。
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">什麼是百家樂路單？</h2>
                <p className="text-slate-300 mb-4 leading-relaxed">
                  百家樂路單是記錄歷史開獎結果的工具，用圖形化的方式呈現莊家和閒家的勝負記錄。通過觀察路單，玩家可以：
                </p>
                <ul className="list-disc pl-6 space-y-2 text-slate-300 mb-4">
                  <li>判斷當前的趨勢（莊家連勝或閒家連勝）</li>
                  <li>識別「長龍」（連續出現同一結果）</li>
                  <li>發現規律性（如莊閒交替）</li>
                  <li>制定下注策略</li>
                </ul>
                <div className="bg-slate-800 rounded-lg p-4 mb-4">
                  <p className="text-slate-300">
                    <strong className="text-cyan-400">重要提醒：</strong>路單只是歷史記錄，不代表未來結果。看路法是一種輔助工具，不能保證獲勝。
                  </p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">大路（Big Road）</h2>
                <p className="text-slate-300 mb-4 leading-relaxed">
                  大路是最基本、最重要的路單，記錄每一局的勝負結果。
                </p>
                <h3 className="text-xl font-bold text-white mb-3">大路的記錄方式</h3>
                <ul className="list-disc pl-6 space-y-2 text-slate-300 mb-4">
                  <li><strong className="text-red-400">紅色圓圈：</strong>代表莊家（Banker）獲勝</li>
                  <li><strong className="text-blue-400">藍色圓圈：</strong>代表閒家（Player）獲勝</li>
                  <li><strong className="text-green-400">綠色標記：</strong>代表和局（Tie）</li>
                </ul>
                <h3 className="text-xl font-bold text-white mb-3">如何判讀大路</h3>
                <div className="space-y-4">
                  <div className="bg-slate-800 rounded-lg p-4">
                    <h4 className="text-white font-bold mb-2">1. 觀察「長龍」</h4>
                    <p className="text-slate-300">當出現連續5局以上相同結果時，稱為「長龍」。許多玩家會選擇「跟龍」，但要注意設定止損點。</p>
                  </div>
                  <div className="bg-slate-800 rounded-lg p-4">
                    <h4 className="text-white font-bold mb-2">2. 識別「跳路」</h4>
                    <p className="text-slate-300">當結果在莊閒之間頻繁交替時，稱為「跳路」。這種情況下可以考慮「反路」策略。</p>
                  </div>
                  <div className="bg-slate-800 rounded-lg p-4">
                    <h4 className="text-white font-bold mb-2">3. 注意「斷路」</h4>
                    <p className="text-slate-300">當長龍突然中斷時，稱為「斷路」。這是判斷趨勢轉換的重要信號。</p>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">小路（Small Road）</h2>
                <p className="text-slate-300 mb-4 leading-relaxed">
                  小路是記錄大路中「對子」出現情況的路單，用於判斷是否會出現連續相同結果。
                </p>
                <h3 className="text-xl font-bold text-white mb-3">小路的記錄規則</h3>
                <ul className="list-disc pl-6 space-y-2 text-slate-300 mb-4">
                  <li>當大路出現「對子」（連續兩局相同結果）時，在小路記錄一個標記</li>
                  <li>如果對子繼續（第三局也相同），在小路繼續記錄</li>
                  <li>如果對子中斷，小路重新開始記錄</li>
                </ul>
                <p className="text-slate-300 leading-relaxed">
                  小路可以幫助玩家判斷「長龍」是否會繼續，是重要的輔助判斷工具。
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">蟑螂路（Cockroach Road）</h2>
                <p className="text-slate-300 mb-4 leading-relaxed">
                  蟑螂路是記錄大路中「三珠路」的路單，用於判斷短期內的趨勢變化。
                </p>
                <h3 className="text-xl font-bold text-white mb-3">蟑螂路的記錄方式</h3>
                <p className="text-slate-300 mb-4 leading-relaxed">
                  將大路每三局為一組，記錄這三局的結果組合。常見的組合包括：
                </p>
                <div className="bg-slate-800 rounded-lg p-4 mb-4">
                  <ul className="space-y-2 text-slate-300">
                    <li>• <strong className="text-white">三連：</strong>三局都是相同結果（如：莊莊莊）</li>
                    <li>• <strong className="text-white">兩連一：</strong>兩局相同，一局不同（如：莊莊閒）</li>
                    <li>• <strong className="text-white">跳路：</strong>三局結果都不同（如：莊閒莊）</li>
                  </ul>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  通過觀察蟑螂路的模式，可以判斷短期內的趨勢是否會延續。
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">實戰應用技巧</h2>
                <div className="space-y-4">
                  <div className="bg-slate-800 rounded-lg p-4">
                    <h3 className="text-xl font-bold text-white mb-2">技巧一：跟龍策略</h3>
                    <p className="text-slate-300 mb-2">當出現明顯的「長龍」時（5局以上），可以考慮跟勢下注，但必須：</p>
                    <ul className="list-disc pl-6 space-y-1 text-slate-300">
                      <li>設定止損點（如連續輸3局就停止）</li>
                      <li>不要過度加注</li>
                      <li>注意「斷路」信號</li>
                    </ul>
                  </div>
                  <div className="bg-slate-800 rounded-lg p-4">
                    <h3 className="text-xl font-bold text-white mb-2">技巧二：反路策略</h3>
                    <p className="text-slate-300 mb-2">當出現明顯的「跳路」時，可以考慮反路下注：</p>
                    <ul className="list-disc pl-6 space-y-1 text-slate-300">
                      <li>上一局是莊家，下一局下注閒家</li>
                      <li>適合在跳路明顯的階段使用</li>
                      <li>同樣需要設定止損點</li>
                    </ul>
                  </div>
                  <div className="bg-slate-800 rounded-lg p-4">
                    <h3 className="text-xl font-bold text-white mb-2">技巧三：綜合判斷</h3>
                    <p className="text-slate-300">不要只看單一路單，要綜合大路、小路、蟑螂路一起判斷，提高準確率。</p>
                  </div>
                </div>
              </section>

              <section className="mb-8 bg-cyan-900/10 border border-cyan-500/20 rounded-xl p-6">
                <h2 className="text-xl font-bold text-cyan-400 mb-4 flex items-center">
                  <CheckCircle size={20} className="mr-2" />
                  重要提醒
                </h2>
                <ul className="space-y-2 text-slate-300">
                  <li>• 看路法只是輔助工具，不能保證獲勝</li>
                  <li>• 百家樂每局都是獨立事件，歷史結果不影響未來</li>
                  <li>• 必須配合資金管理和止損策略</li>
                  <li>• 不要過度依賴路單，保持理性判斷</li>
                </ul>
              </section>

              <div className="bg-gradient-to-r from-cyan-600/20 to-fuchsia-600/20 border border-cyan-500/30 rounded-xl p-6 mt-8">
                <h3 className="text-xl font-bold text-white mb-4">繼續學習</h3>
                <div className="flex flex-wrap gap-3">
                  <Link
                    to="/guides/games/baccarat/betting-strategy"
                    className="px-4 py-2 bg-cyan-600 text-white rounded-lg font-bold hover:bg-cyan-500 transition-colors text-sm"
                  >
                    下注策略教學
                  </Link>
                  <Link
                    to="/guides/games/baccarat/advanced-tips"
                    className="px-4 py-2 bg-fuchsia-600 text-white rounded-lg font-bold hover:bg-fuchsia-500 transition-colors text-sm"
                  >
                    進階技巧
                  </Link>
                  <Link
                    to="/games/baccarat"
                    className="px-4 py-2 bg-slate-700 text-white rounded-lg font-bold hover:bg-slate-600 transition-colors text-sm"
                  >
                    開始遊戲
                  </Link>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

