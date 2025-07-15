import { createSlice } from "@reduxjs/toolkit";

interface toastState {
  theme: "light" | "dark";
  resolvedTheme: "light" | "dark";
}

const initialState: toastState = {
  theme: "light",
  resolvedTheme: "light",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
      // localStorage.setItem("theme", state.theme ? "true" : "false");
       localStorage.setItem("theme", state.theme);
    },
    setDarkMode: (state, action) => {
      state.theme = action.payload;
    },
  },
});

export const { toggleDarkMode, setDarkMode } = themeSlice.actions;
export default themeSlice.reducer;
