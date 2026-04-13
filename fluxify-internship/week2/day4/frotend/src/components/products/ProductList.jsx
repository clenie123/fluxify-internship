import { useEffect, useState } from "react";

function ProductList() {
  const [products, setProducts] = useState([]);

  const fetchProducts = () => {
    fetch("http://localhost:5000/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return { products, fetchProducts };
}

export default ProductList;