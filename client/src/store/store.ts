import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./ui-slice/theme-slice";
import productReducer from "./ui-slice/product-slice";

const store = configureStore({
  reducer: {
    theme: themeReducer,
    product: productReducer,
  },
});
export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
