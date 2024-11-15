document.addEventListener('DOMContentLoaded', () => {
    const pages = [
        { name: "Sitemap", url: "sitemap.html" },
        { name: "Trang chủ", url: "home.html" },
        { name: "Cách Chọn Sản Phẩm", url: "cachchonsanpham.html" },
        { name: "Giới thiệu thành viên", url: "introduce.html" },
        { name: "Giỏ hàng", url: "cart.html" },
        { name: "Đăng nhập", url: "login.html" },
        { name: "Đăng ký", url: "register.html" },
        { 
            name: "Tất Cả Sản Phẩm", 
            url: "tatcasanpham.html",
            subpages: [
                { name: "Dụng Cụ Bóng Bàn", url: "dungcubongban.html" },
                { name: "Dụng Cụ Tập Gym", url: "dungcutapgym.html" },
                { name: "Dụng Cụ Võ Thuật", url: "dungcuvothuat.html" },
                { name: "Máy Chạy Bộ", url: "maychaybo.html" },
                { name: "Máy Tập Thể Dục", url: "maytaptheduc.html" },
                { name: "Dụng Cụ Thể Thao Ngoài Trời", url: "thethaongoaitroi.html" },
                { name: "Chi Tiết Sản Phẩm", url: "productdetail.html" },
            ]
        }
    ];

    const sitemap = document.getElementById('sitemap');
    pages.forEach(page => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = page.url;
        a.textContent = page.name;
        li.appendChild(a);

        if (page.subpages) {
            const ul = document.createElement('ul');
            page.subpages.forEach(subpage => {
                const subLi = document.createElement('li');
                const subA = document.createElement('a');
                subA.href = subpage.url;
                subA.textContent = subpage.name;
                subLi.appendChild(subA);
                ul.appendChild(subLi);
            });
            li.appendChild(ul);
        }

        sitemap.appendChild(li);
    });
});
