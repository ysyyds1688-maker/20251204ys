import { SEO } from '../../../../components/SEO';
import { Breadcrumb } from '../../../../components/Breadcrumb';
import { AlertTriangle, CheckCircle, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export const WithdrawalTroubleshootingPage = () => {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '出金申請被拒絕怎麼辦？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '出金申請被拒絕通常因為未完成身份驗證、未達到流水要求或帳戶資訊不符。請檢查帳戶狀態並聯繫客服。',
        },
      },
      {
        '@type': 'Question',
        name: '出金超過預期時間未到帳？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '如果出金超過預期時間，請先檢查銀行帳戶或加密貨幣錢包，確認是否已到帳。如未到帳，請聯繫客服查詢。',
        },
      },
    ],
  };

  return (
    <>
      <SEO
        title="出金問題排除 - 常見出金問題解決方法"
        description="YS 娛樂城出金問題排除指南：詳細說明常見出金問題的解決方法，包含申請被拒絕、到帳延遲等問題。"
        keywords="出金問題,出金失敗,出金延遲,出金排除"
        canonical="/guides/casino/withdrawal/troubleshooting"
        structuredData={faqSchema}
      />
      <div className="min-h-screen bg-slate-950 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { name: '新手教學', url: '/guides' },
              { name: '娛樂城攻略', url: '/guides/casino' },
              { name: '出金相關', url: '/guides/casino/withdrawal' },
              { name: '出金問題排除', url: '/guides/casino/withdrawal/troubleshooting' },
            ]}
          />
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6">出金問題排除</h1>
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 md:p-12">
            <div className="space-y-6">
              <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                <div className="flex items-center mb-3">
                  <AlertTriangle className="text-red-400 mr-2" size={24} />
                  <h3 className="text-xl font-bold text-red-400">問題一：出金申請被拒絕</h3>
                </div>
                <p className="text-slate-300 mb-3">可能原因：</p>
                <ul className="list-disc pl-6 space-y-1 text-slate-300">
                  <li>未完成身份驗證</li>
                  <li>未達到流水要求</li>
                  <li>帳戶資訊與儲值帳戶不符</li>
                  <li>帳戶存在異常活動</li>
                </ul>
                <p className="text-slate-300 mt-3">解決方法：完成身份驗證、檢查流水要求、聯繫客服。</p>
              </div>
              <div className="bg-amber-900/20 border border-amber-500/30 rounded-xl p-6">
                <div className="flex items-center mb-3">
                  <Clock className="text-amber-400 mr-2" size={24} />
                  <h3 className="text-xl font-bold text-amber-400">問題二：出金超過預期時間</h3>
                </div>
                <p className="text-slate-300 mb-3">處理步驟：</p>
                <ol className="list-decimal pl-6 space-y-1 text-slate-300">
                  <li>檢查銀行帳戶或加密貨幣錢包是否已到帳</li>
                  <li>確認出金申請狀態（審核中/已通過）</li>
                  <li>聯繫客服查詢具體原因</li>
                  <li>提供出金申請編號以便查詢</li>
                </ol>
              </div>
              <div className="bg-emerald-900/20 border border-emerald-500/30 rounded-xl p-6">
                <div className="flex items-center mb-3">
                  <CheckCircle className="text-emerald-400 mr-2" size={24} />
                  <h3 className="text-xl font-bold text-emerald-400">聯繫客服</h3>
                </div>
                <p className="text-slate-300">如果以上方法無法解決問題，請聯繫我們的24小時客服團隊：</p>
                <Link to="/trust/contact" className="text-cyan-400 hover:text-cyan-300 font-bold mt-2 inline-block">
                  前往客服頁面 →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

