import { Activity, Clock, Target, Zap } from 'lucide-react';

const stats = [
  { label: 'Avg. Session', value: '4m 32s', icon: Clock, color: 'bg-purple-100 text-purple-600' },
  { label: 'Bounce Rate', value: '28.4%', icon: Activity, color: 'bg-rose-100 text-rose-600' },
  { label: 'Goal Progress', value: '76%', icon: Target, color: 'bg-emerald-100 text-emerald-600' },
  { label: 'Performance', value: '94pts', icon: Zap, color: 'bg-amber-100 text-amber-600' },
];

export default function QuickStats() {
  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
      <h2 className="text-base font-semibold text-slate-800 mb-4">Quick Stats</h2>
      <div className="grid grid-cols-2 gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className="flex flex-col gap-2 p-3 rounded-xl bg-slate-50">
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${stat.color}`}>
                <Icon className="w-4 h-4" />
              </div>
              <p className="text-lg font-bold text-slate-800">{stat.value}</p>
              <p className="text-xs text-slate-500">{stat.label}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
