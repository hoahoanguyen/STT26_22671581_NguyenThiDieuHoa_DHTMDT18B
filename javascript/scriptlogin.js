$(document).ready(function() {

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
            return true
        }
        
    }

    $('#password').blur(function() {
        checkPass()
    })


 

    $('#btn-login').click(function() {
        if(checkUsername() && checkPass())
        { 
            alert('Đăng nhập thành công! Mời bạn trải nghiệm')
            
        } else 
        {
            alert('Thông tin đăng nhập không hợp lệ!')
        }
    })

})





