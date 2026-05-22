import MetricCard from '@/components/dashboard/MetricCard';
import RevenueChart from '@/components/dashboard/RevenueChart';
import TrafficChart from '@/components/dashboard/TrafficChart';
import TransactionsTable from '@/components/dashboard/TransactionsTable';
import TaskList from '@/components/dashboard/TaskList';
import QuickStats from '@/components/dashboard/QuickStats';
import { metrics, transactions } from '@/lib/data';
import { useTasks } from '@/hooks/useTasks';

export default function DashboardPage() {
  const { tasks, toggleTask } = useTasks();

  return (
    <div className="space-y-6">
      {/* Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {metrics.map((card) => (
          <MetricCard key={card.id} card={card} />
        ))}
      </div>

      {/* Charts row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2">
          <RevenueChart />
        </div>
        <div>
          <TrafficChart />
        </div>
      </div>

      {/* Transactions + Tasks + Quick Stats */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
        <div className="xl:col-span-2">
          <TransactionsTable transactions={transactions} />
        </div>
        <div className="space-y-4">
          <QuickStats />
          <TaskList tasks={tasks} onToggle={toggleTask} />
        </div>
      </div>
    </div>
  );
}
