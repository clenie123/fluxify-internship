import { useParams } from "react-router-dom";
import "../styles.css";

function ProductDetail() {
  const { id } = useParams();

  const products = [
    { id: 1, name: "Laptop", price: 800, desc: "High performance laptop" },
    { id: 2, name: "Phone", price: 400, desc: "Smart Android phone" },
    { id: 3, name: "Headphones", price: 120, desc: "Noise cancelling headphones" }
  ];

  const product = products.find((p) => p.id === Number(id));

  // ✅ SAFE CHECK (IMPORTANT)
  if (!product) {
    return (
      <div className="container">
        <h2>❌ Product not found</h2>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>Product Detail</h1>

      <div className="card">
        <h2>{product.name}</h2>
        <p>{product.desc}</p>
        <h3>${product.price}</h3>
      </div>
    </div>
  );
}

export default ProductDetail;