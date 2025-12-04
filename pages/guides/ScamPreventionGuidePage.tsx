import { SEO } from '../../components/SEO';
import { Breadcrumb } from '../../components/Breadcrumb';
import { AlertTriangle, ShieldCheck } from 'lucide-react';

export const ScamPreventionGuidePage = () => {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '如何避免娛樂城詐騙？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '選擇有信譽的平台、檢查是否有合法執照、查看玩家評價、注意出金速度與客服回應、避免過度優惠的紅利等。',
        },
      },
    ],
  };

  return (
    <>
      <SEO
        title="娛樂城詐騙避免指南 - 如何選擇安全平台"
        description="YS 娛樂城詐騙避免指南：詳細說明如何識別詐騙平台、選擇安全可靠的娛樂城、保護個人資料與資金安全。"
        keywords="娛樂城詐騙,如何避免詐騙,安全娛樂城,娛樂城推薦,詐騙平台"
        canonical="/guides/scam-prevention"
        structuredData={faqSchema}
      />
      <div className="min-h-screen bg-slate-950 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ name: '新手教學', url: '/guides' }, { name: '娛樂城詐騙避免指南', url: '/guides/scam-prevention' }]} />
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6">娛樂城詐騙避免指南</h1>
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 md:p-12">
            <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6 mb-8">
              <div className="flex items-center mb-3">
                <AlertTriangle className="text-red-400 mr-2" size={24} />
                <h2 className="text-xl font-bold text-red-400">詐騙平台常見特徵</h2>
              </div>
              <ul className="space-y-2 text-slate-300">
                <li>• 過度誇大的優惠（如存1000送10000）</li>
                <li>• 出金速度極慢或拒絕出金</li>
                <li>• 客服回應緩慢或無法聯繫</li>
                <li>• 沒有合法執照或認證</li>
                <li>• 要求提供過多個人資料</li>
              </ul>
            </div>
            <div className="bg-emerald-900/20 border border-emerald-500/30 rounded-xl p-6">
              <div className="flex items-center mb-3">
                <ShieldCheck className="text-emerald-400 mr-2" size={24} />
                <h2 className="text-xl font-bold text-emerald-400">如何選擇安全平台</h2>
              </div>
              <ul className="space-y-2 text-slate-300">
                <li>• 選擇有信譽、有合法執照的平台</li>
                <li>• 查看玩家評價與出金速度</li>
                <li>• 確認客服回應速度與服務品質</li>
                <li>• 注意隱私政策與資料保護措施</li>
                <li>• 從官方管道下載APP，避免第三方連結</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

