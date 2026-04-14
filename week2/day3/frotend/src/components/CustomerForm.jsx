import { useState } from "react";

function CustomerForm() {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const customers =
      JSON.parse(localStorage.getItem("customers")) || [];

    const newCustomer = {
      id: Date.now(),
      name,
    };

    localStorage.setItem(
      "customers",
      JSON.stringify([...customers, newCustomer])
    );

    setName("");
  };

  return (
    <div className="form-wrapper">
      <div className="form-container">
        <h2>👤 Add Customer</h2>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>

            <div className="input-box">
              <span>👤</span>
              <input
                type="text"
                placeholder="Enter customer name..."
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>

          <button className="form-btn">
            Save Customer
          </button>
        </form>
      </div>
    </div>
  );
}

export default CustomerForm;