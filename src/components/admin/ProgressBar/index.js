'use client';

const ProgressBar = ({ data, showLegend = true, className = '' }) => {
  const total = data.reduce((sum, item) => sum + item.count, 0);
  
  const segments = data.map((item) => ({
    ...item,
    percentage: total > 0 ? (item.count / total) * 100 : 0,
  }));

  const colorMap = {
    todo: 'bg-gray-400',
    inprogress: 'bg-blue-500',
    code_review: 'bg-purple-500',
    bugs: 'bg-red-500',
    completed: 'bg-green-500',
    add_ons: 'bg-orange-500',
  };

  return (
    <div className={`w-full ${className}`}>
      {/* Progress Bar */}
      <div className="flex h-3 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700">
        {segments.map((segment, index) => (
          segment.count > 0 && (
            <div
              key={index}
              className={`${colorMap[segment.status] || 'bg-gray-400'} transition-all duration-300`}
              style={{ width: `${segment.percentage}%` }}
              title={`${segment.label}: ${segment.count}`}
            />
          )
        ))}
      </div>

      {/* Legend */}
      {showLegend && (
        <div className="flex flex-wrap gap-3 mt-3">
          {segments.map((segment, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full ${colorMap[segment.status] || 'bg-gray-400'}`} />
              <span className="text-xs text-gray-600 dark:text-gray-400">
                {segment.label}: {segment.count}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProgressBar;