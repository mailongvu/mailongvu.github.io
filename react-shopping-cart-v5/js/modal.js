function Modal({ isVisible, handleOk,handleCancel, nameItem}) {
  return (
    isVisible && (
      <div className="modal">
        <h2>Bạn có chắc chắn muốn xóa sản phẩm  {nameItem} hay không?</h2>
        <div className="btnModal">
          <button className="btnCancel" onClick={handleCancel}>Cancel</button>
          <button className="btnOk" onClick={handleOk}>OK</button>
        </div>
      </div>
    )
  );
}
