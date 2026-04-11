function Navbar() {
  return (
    <div style={{ display: "flex", gap: "20px", padding: "10px", background: "#222", color: "white" }}>
      <h3>Dashboard</h3>
      <h3>Customers</h3>
      <h3>Products</h3>
      <h3>Orders</h3>
      <h3>Order Items</h3>
    </div>
  );
}

export default Navbar;