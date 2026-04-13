function CustomerList() {
  const customers = [
    { id: 1, name: "John", email: "john@gmail.com" },
    { id: 2, name: "Alice", email: "alice@gmail.com" }
  ];

  return (
    <div>
      <h2>Customers</h2>

      {customers.map(c => (
        <div key={c.id}>
          <h3>{c.name}</h3>
          <p>{c.email}</p>
        </div>
      ))}
    </div>
  );
}

export default CustomerList;