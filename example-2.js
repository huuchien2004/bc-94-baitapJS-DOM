/**
 * Bài 2: Tính trung bình 5 số
 * 
 * - Đầu vào: Nhập 5 số
 * 
 * - Xử lý:
 * Chuyển 5 số thành số Number()
 * Tổng 5 số tong = 5 số cộng lại
 * Tính giá trị trung bình trungBinh = tổng / 5
 * 
 * - Đầu ra: show ra màn hình giá trị trung bình 5 số
 */
let btnTinh = document.getElementById("btnTinhTB");
btnTinh.onclick = function() {
    let num1 = document.getElementById("num1-2").value;
    let num2 = document.getElementById("num2-2").value;
    let num3 = document.getElementById("num3-2").value;
    let num4 = document.getElementById("num4-2").value;
    let num5 = document.getElementById("num5-2").value;

    num1 = Number(num1);
    num2 = Number(num2);
    num3 = Number(num3);
    num4 = Number(num4);
    num5 = Number(num5);

    let tong = num1 + num2 + num3 + num4 + num5;
    let trungBinh = tong / 5;
    let rs = "Giá trị trung bình là: " + trungBinh;
    let pInfo = document.getElementById("pInfo-2");
    pInfo.innerText = rs;
}