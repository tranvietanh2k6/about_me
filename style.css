document.addEventListener('DOMContentLoaded', () => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // --- 1. Hiệu ứng gõ chữ (sửa danh sách câu của bạn ở đây) ---
    const typingText = document.getElementById('typing-text');
    const phrases = ['Sinh viên Kỹ thuật phần mềm', 'Đang học lập trình web', 'Muốn làm web cho mẹ và bé'];
    let phraseIndex = 0, charIndex = phrases[0].length, isDeleting = false;

    function type() {
        const current = phrases[phraseIndex];
        charIndex += isDeleting ? -1 : 1;
        typingText.textContent = current.substring(0, charIndex);

        let delay = isDeleting ? 40 : 90;
        if (!isDeleting && charIndex === current.length) { delay = 2000; isDeleting = true; }
        else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            delay = 400;
        }
        setTimeout(type, delay);
    }
    // Nếu người dùng tắt hiệu ứng chuyển động thì giữ nguyên dòng đầu tiên
    if (typingText && !reduceMotion) setTimeout(type, 2000);

    // --- 2. Giao diện sáng/tối (mặc định sáng, nhớ lựa chọn) ---
    const body = document.body;
    const themeBtn = document.getElementById('theme-toggle');
    const setTheme = (dark) => {
        body.classList.toggle('dark', dark);
        themeBtn.textContent = dark ? '☾' : '☀';
    };
    try { setTheme(localStorage.getItem('theme') === 'dark'); } catch (e) { setTheme(false); }
    themeBtn.addEventListener('click', () => {
        const dark = !body.classList.contains('dark');
        setTheme(dark);
        try { localStorage.setItem('theme', dark ? 'dark' : 'light'); } catch (e) {}
    });

    // --- 3. Tô sáng mục menu đang xem ---
    const links = document.querySelectorAll('.nav-links a[href^="#"]');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            links.forEach((a) => a.classList.toggle('active', a.getAttribute('href') === '#' + entry.target.id));
        });
    }, { rootMargin: '-45% 0px -50% 0px' });
    document.querySelectorAll('main section[id]').forEach((s) => observer.observe(s));

    // --- 4. Sao chép email ---
    const copyBtn = document.getElementById('copy-email');
    copyBtn.addEventListener('click', async () => {
        const original = copyBtn.textContent;
        try {
            await navigator.clipboard.writeText(copyBtn.dataset.email);
            copyBtn.textContent = 'Đã sao chép email';
        } catch (e) {
            copyBtn.textContent = copyBtn.dataset.email;
        }
        setTimeout(() => { copyBtn.textContent = original; }, 2000);
    });

    // --- 5. Năm ở chân trang ---
    document.getElementById('year').textContent = new Date().getFullYear();
});
