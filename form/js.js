function getInfo(id) {
  let linkPage = window.location.search.substring(1);
  let linkPageArr = linkPage.split("&");
  for (let i = 0; i < linkPageArr.length; i++) {
    let checkId = linkPageArr[i].split("=");
    if (checkId[0] == id) {
      return checkId[1];
    }
  }
}
let hoTen = getInfo("hoTen");
hoTen = hoTen.replace(/[+]/g, " ");
let ngaySinh =
  getInfo("day") + " / " + getInfo("month") + " / " + getInfo("month");
if (
  (getInfo("day") == "") &
  (getInfo("month") == "") &
  (getInfo("month") == "")
) {
  ngaySinh = "";
}
let gioiTinh = getInfo("bede");
if (gioiTinh == undefined) {
  gioiTinh = "";
}

let diaChi = getInfo("address");
diaChi = diaChi.replace(/[+]/g, " ");
let soDienThoai = getInfo("phoneNumber");
let email = getInfo("email");
email = decodeURIComponent(email);
document.getElementById("ten_dang_nhap").innerText = "Tên đăng ký: " + hoTen;
document.getElementById("ngay_sinh").innerText = "Ngày sinh: " + ngaySinh;
document.getElementById("gioi_tinh").innerText = "Giới tính: " + gioiTinh;
document.getElementById("dia_chi").innerText = "Địa chỉ: " + diaChi;
document.getElementById("so_dien_thoai").innerText =
  "Số điện thoại: " + soDienThoai;
document.getElementById("email").innerText = "Địa chỉ mail: " + email;

// str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

function getInfo(id) {
  let linkPage = window.location.search.substring(1);
  let linkPageArr = linkPage.split("&");
  for (let i = 0; i < linkPageArr.length; i++) {
    let checkId = linkPageArr[i].split("=");
    if (checkId[0] == id) {
      return checkId[1];
    }
  }
}
let hoTen = getInfo("hoTen");
hoTen = hoTen.replace(/[+]/g, " ");
let ngaySinh =
  getInfo("day") + " / " + getInfo("month") + " / " + getInfo("month");
if (
  (getInfo("day") == "") &
  (getInfo("month") == "") &
  (getInfo("month") == "")
) {
  ngaySinh = "";
}
let gioiTinh = getInfo("bede");
if (gioiTinh == undefined) {
  gioiTinh = "";
}

let diaChi = getInfo("address");
diaChi = diaChi.replace(/[+]/g, " ");
let soDienThoai = getInfo("phoneNumber");
let email = getInfo("email");
email = decodeURIComponent(email);
document.getElementById("ten_dang_nhap").innerText = "Tên đăng ký: " + hoTen;
document.getElementById("ngay_sinh").innerText = "Ngày sinh: " + ngaySinh;
document.getElementById("gioi_tinh").innerText = "Giới tính: " + gioiTinh;
document.getElementById("dia_chi").innerText = "Địa chỉ: " + diaChi;
document.getElementById("so_dien_thoai").innerText =
  "Số điện thoại: " + soDienThoai;
document.getElementById("email").innerText = "Địa chỉ mail: " + email;

// str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
