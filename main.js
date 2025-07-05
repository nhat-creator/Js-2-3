// Bài tập 1
let btnTinhLuong = document.getElementById("btnTinhLuong");
btnTinhLuong.onclick = function(){
    let heSoLuong = document.getElementById("heSoLuong").value;
    let soNgayLam = document.getElementById("soNgayLam").value;
    let luong = heSoLuong * soNgayLam;
    let kqLuong = document.getElementById("kqLuong");
    kqLuong.textContent = `Lương tháng này là: ${luong}`;

};

// Bài tập 2
let btnTinhTrungBinh = document.getElementById("btnTinhTrungBinh");
btnTinhTrungBinh.onclick = function(){
    let number_1 = document.getElementById("number-1").value;
    number_1 = Number(number_1);
    let number_2 = document.getElementById("number-2").value;
    number_2 = Number(number_2);
    let number_3 = document.getElementById("number-3").value;
    number_3 = Number(number_3);
    let number_4 = document.getElementById("number-4").value;
    number_4 = Number(number_4);
    let number_5 = document.getElementById("number-5").value;
    number_5 = Number(number_5);
    let Tb = (number_1 + number_2 + number_3 + number_4 + number_5)/5;
    let kqTb = document.getElementById("kqTb");
    kqTb.textContent = `Kết quả trung bình là: ${Tb}`;
}

// Bài tập 3
let btnQuyDoiTien = document.getElementById("btnQuyDoiTien");
btnQuyDoiTien.onclick = function(){
    let USD = document.getElementById("USD").value;
    USD = Number(USD);
    let VND = USD * 23500;
    let kqTien = document.getElementById("kqTien");
    kqTien.textContent = `Số tiền sau khi đổi sang VNĐ là: ${new Intl.NumberFormat('vn-VN').format(VND)}`;
};

// Bài tập 4
let btnTinh = document.getElementById("btnTinh");
btnTinh.onclick = function(){
    let chieuDai = document.getElementById("chieuDai").value;
    chieuDai = Number(chieuDai);
    let chieuRong = document.getElementById("chieuRong").value;
    chieuRong = Number(chieuRong);
    let CV = (chieuDai + chieuRong) / 2;
    let DT = chieuDai * chieuRong;
    let kqTinh = document.getElementById("kqTinh");
    kqTinh.textContent = `Chu vi: ${CV}; Diện tích: ${DT}`;
}

// Bài tập 5
let btnTongChuSo = document.getElementById("btnTongChuSo");
btnTongChuSo.onclick = function(){
    let numberTwo = document.getElementById("numberTwo").value;
    numberTwo = Number(numberTwo);
    let kqNumberTwo = numberTwo % 10 + Math.floor(numberTwo / 10);
    let kqTongChuSo = document.getElementById("kqTongChuSo");
    kqTongChuSo.textContent = `${kqNumberTwo}`;
};