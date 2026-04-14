import { useEffect, useState } from "react";

function Products() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  // LOAD DATA
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(data);
  }, []);

  // SAVE DATA
  const saveToStorage = (data) => {
    localStorage.setItem("products", JSON.stringify(data));
  };

  // CREATE PRODUCT
  const addProduct = () => {
    if (!name || !price) return;

    const newProduct = {
      id: Date.now(),
      name,
      price
    };

    const updated = [...products, newProduct];
    setProducts(updated);
    saveToStorage(updated);

    setName("");
    setPrice("");
  };

  // DELETE PRODUCT
  const deleteProduct = (id) => {
    const updated = products.filter((p) => p.id !== id);
    setProducts(updated);
    saveToStorage(updated);
  };

  // UPDATE PRODUCT
  const updateProduct = (id) => {
    const newName = prompt("Enter new product name:");
    const newPrice = prompt("Enter new price:");

    const updated = products.map((p) =>
      p.id === id
        ? { ...p, name: newName, price: newPrice }
        : p
    );

    setProducts(updated);
    saveToStorage(updated);
  };

  return (
    <div className="container">
      <h1>📦 Products</h1>

      {/* FORM */}
      <input
        type="text"
        value={name}
        placeholder="Product name"
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="number"
        value={price}
        placeholder="Price"
        onChange={(e) => setPrice(e.target.value)}
      />

      <button onClick={addProduct}>Add Product</button>

      {/* LIST */}
      {products.length === 0 ? (
        <p>No products found</p>
      ) : (
        products.map((p) => (
          <div className="card" key={p.id}>
            <h3>{p.name}</h3>
            <p>💰 ${p.price}</p>

            <button onClick={() => updateProduct(p.id)}>
              Update
            </button>

            <button onClick={() => deleteProduct(p.id)}>
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default Products;