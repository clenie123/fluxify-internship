function OrderCard({ id, customer, total }) {
  return (
    <div style={{ border: "1px solid blue", margin: "5px", padding: "10px" }}>
      <h4>Order #{id}</h4>
      <p>Customer: {customer}</p>
      <p>Total: ${total}</p>
    </div>
  );
}

export default OrderCard;