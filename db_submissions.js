// db_submissions.js

document.addEventListener('DOMContentLoaded', () => {
    // Khởi tạo mảng bài nộp nếu chưa có trong Local Storage
    if (!localStorage.getItem('submissions')) {
        // Lưu mảng rỗng để sẵn sàng nhận dữ liệu
        localStorage.setItem('submissions', JSON.stringify([]));
    }
    // Khởi tạo mảng userlist giả lập cho đăng ký/đăng nhập (tùy chọn)
    if (!localStorage.getItem('users')) {
        // Có thể thêm user mặc định tại đây nếu muốn
        localStorage.setItem('users', JSON.stringify([]));
    }
});