import { Route, Routes } from "react-router-dom";
import Layout from "./components/dashboard/Layout";
import Dashboard from "./pages/Dashboard";
import Analytics from "./pages/Analytics";
import { useAppSelector } from "./store/hooks";
import Customers from "./pages/Customers";
import NewCustromers from "./pages/NewCustromers";
import VerifiedCustomers from "./pages/VerifiedCustomers";
import Settings from "./pages/Settings";
import Products from "./pages/Products";
import Inventory from "./pages/Inventory";
import NewProducts from "./pages/NewProducts";
import NotFound from "./pages/NotFound";

function App() {
   const darkMode = useAppSelector((state) => state.theme.theme);
  return (
    <div className={darkMode === "dark" ? "dark" : ""}>
      <Routes>
        <Route path="/" element={<Layout />}>
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
    </div >
  );
}

export default App;
