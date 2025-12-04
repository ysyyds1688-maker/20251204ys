import { SEO } from '../../components/SEO';
import { Breadcrumb } from '../../components/Breadcrumb';
import { Play } from 'lucide-react';
import { Link } from 'react-router-dom';

export const SportsPage = () => {
  return (
    <>
      <SEO
        title="體育投注 - 賽事分析與下注教學"
        description="YS 娛樂城提供最完整的體育投注服務，包含NBA、足球、棒球等多種賽事，提供專業賽事分析與下注教學。"
        keywords="體育投注,運彩,體育下注,賽事分析,YS娛樂城"
        canonical="/games/sports"
      />
      <div className="min-h-screen bg-slate-950">
        {/* Hero Section with Cover Image */}
        <div className="relative w-full overflow-hidden" style={{ aspectRatio: '16/9', paddingTop: '80px', minHeight: '400px' }}>
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${encodeURI('/images/已使用/體育 banner2.png')})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/50 to-slate-950/80"></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
            <h1 className="text-4xl md:text-5xl font-black text-white mb-4">體育投注</h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              專業賽事分析，即時賠率更新
            </p>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Breadcrumb items={[{ name: '遊戲專區', url: '/games' }, { name: '體育投注', url: '/games/sports' }]} />
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
            <p className="text-slate-300 mb-6">提供NBA、足球、棒球等多種賽事投注服務。</p>
            <Link to="/register" className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg text-white font-bold">
              <Play size={20} className="mr-2" />立即遊玩
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

