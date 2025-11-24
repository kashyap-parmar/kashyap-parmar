'use client';
import { Icon } from '@iconify/react';
import Button from '../Button';

const EmptyState = ({ icon, title, description, action, onAction }) => {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4">
      <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mb-4">
        <Icon icon={icon} className="w-8 h-8 text-gray-400 dark:text-gray-600" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
      <p className="text-gray-500 dark:text-gray-400 text-center max-w-md mb-6">{description}</p>
      {action && onAction && (
        <Button onClick={onAction} variant="primary">
          {action}
        </Button>
      )}
    </div>
  );
};

export default EmptyState;