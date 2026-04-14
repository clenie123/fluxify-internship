import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <h2 className="logo">🛒 Admin Panel</h2>

      <div className="nav-links">
        <Link to="/">Dashboard</Link>
        <Link to="/customers">Customers</Link>
        <Link to="/products">Products</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/order-items">Order Items</Link>
      </div>
    </div>
  );
}

export default Navbar;