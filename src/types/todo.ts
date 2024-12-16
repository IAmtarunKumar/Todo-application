export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  createdAt: string;
  inProgress?: boolean;
  priority: 'low' | 'medium' | 'high';
}