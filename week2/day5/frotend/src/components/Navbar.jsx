import { Link } from "react-router-dom";

import "../styles.css";

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">Dashboard</Link>
      <Link to="/products">Products</Link>
      <Link to="/customers">Customers</Link>
      <Link to="/orders">Orders</Link>
    </div>
  );
}

export default Navbar;