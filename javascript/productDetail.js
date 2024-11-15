// // Gắn sự kiện click cho mỗi nút "Add to Cart"
// document.querySelectorAll('.add-to-cart').forEach(item => {
//     item.addEventListener('click', function(event) {
//         event.preventDefault(); // Ngăn hành vi mặc định của link
        
//         // Lấy phần tử sản phẩm tương ứng
//         const productItem = item.closest('.product-item');
        
//         // Lấy dữ liệu sản phẩm: tiêu đề, giá, ảnh chính và ảnh phụ
//         const productTitle = productItem.querySelector('.product-name').innerText.trim();
//         const productPrice = productItem.querySelector('.box-price p').innerText.trim();
//         const productImage1 = productItem.querySelector('img').getAttribute('src');  // Hình ảnh chính
//         const productImage2 = productItem.querySelector('.img-front').getAttribute('src'); // Hình ảnh phụ
        
//         // Lưu dữ liệu sản phẩm vào localStorage
//         const productData = {
//             title: productTitle,
//             price: productPrice,
//             image1: productImage1,
//             image2: productImage2
//         };
//         localStorage.setItem('selectedProduct', JSON.stringify(productData));
        
//         // Chuyển hướng sang trang productdetail.html
//         window.location.href = 'productdetail.html';  // Chuyển sang trang chi tiết sản phẩm
//     });
// });

// // Khi trang productdetail.html được tải, kiểm tra dữ liệu trong localStorage
// document.addEventListener('DOMContentLoaded', function() {
//     const productData = JSON.parse(localStorage.getItem('selectedProduct'));
    
//     if (productData) {
//         // Cập nhật tiêu đề sản phẩm
//         const productTitleElement = document.querySelector('.product-title h2');
//         if (productTitleElement) {
//             productTitleElement.innerText = productData.title;
//         }
        
//         // Cập nhật giá sản phẩm
//         const productPriceElement = document.querySelector('#price-preview span');
//         if (productPriceElement) {
//             productPriceElement.innerText = productData.price;
//         }
        
//         // Cập nhật hình ảnh trong Swiper
//         const swiperSlides = document.querySelectorAll('.swiper-slide img');
//         if (swiperSlides.length > 0) {
//             swiperSlides[0].setAttribute('src', productData.image1); // Cập nhật ảnh chính
//             swiperSlides[1].setAttribute('src', productData.image2); // Cập nhật ảnh phụ
//         }
//     }
// });

// Hàm lưu dữ liệu sản phẩm vào LocalStorage và chuyển hướng
// function addToCart(productItem) {
//     // Lấy dữ liệu sản phẩm: tiêu đề, giá, ảnh chính và ảnh phụ
//     const productTitle = productItem.querySelector('.product-name').innerText.trim();
//     console.log(productTitle);
//     const productPrice = productItem.querySelector('.box-price p').innerText.trim();
//     const productImage1 = productItem.querySelector('img').getAttribute('src');  // Hình ảnh chính
//     const productImage2 = productItem.querySelector('.img-front').getAttribute('src'); // Hình ảnh phụ

//     // Lưu dữ liệu sản phẩm vào localStorage
//     const productData = {
//         title: productTitle,
//         price: productPrice,
//         image1: productImage1,
//         image2: productImage2
//     };
//     localStorage.setItem('selectedProduct', JSON.stringify(productData));

//     // Chuyển hướng sang trang productdetail.html
//     window.location.href = 'productdetail.html';  // Chuyển sang trang chi tiết sản phẩm
// }

// // Gắn sự kiện click cho nút "Add to Cart" và thẻ <a>
// document.querySelectorAll('.product-item').forEach(item => {
//     // Sự kiện cho nút "Add to Cart"
//     item.querySelector('.add-to-cart').addEventListener('click', function(event) {
//         event.preventDefault(); // Ngăn hành vi mặc định
//         addToCart(item);
//     });

//     // Sự kiện cho thẻ <a> (ảnh sản phẩm)
//     item.querySelector('a.product-hover').addEventListener('click', function(event) {
//         event.preventDefault(); // Ngăn hành vi mặc định
//         addToCart(item);
//     });
// });


function addToCart(productItem) {
    // Lấy dữ liệu sản phẩm: tiêu đề, giá, ảnh chính và ảnh phụ
    const productTitle = productItem.querySelector('.product-name').innerText.trim();
    const productPrice = productItem.querySelector('.box-price p').innerText.trim();
    const productImage1 = productItem.querySelector('img').getAttribute('src');  // Hình ảnh chính
    const productImage2 = productItem.querySelector('.img-front').getAttribute('src'); // Hình ảnh phụ

    // Lưu dữ liệu sản phẩm vào localStorage
    const productData = {
        title: productTitle,
        price: productPrice,
        image1: productImage1,
        image2: productImage2
    };
    localStorage.setItem('selectedProduct', JSON.stringify(productData));

    // Chuyển hướng sang trang productdetail.html
    window.location.href = 'productdetail.html';  // Chuyển sang trang chi tiết sản phẩm
}

// Gắn sự kiện click cho nút "Add to Cart" và thẻ <a>
document.querySelectorAll('.product-item').forEach(item => {
    // Sự kiện cho nút "Add to Cart"
    item.querySelector('.add-to-cart').addEventListener('click', function(event) {
        event.preventDefault(); // Ngăn hành vi mặc định
        addToCart(item);
    });

    // Sự kiện cho thẻ <a> (ảnh sản phẩm)
    item.querySelector('a.product-hover').addEventListener('click', function(event) {
        event.preventDefault(); // Ngăn hành vi mặc định
        addToCart(item);
    });
});

// Kiểm tra xem có dữ liệu sản phẩm trong LocalStorage hay không
const selectedProduct = JSON.parse(localStorage.getItem('selectedProduct'));

if (selectedProduct) {
    // Cập nhật tiêu đề sản phẩm
    const productTitleElement = document.querySelector('.product-title h2');
    productTitleElement.textContent = selectedProduct.title;

    // Cập nhật giá sản phẩm
    const productPriceElement = document.querySelector('#price-preview .pro-price');
    productPriceElement.textContent = selectedProduct.price;

    // Cập nhật hình ảnh trong swiper
    const swiperSlides = document.querySelectorAll('.swiper-slide img');
    if (swiperSlides.length > 0) {
        swiperSlides[0].src = selectedProduct.image1; // Cập nhật ảnh đầu tiên
    }
    if (swiperSlides.length > 1) {
        swiperSlides[1].src = selectedProduct.image2; // Cập nhật ảnh thứ hai (nếu có)
    }
} else {
    console.error("No product data found in LocalStorage");
}


// Lấy các phần tử cần thiết
const decreaseBtn = document.getElementById('decrease-btn');
const increaseBtn = document.getElementById('increase-btn');
const quantityInput = document.getElementById('quantity');

// Hàm tăng số lượng
function increaseQuantity() {
    let currentQuantity = parseInt(quantityInput.value); // Lấy giá trị hiện tại
    currentQuantity++; // Tăng giá trị
    quantityInput.value = currentQuantity; // Cập nhật vào ô nhập
}

// Hàm giảm số lượng
function decreaseQuantity() {
    let currentQuantity = parseInt(quantityInput.value); // Lấy giá trị hiện tại
    if (currentQuantity > 1) { // Đảm bảo số lượng không âm
        currentQuantity--; // Giảm giá trị
        quantityInput.value = currentQuantity; // Cập nhật vào ô nhập
    }
}

// Gán sự kiện click cho nút "+" và "-"
increaseBtn.addEventListener('click', increaseQuantity);
decreaseBtn.addEventListener('click', decreaseQuantity);
 