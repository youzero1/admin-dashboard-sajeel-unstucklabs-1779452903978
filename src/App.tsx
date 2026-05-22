import { useState } from 'react';
import Sidebar from '@/components/layout/Sidebar';
import Header from '@/components/layout/Header';
import DashboardPage from '@/pages/DashboardPage';
import PlaceholderPage from '@/pages/PlaceholderPage';

const pageTitles: Record<string, string> = {
  dashboard: 'Dashboard',
  analytics: 'Analytics',
  orders: 'Orders',
  customers: 'Customers',
  reports: 'Reports',
  notifications: 'Notifications',
  settings: 'Settings',
  help: 'Help & Support',
};

export default function App() {
  const [activeNav, setActiveNav] = useState<string>('dashboard');
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

  const title = pageTitles[activeNav] || 'Dashboard';

  const renderPage = () => {
    if (activeNav === 'dashboard') {
      return <DashboardPage />;
    }
    return <PlaceholderPage title={title} />;
  };

  return (
    <div className="flex h-screen overflow-hidden bg-slate-100">
      <Sidebar
        activeNav={activeNav}
        onNavChange={(id) => {
          setActiveNav(id);
          setMobileOpen(false);
        }}
        mobileOpen={mobileOpen}
        onMobileClose={() => setMobileOpen(false)}
      />
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <Header onMenuClick={() => setMobileOpen(true)} pageTitle={title} />
        <main className="flex-1 overflow-y-auto p-4 sm:p-6">
          {renderPage()}
        </main>
      </div>
    </div>
  );
}
