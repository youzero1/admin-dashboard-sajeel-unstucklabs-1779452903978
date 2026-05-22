import clsx from 'clsx';
import {
  DollarSign,
  Users,
  ShoppingCart,
  TrendingUp,
  TrendingDown,
  Minus,
} from 'lucide-react';
import type { MetricCard as MetricCardType } from '@/types';

type MetricCardProps = {
  card: MetricCardType;
};

const iconMap: Record<string, any> = {
  DollarSign,
  Users,
  ShoppingCart,
  TrendingUp,
};

const colorMap: Record<string, string> = {
  indigo: 'bg-indigo-100 text-indigo-600',
  blue: 'bg-blue-100 text-blue-600',
  emerald: 'bg-emerald-100 text-emerald-600',
  amber: 'bg-amber-100 text-amber-600',
};

export default function MetricCard({ card }: MetricCardProps) {
  const Icon = iconMap[card.icon] || DollarSign;
  const colorClass = colorMap[card.color] || colorMap.indigo;

  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500">{card.title}</p>
          <p className="text-3xl font-bold text-slate-800 mt-1">{card.value}</p>
        </div>
        <div className={clsx('w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0', colorClass)}>
          <Icon className="w-6 h-6" />
        </div>
      </div>
      <div className="mt-4 flex items-center gap-1">
        {card.trend === 'up' && <TrendingUp className="w-4 h-4 text-emerald-500" />}
        {card.trend === 'down' && <TrendingDown className="w-4 h-4 text-red-500" />}
        {card.trend === 'neutral' && <Minus className="w-4 h-4 text-slate-400" />}
        <span
          className={clsx(
            'text-sm font-semibold',
            card.trend === 'up' && 'text-emerald-600',
            card.trend === 'down' && 'text-red-600',
            card.trend === 'neutral' && 'text-slate-500'
          )}
        >
          {card.change}
        </span>
        <span className="text-sm text-slate-400 ml-1">vs last month</span>
      </div>
    </div>
  );
}
