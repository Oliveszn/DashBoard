import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  stock: number;
  availabilityStatus: string;
}

interface ProductState {
  items: Product[];
}

const initialState: ProductState = {
  items: [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.items = action.payload;
    },
    deleteProduct: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((p) => p.id !== action.payload);
    },
  },
});

export const { setProducts, deleteProduct } = productSlice.actions;
export default productSlice.reducer;
