import { useEffect } from 'react';
import Sidebar from './Sidebar';
import { ReactNode } from 'react';
import Breadcrumbs from './Breadcrumbs';

export default function DashboardLayout({ children }: { children: ReactNode }) {
  useEffect(() => {
    document.title = 'HackBetaHelp';
  }, []);

  return (
    <>
      <Sidebar />
      <main className="sm:ml-64 p-5">
        <Breadcrumbs />
        {children}
      </main>
    </>
  );
}
