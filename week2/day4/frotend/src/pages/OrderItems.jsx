import { useState } from "react";

function OrderItemList() {
  const [orderItems, setOrderItems] = useState([
    {
      id: 1,
      orderId: 101,
      product: "Laptop",
      quantity: 1,
      price: 800
    },
    {
      id: 2,
      orderId: 101,
      product: "Mouse",
      quantity: 2,
      price: 20
    }
  ]);

  const deleteItem = (id) => {
    setOrderItems(orderItems.filter(item => item.id !== id));
  };

  return (
    <div className="container">
      <h1>Order Items</h1>

      {orderItems.map(item => (
        <div className="card" key={item.id}>
          <h3>{item.product}</h3>
          <p>Order ID: {item.orderId}</p>
          <p>Qty: {item.quantity}</p>
          <p>Price: ${item.price}</p>

          <button onClick={() => deleteItem(item.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default OrderItemList;