import React from 'react';
import { Flag } from 'lucide-react';

interface PriorityFilterProps {
  selectedPriority: string | null;
  onPriorityChange: (priority: string | null) => void;
}

export function PriorityFilter({ selectedPriority, onPriorityChange }: PriorityFilterProps) {
  const priorities = [
    { value: 'high', color: 'text-red-500' },
    { value: 'medium', color: 'text-yellow-500' },
    { value: 'low', color: 'text-green-500' }
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 flex items-center justify-center gap-4">
      <div className="flex items-center gap-2 text-gray-600">
        <Flag size={18} />
        <span className="text-sm font-medium">Filter by priority:</span>
      </div>
      <div className="flex gap-2">
        {priorities.map(({ value, color }) => (
          <button
            key={value}
            onClick={() => onPriorityChange(selectedPriority === value ? null : value)}
            className={`px-4 py-2 rounded-lg text-sm font-medium capitalize transition-all
              ${selectedPriority === value
                ? `bg-gray-100 ${color}`
                : 'text-gray-500 hover:bg-gray-50'
              }`}
          >
            {value}
          </button>
        ))}
      </div>
    </div>
  );
}