import { useEffect, useState } from "react";

function Customers() {
  const [customers, setCustomers] = useState([]);
  const [name, setName] = useState("");

  // LOAD DATA
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("customers")) || [];
    setCustomers(data);
  }, []);

  // SAVE TO LOCALSTORAGE
  const saveData = (data) => {
    localStorage.setItem("customers", JSON.stringify(data));
  };

  // CREATE
  const addCustomer = () => {
    if (!name) return;

    const newCustomer = {
      id: Date.now(),
      name
    };

    const updated = [...customers, newCustomer];
    setCustomers(updated);
    saveData(updated);
    setName("");
  };

  // DELETE
  const deleteCustomer = (id) => {
    const updated = customers.filter((c) => c.id !== id);
    setCustomers(updated);
    saveData(updated);
  };

  // UPDATE
  const updateCustomer = (id) => {
    const newName = prompt("Enter new customer name:");

    const updated = customers.map((c) =>
      c.id === id ? { ...c, name: newName } : c
    );

    setCustomers(updated);
    saveData(updated);
  };

  return (
    <div className="container">
      <h1>👤 Customers</h1>

      {/* INPUT */}
      <input
        type="text"
        value={name}
        placeholder="Enter customer name"
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={addCustomer}>Add Customer</button>

      {/* LIST */}
      {customers.length === 0 ? (
        <p>No customers found</p>
      ) : (
        customers.map((c) => (
          <div className="card" key={c.id}>
            <h3>{c.name}</h3>

            <button onClick={() => updateCustomer(c.id)}>
              Update
            </button>

            <button onClick={() => deleteCustomer(c.id)}>
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default Customers;