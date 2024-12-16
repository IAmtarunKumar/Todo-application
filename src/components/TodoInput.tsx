import React, { useState } from 'react';
import { PlusCircle, Flag } from 'lucide-react';

interface TodoInputProps {
  onAdd: (text: string, priority: 'low' | 'medium' | 'high') => void;
}

export function TodoInput({ onAdd }: TodoInputProps) {
  const [text, setText] = useState('');
  const [priority, setPriority] = useState<'low' | 'medium' | 'high'>('medium');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text.trim(), priority);
      setText('');
    }
  };

  const priorityColors = {
    low: 'text-green-500 border-green-200 hover:bg-green-50',
    medium: 'text-yellow-500 border-yellow-200 hover:bg-yellow-50',
    high: 'text-red-500 border-red-200 hover:bg-red-50'
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex gap-2">
        {(['high', 'medium', 'low'] as const).map((p) => (
          <button
            key={p}
            type="button"
            onClick={() => setPriority(p)}
            className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium capitalize transition-all border ${
              priority === p
                ? `${priorityColors[p]} bg-opacity-10 bg-current`
                : 'text-gray-400 border-gray-200 hover:bg-gray-50'
            }`}
          >
            <Flag size={14} />
            {p}
          </button>
        ))}
      </div>
      <div className="relative">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="What needs to be done?"
          className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 -translate-y-1/2 text-blue-500 hover:text-blue-600 transition-colors"
        >
          <PlusCircle size={24} />
        </button>
      </div>
    </form>
  );
}