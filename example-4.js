/**
 * Bài 4: Tính chu vi, diện tích hình chữ nhật
 *
 * Đầu vào: nhập chieuDai, chieuRong
 *
 * Xử lý:
 * Chuyển về thành kiểu Number(chieuDai), Number(chieuRong)
 * Tính chu vi: chuVi = (chieuDai + chieuRong) * 2
 * Tính diện tích: chieuDai * chieuRong;
 *
 * Đầu ra: show ra màn hình chu vi và diện tích
 */

let btnTinh = document.getElementById("btnTinh-4");
btnTinh.onclick = function () {
  let chieuDai = document.getElementById("chieuDai").value;
  let chieuRong = document.getElementById("chieuRong").value;
  chieuDai = Number(chieuDai);
  chieuRong = Number(chieuRong);

  let chuVi = (chieuDai + chieuRong) * 2;
  let dienTich = chieuDai * chieuRong;
  let rs = `Hình chữ nhật có chiều dài: ${chieuDai}, chiều rộng: ${chieuRong} có Chu vi = ${chuVi} , Diện tích =  ${dienTich}`;
  let pInfo = document.getElementById("pInfo-4");
  pInfo.innerText = rs;
};
