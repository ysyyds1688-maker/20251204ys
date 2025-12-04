import { SEO } from '../../../../components/SEO';
import { Breadcrumb } from '../../../../components/Breadcrumb';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const RegistrationIndexPage = () => {
  const guides = [
    {
      title: '完整註冊流程教學',
      url: '/guides/casino/registration/step-by-step',
      desc: '詳細的註冊步驟說明，從填寫資料到完成驗證',
    },
    {
      title: '身份驗證教學',
      url: '/guides/casino/registration/verification',
      desc: '如何完成身份驗證，啟用所有功能',
    },
    {
      title: '優惠領取教學',
      url: '/guides/casino/registration/bonus-claim',
      desc: '註冊後如何領取體驗金和首存優惠',
    },
  ];

  return (
    <>
      <SEO
        title="註冊相關教學 - 完整流程、驗證、優惠領取"
        description="YS 娛樂城註冊教學：提供完整註冊流程、身份驗證、優惠領取等詳細教學，幫助新玩家快速完成註冊。"
        keywords="註冊教學,註冊流程,身份驗證,優惠領取,娛樂城註冊"
        canonical="/guides/casino/registration"
      />
      <div className="min-h-screen bg-slate-950 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { name: '新手教學', url: '/guides' },
              { name: '娛樂城攻略', url: '/guides/casino' },
              { name: '註冊相關', url: '/guides/casino/registration' },
            ]}
          />
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6">註冊相關教學</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {guides.map((guide) => (
              <Link
                key={guide.url}
                to={guide.url}
                className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-cyan-500/50 hover:bg-slate-800 transition-all group"
              >
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {guide.title}
                </h3>
                <p className="text-slate-400 mb-4">{guide.desc}</p>
                <ArrowRight size={16} className="text-cyan-400 group-hover:translate-x-1 transition-transform" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

