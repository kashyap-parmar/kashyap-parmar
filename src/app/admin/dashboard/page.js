'use client';
import { useState } from 'react';
import { Icon } from '@iconify/react';
import {
  AdminCard,
  AdminStatCard,
  AdminBreadcrumb,
  AdminBadge,
} from '@/components';
import AdminLayout from '@/components/admin/AdminLayout';
import { dashboardStats, recentActivities, chartData } from '@/mock/adminData';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const AdminDashboard = () => {
  const breadcrumbItems = [
    { label: 'Admin', href: '/admin/dashboard', icon: 'mdi:home' },
    { label: 'Dashboard' },
  ];

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Breadcrumb */}
        <AdminBreadcrumb items={breadcrumbItems} />

        {/* Page Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2" data-testid="dashboard-title">
            Dashboard
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Welcome back! Here's what's happening with your portfolio.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {dashboardStats.map((stat, index) => (
            <AdminStatCard
              key={index}
              title={stat.title}
              value={stat.value}
              icon={stat.icon}
              trend={stat.trend}
              trendValue={stat.trendValue}
              color={stat.color}
              data-testid={`stat-card-${index}`}
            />
          ))}
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Projects Chart */}
          <AdminCard>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Projects Overview
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="projects" fill="#2563eb" />
              </BarChart>
            </ResponsiveContainer>
          </AdminCard>

          {/* Views Chart */}
          <AdminCard>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Views Analytics
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="views" stroke="#8b5cf6" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </AdminCard>
        </div>

        {/* Recent Activities */}
        <AdminCard>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Recent Activities
            </h3>
            <a
              href="#"
              className="text-sm text-primary hover:text-blue-700 transition-colors"
            >
              View All
            </a>
          </div>
          <div className="space-y-4">
            {recentActivities.map((activity) => (
              <div
                key={activity.id}
                className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <div
                  className={`p-2 rounded-lg bg-${activity.color}-100 dark:bg-${activity.color}-900/30`}
                >
                  <Icon
                    icon={activity.icon}
                    className={`w-5 h-5 text-${activity.color}-600 dark:text-${activity.color}-400`}
                  />
                </div>
                <div className="flex-1">
                  <p className="text-gray-900 dark:text-white font-medium">
                    {activity.action}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {activity.project}
                  </p>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {activity.time}
                </span>
              </div>
            ))}
          </div>
        </AdminCard>

        {/* Quick Actions */}
        <AdminCard>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Quick Actions
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <a
              href="/admin/projects/create"
              className="flex items-center gap-3 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors group"
              data-testid="quick-action-new-project"
            >
              <div className="p-2 bg-blue-500 rounded-lg group-hover:scale-110 transition-transform">
                <Icon icon="mdi:plus" className="w-6 h-6 text-white" />
              </div>
              <span className="font-medium text-gray-900 dark:text-white">
                New Project
              </span>
            </a>

            <a
              href="/admin/gallery"
              className="flex items-center gap-3 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors group"
              data-testid="quick-action-upload-media"
            >
              <div className="p-2 bg-purple-500 rounded-lg group-hover:scale-110 transition-transform">
                <Icon icon="mdi:cloud-upload" className="w-6 h-6 text-white" />
              </div>
              <span className="font-medium text-gray-900 dark:text-white">
                Upload Media
              </span>
            </a>

            <a
              href="/admin/settings/profile"
              className="flex items-center gap-3 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors group"
              data-testid="quick-action-settings"
            >
              <div className="p-2 bg-green-500 rounded-lg group-hover:scale-110 transition-transform">
                <Icon icon="mdi:cog" className="w-6 h-6 text-white" />
              </div>
              <span className="font-medium text-gray-900 dark:text-white">
                Settings
              </span>
            </a>

            <a
              href="/admin/projects"
              className="flex items-center gap-3 p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg hover:bg-orange-100 dark:hover:bg-orange-900/30 transition-colors group"
              data-testid="quick-action-view-all"
            >
              <div className="p-2 bg-orange-500 rounded-lg group-hover:scale-110 transition-transform">
                <Icon icon="mdi:eye" className="w-6 h-6 text-white" />
              </div>
              <span className="font-medium text-gray-900 dark:text-white">
                View All
              </span>
            </a>
          </div>
        </AdminCard>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;