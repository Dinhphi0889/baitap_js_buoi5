/**
 * input : họ tên, tổng thu nhập năm, số người phụ thuộc
 *      + % thuế trong từng khoảng tiền
 * step:
 *      + lấy giá trị từ form
 *      + xác định tổng số tiền
 *      + tính tổng số tiền thuê phải trả
 * output: tổng tiền thuế
 */
const tienHoTro = 4e+6;

function main() {
    let hoTen = document.getElementById("inputHoTen_Bai3").value;
    let soTien = document.getElementById("inputSoTien").value;
    let soNguoi = document.getElementById("inputSoNguoi").value;
    // new Intl.NumberFormat('vn-VN', {style: 'currency', currency: 'VND'}).format(tinhTien(soTien, soNguoi))
    let tongTien = new Intl.NumberFormat('vn-VN', { style: 'currency', currency: 'VND' }).format(tinhTien(soTien, soNguoi))
    if (tinhTien(soTien, soNguoi) < 0) {
        document.getElementById("txtBai3").innerHTML = "Nhập lại số tiền!"
    } else {

        document.getElementById("txtBai3").innerHTML = "Họ tên : " + hoTen + " ; Tiền thuế thu nhập cá nhân: " + tongTien.toLocaleString();
    }


}
function tinhTien(tongThuNhap, nguoiPhuThuoc) {
    if (tongThuNhap > 0 && tongThuNhap <= 60e+6) {
        return ((tongThuNhap - tienHoTro) - (nguoiPhuThuoc * 1.6e+6)) * 0.05;
    }
    else if (tongThuNhap > 60e+6 && tongThuNhap <= 120e+6) {
        return (60e+6 * 0.05) + (((tongThuNhap - 60e+6 - tienHoTro) - (nguoiPhuThuoc * 1.6e+6)) * 0.1);
    }
    else if (tongThuNhap > 120e+6 && tongThuNhap <= 210e+6) {
        return (60e+6 * 0.05) + (60e+6 * 0.1) + (((tongThuNhap - 120e+6 - tienHoTro) - (nguoiPhuThuoc * 1.6e+6)) * 0.15);
    }
    else if (tongThuNhap > 210e+6 && tongThuNhap <= 384e+6) {
        return (60e+6 * 0.05) + (60e+6 * 0.1) + (90e+6 * 0.15) + (((tongThuNhap - 210e+6 - tienHoTro) - (nguoiPhuThuoc * 1.6e+6)) * 0.2)
    }
    else if (tongThuNhap > 384e+6 && tongThuNhap <= 624e+6) {
        return (60e+6 * 0.05) + (60e+6 * 0.1) + (90e+6 * 0.15) + (174e+6 * 0.2) + (((tongThuNhap - 384e+6 - tienHoTro) - (nguoiPhuThuoc * 1.6e+6)) * 0.25)
    }
    else if (tongThuNhap > 624e+6 && tongThuNhap <= 960e+6) {
        return (60e+6 * 0.05) + (60e+6 * 0.1) + (90e+6 * 0.15) + (174e+6 * 0.2) + (240e+6 * 0.25) + (((tongThuNhap - 624e+6 - tienHoTro) - (nguoiPhuThuoc * 1.6e+6)) * 0.3)
    }
    else if (tongThuNhap > 960e+6) {
        return (60e+6 * 0.05) + (60e+6 * 0.1) + (90e+6 * 0.15) + (174e+6 * 0.2) + (240e+6 * 0.25) + (336e+6 * 0.3) + (((tongThuNhap - 960e+6 - tienHoTro) - (nguoiPhuThuoc * 1.6e+6)) * 0.35)
    }
    else {
        return 0;
    }
}


document.getElementById("btnBai3").onclick = main;