import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/dashboard/Layout";
import Dashboard from "./pages/Dashboard";
import Analytics from "./pages/Analytics";
import Customers from "./pages/Customers";
import VerifiedCustomers from "./pages/VerifiedCustomers";
import Settings from "./pages/Settings";
import Products from "./pages/Products";
import Inventory from "./pages/Inventory";
import NewProducts from "./pages/NewProducts";
import NotFound from "./pages/NotFound";
import { useTheme } from "./hooks/useTheme";
import { useProducts } from "./hooks/useProducts";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setProducts } from "./store/ui-slice/product-slice";

function App() {
  const darkMode = useTheme();
  const dispatch = useDispatch();
  const { data } = useProducts();

  useEffect(() => {
    if (data) {
      dispatch(setProducts(data));
    }
  }, [data, dispatch]);
  return (
    <div className={darkMode === "dark" ? "dark" : ""}>
      <div className="bg-[#f1f5f9] dark:bg-slate-950">
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* //added this so it redirects to dashboard on / page */}
            <Route index element={<Navigate to="/dashboard" replace />} />

            <Route path="dashboard" element={<Dashboard />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="customers" element={<Customers />} />
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
