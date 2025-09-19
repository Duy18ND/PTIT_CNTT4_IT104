import { createStore } from "redux";
import { RootReducer } from "./reducer/RootReducer";

export const store = createStore(RootReducer);