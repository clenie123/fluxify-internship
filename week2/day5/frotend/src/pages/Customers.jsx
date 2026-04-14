import { useState } from "react";
import "../styles.css";

function Customers() {
  const [customers, setCustomers] = useState([
    { id: 1, name: "John Doe", email: "john@gmail.com" },
    { id: 2, name: "Alice Smith", email: "alice@gmail.com" }
  ]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [editId, setEditId] = useState(null);

  // CREATE
  const handleAdd = (e) => {
    e.preventDefault();
    setCustomers([...customers, { id: Date.now(), name, email }]);
    setName("");
    setEmail("");
  };

  // DELETE
  const handleDelete = (id) => {
    setCustomers(customers.filter(c => c.id !== id));
  };

  // EDIT
  const handleEdit = (c) => {
    setEditId(c.id);
    setName(c.name);
    setEmail(c.email);
  };

  // UPDATE
  const handleUpdate = (e) => {
    e.preventDefault();
    setCustomers(
      customers.map(c =>
        c.id === editId ? { ...c, name, email } : c
      )
    );
    setEditId(null);
    setName("");
    setEmail("");
  };

  return (
    <div className="container">
      <h1>Customers</h1>

      <form className="card" onSubmit={editId ? handleUpdate : handleAdd}>
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button type="submit">
          {editId ? "Update Customer" : "Add Customer"}
        </button>
      </form>

      {customers.map(c => (
        <div key={c.id} className="card">
          <h3>{c.name}</h3>
          <p>{c.email}</p>

          <button onClick={() => handleEdit(c)}>Edit</button>
          <button onClick={() => handleDelete(c.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default Customers;