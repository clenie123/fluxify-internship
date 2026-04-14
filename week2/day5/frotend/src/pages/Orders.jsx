import { useState, useEffect } from "react";
import "../styles.css";

function Orders() {
  const [orders, setOrders] = useState([]);

  // LOAD DATA
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(data);
  }, []);

  // UPDATE STATUS
  const updateStatus = (id, status) => {
    const updated = orders.map((o) =>
      o.id === id ? { ...o, status } : o
    );

    setOrders(updated);
    localStorage.setItem("orders", JSON.stringify(updated));
  };

  // DELETE ORDER
  const deleteOrder = (id) => {
    const filtered = orders.filter((o) => o.id !== id);
    setOrders(filtered);
    localStorage.setItem("orders", JSON.stringify(filtered));
  };

  return (
    <div className="container">
      <h1>Orders (Transactions)</h1>

      {orders.length === 0 ? (
        <p>No orders yet</p>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Product</th>
              <th>Price</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((o) => (
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

                <td>
                  <button onClick={() => updateStatus(o.id, "Pending")}>
                    Pending
                  </button>

                  <button onClick={() => updateStatus(o.id, "Delivered")}>
                    Delivered
                  </button>

                  <button onClick={() => deleteOrder(o.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Orders;