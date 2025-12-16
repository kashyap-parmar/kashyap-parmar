'use client';
import { Icon } from '@iconify/react';
import Card from '../Card';

const StatCard = ({ title, value, icon, trend, trendValue, color = 'blue', className = '' }) => {
  const colors = {
    blue: 'bg-blue-500',
    green: 'bg-green-500',
    orange: 'bg-orange-500',
    purple: 'bg-purple-500',
    red: 'bg-red-500',
  };

  return (
    <Card className={className}>
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">{title}</p>
          <p className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{value}</p>
          {trend && trendValue && (
            <div className="flex items-center text-sm">
              <Icon
                icon={trend === 'up' ? 'mdi:arrow-up' : 'mdi:arrow-down'}
                className={`w-4 h-4 mr-1 ${
                  trend === 'up' ? 'text-green-500' : 'text-red-500'
                }`}
              />
              <span
                className={`font-medium ${
                  trend === 'up' ? 'text-green-500' : 'text-red-500'
                }`}
              >
                {trendValue}
              </span>
              <span className="text-gray-500 dark:text-gray-400 ml-1">vs last month</span>
            </div>
          )}
        </div>
        <div className={`${colors[color]} p-4 rounded-full`}>
          <Icon icon={icon} className="w-8 h-8 text-white" />
        </div>
      </div>
    </Card>
  );
};

export default StatCard;