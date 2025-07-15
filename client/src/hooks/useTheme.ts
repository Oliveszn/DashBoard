import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { setDarkMode } from "@/store/ui-slice/theme-slice";

export const useTheme = () => {
  const dispatch = useAppDispatch();
  const darkMode = useAppSelector((state) => state.theme.theme);

  useEffect(() => {
    const savedMode = localStorage.getItem("theme") as "light" | "dark" | null;
    if (savedMode === "dark" || savedMode === "light") {
      dispatch(setDarkMode(savedMode));
    } else {
      const systemPrefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      const defaultMode = systemPrefersDark ? "dark" : "light";
      dispatch(setDarkMode(defaultMode));
      localStorage.setItem("theme", defaultMode);
    }
  }, [dispatch]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode === "dark");
  }, [darkMode]);

  return darkMode;
};
