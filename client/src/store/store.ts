import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./ui-slice/theme-slice";
import productReducer from "./ui-slice/product-slice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

// had to add this to persist only products
const productsPersistConfig = {
  key: "products",
  storage,
};

const persistedProductReducer = persistReducer(
  productsPersistConfig,
  productReducer
);

const store = configureStore({
  reducer: {
    theme: themeReducer,
    products: persistedProductReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
