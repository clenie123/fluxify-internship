function OrderItemList() {
  const items = [
    { id: 1, product: "Phone", qty: 2 },
    { id: 2, product: "Laptop", qty: 1 }
  ];

  return (
    <div>
      <h2>Order Items</h2>

      {items.map(i => (
        <div key={i.id}>
          <p>{i.product} - Qty: {i.qty}</p>
        </div>
      ))}
    </div>
  );
}

export default OrderItemList;