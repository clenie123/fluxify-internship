import { useEffect, useState } from "react";

function OrderList() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/orders")
      .then(res => res.json())
      .then(data => setOrders(data));
  }, []);

  return (
    <div>
      <h2>Orders</h2>

      {orders.map(o => (
        <div key={o.id}>
          <h4>Order #{o.id}</h4>
          <p>Customer ID: {o.customer_id}</p>
          <p>Total: ${o.total_price}</p>
          <p>Status: {o.status}</p>
        </div>
      ))}
    </div>
  );
}

export default OrderList;