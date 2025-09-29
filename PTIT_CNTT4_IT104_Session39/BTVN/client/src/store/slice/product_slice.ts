import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const getAllProduct = createAsyncThunk("Get/Product", async (_, thunkAPI) => {
    try {
        const res = await axios.get("http://localhost:8080/products");
        return res.data;
    } catch (error: any) {
        console.log("Error API Get_Product", error);
        return thunkAPI.rejectWithValue(error.response?.data || "Error fetching products");
    }
});
interface ProductState {
  products: any[];
}

const initialState: ProductState = {
  products: []
};

const product_slice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
  builder
    .addCase(getAllProduct.pending, (state) => {
      console.log("Loading products...");
    })
    .addCase(getAllProduct.fulfilled, (state, action) => {
      state.products = action.payload;
    })
    .addCase(getAllProduct.rejected, (state, action) => {
      console.error("Failed to fetch products:", action.payload);
    });
}

})
export default product_slice.reducer;