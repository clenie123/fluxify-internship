import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div style={{ display: "flex", gap: "15px", padding: "10px", background: "#222", color: "white" }}>
      <Link to="/">Dashboard</Link>
      <Link to="/products">Products</Link>
      <Link to="/customers">Customers</Link>
      <Link to="/orders">Orders</Link>
    </div>
  );
}

export default Navbar;