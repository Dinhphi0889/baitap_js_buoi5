/**
 * input: họ tên, số KW điện
 *       + giá tiền điện trong từng khoảng số KW
 * step:
 *      + lấy dữ liệu từ form
 *      + xác định số điện tiêu thụ
 *      + áp dụng công thức tính phù hợp
 * output: giá tiền điện
 *
 */
const soKW_50_Dau = 500;
const soKW_50_Ke = 650;
const soKW_100_Ke = 850;
const soKW_150_Ke = 1100;
const conLai = 1300;


function main(){
    let hoTen = document.getElementById("inputHoTen_Bai2").value;
    let soKW = document.getElementById("inputKW").value;
    document.getElementById("txtBai2").innerHTML = "Họ tên : " + hoTen + "; Tiền điện : " + tinhTienDien(soKW).toLocaleString();
}
function tinhTienDien(soKW){
    if(soKW > 0 && soKW <= 50){
        return soKW * soKW_50_Dau;
    }
    else if(50 < soKW && soKW <= 100){
        return (soKW_50_Dau * 50 ) + ((soKW - 50) * soKW_50_Ke);

    }
    else if(100 < soKW && soKW <= 200){
        return (soKW_50_Dau * 50 ) + (soKW_50_Ke * 50) + ((soKW - 100) * soKW_100_Ke );
        
    }
    else if(200 < soKW && soKW <= 350){
        return (soKW_50_Dau * 50 ) + (soKW_50_Ke * 50) + (soKW_100_Ke * 100) + ((soKW - 200) * soKW_150_Ke );
    }
    else if(soKW > 350){
        return (soKW_50_Dau * 50 ) + (soKW_50_Ke * 50) + (soKW_100_Ke * 100) + (150 * soKW_150_Ke ) + ((soKW - 350) * conLai);
    }
    else{
        document.getElementById("txtBai2").innerHTML = "Hãy nhập số KW";
    }
}
document.getElementById("btnBai2").onclick = main;