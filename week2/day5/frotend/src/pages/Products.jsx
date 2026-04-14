import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles.css";

function Products() {
  const navigate = useNavigate();

  const [products] = useState([
    { id: 1, name: "Laptop", price: 800, desc: "High performance laptop" },
    { id: 2, name: "Phone", price: 400, desc: "Smart Android phone" },
    { id: 3, name: "Headphones", price: 120, desc: "Noise cancelling headphones" }
  ]);

  return (
    <div className="container">
      <h1>🛍️ Products</h1>

      <div className="grid">
        {products.map((p) => (
          <div className="card" key={p.id}>
            <h3>{p.name}</h3>
            <p>${p.price}</p>
            <p>{p.desc}</p>

            <button onClick={() => navigate(`/product/${p.id}`)}>
              View Product
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;