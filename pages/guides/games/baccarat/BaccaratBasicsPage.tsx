import { SEO } from '../../../../components/SEO';
import { Breadcrumb } from '../../../../components/Breadcrumb';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const BaccaratBasicsPage = () => {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '百家樂怎麼玩？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '百家樂是猜測莊家或閒家哪一方會獲勝的遊戲。玩家可以下注莊家、閒家或和局。點數計算方式為將所有牌面點數相加後取個位數，最接近9的一方獲勝。',
        },
      },
      {
        '@type': 'Question',
        name: '百家樂點數怎麼計算？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A=1點，2-9=面值，10/J/Q/K=0點。將所有牌面點數相加後取個位數，例如：7+8=15，取個位數為5點。',
        },
      },
    ],
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '百家樂基礎教學 - 從零開始學習',
    description: '完整的百家樂基礎教學，包含規則、玩法、點數計算等基礎知識，適合新手玩家學習。',
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
        title="百家樂基礎教學 - 規則、玩法、點數計算完整解析"
        description="YS 娛樂城百家樂基礎教學：從零開始學習百家樂，包含規則、玩法、點數計算、下注方式等完整基礎知識，適合新手玩家。"
        keywords="百家樂基礎,百家樂教學,百家樂規則,百家樂玩法,百家樂點數計算,新手百家樂"
        canonical="/guides/games/baccarat/basics"
        structuredData={articleSchema}
        breadcrumbs={[
          { name: '新手教學', url: '/guides' },
          { name: '遊戲攻略', url: '/guides/games' },
          { name: '百家樂攻略', url: '/guides/games/baccarat' },
          { name: '百家樂基礎教學', url: '/guides/games/baccarat/basics' },
        ]}
      />
      
      <div className="min-h-screen bg-slate-950 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { name: '新手教學', url: '/guides' },
              { name: '遊戲攻略', url: '/guides/games' },
              { name: '百家樂攻略', url: '/guides/games/baccarat' },
              { name: '百家樂基礎教學', url: '/guides/games/baccarat/basics' },
            ]}
          />
          
          <article>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-6">
              百家樂基礎教學
            </h1>
            
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 md:p-12 mb-8">
              {/* Hero Image */}
              <div 
                className="w-full h-64 rounded-xl mb-8 bg-cover bg-center"
                style={{
                  backgroundImage: 'url(/images/guides/baccarat-basics.png)',
                }}
              >
                <div className="w-full h-full bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent rounded-xl"></div>
              </div>
              
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                百家樂是世界上最受歡迎的賭場遊戲之一，規則簡單易懂，適合各種程度的玩家。本教學將從零開始，詳細介紹百家樂的規則、玩法、點數計算等基礎知識。
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">什麼是百家樂？</h2>
                <p className="text-slate-300 mb-4 leading-relaxed">
                  百家樂（Baccarat）是一種紙牌遊戲，玩家需要預測「莊家」（Banker）或「閒家」（Player）哪一方會獲勝，也可以下注「和局」（Tie）。遊戲使用6-8副標準撲克牌，每局發牌給莊家和閒家，點數最接近9的一方獲勝。
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">點數計算規則</h2>
                <p className="text-slate-300 mb-4 leading-relaxed">
                  百家樂的點數計算方式非常簡單：
                </p>
                <ul className="list-disc pl-6 space-y-2 text-slate-300 mb-4">
                  <li><strong className="text-white">A（Ace）：</strong>1點</li>
                  <li><strong className="text-white">2-9：</strong>面值（2就是2點，9就是9點）</li>
                  <li><strong className="text-white">10、J、Q、K：</strong>0點</li>
                </ul>
                <p className="text-slate-300 mb-4 leading-relaxed">
                  <strong className="text-white">重要規則：</strong>將所有牌面點數相加後，只取個位數。例如：
                </p>
                <div className="bg-slate-800 rounded-lg p-4 mb-4">
                  <ul className="space-y-2 text-slate-300">
                    <li>• 7 + 8 = 15 → <strong className="text-cyan-400">5點</strong></li>
                    <li>• 9 + 6 = 15 → <strong className="text-cyan-400">5點</strong></li>
                    <li>• 10 + 9 = 19 → <strong className="text-cyan-400">9點</strong>（最大點數）</li>
                    <li>• K + 5 = 5 → <strong className="text-cyan-400">5點</strong></li>
                  </ul>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  <strong className="text-white">最大點數為9點</strong>，如果點數超過9，則減去10。例如：7+5=12，12-10=2點。
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">下注方式</h2>
                <p className="text-slate-300 mb-4 leading-relaxed">
                  百家樂有三種主要下注方式：
                </p>
                <div className="space-y-4">
                  <div className="bg-slate-800 rounded-lg p-4">
                    <h3 className="text-xl font-bold text-white mb-2">1. 莊家（Banker）</h3>
                    <ul className="list-disc pl-6 space-y-1 text-slate-300">
                      <li>賠率：1:0.95（莊家獲勝時扣除5%佣金）</li>
                      <li>勝率：約45.8%（不含和局）</li>
                      <li>適合：追求穩定獲利的玩家</li>
                    </ul>
                  </div>
                  <div className="bg-slate-800 rounded-lg p-4">
                    <h3 className="text-xl font-bold text-white mb-2">2. 閒家（Player）</h3>
                    <ul className="list-disc pl-6 space-y-1 text-slate-300">
                      <li>賠率：1:1（等額賠付）</li>
                      <li>勝率：約44.6%（不含和局）</li>
                      <li>適合：喜歡簡單下注的玩家</li>
                    </ul>
                  </div>
                  <div className="bg-slate-800 rounded-lg p-4">
                    <h3 className="text-xl font-bold text-white mb-2">3. 和局（Tie）</h3>
                    <ul className="list-disc pl-6 space-y-1 text-slate-300">
                      <li>賠率：1:8（高賠率但低機率）</li>
                      <li>勝率：約9.6%</li>
                      <li>適合：追求高風險高回報的玩家</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">發牌規則</h2>
                <p className="text-slate-300 mb-4 leading-relaxed">
                  百家樂的發牌規則由系統自動執行，玩家無需記憶，但了解規則有助於理解遊戲：
                </p>
                <ol className="list-decimal pl-6 space-y-3 text-slate-300">
                  <li><strong className="text-white">第一輪：</strong>莊家和閒家各發兩張牌</li>
                  <li><strong className="text-white">自然勝：</strong>如果任何一方點數為8或9（稱為「自然」），立即結束，點數大者獲勝</li>
                  <li><strong className="text-white">第三張牌規則：</strong>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>閒家：如果點數0-5，必須補第三張牌；6-7不補</li>
                      <li>莊家：根據閒家是否補牌和點數決定是否補牌</li>
                    </ul>
                  </li>
                  <li><strong className="text-white">比較點數：</strong>補牌後比較雙方點數，接近9者獲勝</li>
                </ol>
              </section>

              <section className="mb-8 bg-cyan-900/10 border border-cyan-500/20 rounded-xl p-6">
                <h2 className="text-xl font-bold text-cyan-400 mb-4 flex items-center">
                  <CheckCircle size={20} className="mr-2" />
                  新手建議
                </h2>
                <ul className="space-y-2 text-slate-300">
                  <li>• 建議從下注「莊家」開始，勝率較高且穩定</li>
                  <li>• 避免下注「和局」，雖然賠率高但機率低</li>
                  <li>• 設定好預算和止損點，避免過度投入</li>
                  <li>• 先熟悉規則再學習進階技巧</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">常見問題</h2>
                <div className="space-y-4">
                  <div className="bg-slate-800 rounded-lg p-4">
                    <h3 className="text-white font-bold mb-2">Q: 百家樂可以算牌嗎？</h3>
                    <p className="text-slate-300">A: 理論上可以，但由於使用多副牌且經常洗牌，算牌的效果非常有限。建議專注於資金管理和下注策略。</p>
                  </div>
                  <div className="bg-slate-800 rounded-lg p-4">
                    <h3 className="text-white font-bold mb-2">Q: 莊家為什麼要抽5%佣金？</h3>
                    <p className="text-slate-300">A: 因為莊家勝率略高於閒家，為了平衡遊戲，莊家獲勝時會扣除5%佣金。這是正常的遊戲規則。</p>
                  </div>
                </div>
              </section>

              <div className="bg-gradient-to-r from-cyan-600/20 to-fuchsia-600/20 border border-cyan-500/30 rounded-xl p-6 mt-8">
                <h3 className="text-xl font-bold text-white mb-4">下一步學習</h3>
                <p className="text-slate-300 mb-4">掌握基礎後，建議繼續學習：</p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    to="/guides/games/baccarat/road-reading"
                    className="px-4 py-2 bg-cyan-600 text-white rounded-lg font-bold hover:bg-cyan-500 transition-colors text-sm"
                  >
                    百家樂看路法教學
                  </Link>
                  <Link
                    to="/guides/games/baccarat/betting-strategy"
                    className="px-4 py-2 bg-fuchsia-600 text-white rounded-lg font-bold hover:bg-fuchsia-500 transition-colors text-sm"
                  >
                    下注策略教學
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

