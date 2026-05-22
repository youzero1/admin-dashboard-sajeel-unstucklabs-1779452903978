import clsx from 'clsx';
import { CheckCircle2, Circle, Flag } from 'lucide-react';
import type { Task } from '@/types';

type TaskListProps = {
  tasks: Task[];
  onToggle: (id: string) => void;
};

const priorityColors: Record<string, string> = {
  high: 'text-red-500',
  medium: 'text-amber-500',
  low: 'text-slate-400',
};

const priorityBg: Record<string, string> = {
  high: 'bg-red-100 text-red-700',
  medium: 'bg-amber-100 text-amber-700',
  low: 'bg-slate-100 text-slate-600',
};

export default function TaskList({ tasks, onToggle }: TaskListProps) {
  const completed = tasks.filter((t) => t.completed).length;

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
      <div className="px-6 py-5 border-b border-slate-200">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-base font-semibold text-slate-800">Tasks</h2>
            <p className="text-sm text-slate-500 mt-0.5">{completed}/{tasks.length} completed</p>
          </div>
          <button className="text-sm font-medium text-indigo-600 hover:text-indigo-800 transition-colors">
            Add task
          </button>
        </div>
        {/* Progress bar */}
        <div className="mt-3 bg-slate-100 rounded-full h-1.5 overflow-hidden">
          <div
            className="h-full bg-indigo-500 rounded-full transition-all duration-500"
            style={{ width: `${(completed / tasks.length) * 100}%` }}
          />
        </div>
      </div>
      <ul className="divide-y divide-slate-100">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="px-6 py-4 hover:bg-slate-50 transition-colors"
          >
            <div className="flex items-start gap-3">
              <button
                onClick={() => onToggle(task.id)}
                className="mt-0.5 flex-shrink-0 text-slate-400 hover:text-indigo-600 transition-colors"
              >
                {task.completed ? (
                  <CheckCircle2 className="w-5 h-5 text-indigo-500" />
                ) : (
                  <Circle className="w-5 h-5" />
                )}
              </button>
              <div className="flex-1 min-w-0">
                <p
                  className={clsx(
                    'text-sm font-medium',
                    task.completed ? 'line-through text-slate-400' : 'text-slate-800'
                  )}
                >
                  {task.title}
                </p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-xs text-slate-400">Due {task.due}</span>
                  <span className="text-slate-200">·</span>
                  <span className="text-xs text-slate-400">{task.assignee}</span>
                </div>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <span
                  className={clsx(
                    'inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold',
                    priorityBg[task.priority]
                  )}
                >
                  <Flag className={clsx('w-3 h-3', priorityColors[task.priority])} />
                  {task.priority}
                </span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
