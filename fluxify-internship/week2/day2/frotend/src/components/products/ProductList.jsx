import ProductCard from "./ProductCard";

function ProductList() {
  const products = [
    { id: 1, name: "Phone", price: 200 },
    { id: 2, name: "Laptop", price: 800 }
  ];

  return (
    <div>
      <h2>Products</h2>

      {products.map(p => (
        <ProductCard key={p.id} name={p.name} price={p.price} />
      ))}
    </div>
  );
}

export default ProductList;