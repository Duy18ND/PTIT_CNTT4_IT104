import { configureStore } from "@reduxjs/toolkit";
import productSlice from '../store/Slice/product'
export const store = configureStore({
    reducer: {
        products: productSlice
    }
});