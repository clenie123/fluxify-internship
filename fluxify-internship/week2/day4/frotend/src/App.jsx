import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/layout/Dashboard";

import CustomerList from "./components/customers/CustomerList";
import ProductList from "./components/products/ProductList";
import OrderList from "./components/orders/OrderList";
import OrderItemList from "./components/orderItems/OrderItemList";

function App() {
  return (
    <div>
      <Navbar />

      <Dashboard />

      <CustomerList />
      <ProductList />
      <OrderList />
      <OrderItemList />
    </div>
  );
}

export default App;