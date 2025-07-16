// product-slice.ts
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface Product {
  id: number;
  title: string;
  price: number;
}

const initialState: Product[] = [];

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => action.payload,
    deleteProduct: (state, action: PayloadAction<number>) =>
      state.filter((product) => product.id !== action.payload),
  },
});

export const { setProducts, deleteProduct } = productSlice.actions;
export default productSlice.reducer;
