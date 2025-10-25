import React from 'react';

interface StatsCardProps {
  title: string;
  value: string;
  color: 'blue' | 'yellow' | 'purple' | 'green';
}

const colorClasses = {
  blue: 'bg-blue-500',
  yellow: 'bg-yellow-500',
  purple: 'bg-purple-500',
  green: 'bg-green-500',
};

const StatsCard: React.FC<StatsCardProps> = ({ title, value, color }) => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center">
        <div className={`${colorClasses[color]} rounded-full p-3 mr-4`}>
          <div className="text-white text-2xl font-bold">{value}</div>
        </div>
        <div>
          <p className="text-sm text-gray-600">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
