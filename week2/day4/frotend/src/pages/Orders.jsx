import { useState } from "react";

function Orders() {
  const [orders, setOrders] = useState([
    { id: 1, product: "Laptop", status: "Pending" }
  ]);

  const updateStatus = (id) => {
    setOrders(
      orders.map(o =>
        o.id === id
          ? { ...o, status: "Delivered" }
          : o
      )
    );
  };

  return (
    <div className="container">
      <h1>Orders</h1>

      {orders.map(o => (
        <div className="card" key={o.id}>
          <p>{o.product}</p>
          <p>Status: {o.status}</p>

          <button onClick={() => updateStatus(o.id)}>
            Mark Delivered
          </button>
        </div>
      ))}
    </div>
  );
}

export default Orders;