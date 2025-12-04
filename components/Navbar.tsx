import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Menu, X } from 'lucide-react';

const YSLogo = () => (
  <div className="relative group flex items-center justify-center">
    <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-fuchsia-600 rounded-lg blur opacity-40 group-hover:opacity-100 transition duration-500 animate-pulse-glow"></div>
    <div className="relative flex items-center">
      <span className="text-2xl md:text-3xl font-black italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-fuchsia-400 mr-2 drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]">
        YS89.com
      </span>
    </div>
  </div>
);

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: '首頁' },
    { path: '/forum', label: '討論區' },
    { path: '/games/sports', label: '體育', banner: '/images/已使用/體育 banner2.png' },
    { path: '/games/baccarat', label: '真人', banner: '/images/已使用/真人banner2.png' },
    { path: '/games/electronic', label: '電子', banner: '/images/已使用/電子banner1.png' },
    { path: '/games/poker', label: '棋牌', banner: '/images/已使用/棋牌banner1.png' },
    { path: '/promotions', label: '優惠', banner: '/images/已使用/優惠banner1.png' },
  ];

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="bg-slate-950/90 backdrop-blur-md text-white sticky top-0 z-50 border-b border-slate-800 shadow-2xl shadow-cyan-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2 cursor-pointer focus:outline-none hover:scale-105 transition-transform duration-300">
            <YSLogo />
          </Link>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3 py-2 rounded-full text-sm font-bold transition-all duration-300 relative group ${
                    isActive(item.path)
                      ? 'text-cyan-950 bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.5)] scale-105'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  {/* Banner背景圖片 */}
                  {item.banner && (
                    <>
                      <div 
                        className={`absolute inset-0 rounded-full bg-cover bg-center transition-opacity duration-300 ${
                          isActive(item.path) ? 'opacity-30' : 'opacity-0 group-hover:opacity-40'
                        }`}
                        style={{ backgroundImage: `url("${item.banner}")` }}
                      />
                      <div className={`absolute inset-0 rounded-full bg-gradient-to-r transition-opacity duration-300 ${
                        isActive(item.path) ? 'from-slate-950/70 via-slate-950/50 to-slate-950/70' : 'from-slate-950/80 via-slate-950/60 to-slate-950/80 opacity-0 group-hover:opacity-100'
                      }`}></div>
                    </>
                  )}
                  <span className="relative z-10">{item.label}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button className="p-2 text-slate-400 hover:text-cyan-400 transition-colors">
              <Search size={20} />
            </button>
            <button 
              className="md:hidden p-2 text-slate-400 hover:text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
            <Link
              to="/register"
              className="hidden md:block bg-gradient-to-r from-fuchsia-600 to-purple-700 hover:from-fuchsia-500 hover:to-purple-600 text-white px-5 py-2 rounded-full text-sm font-bold transition-all shadow-lg shadow-fuchsia-900/50 border border-fuchsia-500/30 hover:scale-105 active:scale-95"
            >
              會員登入
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-slate-950 border-t border-slate-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block px-3 py-2 rounded-md text-base font-medium relative group ${
                  isActive(item.path)
                    ? 'text-cyan-400 bg-slate-900'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {/* Mobile Banner背景圖片 */}
                {item.banner && (
                  <>
                    <div 
                      className={`absolute inset-0 rounded-md bg-cover bg-center transition-opacity duration-300 ${
                        isActive(item.path) ? 'opacity-30' : 'opacity-0 group-hover:opacity-40'
                      }`}
                      style={{ backgroundImage: `url("${item.banner}")` }}
                    />
                    <div className={`absolute inset-0 rounded-md bg-gradient-to-r transition-opacity duration-300 ${
                      isActive(item.path) ? 'from-slate-950/70 via-slate-950/50 to-slate-950/70' : 'from-slate-950/80 via-slate-950/60 to-slate-950/80 opacity-0 group-hover:opacity-100'
                    }`}></div>
                  </>
                )}
                <span className="relative z-10">{item.label}</span>
              </Link>
            ))}
            <Link
              to="/register"
              className="block w-full text-center mt-4 px-5 py-3 rounded-lg bg-gradient-to-r from-fuchsia-600 to-purple-700 text-white font-bold"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              會員登入
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};
