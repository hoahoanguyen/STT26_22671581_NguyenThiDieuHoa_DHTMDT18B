$(document).ready(function() {

    function checkName() {
        let hoten = $('#hoten').val()
        let hotenValid = /^([A-Z][a-zà-ỹ]*\s){1,}[A-Z][a-zà-ỹ]*$/
        let err = $('#errHoTen')
        if(hoten == '')
        {
            err.text('Họ tên không được rỗng!')
            return false
        } else if(!hotenValid.test(hoten))
        { 
            err.text('Họ tên không hợp lệ!')
            return false
        } else
        {
            err.text('*')
            return true
        }
        
    }

    $('#hoten').blur(function() {
        checkName()
    })


    function checkPhone() {
        let sdt = $('#sdt').val()
        let sdtValid = /(09|02|08)[0-9]{8}$/
        // let sdtValid = /[0-9]{3}-[0-9]{6}$/
        // let sdtValid = /[0-9]{3}-[A-Z]{6}$/
        let err = $('#errSDT')

        if(sdt == '')
        {
            err.text('Số điện thoại không được rỗng!')
            return false
        } else if(!sdtValid.test(sdt))
        { 
            err.text('Số điện thoại không hợp lệ!')
            return false
        } else
        {
            err.text('*')
            return true
        }
        
    }

    $('#sdt').blur(function() {
        checkPhone()
    })

    function checkDiaChi() {
        let sdt = $('#diachi').val()
        let sdtValid = /(09|02|08)-[0-9]{6}$/
        let err = $('#errDiaChi')

        if(sdt == '')
        {
            err.text('Địa chỉ không được rỗng!')
            return false
        } else
        {
            err.text('*')
            return true
        }
        
    }

    $('#diachi').blur(function() {
        checkDiaChi()
    })

    function checkBirthday() {
        let birthDay = new Date($('#birthday').val())
        let today = new Date()
        let age = today.getFullYear() - birthDay.getFullYear()
        let err = $('#errDOB')

        if(birthDay == '')
        {
            err.text('Ngày sinh không được rỗng!')
            return false
        } else if(age <= 15 || age >= 18)
        { 
            err.text('Ngày sinh hợp lệ khi tuổi trên 15 và dưới 18!')
            return false
        } else
        {
            err.text('*')
            return true
        }
    }

    $('#birthday').change(function() {
        checkBirthday()
    })

    function checkEmail() {
        let email = $('#email').val()
        let emailValid =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        let err = $('#errEmail')

        if(email == '')
        {
            err.text('Email không được rỗng!')
            return false
        } else if(!emailValid.test(email))
        { 
            err.text('Email không hợp lệ!')
            return false
        } else
        {
            err.text('*')
            return true
        }
        
    }

    $('#email').blur(function() {
        checkEmail()
    })

    function checkUsername() {
        let username = $('#username').val()
        let usernameValid =  /^[a-z0-9]{6,}$/
        let err = $('#errTaikhoan')

        if(username == '')
        {
            err.text('Tài khoản không được rỗng!')
            return false
        } else if(!usernameValid.test(username))
        { 
            err.text('Tài khoản không hợp lệ (Phải chứa chữ và số, tổi thiểu 6 ký tự)!')
            return false
        } else
        {
            err.text('*')
            return true
        }
    }

    $('#username').blur(function() {
        checkUsername()
    })

    let passConfirm = '';
    function checkPass() {
        let password = $('#password').val()
        let passwordValid =  /^.*(?=.{8,})(?=.*[\d])(?=.*[\W]).*$/
        let err = $('#errMaukhau')


        if(password == '')
        {
            err.text('Mật khẩu không được rỗng!')
            return false
        } else if(!passwordValid.test(password))
        { 
            err.text('Mật khẩu không hợp lệ (chứa ít nhất 8 ký tự, ít nhất một chữ số và ký tự đặc biệt)!')
            return false
        } else
        {
            err.text('*')
            passConfirm=password;
            return true
        }
        
    }

    $('#password').blur(function() {
        checkPass()
    })


    function checkPassConfirm() {
        let passwordConfirm = $('#passwordConfirm').val()
        
        let err = $('#errMaukhauConfirm')

        if(passwordConfirm == '')
        {
            err.text('Mật khẩu xác nhận không được rỗng!')
            return false
        } else if(passwordConfirm != passConfirm)
        { 
            err.text('Mật khẩu xác nhận không chính xác!')
            return false
        }else
        {
            err.text('*')
            return true
        }
        
    }

    $('#passwordConfirm').blur(function() {
        checkPassConfirm()
    })



    $('input[name="gender"]').change(function() {
        $('#errGioiTinh').text('*')
    })


    let stt = 1 
    let counter = 1
    $('#btn-register').click(function() {
        if(checkName() && checkPhone() && checkDiaChi() && checkBirthday() && checkEmail() && checkUsername() && checkPass() && checkPassConfirm())
        {
            let hoten = $('#hoten').val()
            let sdt = $('#sdt').val()
            let diachi = $('#diachi').val()
            let birthDay = $('#birthday').val()
            let email = $('#email').val() 
            let username = $('#username').val() 
            let password = $('#password').val() 
            let passwordConfirm = $('#passwordConfirm').val() 

            let gioitinh = $('input[name="gender"]:checked').val()

            if(!gioitinh)
            {
                $('#errGioiTinh').text('Vui lòng chọn giới tính!')
            } else
            {
                let newRow = `
                    <tr>
                        <td>${stt++}</td>
                        <td>${hoten}</td>
                        <td>${sdt}</td>
                        <td>${diachi}</td>
                        <td>${gioitinh}</td>
                        <td>${birthDay}</td>
                        <td>${email}</td>
                        <td>${username}</td>
                        <td>${password}</td>
                        <td>${passwordConfirm}</td>
                    </tr>
                `

                $('tbody').append(newRow)
                $('#counter').text(counter++)
                alert('Đăng ký tài khoản thành công! Mời bạn trải nghiệm')
            }

        } else 
        {
            alert('Thông tin không hợp lệ!')
        }
    })

})





