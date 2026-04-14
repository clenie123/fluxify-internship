import { useState } from "react";
import "../styles.css";

function OrderItems() {
  const [items, setItems] = useState([
    { id: 1, product: "Laptop", qty: 1, price: 800 },
    { id: 2, product: "Phone", qty: 2, price: 300 },
    { id: 2, product: "Headphone", qty: 1, price: 120 },
    { id: 2, product: "Desktop", qty: 2, price: 850 },
  ]);

  const [product, setProduct] = useState("");
  const [qty, setQty] = useState("");
  const [price, setPrice] = useState("");

  const addItem = (e) => {
    e.preventDefault();

    setItems([
      ...items,
      {
        id: Date.now(),
        product,
        qty,
        price
      }
    ]);

    setProduct("");
    setQty("");
    setPrice("");
  };

  const deleteItem = (id) => {
    setItems(items.filter((i) => i.id !== id));
  };

  return (
    <div className="container">
      <h1>Order Items</h1>

      {/* FORM */}
      <form className="card" onSubmit={addItem}>
        <input
          placeholder="Product"
          value={product}
          onChange={(e) => setProduct(e.target.value)}
        />

        <input
          placeholder="Quantity"
          value={qty}
          onChange={(e) => setQty(e.target.value)}
        />

        <input
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <button type="submit">Add Item</button>
      </form>

      {/* LIST */}
      {items.map((i) => (
        <div className="card" key={i.id}>
          <h3>{i.product}</h3>
          <p>Qty: {i.qty}</p>
          <p>Price: ${i.price}</p>

          <button onClick={() => deleteItem(i.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default OrderItems;