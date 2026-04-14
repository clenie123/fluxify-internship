import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Admin Panel</h2>

      <Link to="/">Dashboard</Link>
      <Link to="/products">Products</Link>
      <Link to="/customers">Customers</Link>
      <Link to="/orders">Orders</Link>
      <Link to="/order-items">Order Items</Link>
      
    </div>
  );
}

export default Sidebar;