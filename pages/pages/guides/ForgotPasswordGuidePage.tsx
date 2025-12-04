import { SEO } from '../../components/SEO';
import { Breadcrumb } from '../../components/Breadcrumb';

export const ForgotPasswordGuidePage = () => {
  return (
    <>
      <SEO
        title="忘記密碼怎麼辦？YS 娛樂城密碼重置教學"
        description="YS 娛樂城忘記密碼教學：詳細說明如何透過手機號碼或電子郵件重設密碼，包含步驟說明與常見問題。"
        keywords="忘記密碼,密碼重置,YS娛樂城忘記密碼,如何重設密碼"
        canonical="/guides/forgot-password"
      />
      <div className="min-h-screen bg-slate-950 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ name: '新手教學', url: '/guides' }, { name: '忘記密碼怎麼辦', url: '/guides/forgot-password' }]} />
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6">忘記密碼怎麼辦？</h1>
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 md:p-12">
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              如果您忘記了 YS 娛樂城的登入密碼，不用擔心！系統提供多種方式讓您重設密碼，包括手機號碼驗證和電子郵件驗證。本教學將詳細說明重設密碼的步驟。
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">方式一：手機號碼重設密碼</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold">1</div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">進入忘記密碼頁面</h3>
                    <p className="text-slate-300">在登入頁面點擊「忘記密碼」連結</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold">2</div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">選擇手機號碼驗證</h3>
                    <p className="text-slate-300">選擇「使用手機號碼重設」選項</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold">3</div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">輸入手機號碼</h3>
                    <p className="text-slate-300">輸入註冊時使用的手機號碼</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold">4</div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">接收驗證碼</h3>
                    <p className="text-slate-300 mb-2">點擊「發送驗證碼」，系統會發送 6 位數驗證碼到您的手機</p>
                    <p className="text-slate-300 text-sm">驗證碼有效期為 10 分鐘</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold">5</div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">輸入驗證碼並設定新密碼</h3>
                    <p className="text-slate-300 mb-2">輸入收到的驗證碼，然後設定新密碼：</p>
                    <ul className="list-disc pl-6 space-y-1 text-slate-300">
                      <li>新密碼至少 8 個字元</li>
                      <li>建議包含英文和數字</li>
                      <li>確認新密碼（輸入兩次）</li>
                    </ul>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold">6</div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">完成重設</h3>
                    <p className="text-slate-300">點擊「確認重設」，密碼重設完成，可以使用新密碼登入</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">方式二：電子郵件重設密碼</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-fuchsia-500 rounded-full flex items-center justify-center text-white font-bold">1</div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">選擇電子郵件驗證</h3>
                    <p className="text-slate-300">在忘記密碼頁面選擇「使用電子郵件重設」</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-fuchsia-500 rounded-full flex items-center justify-center text-white font-bold">2</div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">輸入電子郵件</h3>
                    <p className="text-slate-300">輸入註冊時使用的電子郵件地址</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-fuchsia-500 rounded-full flex items-center justify-center text-white font-bold">3</div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">接收重設連結</h3>
                    <p className="text-slate-300 mb-2">系統會發送重設密碼連結到您的電子郵件</p>
                    <p className="text-slate-300 text-sm">請檢查收件匣和垃圾郵件資料夾</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-fuchsia-500 rounded-full flex items-center justify-center text-white font-bold">4</div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">點擊連結並設定新密碼</h3>
                    <p className="text-slate-300">點擊郵件中的重設連結，進入密碼重設頁面，設定新密碼</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">常見問題</h2>
              <div className="space-y-4">
                <div className="bg-slate-800 rounded-lg p-4">
                  <h3 className="text-white font-bold mb-2">Q: 收不到驗證碼怎麼辦？</h3>
                  <p className="text-slate-300 text-sm">A: 請檢查手機號碼是否正確、訊號是否良好，等待 60 秒後可以重新發送。如果仍收不到，請聯繫客服。</p>
                </div>
                <div className="bg-slate-800 rounded-lg p-4">
                  <h3 className="text-white font-bold mb-2">Q: 收不到重設郵件怎麼辦？</h3>
                  <p className="text-slate-300 text-sm">A: 請檢查電子郵件地址是否正確、檢查垃圾郵件資料夾。如果仍收不到，請聯繫客服。</p>
                </div>
                <div className="bg-slate-800 rounded-lg p-4">
                  <h3 className="text-white font-bold mb-2">Q: 手機號碼和電子郵件都忘記了怎麼辦？</h3>
                  <p className="text-slate-300 text-sm">A: 請聯繫客服，提供身份證明文件，客服會協助您重設密碼。</p>
                </div>
                <div className="bg-slate-800 rounded-lg p-4">
                  <h3 className="text-white font-bold mb-2">Q: 重設連結過期了怎麼辦？</h3>
                  <p className="text-slate-300 text-sm">A: 重設連結有效期為 24 小時，如果過期請重新申請重設。</p>
                </div>
              </div>
            </section>

            <section className="mb-8 bg-cyan-900/10 border border-cyan-500/20 rounded-xl p-6">
              <h2 className="text-xl font-bold text-cyan-400 mb-4">💡 安全建議</h2>
              <ul className="space-y-2 text-slate-300">
                <li>• 設定強密碼，包含英文、數字，至少 8 個字元</li>
                <li>• 定期更換密碼，提高帳戶安全性</li>
                <li>• 不要與他人分享密碼</li>
                <li>• 如果懷疑帳戶被盜用，請立即重設密碼並聯繫客服</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

