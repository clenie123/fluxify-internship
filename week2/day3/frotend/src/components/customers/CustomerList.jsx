import { useEffect, useState } from "react";

function CustomerList() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/customers")
      .then(res => res.json())
      .then(data => setCustomers(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h2>Customers</h2>

      {customers.map(c => (
        <div key={c.id}>
          <h4>{c.name}</h4>
          <p>{c.email}</p>
        </div>
      ))}
    </div>
  );
}

export default CustomerList;