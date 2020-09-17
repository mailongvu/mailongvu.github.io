const PRODUCTS = [
  {
    id: 10,
    name: "Iphone 12",
    description: "Description 1",
    image: "https://via.placeholder.com/200x150",
    price: makePrice(),
    quantity: makeQuantity(),
  },
  {
    id: 20,
    name: "Laptop DELL",
    description: "Description 2",
    image: "https://via.placeholder.com/200x150",
    price: makePrice(),
    quantity: makeQuantity(),
  },
];

function makePrice() {
  // make random price
  return Math.floor(Math.random() * 1000000 + 100000).toLocaleString("en-US", {
    style: "currency",
    currency: "VND",
  });
}

function makeQuantity() {
  // make random quantity
  return Math.floor(Math.random() * 10 + 1);
}

function App() {
  const [products, setProducts] = React.useState(PRODUCTS);
  const [isShowModal, setShowModal] = React.useState(false);
  const [deleteProduct, setDeleteProduct] = React.useState({});
  const [getSale, setGetSale] = React.useState({codeSale:0});
  const taxPercent = 0.1;
  let numberItems = 0;
  let subTotal = 0;
  
  for (const product of products) {
    let priceItem = product.price.replace(/₫/g, "").replace(/,/g, "");
    numberItems += product.quantity;
    subTotal += priceItem * product.quantity - getSale.codeSale*priceItem;
  }
  let tax = subTotal * taxPercent;

  function makeName(length) {
    // make random name
    let result = "";
    let characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let lengthCharacters = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * lengthCharacters));
    }
    return result;
  }

  function addProduct() {
    const newProducts = [...products];
    newProducts.push({
      id: Math.floor(Math.random() * 100),
      name: makeName(5), // make name had 5 characters random
      description: "Description 2",
      image: "https://via.placeholder.com/200x150",
      price: makePrice(),
      quantity: makeQuantity(),
    });
    setProducts(newProducts);
  }

  function confirmRemove(product) {
    setShowModal(true); // show modal
    setDeleteProduct(product);
    return product.name;

    // Set state kiểu hiện đại (bật tắt modal)
    // setShowModal((value) => !value);
  }

  function removeProduct() {
    const newProducts = products.filter(
      (product) => product.id != deleteProduct.id
    );
    setProducts(newProducts);
    setShowModal(false); // hide modal
  }

  function handleChangeQuantity(id, event) {
    const newProduct = [...products];
    if (parseInt(event.target.value) < 100) {
      for (let product of newProduct) {
        if (product.id == id) {
          product.quantity = parseInt(event.target.value);
        }
      }
      setProducts(newProduct);
    }
  }

  let code = "";
  function getCode(e) {
    code = e.target.value;
    console.log(code);
    return code;
  }

  function codeAddSaleOff() {
    if (code == "Techmaster") {
      setGetSale({codeSale:0.3})
    } else {
      setGetSale({codeSale:0})
      alert("Mã giảm giá sai rồi bồ tèo")
    }
  }

  


  return (
    <main>
      <CartHeader
        title="Shopping Cart"
        numberItems={numberItems}
        addProduct={addProduct}
      />

      <CartBody
        products={products}
        confirmRemove={confirmRemove}
        handleChangeQuantity={handleChangeQuantity}
      />

      <CartFooter products={products} subTotal={subTotal} tax={tax} getCode={getCode} codeAddSaleOff={codeAddSaleOff}/>

      <Modal
        nameItem={deleteProduct.name} // set name of item for modal
        products={products}
        isVisible={isShowModal}
        handleOk={removeProduct}
        handleCancel={() => setShowModal(false)}
      />
     
    </main>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
