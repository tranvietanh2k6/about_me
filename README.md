# 💼 Personal Portfolio - Trang Giới Thiệu Bản Thân

Chào mừng bạn đến với repository dự án **Personal Portfolio** của tôi! Đây là một trang web cá nhân được xây dựng từ đầu (from scratch) nhằm mục đích giới thiệu thông tin, kỹ năng và thông tin liên hệ của bản thân.

Dự án này được thực hiện như một bài tập thực hành (Tùy chọn 1: Được mã hóa từ đầu) trong khóa học lập trình web.

## 🌐 Xem Trực Tiếp (Live Demo)
Bạn có thể truy cập và trải nghiệm trang web trực tiếp tại đây:
👉 **[Link Trang Web Của Bạn - Ví dụ: https://username.github.io/portfolio](https://username.github.io/portfolio)**

## ✨ Các Tính Năng Nổi Bật

### Tính năng cơ bản:
- **Trang đơn (Single Page):** Bố cục rõ ràng với các phần: Trang chủ (Hero), Về tôi (About), Kỹ năng (Skills), và Liên hệ (Contact).
- **Thanh điều hướng (Sticky Navbar):** Giúp di chuyển giữa các phần một cách dễ dàng và luôn hiển thị khi cuộn trang.

### 4 Tính năng bổ sung (Theo yêu cầu bài tập):
1. **Dark Mode (Chế độ tối):** Tích hợp nút chuyển đổi giao diện Sáng/Tối ở góc dưới cùng bên phải màn hình. Sử dụng kết hợp JavaScript và CSS Variables để thay đổi màu sắc toàn trang.
2. **Hover Effects (Hiệu ứng tương tác):** Các thẻ kỹ năng (Skills card) sẽ có hiệu ứng nổi lên trên một chút khi người dùng di chuột vào, tạo cảm giác tương tác sinh động.
3. **Smooth Transitions (Chuyển đổi mượt mà):** Khi chuyển đổi Dark Mode hoặc hover vào các liên kết, màu sắc sẽ chuyển đổi từ từ (fade-in/fade-out) thay vì giật cục nhờ thuộc tính `transition` trong CSS.
4. **Dynamic Footer (Năm tự động):** Đoạn mã JavaScript tự động lấy năm hiện tại của hệ thống để hiển thị ở phần Footer bản quyền, giúp trang web không bao giờ bị lỗi thời.

## 🛠️ Công Nghệ Sử Dụng
- **HTML5:** Xây dựng cấu trúc ngữ nghĩa của trang web.
- **CSS3:** Tạo kiểu, bố cục (sử dụng Flexbox), và xử lý giao diện đáp ứng (Media Queries). Tách biệt hoàn toàn trong file `style.css`.
- **JavaScript (Vanilla):** Xử lý logic cho tính năng Dark Mode và cập nhật năm tự động.
- **Google Fonts:** Sử dụng font chữ 'Roboto' cho giao diện hiện đại.

## 📁 Cấu Trúc Thư Mục
```text
├── index.html       # File HTML chính chứa cấu trúc trang web
├── style.css        # File chứa toàn bộ mã CSS tạo kiểu
├── script.js        # File chứa mã JavaScript xử lý tương tác
└── README.md        # File mô tả dự án (file này)
