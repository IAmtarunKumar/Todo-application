import React from 'react';
import { CheckSquare } from 'lucide-react';
import { TodoInput } from './components/TodoInput';
import { TodoList } from './components/TodoList';
import { TodoStats } from './components/TodoStats';
import { ProgressBar } from './components/ProgressBar';
import { PriorityFilter } from './components/PriorityFilter';
import { useTodos } from './hooks/useTodos';

export default function App() {
  const {
    todos,
    addTodo,
    toggleTodo,
    toggleProgress,
    deleteTodo,
    clearCompleted,
    priorityFilter,
    setPriorityFilter
  } = useTodos();
  const completedCount = todos.filter(todo => todo.completed).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex flex-col items-center py-12 px-4">
      <div className="w-full max-w-3xl space-y-8">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 text-blue-600 mb-2">
            <CheckSquare size={32} />
          </div>
          <h1 className="text-3xl font-bold text-gray-900">Todo List</h1>
          <p className="text-gray-600 mt-2">Stay organized and productive</p>
        </div>

        <TodoStats todos={todos} />
        
        {todos.length > 0 && (
          <ProgressBar completed={completedCount} total={todos.length} />
        )}

        <div className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-[1.02] transition-all">
          <TodoInput onAdd={addTodo} />
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-sm border border-white">
          <PriorityFilter
            selectedPriority={priorityFilter}
            onPriorityChange={setPriorityFilter}
          />
        </div>

        {todos.length === 0 ? (
          <div className="text-center text-gray-500 mt-8">
            <p>No todos yet. Add one to get started!</p>
          </div>
        ) : (
          <TodoList
            todos={todos}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
            onToggleProgress={toggleProgress}
            onClearCompleted={clearCompleted}
          />
        )}
      </div>
    </div>
  );
}