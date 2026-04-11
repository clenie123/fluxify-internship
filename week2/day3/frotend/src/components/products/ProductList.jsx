import { useEffect, useState } from "react";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div>
      <h2>Products</h2>

      {products.map(p => (
        <div key={p.id}>
          <h4>{p.name}</h4>
          <p>${p.price}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductList;