// Viết chương trình cho phép người dùng thêm  số vào mảng 

var arrNumber = []

document.getElementById('btnNhapSo').onclick = function() {
    //input Number
    var iSo = Number(document.getElementById('nhapSo_1').value);
    //output number
    var ketQua = 0;
    //process
    arrNumber.push(iSo);

    ketQua = '['+ arrNumber +']';
    //in mảng ra gd

    document.getElementById('arrNumber').innerHTML = ketQua;

}

//Bài tập 1: Tổng số dương các mảng
/* 
Mô hình 3 khối :
Đầu vào : Nhập các số vào mảng
xử lí : Tạo vòng lặp for cho chạy theo chiều dài mảng và in ra từng giá trị của mảng
        => cộng vào biến tổng 
Đầu ra : Xuất ra tổng các số dương
*/
document.getElementById('btnTinhTong').onclick = function () {
    //output number
    var sum = 0;
    //process
    for (var i = 0; i < arrNumber.length; i++){
        if (arrNumber[i]>0){
            sum += arrNumber[i];
        }
       
    }
    document.getElementById('ketQua_b1').innerHTML = 'Tổng số dương: ' + sum;
}

//Bài Tập 2: Đếm số dương
/*
Mô hình 3 khối :
Đầu vào : Nhập các số vào mảng
xử lí : Tạo vòng lặp for cho chạy theo chiều dài mảng và in ra từng giá trị của mảng
        => đem so sánh từng giá trị >0 nếu lớn hơn 0 thì biến đếm cộng +1 
Đầu ra : Xuất ra đếm các số dương trong mảng
*/
document.getElementById('btnDemSo').onclick = function () {
    //output number
    var demSo = 0;
    //process
    for (var i = 0; i < arrNumber.length; i++){
        if (arrNumber[i] > 0)
        demSo++
    }
    document.getElementById('ketQua_b2').innerHTML = 'Số dương: ' + demSo;
}

//Bài tập 3: Tìm số nhỏ nhất
/*
Mô hình 3 khối :
Đầu vào : Nhập các số vào mảng
xử lí : Tạo vòng lặp for cho chạy theo chiều dài mảng và in ra từng giá trị của mảng
        => soNhoNhat > arrNumber[soHang]) 
          thì  soNhoNhat = arrNumber[soHang];
Đầu ra : Xuất ra số nhỏ nhất trong mảng
*/
document.getElementById('btnNhoNhat').onclick = function () {
    //output Number
    var min = arrNumber[0];
    //process
    for (var i = 0; i < arrNumber.length; i++){
        if(arrNumber[i] < min){
            min = arrNumber[i];
        }
    }
    document.getElementById('ketQua_b3').innerHTML = 'Số nhỏ nhất: ' + min;
}

//Bài tập 4: Tìm số dương nhỏ nhất
/*
Mô hình 3 khối :
Đầu vào : Nhập các số vào mảng
xử lí : Tạo vòng lặp for cho chạy theo chiều dài mảng và in ra từng giá trị của mảng
        => soDuongNN > arrNumber[soHang]) && arrNumber[soHang] >0 
          thì  soDuongNN = arrNumber[soHang];
Đầu ra : Xuất ra số dương nhỏ nhất trong mảng
*/
document.getElementById('btnSoMin').onclick = function () {
    var soM = -1;
    for (var i = 0; i < arrNumber.length; i++) {
        if ((soM<0) && (arrNumber[i] > soM)&& (arrNumber[i]>0)) {
            soM = arrNumber[i];
        }else {
            if((soM > arrNumber[i])&& (arrNumber[i]>0)){
                soM = arrNumber[i];
            }
        }
    }
    document.getElementById('ketQua_b4').innerHTML = "Số dương nhỏ nhất là : " + soM;
}


//bài tập 5: Tìm số chẵn cuối cùng
/*
Mô hình 3 khối :
Đầu vào : Nhập các số vào mảng
xử lí : Tạo vòng lặp for cho chạy theo chiều dài mảng và in ra từng giá trị của mảng
        => soChanCC = arrNumber[soHang]) && arrNumber[soHang] % 2 === 0 && arrNumber > 0
          thì  soChanCC = arrNumber[soHang];
Đầu ra : Xuất ra số chẵn cuối cùng trong mảng
*/
document.getElementById('btnSoChan').onclick = function () {
    //output number
    var soC = 0;
    //process
    for (var i = 0; i < arrNumber.length;i++) {
        if (arrNumber[i] % 2 == 0){
            soC = arrNumber[i];
        }
    }
    document.getElementById('ketQua_b5').innerHTML = 'Số chẵn cuối cùng: ' + soC;
}


/*
bài tập 6 : đổi chỗ 2 số 
Mô hình 3 khối :
Đầu vào : Nhập các số vào mảng
xử lí : tạo biến tạm  và gán biến tạm = viTri1 lúc này vị trí 1 đã trống tiếp tục gán viTri1 = viTri2  => vị trí 2 trống gán viTri2 = biến tạm
Đầu ra : Xuất ra mảng đã đổi vị trí 
*/
document.getElementById('btnDoiCho').onclick = function () {
    var viTri1 = Number(document.getElementById('viTri1').value)
    var viTri2 = Number(document.getElementById('viTri2').value)
    var temp = 0;
    temp = arrNumber[viTri1]
    arrNumber[viTri1] = arrNumber[viTri2];
    arrNumber[viTri2] = temp;
    document.getElementById('ketQua_b6').innerHTML = '['+ arrNumber +']';
}



//bài tập 7: Sắp xếp tăng dần cùng
 /*
Mô hình 3 khối :
Đầu vào : Nhập các số vào mảng
xử lí :  sử dụng hàm score.sort như ở bên dưới
Đầu ra : Xuất ra mảng đã sắp xếp vị trí
*/
document.getElementById('btnSapXep').onclick= function () {
    //process
    var sapXep = arrNumber;
    sapXep.sort();
   

    
    document.getElementById("ketQua_b7").innerHTML = "Mảng sau khi sắp xếp: " + '['+ sapXep +']';

}

//bài tập 8: Tìm số nguyên tố đầu tiên
/*
Mô hình 3 khối :
Đầu vào : Nhập các số vào mảng
xử lí :  tạo hàm kiểm tra số nguyên tố
    + đặt cờ hiệu kiemtra = true
    nếu id<= 1 kiemtra =false
    tạo vòng lặp for(var uoc = 2; uoc <= id1 / 2; uoc++)
    nếu id % uoc == 0  biến kiemtra = false và dừng vòng lặp
    sau đó tại hàm chính nếu hàm kiemtra =true ở giá trị mảng nào thì xuất ra giá trị đó
    ngược lại thì xuất không có số nguyên tố đó
Đầu ra : Xuất ra giá trị số nguyên tố đầu tiên
*/
document.getElementById('btnSoNguyenTo').onclick = function(){
    var ketQua = '';
    // var songuyento = arrNumber[0];
    for(var i=0; i<arrNumber.length; i++){
        var kiemTra = kiemTraSoNguyenTo(arrNumber[i]);
        if(kiemTra === true){ //Nếu kiemTra =  true
            ketQua ='Số nguyên tố đầu tiên: ' + arrNumber[i];
            break;
        }
        else{
            ketQua = "Không có số nguyên tố !"
        }
    }
    document.getElementById('ketQua_b8').innerHTML = ketQua;

}
//Viết hàm kiểm tra số nguyên tố
function kiemTraSoNguyenTo(id1) {//input 1 số 5
    //Biến kiểm tra là output: Đúng là số nguyên tố => true, sai là false
    var kiemTra = true;
    if(id1<=1){
        kiemTra = false;
    }
    for (var uoc = 2; uoc <= id1 / 2; uoc++) {
        //Mỗi lần duyệt qua 1 ước thì kiểm tra ước đó 
        if (id1 % uoc == 0) {
            // ước lớn hơn 3
            kiemTra = false;
            break;
        }
    }
    return kiemTra;
}

//Bài tập 9  đếm số nguyên
/*
Mô hình 3 khối :
Đầu vào : Nhập các số vào mảng mới number1
xử lí : Tạo vòng lặp for cho chạy theo chiều dài mảng và in ra từng giá trị của mảng
            => dùng hàm Number.isInteger để biết giá trị đó là số nguyên hay ko giá trị trả về true và nếu là true thì biến đếm +1
Đầu ra : Xuất ra có bao nhiêu số nguyên
*/
var arrNumber1 = [];
document.getElementById('btnNhapSo1').onclick = function () {
    var themSo1 = Number(document.getElementById('themSo1').value);
    var ketQuaThemSo1 = '';
    arrNumber1.push(themSo1);
    ketQuaThemSo1 = "[" + arrNumber1 + "]";
    document.getElementById('ketQua_b91').innerHTML = ketQuaThemSo1;
}
document.getElementById('btnDemSoNguyen').onclick = function () {
    var dem = 0;
    for (var soHang = 0; soHang <= arrNumber1.length; soHang++) {
        if (Number.isInteger(arrNumber1[soHang]) == true) {
            dem++
        }
    }
    document.getElementById('ketQua_b9').innerHTML = "Mảng có " + dem + " số nguyên";
}



//bài tập 10 : so sánh số âm và số dương
/*
Mô hình 3 khối :
Đầu vào : Nhập các số vào mảng
xử lí : Tạo vòng lặp for cho chạy theo chiều dài mảng và in ra từng giá trị của mảng
        =>  arrNumber[soHang] > 0 
          thì soDuong ++
           =>  arrNumber[soHang] < 0 
          thì soAm ++
          sau đó tiến hành so sánh số lượng số âm và số lượng số dương
Đầu ra : Xuất ra sự so sánh số âm và số dương trong mảng
*/
document.getElementById('btnSoSanh').onclick = function() {
    //output string
   var ketQua_b10 = '';
    
    for (var soAm = 0, soDuong =0, i = 0; i < arrNumber.length; i++) {
        if(arrNumber[i] > 0) {
            soDuong++;
            
        }else if (arrNumber[i] < 0) {
            soAm++;''
            
        }
    
    }
    if(soAm>soDuong){
        ketQua_b10 = 'Số âm > Số dương: '
    } else if (soDuong>soAm){
        ketQua_b10 ='Số dương > Số âm '
    }else {
        ketQua_b10 ='Số âm = Số dương'
    }
    document.getElementById('ketQua_b10').innerHTML = ketQua_b10;
}