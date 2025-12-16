'use client';
import Link from 'next/link';
import { Icon } from '@iconify/react';

const Breadcrumb = ({ items, className = '' }) => {
  return (
    <nav className={`flex items-center text-sm ${className}`} aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-2">
        {items.map((item, index) => (
          <li key={index} className="inline-flex items-center">
            {index > 0 && (
              <Icon
                icon="mdi:chevron-right"
                className="w-5 h-5 text-gray-400 dark:text-gray-600 mx-1"
              />
            )}
            {item.href ? (
              <Link
                href={item.href}
                className="inline-flex items-center text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
              >
                {item.icon && <Icon icon={item.icon} className="w-4 h-4 mr-1" />}
                {item.label}
              </Link>
            ) : (
              <span className="inline-flex items-center text-gray-500 dark:text-gray-400">
                {item.icon && <Icon icon={item.icon} className="w-4 h-4 mr-1" />}
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;