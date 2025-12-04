import { SEO } from '../../../../components/SEO';
import { Breadcrumb } from '../../../../components/Breadcrumb';
import { Gift } from 'lucide-react';

export const RegistrationBonusClaimPage = () => {
  return (
    <>
      <SEO
        title="優惠領取教學 - 如何領取體驗金和首存優惠"
        description="YS 娛樂城優惠領取教學：詳細說明註冊後如何領取體驗金168和首存優惠，最大化您的遊戲體驗。"
        keywords="優惠領取,體驗金領取,首存優惠,優惠申請"
        canonical="/guides/casino/registration/bonus-claim"
      />
      <div className="min-h-screen bg-slate-950 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { name: '新手教學', url: '/guides' },
              { name: '娛樂城攻略', url: '/guides/casino' },
              { name: '註冊相關', url: '/guides/casino/registration' },
              { name: '優惠領取教學', url: '/guides/casino/registration/bonus-claim' },
            ]}
          />
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6">優惠領取教學</h1>
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 md:p-12">
            <div className="flex items-center mb-6">
              <Gift className="text-fuchsia-400 mr-3" size={32} />
              <p className="text-lg text-slate-300">
                註冊完成後，系統會自動發放體驗金168，無需手動領取。
              </p>
            </div>
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">體驗金168 領取方式</h2>
              <div className="bg-slate-800 rounded-lg p-6 mb-4">
                <p className="text-slate-300 mb-4">
                  體驗金168 會在您完成註冊後<strong className="text-white">自動發放</strong>到您的帳戶，無需手動領取。
                </p>
                <div className="bg-cyan-900/20 border border-cyan-500/30 rounded-lg p-4">
                  <p className="text-cyan-400 font-bold mb-2">✓ 自動發放流程：</p>
                  <ol className="list-decimal pl-6 space-y-2 text-slate-300">
                    <li>完成註冊並通過手機驗證</li>
                    <li>系統自動發放體驗金168到您的帳戶</li>
                    <li>您可以在「我的帳戶」→「餘額」中查看</li>
                    <li>立即可以開始使用體驗金進行遊戲</li>
                  </ol>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">首存優惠領取方式</h2>
              <div className="space-y-4">
                <div className="bg-slate-800 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-white mb-3">步驟一：完成首次儲值</h3>
                  <p className="text-slate-300 mb-3">使用任何儲值方式完成首次儲值（最低儲值金額請參考優惠活動頁面）</p>
                </div>
                <div className="bg-slate-800 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-white mb-3">步驟二：申請優惠</h3>
                  <p className="text-slate-300 mb-3">儲值完成後，進入「優惠活動」頁面，找到「首存優惠」，點擊「立即申請」</p>
                </div>
                <div className="bg-slate-800 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-white mb-3">步驟三：等待審核</h3>
                  <p className="text-slate-300 mb-3">系統會自動審核您的申請，通常在 5 分鐘內完成</p>
                </div>
                <div className="bg-slate-800 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-white mb-3">步驟四：優惠到帳</h3>
                  <p className="text-slate-300">審核通過後，優惠金額會自動存入您的帳戶，可以立即使用</p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">其他優惠領取</h2>
              <div className="space-y-4 text-slate-300">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">返水優惠</h3>
                  <p className="mb-2">返水優惠會根據您的投注金額自動計算，通常在每日或每週結算後自動發放。</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">活動優惠</h3>
                  <p className="mb-2">參加特定活動（如週末加碼、生日禮金等）需要在活動頁面申請，審核通過後發放。</p>
                </div>
              </div>
            </section>

            <section className="mb-8 bg-amber-900/10 border border-amber-500/20 rounded-xl p-6">
              <h2 className="text-xl font-bold text-amber-400 mb-4">⚠️ 注意事項</h2>
              <ul className="space-y-2 text-slate-300">
                <li>• 體驗金168 無需申請，註冊後自動發放</li>
                <li>• 首存優惠需要在儲值後手動申請</li>
                <li>• 每個優惠都有使用期限，請在期限內使用</li>
                <li>• 注意優惠的流水要求，完成流水後才能出金</li>
                <li>• 一個帳號只能領取一次首存優惠</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

