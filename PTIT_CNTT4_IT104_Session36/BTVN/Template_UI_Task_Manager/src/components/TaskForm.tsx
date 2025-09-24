import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import React, { useState } from 'react';

interface TaskFormProps {
  onAdd: (title: string, priority: 'Low' | 'Medium' | 'High') => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState<'Low' | 'Medium' | 'High'>('Medium');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      onAdd(title, priority);
      setTitle('');
      setPriority('Medium'); 
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
       className="flex gap-4 items-center bg-white p-4 rounded-2xl shadow-md"
    >
      <TextField
        label="Công việc mới"
        variant="outlined"
        size="small"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="flex-1"
        placeholder="Nhập công việc cần làm..."
      />
      <FormControl size="small" className="w-36">
        <InputLabel>Ưu tiên</InputLabel>
        <Select
          value={priority}
          onChange={(e) => setPriority(e.target.value as 'Low' | 'Medium' | 'High')}
          label="Ưu tiên"
        >
          <MenuItem value="Low">Thấp</MenuItem>
          <MenuItem value="Medium">Trung bình</MenuItem>
          <MenuItem value="High">Cao</MenuItem>
        </Select>
      </FormControl>
      <Button 
        type="submit" variant="contained" color="primary"
      >
        Thêm
      </Button>
    </form>
  );
};

export default TaskForm;