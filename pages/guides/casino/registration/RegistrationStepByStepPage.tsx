import { SEO } from '../../../../components/SEO';
import { Breadcrumb } from '../../../../components/Breadcrumb';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const RegistrationStepByStepPage = () => {
  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'YS 娛樂城完整註冊流程教學',
    description: '詳細的註冊步驟說明，從填寫資料到完成驗證，幫助新玩家快速完成註冊。',
    step: [
      {
        '@type': 'HowToStep',
        name: '填寫基本資料',
        text: '進入註冊頁面，填寫手機號碼、電子郵件、設定帳號名稱和密碼',
      },
      {
        '@type': 'HowToStep',
        name: '手機驗證',
        text: '接收驗證碼並輸入完成驗證',
      },
      {
        '@type': 'HowToStep',
        name: '同意服務條款',
        text: '閱讀並同意服務條款與隱私政策',
      },
      {
        '@type': 'HowToStep',
        name: '完成註冊',
        text: '點擊完成註冊，系統自動開通帳號並發放體驗金168',
      },
    ],
  };

  return (
    <>
      <SEO
        title="完整註冊流程教學 - YS 娛樂城註冊步驟詳解"
        description="YS 娛樂城完整註冊流程教學：詳細說明從填寫資料、手機驗證到完成註冊的每個步驟，幫助新玩家快速完成註冊並領取體驗金168。"
        keywords="註冊流程,註冊步驟,YS娛樂城註冊,註冊教學,如何註冊娛樂城"
        canonical="/guides/casino/registration/step-by-step"
        structuredData={howToSchema}
      />
      
      <div className="min-h-screen bg-slate-950 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { name: '新手教學', url: '/guides' },
              { name: '娛樂城攻略', url: '/guides/casino' },
              { name: '註冊相關', url: '/guides/casino/registration' },
              { name: '完整註冊流程', url: '/guides/casino/registration/step-by-step' },
            ]}
          />
          
          <article>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-6">
              完整註冊流程教學
            </h1>
            
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 md:p-12">
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                本教學將詳細說明 YS 娛樂城的完整註冊流程，從填寫基本資料到完成驗證，每個步驟都有詳細說明和截圖示範，幫助您快速完成註冊並領取體驗金168。
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">步驟一：填寫基本資料</h2>
                <div className="bg-slate-800 rounded-lg p-6 mb-4">
                  <ol className="list-decimal pl-6 space-y-3 text-slate-300">
                    <li>進入 YS 娛樂城首頁，點擊右上角「VIP 登入」或「立即註冊」按鈕</li>
                    <li>在註冊表單中填寫以下資訊：
                      <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li><strong className="text-white">手機號碼：</strong>用於接收驗證碼（建議使用常用手機號）</li>
                        <li><strong className="text-white">電子郵件：</strong>用於接收重要通知和優惠資訊</li>
                        <li><strong className="text-white">帳號名稱：</strong>建議使用容易記住的暱稱（6-20個字元）</li>
                        <li><strong className="text-white">登入密碼：</strong>至少8個字元，建議包含英文和數字</li>
                      </ul>
                    </li>
                    <li>確認所有資訊無誤後，點擊「下一步」</li>
                  </ol>
                </div>
                <div className="bg-cyan-900/10 border border-cyan-500/20 rounded-xl p-4">
                  <p className="text-slate-300 text-sm">
                    <strong className="text-cyan-400">提示：</strong>密碼請妥善保管，建議使用強密碼（包含大小寫字母、數字和特殊符號）。
                  </p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">步驟二：手機驗證</h2>
                <div className="bg-slate-800 rounded-lg p-6 mb-4">
                  <ol className="list-decimal pl-6 space-y-3 text-slate-300">
                    <li>系統會自動發送6位數驗證碼到您填寫的手機號碼</li>
                    <li>通常在1-2分鐘內會收到簡訊</li>
                    <li>在驗證碼輸入框中輸入收到的6位數驗證碼</li>
                    <li>點擊「驗證」按鈕完成驗證</li>
                  </ol>
                </div>
                <div className="bg-amber-900/10 border border-amber-500/20 rounded-xl p-4">
                  <p className="text-slate-300 text-sm">
                    <strong className="text-amber-400">注意：</strong>如果未收到驗證碼，請檢查手機號碼是否正確，或點擊「重新發送」（需等待60秒）。
                  </p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">步驟三：同意服務條款</h2>
                <div className="bg-slate-800 rounded-lg p-6 mb-4">
                  <p className="text-slate-300 mb-4">在完成註冊前，請仔細閱讀並同意以下條款：</p>
                  <ul className="list-disc pl-6 space-y-2 text-slate-300">
                    <li><strong className="text-white">服務條款：</strong>了解平台使用規則和責任</li>
                    <li><strong className="text-white">隱私政策：</strong>了解個人資料保護措施</li>
                    <li><strong className="text-white">年齡確認：</strong>確認您已年滿18歲</li>
                    <li><strong className="text-white">負責任博彩聲明：</strong>了解理性遊戲的重要性</li>
                  </ul>
                  <p className="text-slate-300 mt-4">勾選「我已閱讀並同意以上條款」後，點擊「完成註冊」</p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">步驟四：完成註冊並領取體驗金</h2>
                <div className="bg-slate-800 rounded-lg p-6 mb-4">
                  <ol className="list-decimal pl-6 space-y-3 text-slate-300">
                    <li>點擊「完成註冊」按鈕後，系統會自動為您開通帳號</li>
                    <li>體驗金168會自動存入您的帳戶（無需存款）</li>
                    <li>您可以立即開始體驗各種遊戲</li>
                    <li>建議完成身份驗證以啟用所有功能（包含出金功能）</li>
                  </ol>
                </div>
                <div className="bg-emerald-900/10 border border-emerald-500/20 rounded-xl p-4">
                  <p className="text-slate-300 text-sm">
                    <strong className="text-emerald-400">恭喜！</strong>註冊完成後，您已成為 YS 娛樂城的會員，可以開始享受我們的服務了。
                  </p>
                </div>
              </section>

              <section className="mb-8 bg-cyan-900/10 border border-cyan-500/20 rounded-xl p-6">
                <h2 className="text-xl font-bold text-cyan-400 mb-4 flex items-center">
                  <CheckCircle size={20} className="mr-2" />
                  註冊注意事項
                </h2>
                <ul className="space-y-2 text-slate-300">
                  <li>• 一個手機號碼只能註冊一個帳號</li>
                  <li>• 請確保填寫的手機號碼正確，以便接收重要通知</li>
                  <li>• 密碼請妥善保管，建議不要與他人分享</li>
                  <li>• 註冊後建議完成身份驗證，以確保帳戶安全並啟用所有功能</li>
                  <li>• 體驗金主要用於體驗遊戲，需達到一定流水倍數後才能申請出金</li>
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
                    <h3 className="text-white font-bold mb-2">Q: 註冊後多久可以開始遊戲？</h3>
                    <p className="text-slate-300">A: 註冊完成後即可立即開始遊戲，體驗金會自動存入您的帳戶。</p>
                  </div>
                  <div className="bg-slate-800 rounded-lg p-4">
                    <h3 className="text-white font-bold mb-2">Q: 體驗金可以出金嗎？</h3>
                    <p className="text-slate-300">A: 體驗金需達到一定流水倍數後才能申請出金，詳細規則請參考<Link to="/promotions" className="text-cyan-400 hover:text-cyan-300">優惠活動頁面</Link>。</p>
                  </div>
                </div>
              </section>

              <div className="bg-gradient-to-r from-cyan-600/20 to-fuchsia-600/20 border border-cyan-500/30 rounded-xl p-6 mt-8">
                <h3 className="text-xl font-bold text-white mb-4">下一步</h3>
                <div className="flex flex-wrap gap-3">
                  <Link
                    to="/guides/casino/registration/verification"
                    className="px-4 py-2 bg-cyan-600 text-white rounded-lg font-bold hover:bg-cyan-500 transition-colors text-sm"
                  >
                    身份驗證教學
                  </Link>
                  <Link
                    to="/guides/casino/registration/bonus-claim"
                    className="px-4 py-2 bg-fuchsia-600 text-white rounded-lg font-bold hover:bg-fuchsia-500 transition-colors text-sm"
                  >
                    優惠領取教學
                  </Link>
                  <Link
                    to="/register"
                    className="px-4 py-2 bg-slate-700 text-white rounded-lg font-bold hover:bg-slate-600 transition-colors text-sm"
                  >
                    立即註冊
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

