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
