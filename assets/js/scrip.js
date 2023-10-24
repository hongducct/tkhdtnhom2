document.addEventListener("DOMContentLoaded", function() {
    const quantityInput = document.getElementById("quantity");
    const totalSpan = document.getElementById("total");
    const payButton = document.getElementById("pay-button");

    payButton.addEventListener("click", function(e) {
        e.preventDefault();
        const name = document.getElementById("name").value;
        const address = document.getElementById("address").value;
        const expiry = document.getElementById("expiry").value;

        // Đặt mã xử lý thanh toán ở đây
        alert(`Xin chào ${name}! Đơn hàng của bạn đã được đặt thành công tại địa chỉ ${address} .Đơn hàng sẽ được giao đến bạn trong 3 ngày tới`);
        alert(`CẢM ƠN QUÝ KHÁCH ĐÃ MUA HÀNG`);
        // Hiển thị thông tin khách hàng và sản phẩm trên modal
        document.getElementById("customer-name").textContent = name;
        document.getElementById("customer-address").textContent = address;
        displayCartItems();
        document.getElementById("myModal").style.display = "block";
    });

    // Thêm code thêm sản phẩm vào giỏ hàng tại đây (nếu cần).
});

// Hàm hiển thị danh sách sản phẩm trong giỏ hàng
function displayCartItems() {
    var cartItems = document.getElementsByClassName('cart-items')[0];
    var cartRows = cartItems.getElementsByClassName('cart-row');
    var productList = document.getElementById('product-list');

    // Xóa các sản phẩm cũ trước khi hiển thị danh sách mới
    while (productList.firstChild) {
        productList.removeChild(productList.firstChild);
    }

    // Tạo các phần tử cho danh sách sản phẩm
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i];
        var productName = cartRow.getElementsByClassName("cart-item-title")[0].innerText;
        var productPrice = cartRow.getElementsByClassName("cart-price")[0].innerText;

        var listItem = document.createElement('li');
        listItem.innerHTML = `${productName} - ${productPrice}`;
        productList.appendChild(listItem);
    }
}