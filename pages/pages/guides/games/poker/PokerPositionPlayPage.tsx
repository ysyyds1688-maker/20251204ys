import { SEO } from '../../../../components/SEO';
import { Breadcrumb } from '../../../../components/Breadcrumb';

export const PokerPositionPlayPage = () => {
  return (
    <>
      <SEO
        title="德州撲克位置策略 - 位置的重要性與應用"
        description="了解位置在德州撲克中的重要性，學習不同位置的策略調整，提升遊戲水平。"
        keywords="位置策略,位置優勢,德州撲克位置,撲克技巧"
        canonical="/guides/games/poker/position-play"
      />
      <div className="min-h-screen bg-slate-950 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { name: '新手教學', url: '/guides' },
              { name: '遊戲攻略', url: '/guides/games' },
              { name: '德州撲克攻略', url: '/guides/games/poker' },
              { name: '位置策略', url: '/guides/games/poker/position-play' },
            ]}
          />
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6">德州撲克位置策略</h1>
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 md:p-12">
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              位置是德州撲克中最重要的概念之一。好的位置可以讓您獲得更多資訊，做出更好的決策，從而提高勝率。本教學將深入解析位置的重要性，以及如何在不同位置調整策略。
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">一、位置的分類</h2>
              <div className="bg-slate-800 rounded-lg p-6 mb-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-bold text-red-400 mb-3">早期位置（EP）</h3>
                    <ul className="list-disc pl-6 space-y-2 text-slate-300">
                      <li><strong className="text-white">UTG（Under the Gun）：</strong>第一個行動的位置，最不利</li>
                      <li><strong className="text-white">UTG+1：</strong>第二個行動的位置</li>
                      <li>需要最緊的起手牌範圍</li>
                      <li>資訊最少，風險最高</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-amber-400 mb-3">中期位置（MP）</h3>
                    <ul className="list-disc pl-6 space-y-2 text-slate-300">
                      <li><strong className="text-white">MP, MP+1：</strong>中間位置</li>
                      <li>可以稍微放寬起手牌範圍</li>
                      <li>需要觀察前位玩家的行動</li>
                      <li>注意後位玩家可能加注</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-cyan-400 mb-3">後期位置（LP）</h3>
                    <ul className="list-disc pl-6 space-y-2 text-slate-300">
                      <li><strong className="text-white">CO（Cutoff）：</strong>按鈕前一位</li>
                      <li><strong className="text-white">BTN（Button）：</strong>按鈕位，最有利</li>
                      <li>可以玩最寬的起手牌範圍</li>
                      <li>資訊最多，可以靈活調整</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-fuchsia-400 mb-3">盲注位置（Blinds）</h3>
                    <ul className="list-disc pl-6 space-y-2 text-slate-300">
                      <li><strong className="text-white">SB（Small Blind）：</strong>小盲</li>
                      <li><strong className="text-white">BB（Big Blind）：</strong>大盲</li>
                      <li>已經投入盲注，防守成本較低</li>
                      <li>需要根據加注情況調整</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">二、位置優勢</h2>
              <div className="space-y-4 text-slate-300">
                <div className="bg-slate-800 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-white mb-3">1. 資訊優勢</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>後位玩家可以看到前位玩家的行動</li>
                    <li>可以根據前位玩家的行動調整策略</li>
                    <li>前位玩家無法知道後位玩家會如何行動</li>
                  </ul>
                </div>
                <div className="bg-slate-800 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-white mb-3">2. 控制優勢</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>後位玩家可以控制底池大小</li>
                    <li>可以選擇加注、跟注或棄牌</li>
                    <li>前位玩家行動後，後位玩家有最後決定權</li>
                  </ul>
                </div>
                <div className="bg-slate-800 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-white mb-3">3. 偷盲優勢</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>後位玩家可以嘗試偷盲（Steal）</li>
                    <li>如果前位玩家都棄牌，可以加注搶奪盲注</li>
                    <li>成功率高，風險低</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">三、不同位置的策略調整</h2>
              <div className="space-y-4 text-slate-300">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">早期位置策略</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>只玩最強的起手牌（AA, KK, QQ, AK 等）</li>
                    <li>通常加注進入，建立底池</li>
                    <li>如果被再加注，要謹慎評估</li>
                    <li>翻牌後如果沒有中牌，要謹慎下注</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">後期位置策略</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>可以玩較寬的起手牌範圍</li>
                    <li>如果前位都棄牌，可以嘗試偷盲</li>
                    <li>可以更靈活地控制底池</li>
                    <li>利用位置優勢，可以更積極</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">盲注位置策略</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>如果無人加注，可以玩較寬範圍</li>
                    <li>如果有人加注，需要更強的牌才能跟注</li>
                    <li>注意防守盲注的成本效益</li>
                    <li>可以嘗試反偷（3-bet）</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">四、位置與下注大小</h2>
              <div className="bg-slate-800 rounded-lg p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-cyan-400 mb-3">早期位置</h3>
                    <ul className="list-disc pl-6 space-y-2 text-slate-300">
                      <li>加注大小：2.5-3 倍大盲</li>
                      <li>目標：建立底池，減少對手</li>
                      <li>避免過大加注，嚇跑弱牌</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-fuchsia-400 mb-3">後期位置</h3>
                    <ul className="list-disc pl-6 space-y-2 text-slate-300">
                      <li>加注大小：2-2.5 倍大盲</li>
                      <li>目標：偷盲或建立小底池</li>
                      <li>可以更靈活調整</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8 bg-cyan-900/10 border border-cyan-500/20 rounded-xl p-6">
              <h2 className="text-xl font-bold text-cyan-400 mb-4">💡 位置策略要點</h2>
              <ul className="space-y-2 text-slate-300">
                <li>• 位置越後，可以玩的起手牌範圍越寬</li>
                <li>• 利用位置優勢，在後位更積極</li>
                <li>• 在早期位置要更謹慎，只玩強牌</li>
                <li>• 觀察對手的位置意識，對抗位置意識差的玩家可以更積極</li>
                <li>• 記住：位置優勢在翻牌後同樣重要</li>
              </ul>
            </section>

            <div className="bg-gradient-to-r from-cyan-600/20 to-fuchsia-600/20 border border-cyan-500/30 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-3">相關教學</h3>
              <div className="flex flex-wrap gap-3">
                <Link to="/guides/games/poker/starting-hands" className="text-cyan-400 hover:text-cyan-300 text-sm">
                  起手牌範圍 →
                </Link>
                <Link to="/guides/games/poker/tournament-strategy" className="text-cyan-400 hover:text-cyan-300 text-sm">
                  錦標賽策略 →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

