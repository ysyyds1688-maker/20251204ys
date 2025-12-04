import { SEO } from '../../components/SEO';
import { Breadcrumb } from '../../components/Breadcrumb';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Gift, Sparkles } from 'lucide-react';

export const MonthlyPromotionsPage = () => {
  const { year, month } = useParams<{ year: string; month: string }>();
  const currentYear = year || '2025';
  const currentMonth = month || '01';
  
  const monthNames: { [key: string]: string } = {
    '01': '一月',
    '02': '二月',
    '03': '三月',
    '04': '四月',
    '05': '五月',
    '06': '六月',
    '07': '七月',
    '08': '八月',
    '09': '九月',
    '10': '十月',
    '11': '十一月',
    '12': '十二月',
  };

  const promotions = [
    {
      title: '週末加碼優惠',
      desc: '每週末儲值可獲得額外10%紅利',
      icon: Gift,
      color: 'text-fuchsia-400',
    },
    {
      title: '生日禮金',
      desc: '當月生日會員可領取生日禮金',
      icon: Sparkles,
      color: 'text-cyan-400',
    },
  ];

  return (
    <>
      <SEO
        title={`${currentYear}年${monthNames[currentMonth]}優惠活動 - YS 娛樂城`}
        description={`YS 娛樂城${currentYear}年${monthNames[currentMonth]}優惠活動：查看當月所有優惠活動，包含週末加碼、生日禮金等。`}
        keywords={`${currentYear}年${monthNames[currentMonth]}優惠,每月優惠,優惠活動`}
        canonical={`/promotions/monthly/${currentYear}/${currentMonth}`}
      />
      <div className="min-h-screen bg-slate-950 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { name: '優惠活動', url: '/promotions' },
              { name: `${currentYear}年${monthNames[currentMonth]}`, url: `/promotions/monthly/${currentYear}/${currentMonth}` },
            ]}
          />
          
          <div className="flex items-center mb-6">
            <Calendar className="text-cyan-400 mr-3" size={32} />
            <h1 className="text-4xl md:text-5xl font-black text-white">
              {currentYear}年{monthNames[currentMonth]}優惠活動
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {promotions.map((promo, index) => (
              <div
                key={index}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-cyan-500/50 transition-all"
              >
                <promo.icon className={`${promo.color} mb-4`} size={32} />
                <h3 className="text-xl font-bold text-white mb-2">{promo.title}</h3>
                <p className="text-slate-400">{promo.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">其他月份</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {Object.entries(monthNames).map(([key, name]) => (
                <Link
                  key={key}
                  to={`/promotions/monthly/${currentYear}/${key}`}
                  className={`px-4 py-2 rounded-lg text-center font-bold transition-colors ${
                    currentMonth === key
                      ? 'bg-cyan-600 text-white'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  {name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

