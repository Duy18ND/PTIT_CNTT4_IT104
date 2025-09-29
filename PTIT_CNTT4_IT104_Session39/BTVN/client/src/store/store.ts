import { configureStore } from "@reduxjs/toolkit";
import product_slice from './slice/product_slice'
export const store = configureStore({
    reducer: {
        products: product_slice
    }
});