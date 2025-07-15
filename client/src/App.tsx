import { Route, Routes } from "react-router-dom";
import Layout from "./components/dashboard/Layout";
import Dashboard from "./pages/Dashboard";
import Analytics from "./pages/Analytics";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="analytics" element={<Analytics />} />
          {/* <Route path="orders" element={<AdminOrders />} /> */}
          {/* <Route path="products" element={<AdminProducts />} /> */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
