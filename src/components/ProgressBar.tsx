import React from 'react';

interface ProgressBarProps {
  completed: number;
  total: number;
}

export function ProgressBar({ completed, total }: ProgressBarProps) {
  const percentage = total === 0 ? 0 : Math.round((completed / total) * 100);
  
  return (
    <div className="w-full bg-gray-100 rounded-full h-2.5 mb-4 overflow-hidden">
      <div
        className="h-full transition-all duration-500 ease-out rounded-full bg-gradient-to-r from-blue-500 to-indigo-500"
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
}