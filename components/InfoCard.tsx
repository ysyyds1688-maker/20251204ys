import React from 'react';
import { LucideIcon } from 'lucide-react';

interface InfoCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  example: string;
  color: string;
  className?: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, description, icon: Icon, example, color, className = '' }) => {
  const colorClasses: Record<string, string> = {
    blue: 'bg-blue-50 text-blue-600 border-blue-200',
    green: 'bg-green-50 text-green-600 border-green-200',
    purple: 'bg-purple-50 text-purple-600 border-purple-200',
    amber: 'bg-amber-50 text-amber-600 border-amber-200',
    rose: 'bg-rose-50 text-rose-600 border-rose-200',
  };

  const currentClass = colorClasses[color] || colorClasses.blue;

  return (
    <div className={`p-6 rounded-xl border-2 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-white border-slate-100 ${className}`}>
      <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${currentClass}`}>
        <Icon size={24} />
      </div>
      <h3 className="text-xl font-bold text-slate-800 mb-2">{title}</h3>
      <p className="text-slate-600 mb-4">{description}</p>
      <div className="bg-slate-50 p-3 rounded-md border border-slate-200">
        <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">Example Prompt</span>
        <code className="text-sm text-slate-700 block font-mono break-all">"{example}"</code>
      </div>
    </div>
  );
};

export default InfoCard;