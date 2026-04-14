import { useEffect, useState } from "react";
import "../styles.css";

function Dashboard() {
  const [orders, setOrders] = useState([]);

  // LOAD DATA FROM localStorage
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(data);
  }, []);

  // CALCULATIONS
  const totalOrders = orders.length;
  const pending = orders.filter(o => o.status === "Pending").length;
  const delivered = orders.filter(o => o.status === "Delivered").length;

  return (
    <div className="container">
      <h1>Admin Dashboard</h1>

      <p className="desc">
        Overview of your eCommerce system transactions.
      </p>

      {/* STATS */}
      <div className="grid">
        <div className="card stat">
          <h3>Total Orders</h3>
          <p>{totalOrders}</p>
        </div>

        <div className="card stat">
          <h3>Pending</h3>
          <p>{pending}</p>
        </div>

        <div className="card stat">
          <h3>Delivered</h3>
          <p>{delivered}</p>
        </div>
      </div>

      {/* RECENT ORDERS */}
      <h2>Recent Transactions</h2>

      {orders.length === 0 ? (
        <p>No transactions yet</p>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Product</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {orders.slice(0, 5).map((o) => (
              <tr key={o.id}>
                <td>{o.id}</td>
                <td>{o.product}</td>
                <td>${o.price}</td>
                <td>
                  <span
                    className={
                      o.status === "Delivered"
                        ? "status delivered"
                        : "status pending"
                    }
                  >
                    {o.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Dashboard;