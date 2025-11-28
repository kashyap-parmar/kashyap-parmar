'use client';
import { AuthProvider } from '@/contexts/AuthContext';
import { Toaster } from 'react-hot-toast';

export default function AdminRootLayout({ children }) {
  return (
    <AuthProvider>
      {children}
      {/* Global Toast Notifications - Fixed overlay, never affects layout */}
      <Toaster
        position="top-right"
        reverseOrder={false}
        gutter={8}
        containerStyle={{
          position: 'fixed',
          top: 16,
          right: 16,
          zIndex: 99999,
          pointerEvents: 'none',
        }}
        toastOptions={{
          duration: 3000,
          style: {
            borderRadius: '8px',
            fontSize: '14px',
            fontWeight: '500',
            pointerEvents: 'auto',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
          },
          success: {
            style: {
              background: '#10b981',
              color: '#fff',
            },
          },
          error: {
            style: {
              background: '#ef4444',
              color: '#fff',
            },
          },
        }}
      />
    </AuthProvider>
  );
}
