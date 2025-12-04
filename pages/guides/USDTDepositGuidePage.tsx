import { SEO } from '../../components/SEO';
import { Breadcrumb } from '../../components/Breadcrumb';

export const USDTDepositGuidePage = () => {
  return (
    <>
      <SEO
        title="如何 USDT 儲值？完整儲值教學"
        description="YS 娛樂城 USDT 儲值教學：詳細說明如何使用 USDT 進行儲值，包含 TRC20、ERC20 協議選擇、儲值步驟、注意事項等。"
        keywords="USDT儲值,如何USDT儲值,加密貨幣儲值,USDT充值,YS娛樂城"
        canonical="/guides/usdt-deposit"
      />
      <div className="min-h-screen bg-slate-950 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ name: '新手教學', url: '/guides' }, { name: '如何 USDT 儲值', url: '/guides/usdt-deposit' }]} />
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6">如何 USDT 儲值？</h1>
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 md:p-12">
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              USDT（Tether）是目前最受歡迎的穩定幣之一，使用 USDT 進行儲值具有速度快、手續費低、隱私性高等優勢。YS 娛樂城支援 TRC20 和 ERC20 兩種協議，儲值即時到帳，是最推薦的儲值方式。
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">USDT 儲值優勢</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-slate-800 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-cyan-400 mb-3">⚡ 即時到帳</h3>
                  <p className="text-slate-300 text-sm">儲值後立即到帳，無需等待審核</p>
                </div>
                <div className="bg-slate-800 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-emerald-400 mb-3">💰 低手續費</h3>
                  <p className="text-slate-300 text-sm">TRC20 協議手續費極低，約 1 USDT</p>
                </div>
                <div className="bg-slate-800 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-fuchsia-400 mb-3">🔒 隱私性高</h3>
                  <p className="text-slate-300 text-sm">不需要提供銀行資訊，保護隱私</p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">協議選擇：TRC20 vs ERC20</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-slate-800 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-cyan-400 mb-3">TRC20（推薦）</h3>
                  <ul className="list-disc pl-6 space-y-2 text-slate-300">
                    <li>手續費最低（約 1 USDT）</li>
                    <li>到帳速度快</li>
                    <li>適合小額儲值</li>
                    <li>使用 Tron 區塊鏈</li>
                  </ul>
                </div>
                <div className="bg-slate-800 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-fuchsia-400 mb-3">ERC20</h3>
                  <ul className="list-disc pl-6 space-y-2 text-slate-300">
                    <li>手續費較高（約 5-10 USDT）</li>
                    <li>通用性高，支援錢包多</li>
                    <li>適合大額儲值</li>
                    <li>使用 Ethereum 區塊鏈</li>
                  </ul>
                </div>
              </div>
              <div className="bg-cyan-900/10 border border-cyan-500/20 rounded-xl p-4">
                <p className="text-cyan-400 font-bold mb-2">💡 建議：</p>
                <p className="text-slate-300 text-sm">
                  小額儲值（&lt; 1,000 USDT）建議使用 TRC20，手續費最低。大額儲值可以考慮 ERC20，雖然手續費較高但通用性更好。
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">USDT 儲值步驟</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold">1</div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">準備 USDT 錢包</h3>
                    <p className="text-slate-300 mb-2">確保您的加密貨幣錢包中有足夠的 USDT</p>
                    <p className="text-slate-300 text-sm">推薦錢包：MetaMask、Trust Wallet、TokenPocket 等</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold">2</div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">進入儲值頁面</h3>
                    <p className="text-slate-300">登入帳號後，進入「我的帳戶」→「儲值」→「USDT 儲值」</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold">3</div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">選擇協議和金額</h3>
                    <p className="text-slate-300 mb-2">選擇 TRC20 或 ERC20，輸入儲值金額</p>
                    <p className="text-slate-300 text-sm">系統會顯示對應的收款地址</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold">4</div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">複製收款地址</h3>
                    <p className="text-slate-300 mb-2">複製系統提供的 USDT 收款地址</p>
                    <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-3 mt-2">
                      <p className="text-red-400 font-bold text-sm mb-1">⚠️ 重要：</p>
                      <p className="text-slate-300 text-sm">務必確認地址正確，轉錯地址將無法找回</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold">5</div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">從錢包轉帳</h3>
                    <p className="text-slate-300 mb-2">打開您的 USDT 錢包，發送 USDT 到系統提供的地址：</p>
                    <ul className="list-disc pl-6 space-y-1 text-slate-300">
                      <li>確認收款地址正確</li>
                      <li>確認協議一致（TRC20 地址只能接收 TRC20）</li>
                      <li>確認金額正確</li>
                      <li>確認手續費足夠</li>
                    </ul>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold">6</div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">等待到帳</h3>
                    <p className="text-slate-300 mb-2">轉帳完成後，系統會自動確認並到帳：</p>
                    <ul className="list-disc pl-6 space-y-1 text-slate-300">
                      <li>TRC20：通常 5-10 分鐘內到帳</li>
                      <li>ERC20：通常 10-30 分鐘內到帳</li>
                      <li>到帳後會收到通知</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">常見問題</h2>
              <div className="space-y-4">
                <div className="bg-slate-800 rounded-lg p-4">
                  <h3 className="text-white font-bold mb-2">Q: 轉錯協議怎麼辦？</h3>
                  <p className="text-slate-300 text-sm">A: 如果將 TRC20 轉到 ERC20 地址（或相反），資金將無法找回。務必確認協議一致。</p>
                </div>
                <div className="bg-slate-800 rounded-lg p-4">
                  <h3 className="text-white font-bold mb-2">Q: 多久會到帳？</h3>
                  <p className="text-slate-300 text-sm">A: TRC20 通常 5-10 分鐘，ERC20 通常 10-30 分鐘。如果超過 1 小時未到帳，請聯繫客服。</p>
                </div>
                <div className="bg-slate-800 rounded-lg p-4">
                  <h3 className="text-white font-bold mb-2">Q: 需要多少手續費？</h3>
                  <p className="text-slate-300 text-sm">A: 手續費由區塊鏈收取，TRC20 約 1 USDT，ERC20 約 5-10 USDT。平台不收取手續費。</p>
                </div>
                <div className="bg-slate-800 rounded-lg p-4">
                  <h3 className="text-white font-bold mb-2">Q: 最低儲值金額是多少？</h3>
                  <p className="text-slate-300 text-sm">A: 通常最低儲值金額為 100 USDT，具體請參考儲值頁面說明。</p>
                </div>
              </div>
            </section>

            <section className="mb-8 bg-red-900/10 border border-red-500/20 rounded-xl p-6">
              <h2 className="text-xl font-bold text-red-400 mb-4">⚠️ 安全提醒</h2>
              <ul className="space-y-2 text-slate-300">
                <li>• 務必確認收款地址正確，轉錯地址將無法找回</li>
                <li>• 確認協議一致（TRC20 地址只能接收 TRC20，ERC20 地址只能接收 ERC20）</li>
                <li>• 確認金額正確，轉錯金額需要聯繫客服處理</li>
                <li>• 保留轉帳記錄（TxID），以便查詢</li>
                <li>• 如果超過預期時間未到帳，請聯繫客服並提供 TxID</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

