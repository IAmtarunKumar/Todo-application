import React from 'react';
import { Check, Trash2, Play, Pause } from 'lucide-react';
import { Todo } from '../types/todo';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onToggleProgress: (id: string) => void;
}

export function TodoItem({ todo, onToggle, onDelete, onToggleProgress }: TodoItemProps) {
  const priorityColors = {
    low: 'bg-green-100 text-green-800',
    medium: 'bg-yellow-100 text-yellow-800',
    high: 'bg-red-100 text-red-800'
  };

  return (
    <div className={`flex items-center gap-3 p-4 rounded-lg shadow-sm border transition-all duration-300 ${
      todo.completed 
        ? 'bg-gray-50 border-gray-100' 
        : todo.inProgress
        ? 'bg-blue-50 border-blue-100'
        : 'bg-white border-gray-100'
    } group`}>
      <button
        onClick={() => onToggle(todo.id)}
        className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
          todo.completed
            ? 'bg-green-500 border-green-500 scale-110'
            : 'border-gray-300 hover:border-green-500'
        }`}
      >
        {todo.completed && <Check size={14} className="text-white" />}
      </button>
      
      <div className="flex-1 space-y-1">
        <span className={`block ${
          todo.completed ? 'text-gray-400 line-through' : 'text-gray-700'
        }`}>
          {todo.text}
        </span>
        <span className={`text-xs px-2 py-1 rounded-full ${priorityColors[todo.priority]}`}>
          {todo.priority}
        </span>
      </div>

      <div className="flex gap-2">
        {!todo.completed && (
          <button
            onClick={() => onToggleProgress(todo.id)}
            className={`text-gray-400 hover:text-blue-500 transition-colors ${
              todo.inProgress ? 'text-blue-500' : ''
            }`}
          >
            {todo.inProgress ? <Pause size={18} /> : <Play size={18} />}
          </button>
        )}
        <button
          onClick={() => onDelete(todo.id)}
          className="text-gray-400 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100"
        >
          <Trash2 size={18} />
        </button>
      </div>
    </div>
  );
}