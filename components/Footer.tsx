import { Link } from 'react-router-dom';
import { Zap, BookOpen, Globe } from 'lucide-react';

export const Footer = () => (
  <footer className="bg-slate-950 text-slate-400 pt-16 pb-8 border-t border-slate-900 relative overflow-hidden">
    <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-900/10 rounded-full blur-3xl pointer-events-none animate-blob"></div>
    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-fuchsia-900/10 rounded-full blur-3xl pointer-events-none animate-blob animation-delay-2000"></div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
        <div>
          <h4 className="text-white font-bold mb-4 flex items-center">
            <Zap size={16} className="text-cyan-400 mr-2" /> 熱門分類
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/games/baccarat" className="hover:text-cyan-400 transition-colors">
                YS 嚴選百家樂
              </Link>
            </li>
            <li>
              <Link to="/games/poker" className="hover:text-cyan-400 transition-colors">
                線上麻將推薦
              </Link>
            </li>
            <li>
              <Link to="/games/sports" className="hover:text-cyan-400 transition-colors">
                體育運彩盤口
              </Link>
            </li>
            <li>
              <Link to="/games/slots" className="hover:text-cyan-400 transition-colors">
                電子老虎機
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4 flex items-center">
            <BookOpen size={16} className="text-fuchsia-400 mr-2" /> 策略教學
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/guides/games" className="hover:text-fuchsia-400 transition-colors">
                遊戲攻略
              </Link>
            </li>
            <li>
              <Link to="/guides/casino" className="hover:text-fuchsia-400 transition-colors">
                娛樂城攻略
              </Link>
            </li>
            <li>
              <Link to="/guides/register" className="hover:text-fuchsia-400 transition-colors">
                如何註冊
              </Link>
            </li>
            <li>
              <Link to="/guides/withdrawal" className="hover:text-fuchsia-400 transition-colors">
                如何出金
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">推薦與評比</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/recommendations" className="hover:text-white transition-colors">
                娛樂城推薦
              </Link>
            </li>
            <li>
              <Link to="/recommendations/best-casinos/2025" className="hover:text-white transition-colors">
                2025年最佳推薦
              </Link>
            </li>
            <li>
              <Link to="/recommendations/best-casinos/fast-withdrawal" className="hover:text-white transition-colors">
                快速出金推薦
              </Link>
            </li>
            <li>
              <Link to="/guides/scam-prevention" className="hover:text-white transition-colors">
                詐騙避免指南
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">關於 YS</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/trust/about" className="hover:text-white transition-colors">
                關於我們
              </Link>
            </li>
            <li>
              <Link to="/trust/contact" className="hover:text-white transition-colors">
                聯絡方式
              </Link>
            </li>
            <li>
              <Link to="/trust/security" className="hover:text-white transition-colors">
                出金保障
              </Link>
            </li>
            <li>
              <Link to="/trust/influencer" className="hover:text-white transition-colors">
                合作網紅推薦
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">訂閱 YS 週報</h4>
          <p className="text-xs mb-4 text-slate-500">獲取每週最新的賠率分析與獨家優惠碼。</p>
          <div className="flex">
            <input
              type="email"
              placeholder="您的 Email"
              className="bg-slate-900 border border-slate-800 rounded-l-md px-3 py-2 text-sm w-full focus:ring-1 focus:ring-cyan-400 focus:outline-none text-white placeholder-slate-600"
            />
            <button className="bg-cyan-500 text-slate-900 px-3 py-2 rounded-r-md font-bold text-sm hover:bg-cyan-400 transition-colors">
              GO
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
        <div className="mb-4 md:mb-0">&copy; 2024 YS Forum. All rights reserved.</div>
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-1">
            <Globe size={16} />
            <span>繁體中文</span>
          </div>
          <span className="text-xs text-slate-600">本站僅供資訊交流，請遵守當地法律規範。</span>
        </div>
      </div>
    </div>
  </footer>
);

