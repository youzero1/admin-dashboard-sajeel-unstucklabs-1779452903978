export type Status = 'active' | 'inactive' | 'pending' | 'completed';

export type Trend = 'up' | 'down' | 'neutral';

export type MetricCard = {
  id: string;
  title: string;
  value: string;
  change: string;
  trend: Trend;
  icon: string;
  color: string;
};

export type Transaction = {
  id: string;
  name: string;
  email: string;
  amount: string;
  status: Status;
  date: string;
  avatar: string;
};

export type Task = {
  id: string;
  title: string;
  priority: 'high' | 'medium' | 'low';
  assignee: string;
  due: string;
  completed: boolean;
};

export type RevenueData = {
  month: string;
  revenue: number;
  expenses: number;
  profit: number;
};

export type TrafficData = {
  name: string;
  value: number;
  color: string;
};

export type NavItem = {
  id: string;
  label: string;
  icon: string;
  badge?: number;
};
