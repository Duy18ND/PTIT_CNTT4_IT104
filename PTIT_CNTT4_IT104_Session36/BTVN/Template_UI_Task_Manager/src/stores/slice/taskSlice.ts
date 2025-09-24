import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export interface Task {
  id: string;
  title: string;
  completed: boolean;
  priority: "Low" | "Medium" | "High"; // Sửa để khớp với server
}

interface ServerTask {
  id: number;
  taskName: string;
  completed: boolean;
  priority: "High" | "Medium" | "Low";
}

interface TaskState {
  tasks: Task[];
  loading: boolean;
  error: string | null;
}

const API_URL = "http://localhost:8080/tasks";

// --- Helpers ---
const mapServerTask = (t: ServerTask): Task => ({
  id: String(t.id),
  title: t.taskName,
  completed: t.completed,
  priority: t.priority, // Không cần lowercase nữa
});

// --- Thunks ---
export const getAllTask = createAsyncThunk("task/getAll", async () => {
  const res = await axios.get<ServerTask[]>(API_URL);
  return res.data.map(mapServerTask);
});

export const addTaskAsync = createAsyncThunk(
  "task/add",
  async (task: Omit<Task, "id">) => {
    const res = await axios.post<ServerTask>(API_URL, {
      taskName: task.title,
      completed: task.completed,
      priority: task.priority, // Giữ nguyên format "High", "Medium", "Low"
    });
    return mapServerTask(res.data);
  }
);

export const updateTaskAsync = createAsyncThunk("task/update", async (task: Task) => {
  const res = await axios.put<ServerTask>(`${API_URL}/${task.id}`, {
    id: Number(task.id),
    taskName: task.title,
    completed: task.completed,
    priority: task.priority, // Giữ nguyên format
  });
  return mapServerTask(res.data);
});

export const deleteTaskAsync = createAsyncThunk("task/delete", async (id: string) => {
  await axios.delete(`${API_URL}/${id}`);
  return id;
});

// --- Slice ---
const initialState: TaskState = { tasks: [], loading: false, error: null };

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // GET
      .addCase(getAllTask.pending, (state) => {
        state.loading = true;
        state.error = null; // Reset error khi bắt đầu load
      })
      .addCase(getAllTask.fulfilled, (state, action) => {
        state.loading = false;
        state.tasks = action.payload;
        state.error = null;
      })
      .addCase(getAllTask.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Lỗi khi tải task";
      })
      // ADD
      .addCase(addTaskAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addTaskAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.tasks.push(action.payload);
        state.error = null;
      })
      .addCase(addTaskAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Lỗi khi thêm task";
      })
      // UPDATE
      .addCase(updateTaskAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateTaskAsync.fulfilled, (state, action) => {
        state.loading = false;
        const idx = state.tasks.findIndex((t) => t.id === action.payload.id);
        if (idx !== -1) state.tasks[idx] = action.payload;
        state.error = null;
      })
      .addCase(updateTaskAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Lỗi khi cập nhật task";
      })
      // DELETE
      .addCase(deleteTaskAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteTaskAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.tasks = state.tasks.filter((t) => t.id !== action.payload);
        state.error = null;
      })
      .addCase(deleteTaskAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Lỗi khi xóa task";
      });
  },
});

export default taskSlice.reducer;