import React from 'react';
import { TodoItem } from './TodoItem';
import { Todo } from '../types/todo';

interface TodoListProps {
  todos: Todo[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onToggleProgress: (id: string) => void;
  onClearCompleted: () => void;
}

export function TodoList({ 
  todos, 
  onToggle, 
  onDelete, 
  onToggleProgress,
  onClearCompleted 
}: TodoListProps) {
  const completedCount = todos.filter((todo) => todo.completed).length;

  return (
    <div className="w-full space-y-4">
      <div className="space-y-2">
        {todos
          .sort((a, b) => {
            if (a.completed === b.completed) {
              if (a.inProgress === b.inProgress) {
                const priorityOrder = { high: 0, medium: 1, low: 2 };
                return priorityOrder[a.priority] - priorityOrder[b.priority];
              }
              return a.inProgress ? -1 : 1;
            }
            return a.completed ? 1 : -1;
          })
          .map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={onToggle}
              onDelete={onDelete}
              onToggleProgress={onToggleProgress}
            />
          ))}
      </div>
      
      {todos.length > 0 && (
        <div className="flex justify-between items-center text-sm text-gray-500 pt-4 border-t">
          <span>
            {completedCount} of {todos.length} completed
          </span>
          {completedCount > 0 && (
            <button
              onClick={onClearCompleted}
              className="text-red-500 hover:text-red-600 transition-colors"
            >
              Clear completed
            </button>
          )}
        </div>
      )}
    </div>
  );
}