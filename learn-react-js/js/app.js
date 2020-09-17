const PRODUCTS = [
  {
    id: 1,
    name: "Samehada - Thất kiếm làng sương mù",
    price: 10.05,
    image: "imgs/kiem.jpg",
    description: "Đây là sản phẩm số 1 tốt nhất thế giới ninja",
    quantity: 3,
  },
  {
    id: 2,
    name: "Dao Kunai",
    price: 22.14,
    image: "imgs/kunai.jpg",
    description: "Đây là sản phẩm số 2 tốt nhất thế giới ninja",
    quantity: 5,
  },
];



// render HTML
function App() {
  // tạo 1 state là PRODUCTS chứa thông tin, khi thay đổi state thì giao diện tự động thay đổi
  // không thể thay đổi trực tiếp products mà phải thông qua 1 hàm là setProducts
  const [products, setProducts] = React.useState(PRODUCTS);
  function clear() {
    function sumCount() {
      let sum = 0;
      for (let item of products) {
        sum += item.price * item.quantity;
      }
      return sum;
    }
    setProducts([
      {
        id: 1,
        name: "Samehada - Dao thái thịt",
        price: 30,
        image: "imgs/kiem.jpg",
        description: "Đây là sản phẩm số 1 tốt nhất thế giới ninja",
        quantity: 30,
      },
      {
        id: 2,
        name: "Dao Kunai - Dao chặt chim",
        price: 20,
        image: "imgs/kunai.jpg",
        description: "Đây là sản phẩm số 2 tốt nhất thế giới ninja",
        quantity: 30,
      },
    ])
  }
  return (
    <main>
      <CartHeader products={products} />
      <CartBody products={products} />
      <CartFooter
        subTotal={sumCount()}
        tax={sumCount() * 0.1}
      />
      <button onClick={clear}></button>
    </main>
    
  );
}
ReactDOM.render(<App />, document.getElementById("root"));
