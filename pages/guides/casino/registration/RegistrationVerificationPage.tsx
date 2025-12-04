import { SEO } from '../../../../components/SEO';
import { Breadcrumb } from '../../../../components/Breadcrumb';
import { ShieldCheck, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export const RegistrationVerificationPage = () => {
  return (
    <>
      <SEO
        title="身份驗證教學 - 如何完成身份驗證啟用所有功能"
        description="YS 娛樂城身份驗證教學：詳細說明如何完成身份驗證，啟用出金功能和其他所有功能，保障帳戶安全。"
        keywords="身份驗證,驗證教學,帳戶驗證,出金驗證"
        canonical="/guides/casino/registration/verification"
      />
      <div className="min-h-screen bg-slate-950 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { name: '新手教學', url: '/guides' },
              { name: '娛樂城攻略', url: '/guides/casino' },
              { name: '註冊相關', url: '/guides/casino/registration' },
              { name: '身份驗證教學', url: '/guides/casino/registration/verification' },
            ]}
          />
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6">身份驗證教學</h1>
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 md:p-12">
            <div className="flex items-center mb-6">
              <ShieldCheck className="text-emerald-400 mr-3" size={32} />
              <p className="text-lg text-slate-300">
                完成身份驗證可以啟用所有功能，包括出金功能，並提高帳戶安全性。
              </p>
            </div>
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">為什麼需要身份驗證？</h2>
              <div className="bg-slate-800 rounded-lg p-6 mb-4">
                <ul className="list-disc pl-6 space-y-2 text-slate-300">
                  <li><strong className="text-white">啟用出金功能：</strong>完成身份驗證後才能申請出金</li>
                  <li><strong className="text-white">提高帳戶安全性：</strong>防止帳戶被盜用</li>
                  <li><strong className="text-white">符合法規要求：</strong>確保玩家身份真實性</li>
                  <li><strong className="text-white">提高出金額度：</strong>驗證後可獲得更高的出金限額</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">身份驗證步驟</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold">1</div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">進入驗證頁面</h3>
                    <p className="text-slate-300 mb-2">登入帳號後，進入「我的帳戶」→「身份驗證」</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold">2</div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">上傳身份證件</h3>
                    <p className="text-slate-300 mb-2">準備以下文件之一：</p>
                    <ul className="list-disc pl-6 space-y-1 text-slate-300">
                      <li>身份證正反面（清晰、完整）</li>
                      <li>護照（含照片頁）</li>
                      <li>駕照（正反面）</li>
                    </ul>
                    <p className="text-slate-300 mt-2 text-sm">注意：照片需清晰可見，資訊完整，不能有反光或遮擋</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold">3</div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">上傳地址證明（可選）</h3>
                    <p className="text-slate-300 mb-2">部分情況下可能需要地址證明：</p>
                    <ul className="list-disc pl-6 space-y-1 text-slate-300">
                      <li>水電費帳單（近3個月內）</li>
                      <li>銀行對帳單（近3個月內）</li>
                      <li>信用卡帳單（近3個月內）</li>
                    </ul>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold">4</div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">等待審核</h3>
                    <p className="text-slate-300 mb-2">提交後，系統會在 1-3 個工作天內完成審核</p>
                    <p className="text-slate-300 text-sm">審核通過後，您會收到通知，即可使用所有功能</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8 bg-cyan-900/10 border border-cyan-500/20 rounded-xl p-6">
              <h2 className="text-xl font-bold text-cyan-400 mb-4">💡 驗證注意事項</h2>
              <ul className="space-y-2 text-slate-300">
                <li>• 確保身份證件資訊與註冊資料一致</li>
                <li>• 照片需清晰、完整，不能模糊或反光</li>
                <li>• 身份證件需在有效期內</li>
                <li>• 如果審核失敗，請檢查照片品質並重新提交</li>
                <li>• 驗證完成後，帳戶安全性會大幅提升</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">常見問題</h2>
              <div className="space-y-4">
                <div className="bg-slate-800 rounded-lg p-4">
                  <h3 className="text-white font-bold mb-2">Q: 身份驗證需要多久時間？</h3>
                  <p className="text-slate-300">A: 一般情況下，審核會在 1-3 個工作天內完成。如果資料齊全且清晰，可能更快完成。</p>
                </div>
                <div className="bg-slate-800 rounded-lg p-4">
                  <h3 className="text-white font-bold mb-2">Q: 驗證失敗怎麼辦？</h3>
                  <p className="text-slate-300">A: 請檢查照片是否清晰、資訊是否完整，確保身份證件在有效期內，然後重新提交。</p>
                </div>
                <div className="bg-slate-800 rounded-lg p-4">
                  <h3 className="text-white font-bold mb-2">Q: 可以不驗證嗎？</h3>
                  <p className="text-slate-300">A: 可以，但無法使用出金功能。建議完成驗證以啟用所有功能並提高帳戶安全性。</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

