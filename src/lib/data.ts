import type { MetricCard, Transaction, Task, RevenueData, TrafficData } from '@/types';

export const metrics: MetricCard[] = [
  {
    id: '1',
    title: 'Total Revenue',
    value: '$84,254',
    change: '+12.5%',
    trend: 'up',
    icon: 'DollarSign',
    color: 'indigo',
  },
  {
    id: '2',
    title: 'Active Users',
    value: '24,521',
    change: '+8.2%',
    trend: 'up',
    icon: 'Users',
    color: 'blue',
  },
  {
    id: '3',
    title: 'New Orders',
    value: '1,893',
    change: '-3.1%',
    trend: 'down',
    icon: 'ShoppingCart',
    color: 'emerald',
  },
  {
    id: '4',
    title: 'Conversion Rate',
    value: '3.24%',
    change: '+0.4%',
    trend: 'up',
    icon: 'TrendingUp',
    color: 'amber',
  },
];

export const transactions: Transaction[] = [
  {
    id: 'TXN-001',
    name: 'Alice Johnson',
    email: 'alice@example.com',
    amount: '$1,240.00',
    status: 'completed',
    date: 'Jan 15, 2025',
    avatar: 'AJ',
  },
  {
    id: 'TXN-002',
    name: 'Bob Martinez',
    email: 'bob@example.com',
    amount: '$890.50',
    status: 'pending',
    date: 'Jan 14, 2025',
    avatar: 'BM',
  },
  {
    id: 'TXN-003',
    name: 'Carol White',
    email: 'carol@example.com',
    amount: '$3,100.00',
    status: 'completed',
    date: 'Jan 14, 2025',
    avatar: 'CW',
  },
  {
    id: 'TXN-004',
    name: 'David Chen',
    email: 'david@example.com',
    amount: '$560.25',
    status: 'active',
    date: 'Jan 13, 2025',
    avatar: 'DC',
  },
  {
    id: 'TXN-005',
    name: 'Eva Brown',
    email: 'eva@example.com',
    amount: '$2,480.00',
    status: 'inactive',
    date: 'Jan 12, 2025',
    avatar: 'EB',
  },
  {
    id: 'TXN-006',
    name: 'Frank Lee',
    email: 'frank@example.com',
    amount: '$730.80',
    status: 'completed',
    date: 'Jan 11, 2025',
    avatar: 'FL',
  },
];

export const tasks: Task[] = [
  {
    id: 'T-001',
    title: 'Review Q1 financial report',
    priority: 'high',
    assignee: 'Alice J.',
    due: 'Jan 20',
    completed: false,
  },
  {
    id: 'T-002',
    title: 'Update product roadmap',
    priority: 'medium',
    assignee: 'Bob M.',
    due: 'Jan 22',
    completed: true,
  },
  {
    id: 'T-003',
    title: 'Fix payment gateway bug',
    priority: 'high',
    assignee: 'Carol W.',
    due: 'Jan 18',
    completed: false,
  },
  {
    id: 'T-004',
    title: 'Design new landing page',
    priority: 'medium',
    assignee: 'David C.',
    due: 'Jan 25',
    completed: false,
  },
  {
    id: 'T-005',
    title: 'Send newsletter campaign',
    priority: 'low',
    assignee: 'Eva B.',
    due: 'Jan 28',
    completed: true,
  },
];

export const revenueData: RevenueData[] = [
  { month: 'Jul', revenue: 42000, expenses: 28000, profit: 14000 },
  { month: 'Aug', revenue: 55000, expenses: 32000, profit: 23000 },
  { month: 'Sep', revenue: 49000, expenses: 30000, profit: 19000 },
  { month: 'Oct', revenue: 63000, expenses: 35000, profit: 28000 },
  { month: 'Nov', revenue: 71000, expenses: 38000, profit: 33000 },
  { month: 'Dec', revenue: 68000, expenses: 36000, profit: 32000 },
  { month: 'Jan', revenue: 84254, expenses: 41000, profit: 43254 },
];

export const trafficData: TrafficData[] = [
  { name: 'Organic', value: 42, color: '#6366f1' },
  { name: 'Social', value: 28, color: '#3b82f6' },
  { name: 'Direct', value: 18, color: '#10b981' },
  { name: 'Referral', value: 12, color: '#f59e0b' },
];
