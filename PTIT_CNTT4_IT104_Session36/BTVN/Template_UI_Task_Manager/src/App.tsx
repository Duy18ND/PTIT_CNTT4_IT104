import { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./stores/store";
import {
  getAllTask,
  addTaskAsync,
  updateTaskAsync,
  deleteTaskAsync,
  type Task
} from "./stores/slice/taskSlice";

import TaskForm from "./components/TaskForm";
import FilterControls from "./components/FilterControls";
import TaskItem from "./components/TaskItem";

const App = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { tasks, loading, error } = useSelector((state: RootState) => state.task);

  const [filters, setFilters] = useState({
    status: "all" as "all" | "completed" | "active",
    priority: "all" as "all" | Task["priority"],
    search: "",
  });

  // Load tasks từ API khi mount
  useEffect(() => {
    dispatch(getAllTask());
  }, [dispatch]);

  // --- Handlers với useCallback để tối ưu performance ---
  const handleAdd = useCallback((title: string, priority: Task["priority"]) => {
    if (title.trim()) {
      dispatch(addTaskAsync({ title: title.trim(), priority, completed: false }));
    }
  }, [dispatch]);

  const handleToggle = useCallback((id: string) => {
    const task = tasks.find((t) => t.id === id);
    if (task) {
      dispatch(updateTaskAsync({ ...task, completed: !task.completed }));
    }
  }, [dispatch, tasks]);

  const handleDelete = useCallback((id: string) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa task này?")) {
      dispatch(deleteTaskAsync(id));
    }
  }, [dispatch]);

  const handleUpdate = useCallback((
    id: string,
    newTitle: string,
    newPriority: Task["priority"]
  ) => {
    const task = tasks.find((t) => t.id === id);
    if (task && newTitle.trim()) {
      dispatch(updateTaskAsync({ 
        ...task, 
        title: newTitle.trim(), 
        priority: newPriority 
      }));
    }
  }, [dispatch, tasks]);

  // --- Filter handlers ---
  const handleStatusChange = useCallback((status: string) => {
    setFilters(prev => ({ ...prev, status: status as typeof prev.status }));
  }, []);

  const handlePriorityChange = useCallback((priority: string) => {
    setFilters(prev => ({ ...prev, priority: priority as typeof prev.priority }));
  }, []);

  const handleSearchChange = useCallback((search: string) => {
    setFilters(prev => ({ ...prev, search }));
  }, []);

  // --- Filters ---
  const filteredTasks = tasks.filter((t) => {
    const matchStatus =
      filters.status === "all" ||
      (filters.status === "completed" && t.completed) ||
      (filters.status === "active" && !t.completed);

    const matchPriority = 
      filters.priority === "all" || 
      t.priority === filters.priority;

    const matchSearch = 
      t.title.toLowerCase().includes(filters.search.toLowerCase());

    return matchStatus && matchPriority && matchSearch;
  });

  // --- Loading state ---
  if (loading && tasks.length === 0) {
    return (
      <div className="max-w-2xl mx-auto p-6 bg-gray-100 min-h-screen">
        <div className="flex items-center justify-center h-64">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
            <p className="text-gray-600">Đang tải danh sách công việc...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-100 min-h-screen">
      <header className="text-center mb-8">
        <h1 className="text-2xl font-bold mb-6 text-center">Task Manager</h1>
        <p className="text-gray-600">Quản lý công việc hiệu quả</p>
      </header>

      <TaskForm onAdd={handleAdd} />

      <FilterControls
        status={filters.status}
        priority={filters.priority}
        search={filters.search}
        onStatusChange={handleStatusChange}
        onPriorityChange={handlePriorityChange}
        onSearchChange={handleSearchChange}
      />

      {/* Status indicators */}
      {loading && (
        <div className="flex items-center justify-center py-4">
          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-500 mr-2"></div>
          <p className="text-blue-600">Đang xử lý...</p>
        </div>
      )}
      
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          <strong>Lỗi:</strong> {error}
        </div>
      )}

      {/* Task list */}
      <div className="space-y-3">
        {filteredTasks.length === 0 && !loading ? (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">📝</div>
            <p className="text-gray-500 text-lg mb-2">
              {tasks.length === 0 
                ? "Chưa có công việc nào" 
                : "Không tìm thấy công việc phù hợp"
              }
            </p>
            <p className="text-gray-400 text-sm">
              {tasks.length === 0 
                ? "Hãy thêm công việc đầu tiên của bạn!" 
                : "Thử điều chỉnh bộ lọc để xem thêm công việc"
              }
            </p>
          </div>
        ) : (
          <>
            {/* Task statistics */}
            <div className="bg-white p-3 rounded-lg shadow-sm mb-4">
              <div className="flex justify-between text-sm text-gray-600">
                <span>Tổng: {tasks.length}</span>
                <span>Hoàn thành: {tasks.filter(t => t.completed).length}</span>
                <span>Còn lại: {tasks.filter(t => !t.completed).length}</span>
                <span>Đang hiển thị: {filteredTasks.length}</span>
              </div>
            </div>

            {/* Task items */}
            {filteredTasks.map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                onToggle={handleToggle}
                onDelete={handleDelete}
                onUpdate={handleUpdate}
              />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default App;