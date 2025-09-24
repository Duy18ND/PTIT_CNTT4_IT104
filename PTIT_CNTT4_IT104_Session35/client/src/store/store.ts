import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slice/CounterSlice";
import randomReducer from "./slice/RandomSlice";
import ThemeReducer from "./slice/ThemeSlice";
import viewModeReducer from './slice/ViewModeSlice'
import menuReducer from './slice/MenuSlice'
import languageReducer from './slice/LanguageSlice'
import FavoriteReducer from './slice/favoriteSlice'
import AuthReducer from './slice/SaveLoginSlice'
export const store = configureStore({
  reducer: {
    EXE01: counterReducer,
    EXE02: randomReducer,
    EXE03: ThemeReducer,
    EXE04: viewModeReducer,
    EXE05: menuReducer,
    EXE06: languageReducer,
    EXE07: FavoriteReducer,
    EXE08: AuthReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
