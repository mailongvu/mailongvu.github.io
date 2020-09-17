function MoDal({isShow, handleOk, handleCancel}) {
  return (
    isShow && (<section className="modal">
    <div className="title">"Xoá sản phẩm "</div>
    <div className="button">
      <button onClick={handleCancel}>HUỶ</button>
      <button onClick={handleOk}>OK MEN</button>
    </div>
  </section>)
  );
}
