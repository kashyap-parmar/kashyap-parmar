'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Toaster } from 'react-hot-toast';
import AdminSidebar from '../Sidebar';
import AdminHeader from '../Header';
import { useAuth } from '@/contexts/AuthContext';

const AdminLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { isAuthenticated, loading, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      router.push('/admin');
    }
  }, [isAuthenticated, loading, router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <AdminSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <AdminHeader onMenuClick={() => setSidebarOpen(true)} onLogout={logout} />
      
      <main className="lg:ml-64 pt-16">
        <div className="p-4 lg:p-6">
          {children}
        </div>
      </main>

      {/* Toast Notifications */}
      <Toaster
        position="top-right"
        reverseOrder={false}
        gutter={8}
        toastOptions={{
          duration: 3000,
          style: {
            borderRadius: '8px',
            fontSize: '14px',
            fontWeight: '500',
          },
        }}
      />
    </div>
  );
};

export default AdminLayout;