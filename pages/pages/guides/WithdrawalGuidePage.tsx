import { SEO } from '../../components/SEO';
import { Breadcrumb } from '../../components/Breadcrumb';
import { CheckCircle, Clock, ShieldCheck } from 'lucide-react';

export const WithdrawalGuidePage = () => {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '如何出金？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '出金流程：登入帳號 → 進入出金頁面 → 選擇出金方式（銀行轉帳或USDT） → 輸入出金金額 → 確認申請 → 等待審核（通常5分鐘內） → 到帳。',
        },
      },
      {
        '@type': 'Question',
        name: '出金需要多久時間？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'YS 娛樂城提供快速出金服務，一般情況下5分鐘內即可到帳。USDT出金速度最快，銀行轉帳可能需要1-3個工作天。',
        },
      },
    ],
  };

  return (
    <>
      <SEO
        title="如何出金？YS 娛樂城出金教學完整指南"
        description="YS 娛樂城出金教學：詳細說明出金流程、出金方式（USDT、銀行轉帳）、出金時間、注意事項等。快速出金5分鐘內到帳。"
        keywords="如何出金,YS娛樂城出金,出金教學,快速出金,USDT出金,出金流程"
        canonical="/guides/withdrawal"
        structuredData={faqSchema}
      />
      
      <div className="min-h-screen bg-slate-950 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { name: '新手教學', url: '/guides' },
              { name: '如何出金', url: '/guides/withdrawal' },
            ]}
          />
          
          <article>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-6">
              如何出金？
            </h1>
            
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 md:p-12">
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                YS 娛樂城提供快速、安全的出金服務，支援多種出金方式。本教學將詳細說明出金流程與注意事項，讓您輕鬆完成出金申請。
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">出金步驟</h2>
                <div className="space-y-6">
                  {[
                    { step: 1, title: '登入帳號', desc: '使用您的帳號密碼登入 YS 娛樂城' },
                    { step: 2, title: '進入出金頁面', desc: '點擊右上角「我的帳戶」→「出金」' },
                    { step: 3, title: '選擇出金方式', desc: '選擇銀行轉帳或 USDT（推薦，速度最快）' },
                    { step: 4, title: '輸入出金資訊', desc: '填寫出金金額、收款帳戶資訊' },
                    { step: 5, title: '確認申請', desc: '檢查資訊無誤後，點擊「確認出金」' },
                    { step: 6, title: '等待審核', desc: '系統自動審核，通常5分鐘內完成' },
                    { step: 7, title: '到帳', desc: '審核通過後，款項會立即到帳' },
                  ].map((item) => (
                    <div key={item.step} className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold">
                        {item.step}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                        <p className="text-slate-300">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">出金方式</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                    <div className="flex items-center mb-3">
                      <Clock className="text-cyan-400 mr-2" size={24} />
                      <h3 className="text-xl font-bold text-white">USDT 出金</h3>
                    </div>
                    <p className="text-slate-300 mb-2">推薦方式，速度最快</p>
                    <ul className="text-slate-400 text-sm space-y-1">
                      <li>• 5分鐘內到帳</li>
                      <li>• 手續費低</li>
                      <li>• 支援 TRC20、ERC20</li>
                    </ul>
                  </div>
                  <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                    <div className="flex items-center mb-3">
                      <ShieldCheck className="text-fuchsia-400 mr-2" size={24} />
                      <h3 className="text-xl font-bold text-white">銀行轉帳</h3>
                    </div>
                    <p className="text-slate-300 mb-2">傳統方式，安全可靠</p>
                    <ul className="text-slate-400 text-sm space-y-1">
                      <li>• 1-3個工作天到帳</li>
                      <li>• 需提供銀行帳戶資訊</li>
                      <li>• 適合大額出金</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="mb-8 bg-cyan-900/10 border border-cyan-500/20 rounded-xl p-6">
                <h2 className="text-xl font-bold text-cyan-400 mb-4 flex items-center">
                  <CheckCircle size={20} className="mr-2" />
                  出金注意事項
                </h2>
                <ul className="space-y-2 text-slate-300">
                  <li>• 出金前需完成身份驗證</li>
                  <li>• 單次出金最低金額為 100 元</li>
                  <li>• 每日出金上限請參考會員等級</li>
                  <li>• 出金帳戶需與儲值帳戶一致</li>
                  <li>• 需完成流水要求才能出金</li>
                </ul>
              </section>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

