import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import type { Student } from "../../utils/types";

// HÀM LẤY TẤT CẢ SINH VIÊN
export const getAllStudent = createAsyncThunk("students/getAll", async () => {
  const res = await axios.get("http://localhost:8080/students");
  return res.data;
});

// HÀM THÊM MỚI SINH VIÊN
export const addStudent = createAsyncThunk(
  "students/add",
  async (newStudent: Student) => {
    const res = await axios.post("http://localhost:8080/students", newStudent);
    return res.data;
  }
);

// HÀM CẬP NHẬT SINH VIÊN
export const updateStudent = createAsyncThunk(
  "students/update",
  async (student: Student) => {
    const res = await axios.put(
      `http://localhost:8080/students/${student.id}`,
      student
    );
    return res.data;
  }
);

// HÀM XÓA SINH VIÊN
export const deleteStudent = createAsyncThunk(
  "students/delete",
  async (id: string) => {
    await axios.delete(`http://localhost:8080/students/${id}`);
    return id;
  }
);

const studentSlice = createSlice({
  name: "students",
  initialState: {
    students: [] as Student[],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllStudent.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllStudent.fulfilled, (state, action) => {
        state.loading = false;
        state.students = action.payload || [];
      })
      .addCase(getAllStudent.rejected, (state) => {
        state.loading = false;
      })
      .addCase(addStudent.fulfilled, (state, action) => {
        if (action.payload) state.students.push(action.payload);
      })
      .addCase(updateStudent.fulfilled, (state, action) => {
        const idx = state.students.findIndex(
          (s) => s.id === action.payload.id
        );
        if (idx >= 0) state.students[idx] = action.payload;
      })
      .addCase(deleteStudent.fulfilled, (state, action) => {
        state.students = state.students.filter((s) => s.id !== action.payload);
      });
  },
});

export default studentSlice.reducer;
