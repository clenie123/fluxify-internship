import Navbar from "./components/layout/Navbar";
import CustomerList from "./components/customers/CustomerList";
import ProductList from "./components/products/ProductList";
import OrderList from "./components/orders/OrderList";

function App() {
  return (
    <div>
      <Navbar />

      <h1>Admin Dashboard</h1>

      <CustomerList />
      <ProductList />
      <OrderList />
    </div>
  );
}

export default App;