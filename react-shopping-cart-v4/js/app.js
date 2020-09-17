const PRODUCTS = [
  {
    id: 10,
    name: "Iphone 12",
    description: "Description 1",
    image: "https://via.placeholder.com/200x150",
    price: 1000,
    quantity: 20,
  },
  {
    id: 20,
    name: "Laptop DELL",
    description: "Description 2",
    image: "https://via.placeholder.com/200x150",
    price: 7,
    quantity: 1,
  },
];

function App() {
  const [products, setProducts] = React.useState(PRODUCTS);
  const [isShow, setShowModal] = React.useState(false);
  const taxPercent = 0.1; // Thuế = 10% subTotal
  let numberItems = 0;
  let subTotal = 0;

  // Tính tổng số sản phẩm và tổng tiền
  for (const product of products) {
    numberItems += product.quantity;
    subTotal += product.price * product.quantity;
  }
  let tax = subTotal * taxPercent;

  function addProduct() {
    // Tạo 1 mảng mới giống hệt mảng cũ
    const newProducts = [...products];
    // Tạo ngẫu nhiên 1 id
    function randomId() {
      return (Math.floor(Math.random() * 10000))
    }
    // Thêm phần tử vào mảng mới
    newProducts.push({
      id: randomId(),
      name: "Laptop DELL 3",
      description: "Description 2",
      image: "https://via.placeholder.com/200x150",
      price: 12.99,
      quantity: 11,
    });

    // Cập nhật state
    setProducts(newProducts);
  }

  //TODO: Xóa sản phẩm dung confirm
  // function removeProduct(productId, productName) {
  //   let confirmRemove = confirm("Xoa san pham" + productId)
  //   if (confirmRemove) {
  //     const newProducts = products.filter((product) => product.id != productId);
  //     setProducts(newProducts);
  //   } 
  // }
  //TODO: Xóa sản phẩm kieu modal bootraps
  function confirmRemove () {
    setShowModal((value) => !value)
  }
  function removeProduct() {
    
    // let confirmRemove = confirm("Xoa san pham" + productId)
    // if (confirmRemove) {
      const newProducts = products.filter((product) => product.id != deleteProduct.id);
      setProducts(newProducts);
    } 
  }

  return (
    <main>
      <CartHeader
        title="Shopping Cart"
        numberItems={numberItems}
        addProduct={addProduct}
      />

      <CartBody products={products} removeProduct={removeProduct} />

      <CartFooter products={products} subTotal={subTotal} tax={tax} />
      <MoDal isShow={setShowModal} handleOk={} handleCancle={setShowModal}/>
    </main>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
