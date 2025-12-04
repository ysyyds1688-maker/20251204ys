import { SEO } from '../../components/SEO';
import { Breadcrumb } from '../../components/Breadcrumb';
import { ShieldCheck, Zap, Users, Gamepad2, Clock, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

export const AboutPage = () => {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'YS 娛樂城',
    url: 'https://ys-entertainment.com',
    description: 'YS 娛樂城致力於提供最安全、最可靠的線上娛樂服務，擁有專業團隊與完善保障機制。快速出金5分鐘內到帳，24小時客服服務。',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      availableLanguage: ['Chinese', 'Traditional Chinese'],
      areaServed: 'TW',
    },
    sameAs: [
      'https://www.facebook.com/ys-entertainment',
      'https://www.instagram.com/ys-entertainment',
    ],
  };

  return (
    <>
      <SEO
        title="關於我們 - YS 娛樂城"
        description="YS 娛樂城致力於提供最安全、最可靠的線上娛樂服務，擁有專業團隊與完善保障機制。快速出金5分鐘內到帳，24小時客服服務，提供真人百家樂、電子遊戲、體育投注等多種遊戲平台。"
        keywords="關於我們,YS娛樂城,公司介紹,線上娛樂城,快速出金,安全可靠"
        canonical="/trust/about"
        structuredData={organizationSchema}
      />
      <div className="min-h-screen bg-slate-950 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ name: '關於我們', url: '/trust/about' }]} />
          
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6">關於我們</h1>
          
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 md:p-12 mb-8">
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              YS 娛樂城成立於 2020 年，是台灣領先的線上娛樂平台之一。我們致力於為玩家提供最安全、最可靠、最優質的線上娛樂體驗，透過不斷的技術創新與服務優化，成為玩家最信賴的娛樂城品牌。
            </p>
            
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center">
              <Award className="text-cyan-400 mr-3" size={28} />
              我們的使命
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed mb-8">
              為每一位玩家提供公平、透明、安全的遊戲環境，讓玩家能夠安心享受娛樂的同時，也能獲得快速、便捷的服務體驗。我們相信，只有真正站在玩家角度思考，才能打造出最優質的娛樂平台。
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center">
              <ShieldCheck className="text-cyan-400 mr-3" size={28} />
              核心優勢
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <Zap className="text-cyan-400 mb-4" size={32} />
                <h3 className="text-xl font-bold text-white mb-3">快速出金</h3>
                <p className="text-slate-300">
                  業界最快的出金速度，申請後 5 分鐘內到帳，讓您無需等待即可使用資金。
                </p>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <ShieldCheck className="text-cyan-400 mb-4" size={32} />
                <h3 className="text-xl font-bold text-white mb-3">安全保障</h3>
                <p className="text-slate-300">
                  採用 SSL 加密技術，資金與個人資料完全隔離，確保您的隱私與資金安全。
                </p>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <Gamepad2 className="text-cyan-400 mb-4" size={32} />
                <h3 className="text-xl font-bold text-white mb-3">遊戲豐富</h3>
                <p className="text-slate-300">
                  提供 TOP 體育、DG 真人、88SOFT 電子、高登棋牌等多種遊戲平台，滿足不同玩家需求。
                </p>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <Clock className="text-cyan-400 mb-4" size={32} />
                <h3 className="text-xl font-bold text-white mb-3">24小時客服</h3>
                <p className="text-slate-300">
                  專業客服團隊全天候待命，無論何時遇到問題，都能獲得即時協助與解答。
                </p>
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center">
              <Users className="text-cyan-400 mr-3" size={28} />
              服務特色
            </h2>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start text-slate-300">
                <span className="text-cyan-400 mr-3 font-bold">✓</span>
                <span className="text-lg">
                  <strong className="text-white">體驗金 168</strong>：新會員註冊即送體驗金，無需存款即可體驗遊戲
                </span>
              </li>
              <li className="flex items-start text-slate-300">
                <span className="text-cyan-400 mr-3 font-bold">✓</span>
                <span className="text-lg">
                  <strong className="text-white">多種儲值方式</strong>：支援 USDT、銀行轉帳、超商代碼等多種儲值管道
                </span>
              </li>
              <li className="flex items-start text-slate-300">
                <span className="text-cyan-400 mr-3 font-bold">✓</span>
                <span className="text-lg">
                  <strong className="text-white">專業教學</strong>：提供完整的遊戲攻略與新手教學，幫助玩家快速上手
                </span>
              </li>
              <li className="flex items-start text-slate-300">
                <span className="text-cyan-400 mr-3 font-bold">✓</span>
                <span className="text-lg">
                  <strong className="text-white">公平透明</strong>：所有遊戲均採用公平隨機機制，確保遊戲結果公正
                </span>
              </li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">為什麼選擇 YS 娛樂城？</h2>
            <p className="text-lg text-slate-300 leading-relaxed mb-4">
              在眾多線上娛樂城中，YS 娛樂城脫穎而出的原因在於我們始終將玩家的需求放在第一位。我們不僅提供豐富的遊戲選擇與優惠活動，更重要的是建立了完善的安全保障機制與快速的出金服務。
            </p>
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              無論您是新手玩家還是資深玩家，YS 娛樂城都能為您提供最適合的遊戲體驗。我們持續優化平台功能，傾聽玩家意見，致力於成為您最值得信賴的娛樂夥伴。
            </p>

            <div className="bg-gradient-to-r from-cyan-900/30 to-fuchsia-900/30 border border-cyan-500/30 rounded-xl p-6 mt-8">
              <h3 className="text-xl font-bold text-white mb-3">準備開始了嗎？</h3>
              <p className="text-slate-300 mb-4">
                立即註冊成為 YS 娛樂城會員，享受體驗金 168 與快速出金服務！
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/guides/register"
                  className="px-6 py-3 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg font-bold transition-colors"
                >
                  查看註冊教學
                </Link>
                <Link
                  to="/trust/security"
                  className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-bold transition-colors border border-slate-700"
                >
                  了解出金保障
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

