/**Bài 3: Quy đổi tiền
 *
 * - Đầu vào: Nhập số tiền USD và có thể đổi mệnh giá quy đổi USD
 *
 * Xử lý:
 * Lấy tỉ giá USD nếu người dùng thay đổi, không đổi mặc định là 23.500
 * viết hàm tách dấu ., ra khỏi số giá trị nếu người dùng nhập
 * Lấy số tiền người dùng cần quy đổi
 * Tính số tiền đã quy đổi = tỉ giá * số tiền quy đổi
 *
 * - Đầu ra: show ra màn hình số tiền quy đổi
 */
let btnTinh = document.getElementById("btnTinh-3");
btnTinh.onclick = function () {
  let tiGiaInput = document.getElementById("tiGia").value;
  tiGia = tiGiaInput ? parseMoneySimple(tiGiaInput) : 23500;

  let soTien = document.getElementById("soTien").value;

  let soTienQuyDoi = tiGia * soTien;
  let rs = "Số tiền quy đổi là: " + soTienQuyDoi.toLocaleString("vi-VN") + "đ";

  let pInfo = document.getElementById("pInfo-3");
  pInfo.innerText = rs;

  function parseMoneySimple(input) {
    return Number(input.replace(/[.,]/g, ""));
  }
};
