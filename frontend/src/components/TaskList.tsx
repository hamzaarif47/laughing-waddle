import React from 'react';
import { Task } from '../types';
import { FiEdit, FiTrash2, FiClock } from 'react-icons/fi';

interface TaskListProps {
  tasks: Task[];
  onEdit: (task: Task) => void;
  onDelete: (id: number) => void;
}

const priorityColors = {
  low: 'bg-blue-100 text-blue-800',
  medium: 'bg-yellow-100 text-yellow-800',
  high: 'bg-red-100 text-red-800',
};

const statusColors = {
  pending: 'bg-gray-100 text-gray-800',
  'in-progress': 'bg-purple-100 text-purple-800',
  completed: 'bg-green-100 text-green-800',
};

const TaskList: React.FC<TaskListProps> = ({ tasks, onEdit, onDelete }) => {
  if (tasks.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">No tasks found. Create your first task!</p>
      </div>
    );
  }

  const formatDate = (dateString?: string) => {
    if (!dateString) return 'No due date';
    return new Date(dateString).toLocaleDateString();
  };

  return (
    <div className="space-y-4">
      {tasks.map((task) => (
        <div
          key={task.id}
          className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
        >
          <div className="flex justify-between items-start">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{task.title}</h3>
              {task.description && (
                <p className="text-gray-600 text-sm mb-3">{task.description}</p>
              )}
              <div className="flex flex-wrap gap-2 items-center">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    statusColors[task.status]
                  }`}
                >
                  {task.status.replace('-', ' ').toUpperCase()}
                </span>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    priorityColors[task.priority]
                  }`}
                >
                  {task.priority.toUpperCase()} PRIORITY
                </span>
                {task.due_date && (
                  <span className="flex items-center gap-1 text-xs text-gray-500">
                    <FiClock />
                    {formatDate(task.due_date)}
                  </span>
                )}
              </div>
            </div>
            <div className="flex gap-2 ml-4">
              <button
                onClick={() => onEdit(task)}
                className="p-2 text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
                title="Edit task"
              >
                <FiEdit size={18} />
              </button>
              <button
                onClick={() => onDelete(task.id)}
                className="p-2 text-red-600 hover:bg-red-50 rounded-md transition-colors"
                title="Delete task"
              >
                <FiTrash2 size={18} />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
