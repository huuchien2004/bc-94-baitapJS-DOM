/**
 * Bài 1:Tính tiền lương
 * 
 * - Đầu vào: nhập số ngày làm: n = 3
 * 
 * - Xử lý:
 * Tính tiền lương total = n * 100.000
 * 
 * - Đầu ra: show tổng lương ra màn hình qua pInfo-1
 */
let btnTinh = document.getElementById("btnTongTien-1");
btnTinh.onclick = function (){
    let ngayLam = document.getElementById("numNgayLam").value;
    let total = ngayLam * 100000;
    let rs = "Tổng tiền lương là: " + total.toLocaleString("vi-VN") + "đ";

    let pInfo = document.getElementById("pInfo-1");
    pInfo.innerText = rs;
}