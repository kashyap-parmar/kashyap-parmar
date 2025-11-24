'use client';
import { Icon } from '@iconify/react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const Header = ({ onMenuClick, onLogout }) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="h-16 bg-white dark:bg-[#020817]/90 border-b border-gray-200 dark:border-gray-700 fixed top-0 right-0 left-0 lg:left-64 z-10">
      <div className="h-full px-4 lg:px-6 flex items-center justify-between">
        {/* Left Side */}
        <div className="flex items-center">
          <button
            onClick={onMenuClick}
            className="lg:hidden text-gray-700 dark:text-gray-300 hover:text-primary mr-4"
          >
            <Icon icon="mdi:menu" className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-semibold text-gray-900 dark:text-white">Admin Panel</h1>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
              data-testid="theme-toggle-btn"
            >
              {theme === 'dark' ? (
                <Icon icon="mdi:white-balance-sunny" className="w-5 h-5" />
              ) : (
                <Icon icon="mdi:moon-waning-crescent" className="w-5 h-5" />
              )}
            </button>
          )}

          {/* Notifications */}
          <button
            className="relative p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
            data-testid="notifications-btn"
          >
            <Icon icon="mdi:bell" className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          {/* Profile Dropdown */}
          <div className="relative">
            <button
              className="flex items-center gap-2 p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
              data-testid="profile-dropdown-btn"
            >
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-semibold">
                KP
              </div>
            </button>
          </div>

          {/* Logout */}
          <button
            onClick={onLogout}
            className="flex items-center gap-2 px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-600 dark:hover:text-red-400 rounded-lg transition-colors"
            data-testid="logout-btn"
          >
            <Icon icon="mdi:logout" className="w-5 h-5" />
            <span className="hidden sm:inline font-medium">Logout</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;