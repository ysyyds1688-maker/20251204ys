import { SEO } from '../../components/SEO';
import { Breadcrumb } from '../../components/Breadcrumb';
import { ShieldCheck, Zap, Lock, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export const SecurityPage = () => {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'YS 娛樂城出金時間需要多久？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'YS 娛樂城提供業界最快的出金服務，申請後 5 分鐘內即可到帳，無需長時間等待。',
        },
      },
      {
        '@type': 'Question',
        name: '出金需要手續費嗎？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'YS 娛樂城出金完全免手續費，玩家無需支付任何額外費用即可完成出金。',
        },
      },
      {
        '@type': 'Question',
        name: '出金有限額嗎？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'YS 娛樂城提供彈性的出金限額，單筆最低 100 元，最高可達 100 萬元，滿足不同玩家的需求。',
        },
      },
      {
        '@type': 'Question',
        name: '如何確保出金安全？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'YS 娛樂城採用 SSL 加密技術、資金隔離機制，並與多家銀行合作，確保玩家資金安全無虞。',
        },
      },
      {
        '@type': 'Question',
        name: '出金失敗怎麼辦？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '若出金失敗，請立即聯絡 24 小時客服，我們會立即為您處理。常見原因包括帳戶資訊錯誤、銀行系統維護等，客服會協助您解決。',
        },
      },
    ],
  };

  return (
    <>
      <SEO
        title="出金保障 - YS 娛樂城安全保障 | 5分鐘快速出金"
        description="YS 娛樂城提供完善的出金保障機制，快速出金 5 分鐘內到帳，完全免手續費。採用 SSL 加密技術與資金隔離機制，確保玩家資金安全。了解出金流程、限額、常見問題與安全保障措施。"
        keywords="出金保障,快速出金,5分鐘出金,出金安全,資金安全,YS娛樂城出金,出金流程,出金手續費"
        canonical="/trust/security"
        structuredData={faqSchema}
      />
      <div className="min-h-screen bg-slate-950 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ name: '出金保障', url: '/trust/security' }]} />
          
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6">出金保障</h1>
          
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 md:p-12 mb-8">
            <div className="flex items-center mb-6">
              <ShieldCheck className="text-cyan-400 mr-3" size={32} />
              <h2 className="text-2xl md:text-3xl font-bold text-white">安全保障機制</h2>
            </div>
            <p className="text-lg text-slate-300 leading-relaxed mb-8">
              YS 娛樂城深知資金安全對玩家的重要性，因此建立了完善的安全保障機制。我們採用業界最先進的加密技術，與多家銀行建立合作關係，確保每一筆出金都能安全、快速地完成。我們承諾，您的資金安全是我們的首要任務。
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 text-center">
                <Zap className="text-cyan-400 mx-auto mb-4" size={40} />
                <h3 className="text-xl font-bold text-white mb-2">5 分鐘到帳</h3>
                <p className="text-slate-400 text-sm">業界最快出金速度</p>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 text-center">
                <Lock className="text-cyan-400 mx-auto mb-4" size={40} />
                <h3 className="text-xl font-bold text-white mb-2">SSL 加密</h3>
                <p className="text-slate-400 text-sm">銀行級安全保護</p>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 text-center">
                <ShieldCheck className="text-cyan-400 mx-auto mb-4" size={40} />
                <h3 className="text-xl font-bold text-white mb-2">資金隔離</h3>
                <p className="text-slate-400 text-sm">完全獨立管理</p>
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center">
              <Zap className="text-cyan-400 mr-3" size={28} />
              快速出金服務
            </h2>
            <div className="bg-gradient-to-r from-cyan-900/30 to-fuchsia-900/30 border border-cyan-500/30 rounded-xl p-6 mb-8">
              <p className="text-lg text-white font-bold mb-4">5 分鐘內到帳</p>
              <p className="text-slate-300 mb-4">
                YS 娛樂城提供業界最快的出金服務，當您提交出金申請後，我們會在 5 分鐘內完成審核並將款項轉入您的指定帳戶。無需等待數小時或數天，讓您能夠立即使用資金。
              </p>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-start">
                  <CheckCircle className="text-cyan-400 mr-2 mt-1" size={20} />
                  <span>自動化審核系統，快速處理出金申請</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-cyan-400 mr-2 mt-1" size={20} />
                  <span>與多家銀行建立直接合作，縮短轉帳時間</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-cyan-400 mr-2 mt-1" size={20} />
                  <span>24 小時出金服務，任何時間都能申請</span>
                </li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center">
              <Lock className="text-cyan-400 mr-3" size={28} />
              安全保障措施
            </h2>
            <div className="space-y-6 mb-8">
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <h3 className="text-xl font-bold text-white mb-3 flex items-center">
                  <Lock className="text-cyan-400 mr-3" size={24} />
                  SSL 加密技術
                </h3>
                <p className="text-slate-300">
                  所有資料傳輸均採用 256 位元 SSL 加密技術，與銀行同等級的安全標準，確保您的個人資料與交易資訊完全保密，不會被第三方截取或竊取。
                </p>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <h3 className="text-xl font-bold text-white mb-3 flex items-center">
                  <ShieldCheck className="text-cyan-400 mr-3" size={24} />
                  資金隔離機制
                </h3>
                <p className="text-slate-300">
                  玩家資金與公司營運資金完全隔離，存放在獨立的銀行帳戶中。即使公司營運出現問題，玩家的資金也不會受到任何影響，確保您的資金安全無虞。
                </p>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <h3 className="text-xl font-bold text-white mb-3 flex items-center">
                  <CheckCircle className="text-cyan-400 mr-3" size={24} />
                  多重驗證機制
                </h3>
                <p className="text-slate-300">
                  每次出金都需要通過多重身份驗證，包括密碼確認、手機驗證碼、Email 確認等，確保只有帳戶持有人才能進行出金操作，防止帳戶被盜用。
                </p>
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center">
              <Clock className="text-cyan-400 mr-3" size={28} />
              出金流程說明
            </h2>
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-cyan-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white mb-2">登入會員帳戶</h3>
                  <p className="text-slate-300">使用您的帳號密碼登入 YS 娛樂城會員系統</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-cyan-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white mb-2">進入出金頁面</h3>
                  <p className="text-slate-300">點擊「會員中心」→「出金」進入出金申請頁面</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-cyan-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white mb-2">填寫出金資訊</h3>
                  <p className="text-slate-300">輸入出金金額與收款帳戶資訊（銀行帳號或 USDT 地址）</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-cyan-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  4
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white mb-2">確認並提交</h3>
                  <p className="text-slate-300">確認資訊無誤後提交申請，系統會自動發送驗證碼到您的手機或 Email</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-cyan-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  5
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white mb-2">完成驗證</h3>
                  <p className="text-slate-300">輸入驗證碼完成身份確認，系統會立即處理您的出金申請</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  ✓
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white mb-2">5 分鐘內到帳</h3>
                  <p className="text-slate-300">審核通過後，款項會在 5 分鐘內轉入您的指定帳戶</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center">
              <AlertCircle className="text-cyan-400 mr-3" size={28} />
              常見問題
            </h2>
            <div className="space-y-4 mb-8">
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <h3 className="text-lg font-bold text-white mb-3">Q: YS 娛樂城出金時間需要多久？</h3>
                <p className="text-slate-300">
                  A: YS 娛樂城提供業界最快的出金服務，申請後 5 分鐘內即可到帳。我們採用自動化審核系統，與多家銀行建立直接合作，大幅縮短出金時間。
                </p>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <h3 className="text-lg font-bold text-white mb-3">Q: 出金需要手續費嗎？</h3>
                <p className="text-slate-300">
                  A: YS 娛樂城出金完全免手續費，玩家無需支付任何額外費用即可完成出金。我們承諾，所有出金費用由 YS 娛樂城承擔。
                </p>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <h3 className="text-lg font-bold text-white mb-3">Q: 出金有限額嗎？</h3>
                <p className="text-slate-300">
                  A: YS 娛樂城提供彈性的出金限額，單筆最低 100 元，最高可達 100 萬元。每日出金次數無限制，滿足不同玩家的需求。
                </p>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <h3 className="text-lg font-bold text-white mb-3">Q: 如何確保出金安全？</h3>
                <p className="text-slate-300">
                  A: YS 娛樂城採用 SSL 加密技術、資金隔離機制，並與多家銀行合作，確保玩家資金安全無虞。所有出金操作都需要通過多重身份驗證，防止帳戶被盜用。
                </p>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <h3 className="text-lg font-bold text-white mb-3">Q: 出金失敗怎麼辦？</h3>
                <p className="text-slate-300">
                  A: 若出金失敗，請立即聯絡 24 小時客服，我們會立即為您處理。常見原因包括帳戶資訊錯誤、銀行系統維護等，客服會協助您解決問題並重新處理出金申請。
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-cyan-900/30 to-fuchsia-900/30 border border-cyan-500/30 rounded-xl p-6 mt-8">
              <h3 className="text-xl font-bold text-white mb-3">需要協助？</h3>
              <p className="text-slate-300 mb-4">
                如果您對出金流程有任何疑問，或需要協助，歡迎隨時聯絡我們的 24 小時客服團隊。
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/trust/contact"
                  className="px-6 py-3 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg font-bold transition-colors"
                >
                  聯絡客服
                </Link>
                <Link
                  to="/guides/withdrawal"
                  className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-bold transition-colors border border-slate-700"
                >
                  查看出金教學
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

