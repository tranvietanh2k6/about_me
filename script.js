// Tính năng bổ sung 1: Xử lý Dark Mode
const themeToggleBtn = document.getElementById('theme-toggle');
themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        themeToggleBtn.textContent = '☀️ Light Mode';
    } else {
        themeToggleBtn.textContent = '🌙 Dark Mode';
    }
});

// Tính năng bổ sung 4: Tự động cập nhật năm ở Footer
document.getElementById('year').textContent = new Date().getFullYear();
