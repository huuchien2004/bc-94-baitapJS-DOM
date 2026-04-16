/**
 * Đầu vào: nhập số = 24
 * 
 * Xử lý:
 * Tạo biến hangChuc = lấy n chia hết ch0 10 (n/10)
 * Làm tròn hangChuc = Math.floor(hangChuc)
 * 
 * Tao biến hangDV = lấy n chia lấy phần dư cho 10 (n % 10)
 * 
 * Tạo biến total = hangChuc + hangDV
 * Tạo biến rs: Thiết kế câu thông báo + total
 * 
 * Đầu ra: show kết quả ra ngoài thẻ p 
 */
let btnTongKySo = document.getElementById("btnTongKySo");
btnTongKySo.onclick = function () {
    let number = document.getElementById("number").value;
    
    let hangChuc = Math.floor(number / 10);
    let hangDV = number % 10;
    let total = hangChuc + hangDV;
    let rs = `Tổng 2 ký số là: ${total}`;

    let pInfo = document.getElementById("pInfo-5");
    pInfo.innerHTML = rs;
}