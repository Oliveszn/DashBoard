import { Route, Routes } from "react-router-dom";
import Layout from "./components/dashboard/Layout";
import Dashboard from "./pages/Dashboard";
import Analytics from "./pages/Analytics";
import Customers from "./pages/Customers";
import NewCustromers from "./pages/NewCustromers";
import VerifiedCustomers from "./pages/VerifiedCustomers";
import Settings from "./pages/Settings";
import Products from "./pages/Products";
import Inventory from "./pages/Inventory";
import NewProducts from "./pages/NewProducts";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import { useTheme } from "./hooks/useTheme";

function App() {
  // const darkMode = useAppSelector((state) => state.theme.theme);
  // useEffect(() => {
  //   const savedMode = localStorage.getItem("theme") as "light" | "dark" | null;
  //   if (savedMode === "dark" || savedMode === "light") {
  //     dispatch(setDarkMode(savedMode));
  //   } else {
  //     // If no saved preference, check system preference
  //     const systemPrefersDark = window.matchMedia(
  //       "(prefers-color-scheme: dark)"
  //     ).matches;
  //     const defaultMode = systemPrefersDark ? "dark" : "light";
  //     dispatch(setDarkMode(defaultMode));
  //     localStorage.setItem("theme", defaultMode);
  //   }
  // }, [dispatch]);

  // useEffect(() => {
  //   if (darkMode === "dark") {
  //     document.documentElement.classList.add("dark");
  //   } else {
  //     document.documentElement.classList.remove("dark");
  //   }
  // }, [darkMode]);
  const darkMode = useTheme();
  return (
    <div className={darkMode === "dark" ? "dark" : ""}>
      <div className="bg-[#f1f5f9] dark:bg-slate-950">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="" element={<Layout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="customers" element={<Customers />} />
            <Route path="new-customer" element={<NewCustromers />} />
            <Route path="verified-customers" element={<VerifiedCustomers />} />
            <Route path="products" element={<Products />} />
            <Route path="new-product" element={<NewProducts />} />
            <Route path="inventory" element={<Inventory />} />
            <Route path="settings" element={<Settings />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
