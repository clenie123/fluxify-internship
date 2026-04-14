import { useEffect, useState } from "react";

function Dashboard() {
  const [customers, setCustomers] = useState([]);
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);

  // LOAD DATA
  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    setCustomers(JSON.parse(localStorage.getItem("customers")) || []);
    setProducts(JSON.parse(localStorage.getItem("products")) || []);
    setOrders(JSON.parse(localStorage.getItem("orders")) || []);
  };

  // UPDATE CUSTOMER
  const editCustomer = (id) => {
    const newName = prompt("Enter new customer name:");

    const updated = customers.map((c) =>
      c.id === id ? { ...c, name: newName } : c
    );

    setCustomers(updated);
    localStorage.setItem("customers", JSON.stringify(updated));
  };

  // UPDATE PRODUCT
  const editProduct = (id) => {
    const newName = prompt("New product name:");
    const newPrice = prompt("New product price:");

    const updated = products.map((p) =>
      p.id === id
        ? { ...p, name: newName, price: newPrice }
        : p
    );

    setProducts(updated);
    localStorage.setItem("products", JSON.stringify(updated));
  };

  return (
    <div className="container">
      <h1>📊 Admin Dashboard</h1>

      {/* STATS */}
      <div className="dashboard-box">
        <div className="stat-box">
          <h2>{customers.length}</h2>
          <p>Customers</p>
        </div>

        <div className="stat-box">
          <h2>{products.length}</h2>
          <p>Products</p>
        </div>

        <div className="stat-box">
          <h2>{orders.length}</h2>
          <p>Orders</p>
        </div>
      </div>

      {/* CUSTOMERS */}
      <h2>👤 Customers</h2>
      {customers.length === 0 ? (
        <p>No customers</p>
      ) : (
        customers.map((c) => (
          <div className="card" key={c.id}>
            <p>{c.name}</p>
            <button onClick={() => editCustomer(c.id)}>
              Update
            </button>
          </div>
        ))
      )}

      {/* PRODUCTS */}
      <h2>📦 Products</h2>
      {products.length === 0 ? (
        <p>No products</p>
      ) : (
        products.map((p) => (
          <div className="card" key={p.id}>
            <p>{p.name} - ${p.price}</p>
            <button onClick={() => editProduct(p.id)}>
              Update
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default Dashboard;