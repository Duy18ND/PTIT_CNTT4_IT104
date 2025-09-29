import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
//Lấy dữ liệu
export const getAllProduct = createAsyncThunk("getAllProduct", async () => {
    try {
        const res = await axios.get("http://localhost:8080/products");
        return res.data
    } catch (error) {
        console.log("Error GetAllProduct",error);
    }
});
const productSlice = createSlice({
    name: "products",
    initialState: {
        products:[]
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getAllProduct.pending, () => {

        })

        .addCase(getAllProduct.fulfilled, (state, action) => {
            state.products = action.payload
        })
    }
})
export default productSlice.reducer;