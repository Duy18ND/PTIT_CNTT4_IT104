import { Input, Button } from 'antd'
import { Pencil, Trash } from 'lucide-react'
import React, { useState } from 'react'
import { v7 as uuid } from 'uuid'

interface Task {
    id: string,
    name: string,
    isCompleted: boolean
}

export default function TodoList() {
    const [task, setTask] = useState<string>("");
    const [error, setError] = useState<string>("");
    const [tasks, setTasks] = useState<Task[]>(() => {
        const taskLocation = localStorage.getItem("tasks");
        return taskLocation ? JSON.parse(taskLocation) : [];
    });

    // Lấy giá trị ô input
    const handleChangeTask = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTask(event.target.value);
        if (!event.target.value.trim()) {
            setError("Tên công việc không được để trống!");
        } else {
            setError("");
        }
    };

    // Submit form
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!task.trim()) {
            setError("Tên công việc không được để trống!");
            return;
        }

        const newTask: Task = {
            id: uuid(),
            name: task,
            isCompleted: false
        };

        const taskClones = [...tasks, newTask];
        setTasks(taskClones);
        localStorage.setItem("tasks", JSON.stringify(taskClones));
        setTask("");
    };

    // Toggle trạng thái hoàn thành
    const handleToggleCompleted = (id: string) => {
        const updatedTasks = tasks.map(t =>
            t.id === id ? { ...t, isCompleted: !t.isCompleted } : t
        );
        setTasks(updatedTasks);
        localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    };

    // Xóa task
    const handleDelete = (id: string) => {
        const updatedTasks = tasks.filter(t => t.id !== id);
        setTasks(updatedTasks);
        localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    };

    // Sửa task
    const handleEdit = (id: string) => {
        const taskToEdit = tasks.find(t => t.id === id);
        if (!taskToEdit) return;

        const newName = prompt("Nhập tên công việc mới:", taskToEdit.name);
        if (newName && newName.trim()) {
            const updatedTasks = tasks.map(t =>
                t.id === id ? { ...t, name: newName } : t
            );
            setTasks(updatedTasks);
            localStorage.setItem("tasks", JSON.stringify(updatedTasks));
        }
    };

    return (
        <div className='h-screen flex justify-center items-center'>
            <div className='w-[800px] border border-[#dadada] p-6 rounded-lg shadow-sm'>
                <h3 className='text-center text-[24px] mb-6 font-semibold'>Danh sách công việc</h3>

                <form onSubmit={handleSubmit} className='flex gap-5 mb-3'>
                    <Input
                        placeholder='Nhập tên công việc'
                        onChange={handleChangeTask}
                        value={task}
                    />
                    <Button htmlType='submit' type='primary'>Thêm</Button>
                </form>

                {error && <p className='mb-6 text-red-600'>{error}</p>}

                <ul className='mb-6 flex flex-col gap-3'>
                    {tasks.map((task: Task) => (
                        <li key={task.id} className='flex justify-between items-center border-b pb-2'>
                            <div className='flex items-center gap-3'>
                                <input
                                    type="checkbox"
                                    checked={task.isCompleted}
                                    onChange={() => handleToggleCompleted(task.id)}
                                />
                                <span className={task.isCompleted ? "line-through text-gray-500" : ""}>
                                    {task.name}
                                </span>
                            </div>
                            <div className='flex items-center gap-3'>
                                <Pencil
                                    onClick={() => handleEdit(task.id)}
                                    size={18}
                                    className='text-orange-400 hover:text-orange-600 cursor-pointer'
                                />
                                <Trash
                                    onClick={() => handleDelete(task.id)}
                                    size={18}
                                    className='text-red-400 hover:text-red-600 cursor-pointer'
                                />
                            </div>
                        </li>
                    ))}
                </ul>

                <div className='text-center'>
                    Hoàn thành công việc: {tasks.filter(t => t.isCompleted).length}/{tasks.length}
                </div>
            </div>
        </div>
    )
}
