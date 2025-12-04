import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav className="flex items-center space-x-2 text-sm text-slate-400 mb-6" aria-label="Breadcrumb">
      <Link 
        to="/" 
        className="flex items-center hover:text-cyan-400 transition-colors"
        aria-label="首頁"
      >
        <Home size={16} />
      </Link>
      {items.map((item, index) => (
        <div key={item.url} className="flex items-center space-x-2">
          <ChevronRight size={14} className="text-slate-600" />
          {index === items.length - 1 ? (
            <span className="text-white font-medium">{item.name}</span>
          ) : (
            <Link 
              to={item.url} 
              className="hover:text-cyan-400 transition-colors"
            >
              {item.name}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
};

