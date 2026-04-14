import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";

import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Customers from "./pages/Customers";
import Orders from "./pages/Orders";
import OrderItems from "./pages/OrderItems";
import ProductDetail from "./pages/ProductDetail";

import "./styles.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app-layout">
        <Sidebar />

        <div className="main">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/products" element={<Products />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/order-items" element={<OrderItems />} />
            <Route path="/product/:id" element={<ProductDetail />} />
        
            
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;