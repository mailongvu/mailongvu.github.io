function CartHeader({ title, numberItems, addProduct }) {
  return (
    <header className="container">
      <h1>{title}</h1>

      <ul className="breadcrumb">
        <li>Home</li>
        <li>{title}</li>
      </ul>
      <span className="count">{numberItems} items in the bag</span>

      <button onClick={addProduct}>Add Product</button>
    </header>
  );
}
