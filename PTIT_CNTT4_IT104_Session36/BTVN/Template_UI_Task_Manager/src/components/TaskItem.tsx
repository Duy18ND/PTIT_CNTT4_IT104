import { Checkbox, Chip, IconButton } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import React from 'react';

interface TaskItemProps {
  task: {
    id: string;
    title: string;
    completed: boolean;
    priority: 'Low' | 'Medium' | 'High'; // Chỉ sửa type này
  };
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onUpdate: (id: string, newTitle: string, newPriority: 'Low' | 'Medium' | 'High') => void;
}

// Chỉ sửa mapping này để khớp với priority mới
const priorityColor = {
  Low: 'success',
  Medium: 'warning',
  High: 'error',
} as const;

const TaskItem: React.FC<TaskItemProps> = ({
  task,
  onToggle,
  onDelete,
  onUpdate,
}) => {
  const handleEdit = () => {
    const newTitle = prompt('Nhập tiêu đề mới:', task.title);
    if (newTitle && newTitle.trim() && newTitle.trim() !== task.title) {
      onUpdate(task.id, newTitle.trim(), task.priority);
    }
  };

  return (
    // Giữ nguyên class CSS cũ
    <div className="flex items-center justify-between bg-white p-3 rounded-xl shadow-sm mb-2">
      <div className="flex items-center gap-3">
        <Checkbox checked={task.completed} onChange={() => onToggle(task.id)} />
        <span className={`text-sm ${task.completed ? 'line-through text-gray-400' : ''}`}>
          {task.title}
        </span>
        <Chip
          label={task.priority.toUpperCase()} // Giữ nguyên .toUpperCase()
          color={priorityColor[task.priority]}
          size="small"
          className="ml-2"
        />
      </div>
      <div>
        <IconButton onClick={() => onDelete(task.id)} color="error">
          <Delete />
        </IconButton>
        <IconButton onClick={handleEdit} color="primary"> {/* Thêm onClick */}
          <Edit />
        </IconButton>
      </div>
    </div>
  );
};

export default TaskItem;