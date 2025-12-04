import { SEO } from '../../components/SEO';
import { Breadcrumb } from '../../components/Breadcrumb';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const RegisterGuidePage = () => {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '如何註冊 YS 娛樂城？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '註冊 YS 娛樂城非常簡單，只需填寫基本資料、設定帳號密碼、完成手機驗證即可。註冊完成後即可領取體驗金168。',
        },
      },
      {
        '@type': 'Question',
        name: '註冊需要提供哪些資料？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '註冊時需要提供手機號碼、電子郵件、設定帳號密碼。部分功能可能需要身份驗證，以確保帳戶安全。',
        },
      },
    ],
  };

  return (
    <>
      <SEO
        title="如何註冊 YS 娛樂城？完整註冊教學"
        description="YS 娛樂城註冊教學：詳細步驟說明如何註冊帳號、領取體驗金168、完成驗證等。新手必讀完整註冊指南。"
        keywords="如何註冊YS娛樂城,YS娛樂城註冊,註冊教學,體驗金168,YS註冊流程"
        canonical="/guides/register"
        structuredData={faqSchema}
      />
      
      <div className="min-h-screen bg-slate-950 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { name: '新手教學', url: '/guides' },
              { name: '如何註冊 YS 娛樂城', url: '/guides/register' },
            ]}
          />
          
          <article>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-6">
              如何註冊 YS 娛樂城？
            </h1>
            
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 md:p-12 mb-8">
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                歡迎來到 YS 娛樂城！本教學將詳細說明如何註冊帳號，讓您快速開始享受我們的服務。註冊完成後即可領取體驗金168，無需存款即可體驗各種遊戲。
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">註冊步驟</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold">1</div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">填寫基本資料</h3>
                      <p className="text-slate-300 mb-2">進入註冊頁面後，請填寫以下資訊：</p>
                      <ul className="list-disc pl-6 space-y-1 text-slate-300">
                        <li>手機號碼（用於接收驗證碼）</li>
                        <li>電子郵件地址</li>
                        <li>設定帳號名稱（建議使用容易記住的暱稱）</li>
                        <li>設定登入密碼（至少8個字元，建議包含英文、數字）</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold">2</div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">手機驗證</h3>
                      <p className="text-slate-300 mb-2">填寫完基本資料後，系統會發送驗證碼到您的手機：</p>
                      <ul className="list-disc pl-6 space-y-1 text-slate-300">
                        <li>點擊「發送驗證碼」按鈕</li>
                        <li>在1-2分鐘內收到6位數驗證碼</li>
                        <li>輸入驗證碼完成驗證</li>
                        <li>若未收到，可點擊「重新發送」（需等待60秒）</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold">3</div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">同意服務條款</h3>
                      <p className="text-slate-300 mb-2">請仔細閱讀並同意以下條款：</p>
                      <ul className="list-disc pl-6 space-y-1 text-slate-300">
                        <li>服務條款與隱私政策</li>
                        <li>年齡確認（需年滿18歲）</li>
                        <li>負責任博彩聲明</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold">4</div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">完成註冊並領取體驗金</h3>
                      <p className="text-slate-300 mb-2">點擊「完成註冊」按鈕後：</p>
                      <ul className="list-disc pl-6 space-y-1 text-slate-300">
                        <li>系統會自動為您開通帳號</li>
                        <li>體驗金168會自動存入您的帳戶</li>
                        <li>您可以立即開始體驗各種遊戲</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-8 bg-cyan-900/10 border border-cyan-500/20 rounded-xl p-6">
                <h2 className="text-xl font-bold text-cyan-400 mb-4 flex items-center">
                  <CheckCircle size={20} className="mr-2" />
                  註冊注意事項
                </h2>
                <ul className="space-y-2 text-slate-300">
                  <li>• 請確保填寫的手機號碼正確，以便接收重要通知</li>
                  <li>• 密碼請妥善保管，建議不要與他人分享</li>
                  <li>• 一個手機號碼只能註冊一個帳號</li>
                  <li>• 註冊後請完成身份驗證，以確保帳戶安全並啟用所有功能</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">常見問題</h2>
                <div className="space-y-4">
                  <div className="bg-slate-800 rounded-lg p-4">
                    <h3 className="text-white font-bold mb-2">Q: 註冊需要提供身份證件嗎？</h3>
                    <p className="text-slate-300">A: 註冊時不需要，但為了帳戶安全與啟用出金功能，建議完成身份驗證。</p>
                  </div>
                  <div className="bg-slate-800 rounded-lg p-4">
                    <h3 className="text-white font-bold mb-2">Q: 體驗金可以出金嗎？</h3>
                    <p className="text-slate-300">A: 體驗金主要用於體驗遊戲，需達到一定流水倍數後才能申請出金。詳細規則請參考優惠活動頁面。</p>
                  </div>
                  <div className="bg-slate-800 rounded-lg p-4">
                    <h3 className="text-white font-bold mb-2">Q: 忘記密碼怎麼辦？</h3>
                    <p className="text-slate-300">A: 可以透過「忘記密碼」功能，使用手機號碼或電子郵件重設密碼。詳細教學請參考<Link to="/guides/forgot-password" className="text-cyan-400 hover:text-cyan-300">忘記密碼教學</Link>。</p>
                  </div>
                </div>
              </section>

              <div className="bg-gradient-to-r from-cyan-600/20 to-fuchsia-600/20 border border-cyan-500/30 rounded-xl p-6 text-center">
                <h3 className="text-xl font-bold text-white mb-4">準備好開始了嗎？</h3>
                <Link
                  to="/register"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full text-white font-bold hover:from-cyan-500 hover:to-blue-500 transition-all shadow-lg"
                >
                  立即註冊領取體驗金 <ArrowRight size={20} className="ml-2" />
                </Link>
              </div>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

