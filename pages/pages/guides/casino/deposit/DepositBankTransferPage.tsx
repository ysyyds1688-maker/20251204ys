import { SEO } from '../../../../components/SEO';
import { Breadcrumb } from '../../../../components/Breadcrumb';

export const DepositBankTransferPage = () => {
  return (
    <>
      <SEO
        title="銀行轉帳教學 - 使用銀行轉帳進行儲值"
        description="YS 娛樂城銀行轉帳儲值教學：詳細說明如何使用銀行轉帳進行儲值，包含步驟、注意事項等。"
        keywords="銀行轉帳,儲值教學,銀行轉帳儲值"
        canonical="/guides/casino/deposit/bank-transfer"
      />
      <div className="min-h-screen bg-slate-950 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { name: '新手教學', url: '/guides' },
              { name: '娛樂城攻略', url: '/guides/casino' },
              { name: '儲值相關', url: '/guides/casino/deposit' },
              { name: '銀行轉帳教學', url: '/guides/casino/deposit/bank-transfer' },
            ]}
          />
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6">銀行轉帳教學</h1>
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 md:p-12">
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              銀行轉帳是傳統且安全的儲值方式，適合大額儲值。雖然到帳時間較長（1-3個工作天），但安全可靠，適合不熟悉加密貨幣的玩家。
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">銀行轉帳儲值步驟</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold">1</div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">進入儲值頁面</h3>
                    <p className="text-slate-300">登入帳號後，進入「我的帳戶」→「儲值」→「銀行轉帳」</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold">2</div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">選擇儲值金額</h3>
                    <p className="text-slate-300 mb-2">輸入您要儲值的金額（最低儲值金額通常為 500 元）</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold">3</div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">取得轉帳資訊</h3>
                    <p className="text-slate-300 mb-2">系統會顯示轉帳帳戶資訊，包含：</p>
                    <ul className="list-disc pl-6 space-y-1 text-slate-300">
                      <li>銀行名稱</li>
                      <li>帳戶號碼</li>
                      <li>戶名</li>
                      <li>轉帳備註（重要！需填寫以加快審核）</li>
                    </ul>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold">4</div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">進行銀行轉帳</h3>
                    <p className="text-slate-300 mb-2">使用您的銀行帳戶或 ATM 進行轉帳：</p>
                    <ul className="list-disc pl-6 space-y-1 text-slate-300">
                      <li>確認轉帳金額與系統顯示一致</li>
                      <li>務必填寫轉帳備註（系統提供的專屬代碼）</li>
                      <li>保留轉帳收據或截圖</li>
                    </ul>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold">5</div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">上傳轉帳證明（可選）</h3>
                    <p className="text-slate-300">上傳轉帳收據或截圖可以加快審核速度</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold">6</div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">等待到帳</h3>
                    <p className="text-slate-300">系統會在 1-3 個工作天內完成審核並到帳，您會收到通知</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">注意事項</h2>
              <div className="bg-red-900/10 border border-red-500/20 rounded-xl p-6">
                <ul className="space-y-2 text-slate-300">
                  <li>• <strong className="text-white">轉帳備註很重要：</strong>務必填寫系統提供的專屬代碼，否則可能延遲到帳</li>
                  <li>• <strong className="text-white">轉帳金額需一致：</strong>轉帳金額必須與申請金額完全一致</li>
                  <li>• <strong className="text-white">保留轉帳證明：</strong>建議保留轉帳收據或截圖，以便查詢</li>
                  <li>• <strong className="text-white">到帳時間：</strong>一般為 1-3 個工作天，週末和假日可能延遲</li>
                  <li>• <strong className="text-white">手續費：</strong>視銀行而定，部分銀行可能收取轉帳手續費</li>
                </ul>
              </div>
            </section>

            <section className="mb-8 bg-cyan-900/10 border border-cyan-500/20 rounded-xl p-6">
              <h2 className="text-xl font-bold text-cyan-400 mb-4">💡 加快到帳技巧</h2>
              <ul className="space-y-2 text-slate-300">
                <li>• 上傳轉帳證明可以加快審核速度</li>
                <li>• 確保轉帳備註正確填寫</li>
                <li>• 在工作日進行轉帳，避免週末和假日</li>
                <li>• 如果超過預期時間未到帳，請聯繫客服查詢</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

