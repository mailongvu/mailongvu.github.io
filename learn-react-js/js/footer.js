function CartFooter(props) {
  return (
    <section className="container">
      <div className="promotion">
        <label htmlFor="promo-code">Have A Promo Code?</label>
        <input type="text" id="promo-code" /> <button type="button" />
      </div>
      <div className="summary">
        <ul>
          <li>
            Subtotal <span>VNĐ&nbsp;{props.subTotal}</span>
          </li>
          <li>
            Tax <span>VNĐ&nbsp;{props.tax}</span>
          </li>
          <li className="total">
            Total <span>VNĐ&nbsp;{props.subTotal + props.tax}</span>
          </li>
        </ul>
      </div>
      <div className="checkout">
        <button type="button">Check Out</button>
      </div>
    </section>
  );
}
