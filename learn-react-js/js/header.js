function CartHeader({products}) {
  function count() {
    let count = 0;
    for (let item of products) {
      count += item.quantity
    }
    return count;
  }
  return (
    <header className="container">
      <h1>Shopping Cart</h1>
      <ul className="breadcrumb">
        <li>Home</li>
        <li>Shopping Cart</li>
      </ul>
      <span className="count">{count()} items in the bag</span>
    </header>
  );
}
