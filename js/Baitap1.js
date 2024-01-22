/**
 * input:
 *      + Điểm chuẩn, khu vực, đối tượng, điểm 1, điểm 2, điểm 3
 * 
 * 
 * step:
 *      + lấy dữ liệu từ form
 *      + tính điểm trung bình 3 môn
 *      + nếu ở KV:
 *          - A : +2 điểm, B: +1 điểm, C: +0.5 điểm
 *      + nếu thuộc đối tượng
 *          - 1: +2.5 điểm;
 *          - 2: +1.5 điểm
 *          - 3: +1 điểm;
 * 
 * output: 
 *      thông báo ra màn hình kết quả điểm thi và đậu hay không.
 */


function main() {
    let diemChuan = Number(document.getElementById("inputDiemChuan").value);
    let diem1 = Number(document.getElementById("inputDiem1").value);
    let diem2 = Number(document.getElementById("inputDiem2").value);
    let diem3 = Number(document.getElementById("inputDiem3").value);
    let khuVuc = Number(document.getElementById("selectKV").value);
    let doiTuong = Number(document.getElementById("selectDT").value);

    let tong = tongDiem(diem1, diem2, diem3) + kiemTraKhuVuc(khuVuc) + kiemTraDoiTuong(doiTuong);
    if (diem1 == 0 || diem2 == 0 || diem3 == 0) {
        document.getElementById("txtBai1").innerHTML = "Bạn đã rớt vì có môn 0 điểm !!!"
    }
    else if(tong < diemChuan){
        document.getElementById("txtBai1").innerHTML = "Bạn đã rớt. Tổng điểm là: " + tong
    }
    else{
        document.getElementById("txtBai1").innerHTML = "Bạn đã đậu. Tổng điểm là: " + tong
    }
}
function tongDiem(mon1, mon2, mon3) {
    return mon1 + mon2 + mon3;
}

function kiemTraKhuVuc(khuVuc) {
    if (khuVuc == 2) {
        return 2
    }
    else if (khuVuc == 1) {
        return 1
    }
    else if (khuVuc == 0.5) {
        return 0.5
    }
    else {
        return 0
    }
}
function kiemTraDoiTuong(doiTuong) {
    if (doiTuong == 2.5) {
        return 2.5;
    }
    else if (doiTuong == 1.5)
        return 1.5;
    else if (doiTuong == 1)
        return 1;
    else {
        return 0;
    }
}


document.getElementById("btnBai1").onclick = main;