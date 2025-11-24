'use client';

const Card = ({ children, className = '', hoverable = false, padding = true }) => {
  return (
    <div
      className={`bg-white dark:bg-[#020817]/70 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm ${
        hoverable ? 'hover:shadow-md transition-shadow duration-200' : ''
      } ${padding ? 'p-6' : ''} ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;