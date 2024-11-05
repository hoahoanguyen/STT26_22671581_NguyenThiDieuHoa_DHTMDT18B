$(document).ready(function() {

    function checkMaNhanSu() {
        const maNhanSu = $("#manhanvien").val();
        const regex = /^\d{9}$/;

        if (maNhanSu === "") {
            $("#errmanhanvien").text("(*) Mã nhân sự không được để trống.");
            return false;
        }
        else if (!regex.test(maNhanSu)) {
            $("#errmanhanvien").text("(*) Mã nhân sự không hợp lệ. Vui lòng nhập 9 chữ số.");
            return false;
        } else {
            $("#errmanhanvien").text("");
            return true;
        }
    }

    $("#manhanvien").on("blur", checkMaNhanSu);

    function checkHoTen() {
        const hoTen = $("#hoten").val();
        const regex = /^[A-Z][a-z]*(\s[A-Z][a-z]*)*$/;
    
        if (hoTen === "") {
            $("#errhoten").text("(*) Họ tên không được để trống.");
            return false;
        }
        else if (!regex.test(hoTen)) {
            $("#errhoten").text("(*) Họ tên không hợp lệ. Vui lòng nhập đúng định dạng, ví dụ: Tran Thanh Hung");
            return false;
        } else {
            $("#errhoten").text("");
            return true;
        }
    }
    
    $("#hoten").on("blur", checkHoTen);

    function checkNgayVaoLam() {
        const ngayVaoLam = $("#ngayvaolam").val();
        const ngayHienTai = new Date();
        const ngay18NamTruoc = new Date(ngayHienTai.getFullYear() - 18, ngayHienTai.getMonth(), ngayHienTai.getDate());
    
        if (ngayVaoLam === "") {
            $("#errngayvaolam").text("(*) Ngày vào công ty không được để trống.");
            return false;
        }
    
        const ngayNhapVao = new Date(ngayVaoLam);
    
        if (ngayNhapVao > ngay18NamTruoc) {
            $("#errngayvaolam").text("(*) Ngày vào công ty phải cách đây ít nhất 18 năm.");
            return false;
        } else {
            $("#errngayvaolam").text("");
            return true;
        }
    }
    
    $("#ngayvaolam").on("blur", checkNgayVaoLam);

    function checkChucVu() {
        const chucVu = $("input[name='chucvu']:checked").val();
        const errChucVu = $("#errlucchon");
    
        if (!chucVu) {
            errChucVu.text("(*) Vui lòng chọn chức vụ.");
            return false;
        } else {
            errChucVu.text("");
            return true;
        }
    }
    
    $("input[name='chucvu']").on("change", checkChucVu);

    function checkHeSo() {
        const bacLuong = $("#luachon").val();
        const heSoLuong = $("#heso");
    
        if (bacLuong === "2") {
            heSoLuong.val("2");
        } else if (bacLuong === "1.86") {
            heSoLuong.val("1.86");
        } else {
            heSoLuong.val("");
        }
    }
    
    $("#luachon").on("change", checkHeSo);

    $("#btnDangKy").click(function() {
        // Kiểm tra tất cả các trường
        if (checkMaNhanSu() && checkHoTen() && checkNgayVaoLam() && checkChucVu()) {
            // Lấy giá trị từ các trường
            const maNhanVien = $("#manhanvien").val();
            const hoTen = $("#hoten").val();
            const ngayVaoLam = $("#ngayvaolam").val();
            const chucVu = $("input[name='chucvu']:checked").val();
            const bacLuong = $("#luachon option:selected").val();

            const stt = $("table tr").length;
 
            let newRow = `
                <tr>
                    <th>${stt}</th>
                    <th>${maNhanVien}</th>
                    <th>${hoTen}</th>
                    <th>${ngayVaoLam}</th>
                    <th>${chucVu}</th>
                    <th>${bacLuong}</th>
                </tr>
            `
            $('tbody').append(newRow)
        }
    })

    $('#cancel').click(function(e) {
        $('#modalID').modal('hide')
    })

})