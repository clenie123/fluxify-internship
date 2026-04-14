import { useState } from "react";

function ProductForm() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const products =
      JSON.parse(localStorage.getItem("products")) || [];

    const newProduct = {
      id: Date.now(),
      name,
      price,
    };

    localStorage.setItem(
      "products",
      JSON.stringify([...products, newProduct])
    );

    setName("");
    setPrice("");
  };

  return (
    <div className="form-wrapper">
      <div className="form-container">
        <h2>📦 Add Product</h2>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Product Name</label>

            <div className="input-box">
              <span>📦</span>
              <input
                type="text"
                placeholder="Enter product..."
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>

          <div className="form-group">
            <label>Price</label>

            <div className="input-box">
              <span>💰</span>
              <input
                type="number"
                placeholder="Enter price..."
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
          </div>

          <button className="form-btn">
            Save Product
          </button>
        </form>
      </div>
    </div>
  );
}

export default ProductForm;