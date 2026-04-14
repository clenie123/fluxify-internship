import { useState } from "react";
import ProductCard from "../components/ProductCard";

function Shop() {
  const [products] = useState([
    { id: 1, name: "Laptop", price: 800 },
    { id: 2, name: "Phone", price: 500 },
    { id: 3, name: "Headphones", price: 100 }
  ]);

  return (
    <div className="container">
      <h1>🛍️ Shop Page</h1>

      {products.map((p) => (
        <ProductCard
          key={p.id}
          name={p.name}
          price={p.price}
        />
      ))}
    </div>
  );
}

export default Shop;