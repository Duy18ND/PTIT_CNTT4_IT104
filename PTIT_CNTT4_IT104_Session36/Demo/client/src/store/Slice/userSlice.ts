import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Hàm lấy dữ liệu từ server (json-server)
export const getAllUser = createAsyncThunk("user/getAll", async () => {
  const response = await axios.get("http://localhost:8080/users");
  return response.data;
});
// Hàm xóa user
export const deleteUser = createAsyncThunk(
  "user/delete",
  async (id: number) => {
    await axios.delete(`http://localhost:8080/users/${id}`);
    return id;
  }
);

export const AddUser = createAsyncThunk(
  "user/add",
  async (newUser: {id: number, name: string}) => {
    const response = await axios.post(`http://localhost:8080/users`, newUser);
    return response.data;
  }
);
// Edit
export const updateUser = createAsyncThunk(
  "user/update",
  async (updatedUser: { id: number; name: string }) => {
    const res = await axios.put(
      `http://localhost:8080/users/${updatedUser.id}`,
      updatedUser
    );
    return res.data; 
  }
);


const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [] as any[],
    loading: false,
    error: null as string | null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // GET
      .addCase(getAllUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(getAllUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Lỗi không xác định";
      })

      // DELETE
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.users = state.users.filter((u) => u.id !== action.payload);
        console.log("Xóa thành công user có id:", action.payload);
      })
        //ADD
        .addCase(AddUser.fulfilled, (state, action) => {
            state.users.push(action.payload);
        })
        // Edit
            .addCase(updateUser.fulfilled, (state, action) => {
        const index = state.users.findIndex((u) => u.id === action.payload.id);
        if (index !== -1) {
            state.users[index] = action.payload;
        }
        });
  },
});

export default userSlice.reducer;
