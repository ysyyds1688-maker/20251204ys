import { SEO } from '../../components/SEO';
import { Breadcrumb } from '../../components/Breadcrumb';
import { MessageCircle, Clock, HelpCircle, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ContactPage = () => {
  const contactPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'YS 娛樂城客服中心',
    description: 'YS 娛樂城提供 24 小時線上客服服務，協助解決您的任何問題。',
    mainEntity: {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'YS 娛樂城客服時間是幾點？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'YS 娛樂城提供 24 小時全天候客服服務，無論何時遇到問題都能獲得即時協助。',
          },
        },
        {
          '@type': 'Question',
          name: '如何聯絡 YS 娛樂城客服？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '您可以透過線上客服系統、LINE、Telegram 等方式聯絡我們，所有管道均為 24 小時服務。',
          },
        },
        {
          '@type': 'Question',
          name: '出金問題可以找客服嗎？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '當然可以！我們的客服團隊專門處理出金相關問題，通常能在 5 分鐘內協助您完成出金申請。',
          },
        },
      ],
    },
  };

  return (
    <>
      <SEO
        title="客服中心 - 聯絡我們 | YS 娛樂城"
        description="YS 娛樂城客服中心提供 24 小時線上客服服務，透過線上客服、LINE、Telegram 等多種管道協助解決您的任何問題。快速回應、專業服務，讓您享受最優質的客服體驗。"
        keywords="YS娛樂城客服,聯絡我們,客服中心,24小時客服,線上客服,LINE客服,Telegram客服"
        canonical="/trust/contact"
        structuredData={contactPageSchema}
      />
      <div className="min-h-screen bg-slate-950 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ name: '客服中心', url: '/trust/contact' }]} />
          
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6">客服中心</h1>
          
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 md:p-12 mb-8">
            <div className="flex items-center mb-6">
              <MessageCircle className="text-cyan-400 mr-3" size={32} />
              <h2 className="text-2xl md:text-3xl font-bold text-white">24 小時客服服務</h2>
            </div>
            <p className="text-lg text-slate-300 leading-relaxed mb-8">
              YS 娛樂城提供全天候 24 小時客服服務，無論您何時遇到問題，我們的專業客服團隊都會立即為您提供協助。無論是註冊問題、儲值疑問、出金申請，或是遊戲相關問題，我們都能快速為您解決。
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center">
              <Phone className="text-cyan-400 mr-3" size={28} />
              聯絡方式
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <div className="flex items-center mb-4">
                  <MessageCircle className="text-cyan-400 mr-3" size={24} />
                  <h3 className="text-xl font-bold text-white">線上客服</h3>
                </div>
                <p className="text-slate-300 mb-4">
                  登入會員後，點擊右上角「客服」按鈕即可開啟線上客服對話框，即時與客服人員溝通。
                </p>
                <p className="text-cyan-400 font-bold">服務時間：24 小時</p>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <div className="flex items-center mb-4">
                  <MessageCircle className="text-fuchsia-400 mr-3" size={24} />
                  <h3 className="text-xl font-bold text-white">LINE 客服</h3>
                </div>
                <p className="text-slate-300 mb-4">
                  加入 YS 娛樂城官方 LINE，隨時隨地都能聯絡客服，還可接收最新優惠資訊。
                </p>
                <p className="text-fuchsia-400 font-bold">服務時間：24 小時</p>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <div className="flex items-center mb-4">
                  <MessageCircle className="text-blue-400 mr-3" size={24} />
                  <h3 className="text-xl font-bold text-white">Telegram 客服</h3>
                </div>
                <p className="text-slate-300 mb-4">
                  透過 Telegram 聯絡客服，快速獲得協助，適合偏好使用 Telegram 的玩家。
                </p>
                <p className="text-blue-400 font-bold">服務時間：24 小時</p>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <div className="flex items-center mb-4">
                  <Mail className="text-yellow-400 mr-3" size={24} />
                  <h3 className="text-xl font-bold text-white">Email 客服</h3>
                </div>
                <p className="text-slate-300 mb-4">
                  如需詳細說明或文件往來，可透過 Email 聯絡客服，我們會在 24 小時內回覆。
                </p>
                <p className="text-yellow-400 font-bold">回覆時間：24 小時內</p>
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center">
              <Clock className="text-cyan-400 mr-3" size={28} />
              服務時間
            </h2>
            <div className="bg-gradient-to-r from-cyan-900/30 to-fuchsia-900/30 border border-cyan-500/30 rounded-xl p-6 mb-8">
              <p className="text-lg text-white font-bold mb-2">24 小時全天候服務</p>
              <p className="text-slate-300">
                無論是平日、假日、或是任何時段，YS 娛樂城客服團隊都會隨時待命，為您提供最即時的協助。我們深知玩家可能在任何時間遇到問題，因此提供不間斷的客服服務，確保您隨時都能獲得幫助。
              </p>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center">
              <HelpCircle className="text-cyan-400 mr-3" size={28} />
              常見問題快速連結
            </h2>
            <div className="space-y-4 mb-8">
              <Link
                to="/guides/register"
                className="block bg-slate-800/50 hover:bg-slate-800 border border-slate-700 rounded-xl p-4 transition-colors group"
              >
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  如何註冊 YS 娛樂城？
                </h3>
                <p className="text-slate-400">
                  詳細的註冊教學，包含步驟說明與注意事項
                </p>
              </Link>
              <Link
                to="/guides/withdrawal"
                className="block bg-slate-800/50 hover:bg-slate-800 border border-slate-700 rounded-xl p-4 transition-colors group"
              >
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  如何申請出金？
                </h3>
                <p className="text-slate-400">
                  出金流程教學，了解如何快速完成出金申請
                </p>
              </Link>
              <Link
                to="/guides/usdt-deposit"
                className="block bg-slate-800/50 hover:bg-slate-800 border border-slate-700 rounded-xl p-4 transition-colors group"
              >
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  如何使用 USDT 儲值？
                </h3>
                <p className="text-slate-400">
                  USDT 儲值完整教學，安全快速完成儲值
                </p>
              </Link>
              <Link
                to="/trust/security"
                className="block bg-slate-800/50 hover:bg-slate-800 border border-slate-700 rounded-xl p-4 transition-colors group"
              >
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  出金保障與安全機制
                </h3>
                <p className="text-slate-400">
                  了解 YS 娛樂城的出金保障與資金安全機制
                </p>
              </Link>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <h3 className="text-xl font-bold text-white mb-4">客服服務承諾</h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3 font-bold">✓</span>
                  <span>快速回應：平均回應時間 30 秒內</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3 font-bold">✓</span>
                  <span>專業服務：客服團隊經過專業培訓，能快速解決各種問題</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3 font-bold">✓</span>
                  <span>隱私保護：所有對話內容嚴格保密，確保您的隱私安全</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3 font-bold">✓</span>
                  <span>多語言支援：提供繁體中文、簡體中文等多種語言服務</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

