import React from 'react';
import { Todo } from '../types/todo';

interface TodoStatsProps {
  todos: Todo[];
}

export function TodoStats({ todos }: TodoStatsProps) {
  const stats = {
    total: todos.length,
    completed: todos.filter(t => t.completed).length,
    inProgress: todos.filter(t => t.inProgress).length,
    high: todos.filter(t => t.priority === 'high' && !t.completed).length
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
      {[
        { label: 'Total', value: stats.total },
        { label: 'Completed', value: stats.completed },
        { label: 'In Progress', value: stats.inProgress },
        { label: 'High Priority', value: stats.high }
      ].map(({ label, value }) => (
        <div key={label} className="bg-white rounded-lg p-4 text-center shadow-sm">
          <div className="text-2xl font-bold text-gray-800">{value}</div>
          <div className="text-sm text-gray-500">{label}</div>
        </div>
      ))}
    </div>
  );
}