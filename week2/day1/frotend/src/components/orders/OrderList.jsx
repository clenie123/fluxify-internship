function OrderList() {
  const orders = [
    { id: 1, customer: "John", total: 500 },
    { id: 2, customer: "Alice", total: 800 }
  ];

  return (
    <div>
      <h2>Orders</h2>

      {orders.map(o => (
        <div key={o.id}>
          <h3>Order #{o.id}</h3>
          <p>Customer: {o.customer}</p>
          <p>Total: ${o.total}</p>
        </div>
      ))}
    </div>
  );
}

export default OrderList;