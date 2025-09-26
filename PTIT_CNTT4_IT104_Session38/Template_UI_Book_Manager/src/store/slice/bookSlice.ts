import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API } from "../../API/api";
import type { Book } from "../../components/types";

// GET ALL
export const getAllBooks = createAsyncThunk("books/getAll", async () => {
  try {
    // delay giả 1s
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const res = await axios.get(API);
    return res.data;
  } catch (error) {
    console.log("Lỗi GET API", error);
    throw error;
  }
});

// ADD
export const AddBooks = createAsyncThunk(
  "books/add",
  async (newBook: Omit<Book, "id">) => {
    try {
      const res = await axios.post(API, newBook);
      return res.data;
    } catch (error) {
      console.log("Lỗi ADD Books", error);
      throw error;
    }
  }
);

// EDIT
export const EditBooks = createAsyncThunk(
  "books/edit",
  async ({ id, updatedBook }: { id: string; updatedBook: Book }) => {
    try {
      const res = await axios.put(`${API}/${id}`, updatedBook);
      return res.data;
    } catch (error) {
      console.log("Lỗi API EDIT", error);
      throw error;
    }
  }
);

// DELETE
export const DeleteBooks = createAsyncThunk(
  "books/delete",
  async (id: string) => {
    try {
      await axios.delete(`${API}/${id}`);
      return id;
    } catch (error) {
      console.log("Lỗi API DELETE", error);
      throw error;
    }
  }
);

// SLICE
export const bookSlice = createSlice({
  name: "books",
  initialState: {
    books: [] as Book[],
    loadding: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // GET
      .addCase(getAllBooks.pending, (state) => {
        state.loadding = true;
      })
      .addCase(getAllBooks.fulfilled, (state, action) => {
        state.books = action.payload || [];
        state.loadding = false;
      })
      .addCase(getAllBooks.rejected, (state) => {
        state.loadding = false;
      })

      // ADD
      .addCase(AddBooks.fulfilled, (state, action) => {
        if (action.payload) state.books.push(action.payload);
      })

      // EDIT
      .addCase(EditBooks.fulfilled, (state, action) => {
        if (action.payload) {
          const idx = state.books.findIndex((b) => b.id === action.payload.id);
          if (idx !== -1) {
            state.books[idx] = action.payload;
          }
        }
      })

      // DELETE
      .addCase(DeleteBooks.fulfilled, (state, action) => {
        state.books = state.books.filter((b) => b.id !== action.payload);
      });
  },
});

export default bookSlice.reducer;
