/**
 * input: mã khách hàng, loại khách hàng, số kênh, số tiền ứng với mỗi loại khách hàng
 * 
 * step: lấy giá trị từ form
 *      + xác định số tiền cần nộp
 *      + áp dụng công thức để tính toán đối với mỗi loại khách 
 *       hàng
 * output : tổng tiền
 */

const phiHoaDon_DanCu = 4.5;
const phiCoBan_DanCu = 20.5;
const kenhCaoCap_DanCu = 7.5;


const phiHoaDon_DoanhNhiep = 15;
const phiCoBan_DoanhNghiep = 75;
const kenhCaoCap_DoanhNghiep = 50;



function tinhTienCap(){
    let maKhachHang = document.getElementById("inputMaKhachHang").value;
    let loaiKhachHang = document.getElementById("selectKhachHang").value;
    let soKenh = document.getElementById("inputSoKenh").value;
    let tongTien = 0;

    if(loaiKhachHang == "danCu"){
        tongTien = tinhTienDanCu(phiHoaDon_DanCu, phiCoBan_DanCu, kenhCaoCap_DanCu, soKenh);
        
    }
    else if(loaiKhachHang == "doanhNghiep"){
        tongTien = tinhTienDoanhNghiep(phiHoaDon_DoanhNhiep, phiCoBan_DoanhNghiep, kenhCaoCap_DoanhNghiep, soKenh);
    }
    else{
        return document.getElementById("txtBai4").innerHTML = "Hãy chọn loại khách hàng!"
    }
    document.getElementById("txtBai4").innerHTML = "Mã Khách Hàng : " + maKhachHang + "; Tiền Cáp : " + tongTien;
}

function tinhTienDanCu(hoaDon_DanCu, coBan_DanCu, kenhCaoCap_DanCu, soKenh){
    let tongDanCu = hoaDon_DanCu + coBan_DanCu + (kenhCaoCap_DanCu * soKenh)
    return new Intl.NumberFormat('us-US', {style:'currency', currency: 'USD'}).format(tongDanCu);
}


function tinhTienDoanhNghiep(hoaDon_DoanhNghiep, coBan_DoanhNghiep, kenhCaoCap_DoanhNghiep, soKenh){

    let soKetNoi = document.getElementById("inputSoKetNoi").value;


    if(soKetNoi <= 10){
        let tongDoanhNghiep = hoaDon_DoanhNghiep + coBan_DoanhNghiep +  (soKenh * kenhCaoCap_DoanhNghiep)
        return new Intl.NumberFormat('us-US', {style:'currency', currency: 'USD'}).format(tongDoanhNghiep)
    }
    else if(soKetNoi > 10){
        let tongDoanhNghiep = hoaDon_DoanhNghiep + coBan_DoanhNghiep +  (soKenh * kenhCaoCap_DoanhNghiep) + ((soKetNoi - 10) * 5)
        return new Intl.NumberFormat('us-US', {style:'currency', currency: 'USD'}).format(tongDoanhNghiep)
    }
}


function showInput(){
    let loaiKhachHang = document.getElementById("selectKhachHang").value;
    if(loaiKhachHang == "doanhNghiep"){
        document.getElementById("inputSoKetNoi").style.display = "block";
    }
    else{
        document.getElementById("inputSoKetNoi").style.display = "none";
    }
}

// document.getElementById("btnBai4").onclick = tinhTienCap();

// document.getElementById("doanhNghiep").style.display = "block"