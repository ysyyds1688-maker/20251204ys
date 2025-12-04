import { SEO } from '../components/SEO';
import { Breadcrumb } from '../components/Breadcrumb';
import { Gift, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export const PromotionsPage = () => {
  return (
    <>
      <SEO
        title="優惠活動 - 體驗金168、返水優惠"
        description="YS 娛樂城優惠活動：體驗金168、首存優惠、返水優惠、每月活動等。立即查看最新優惠，領取專屬紅利。"
        keywords="優惠活動,體驗金,體驗金168,首存優惠,返水優惠,YS娛樂城優惠"
        canonical="/promotions"
      />
      <div className="min-h-screen bg-slate-950">
        {/* Hero Section with Cover Image */}
        <div className="relative w-full overflow-hidden" style={{ aspectRatio: '16/9', paddingTop: '80px' }}>
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(/images/已使用/優惠banner1.png)',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/50 to-slate-950/80"></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
            <h1 className="text-4xl md:text-5xl font-black text-white mb-4">優惠活動</h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              體驗金168、首存優惠、返水優惠等豐富活動
            </p>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Breadcrumb items={[{ name: '優惠活動', url: '/promotions' }]} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div 
              className="relative bg-gradient-to-br from-cyan-900/30 to-fuchsia-900/30 border border-cyan-500/30 rounded-2xl p-8 overflow-hidden group"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-20 group-hover:opacity-30 transition-opacity"
                style={{
                  backgroundImage: 'url(/images/promotions/welcome-bonus.png)',
                }}
              ></div>
              <div className="relative z-10">
                <Gift className="text-cyan-400 mb-4" size={40} />
                <h2 className="text-2xl font-bold text-white mb-4">體驗金168</h2>
                <p className="text-slate-300 mb-6">新會員註冊即送體驗金168，無需存款即可體驗遊戲</p>
                <Link to="/guides/register" className="text-cyan-400 font-bold hover:text-cyan-300">
                  查看申請教學 →
                </Link>
              </div>
            </div>
            <div 
              className="relative bg-gradient-to-br from-fuchsia-900/30 to-purple-900/30 border border-fuchsia-500/30 rounded-2xl p-8 overflow-hidden group"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-20 group-hover:opacity-30 transition-opacity"
                style={{
                  backgroundImage: 'url(/images/promotions/first-deposit.png)',
                }}
              ></div>
              <div className="relative z-10">
                <Sparkles className="text-fuchsia-400 mb-4" size={40} />
                <h2 className="text-2xl font-bold text-white mb-4">首存優惠</h2>
                <p className="text-slate-300 mb-6">首次儲值享100%紅利，最高可領取10,000元</p>
                <Link to="/register" className="text-fuchsia-400 font-bold hover:text-fuchsia-300">
                  立即申請 →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

