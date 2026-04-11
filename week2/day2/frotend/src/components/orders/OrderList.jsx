import OrderCard from "./OrderCard";

function OrderList() {
  const orders = [
    { id: 1, customer: "John", total: 500 },
    { id: 2, customer: "Alice", total: 800 }
  ];

  return (
    <div>
      <h2>Orders</h2>

      {orders.map(o => (
        <OrderCard
          key={o.id}
          id={o.id}
          customer={o.customer}
          total={o.total}
        />
      ))}
    </div>
  );
}

export default OrderList;