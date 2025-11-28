'use client';
import { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import { useTheme } from 'next-themes';
import {
  AdminButton,
  AdminCard,
  AdminBreadcrumb,
  AdminAlert,
} from '@/components';
import AdminLayout from '@/components/admin/AdminLayout';

const ThemeSettings = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const breadcrumbItems = [
    { label: 'Admin', href: '/admin/dashboard', icon: 'mdi:home' },
    { label: 'Settings', href: '/admin/settings/profile' },
    { label: 'Theme' },
  ];

  const themes = [
    {
      value: 'light',
      label: 'Light',
      icon: 'mdi:white-balance-sunny',
      description: 'Clean and bright interface',
    },
    {
      value: 'dark',
      label: 'Dark',
      icon: 'mdi:moon-waning-crescent',
      description: 'Easy on the eyes in low light',
    },
    // {
    //   value: 'system',
    //   label: 'System',
    //   icon: 'mdi:laptop',
    //   description: 'Follows your system preference',
    // },
  ];

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
  };

  if (!mounted) {
    return (
      <AdminLayout>
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Breadcrumb */}
        <AdminBreadcrumb items={breadcrumbItems} />

        {/* Page Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2" data-testid="theme-settings-title">
            Theme Settings
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Customize the appearance of your admin panel
          </p>
        </div>

        {/* Success Alert */}
        {success && (
          <AdminAlert
            type="success"
            title="Success!"
            message="Theme preference updated successfully"
            onClose={() => setSuccess(false)}
          />
        )}

        {/* Theme Selection */}
        <AdminCard>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
            Choose Your Theme
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {themes.map((themeOption) => (
              <button
                key={themeOption.value}
                onClick={() => handleThemeChange(themeOption.value)}
                className={`relative p-6 rounded-lg border-2 transition-all ${theme === themeOption.value
                    ? 'border-primary bg-primary/5'
                    : 'border-gray-200 dark:border-gray-700 hover:border-primary/50'
                  }`}
                data-testid={`theme-${themeOption.value}-btn`}
              >
                <div className="flex flex-col items-center text-center">
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${theme === themeOption.value
                        ? 'bg-primary text-white'
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
                      }`}
                  >
                    <Icon icon={themeOption.icon} className="w-8 h-8" />
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    {themeOption.label}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {themeOption.description}
                  </p>
                </div>
                {theme === themeOption.value && (
                  <div className="absolute top-3 right-3">
                    <Icon icon="mdi:check-circle" className="w-6 h-6 text-primary" />
                  </div>
                )}
              </button>
            ))}
          </div>
        </AdminCard>

        {/* Color Preview */}
        <AdminCard>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
            Primary Color
          </h3>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary"></div>
              <div>
                <p className="font-medium text-gray-900 dark:text-white">#2563eb</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Primary Blue</p>
              </div>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              This is the primary color used throughout your portfolio and admin panel.
            </p>
          </div>
        </AdminCard>

        {/* Preview Section */}
        <AdminCard>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
            Theme Preview
          </h3>
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <p className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                Sample Card
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                This is how your content will look with the current theme settings.
              </p>
            </div>
            <div className="flex gap-2">
              <AdminButton variant="primary" size="sm">
                Primary Button
              </AdminButton>
              <AdminButton variant="secondary" size="sm">
                Secondary Button
              </AdminButton>
              <AdminButton variant="success" size="sm">
                Success Button
              </AdminButton>
              <AdminButton variant="danger" size="sm">
                Danger Button
              </AdminButton>
            </div>
          </div>
        </AdminCard>
      </div>
    </AdminLayout>
  );
};

export default ThemeSettings;
