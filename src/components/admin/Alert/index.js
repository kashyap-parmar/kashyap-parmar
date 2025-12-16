'use client';
import { Icon } from '@iconify/react';

const Alert = ({ type = 'info', title, message, onClose, className = '' }) => {
  const types = {
    success: {
      bg: 'bg-green-50 dark:bg-green-900/20',
      border: 'border-green-200 dark:border-green-800',
      icon: 'mdi:check-circle',
      iconColor: 'text-green-600 dark:text-green-400',
      textColor: 'text-green-800 dark:text-green-200',
    },
    error: {
      bg: 'bg-red-50 dark:bg-red-900/20',
      border: 'border-red-200 dark:border-red-800',
      icon: 'mdi:alert-circle',
      iconColor: 'text-red-600 dark:text-red-400',
      textColor: 'text-red-800 dark:text-red-200',
    },
    warning: {
      bg: 'bg-orange-50 dark:bg-orange-900/20',
      border: 'border-orange-200 dark:border-orange-800',
      icon: 'mdi:alert',
      iconColor: 'text-orange-600 dark:text-orange-400',
      textColor: 'text-orange-800 dark:text-orange-200',
    },
    info: {
      bg: 'bg-blue-50 dark:bg-blue-900/20',
      border: 'border-blue-200 dark:border-blue-800',
      icon: 'mdi:information',
      iconColor: 'text-blue-600 dark:text-blue-400',
      textColor: 'text-blue-800 dark:text-blue-200',
    },
  };

  const config = types[type];

  return (
    <div
      className={`${config.bg} ${config.border} border rounded-lg p-4 ${className}`}
      role="alert"
    >
      <div className="flex items-start">
        <Icon icon={config.icon} className={`${config.iconColor} text-xl mr-3 mt-0.5`} />
        <div className="flex-1">
          {title && <h4 className={`font-semibold ${config.textColor} mb-1`}>{title}</h4>}
          {message && <p className={`text-sm ${config.textColor}`}>{message}</p>}
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className={`${config.iconColor} hover:opacity-75 transition-opacity ml-3`}
          >
            <Icon icon="mdi:close" className="text-xl" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Alert;