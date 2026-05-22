import { useState } from 'react';
import type { Task } from '@/types';
import { tasks as initialTasks } from '@/lib/data';

export function useTasks(): {
  tasks: Task[];
  toggleTask: (id: string) => void;
} {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const toggleTask = (id: string) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  return { tasks, toggleTask };
}
