function ProductList() {
  const products = [
    { id: 1, name: "Phone", price: 200 },
    { id: 2, name: "Laptop", price: 800 }
  ];

  return (
    <div>
      <h2>Products</h2>

      {products.map(p => (
        <div key={p.id}>
          <h3>{p.name}</h3>
          <p>${p.price}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductList;