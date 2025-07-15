import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./ui-slice/theme-slice";

const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});
export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
