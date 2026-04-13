function ProductCard({ name, price }) {
  return (
    <div style={{ border: "1px solid green", margin: "5px", padding: "10px" }}>
      <h4>{name}</h4>
      <p>${price}</p>
    </div>
  );
}

export default ProductCard;