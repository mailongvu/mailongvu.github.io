

function CartFooter(props) {
  
  return (
    <section className="container">
      {props.products.length > 0 ? (<div><div className="promotion">
        <label htmlFor="promo-code">Have A Promo Code?</label>
        <input type="text" id="promo-code" onChange={props.getCode}/> <button onClick={props.odeAddSaleOff}type="button" />
      </div>
      <div className="summary">
        <ul>
          <li>
            Subtotal <span>{props.subTotal.toLocaleString("en-US", {style: "currency",
  currency: "VND"})}</span>
          </li>
          <li>
            Tax <span>{props.tax.toLocaleString("en-US", {style: "currency",
  currency: "VND"})}</span>
          </li>
          
          <SaleOff/>
          <li className="total">
            Total <span>{(props.subTotal + props.tax).toLocaleString("en-US", {style: "currency",
  currency: "VND"})}</span>
          </li>
        </ul>
      </div>
      <div className="checkout">
        <button type="button">Check Out</button>
      </div></div>) : null}
    </section>
  );
}
