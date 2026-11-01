/* ---------- Màu sắc & chữ (sửa ở đây để đổi cả trang) ---------- */
:root {
    --bg: #fafdf6;
    --surface: #ffffff;
    --ink: #14291f;
    --muted: #4f645a;
    --line: #dce9d8;
    --leaf: #22b36b;
    --leaf-text: #0b7a45;
    --sun: #ffd54a;
    --sky: #8fd3ff;
    --coral: #ff7b5c;
    --shadow: 0 18px 40px -22px rgba(20, 41, 31, .35);
    --display: 'Bricolage Grotesque', 'Be Vietnam Pro', sans-serif;
    --body: 'Be Vietnam Pro', system-ui, sans-serif;
}
body.dark {
    --bg: #0f1d17;
    --surface: #16291f;
    --ink: #eaf6ee;
    --muted: #9db3a5;
    --line: #264234;
    --leaf: #4ade94;
    --leaf-text: #4ade94;
    --shadow: 0 18px 40px -22px rgba(0, 0, 0, .7);
}

*, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
html { scroll-behavior: smooth; scroll-padding-top: 90px; }
body {
    font-family: var(--body);
    background: var(--bg);
    color: var(--ink);
    line-height: 1.7;
    transition: background-color .4s, color .4s;
}
a { color: inherit; }
:focus-visible { outline: 3px solid var(--leaf); outline-offset: 3px; border-radius: 6px; }
.wrap { width: min(1080px, 100% - 40px); margin-inline: auto; }
section { padding: 90px 0; }
h1, h2, h3 { font-family: var(--display); line-height: 1.1; letter-spacing: -.02em; }
h2 { font-size: clamp(2rem, 4vw, 2.8rem); margin-bottom: 36px; }

/* ---------- Thanh điều hướng ---------- */
header {
    position: sticky; top: 0; z-index: 50;
    background: color-mix(in srgb, var(--bg) 85%, transparent);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid var(--line);
}
nav { display: flex; align-items: center; justify-content: space-between; height: 68px; }
.logo { font-family: var(--display); font-weight: 800; font-size: 1.5rem; text-decoration: none; }
.logo::after { content: ''; display: inline-block; width: 9px; height: 9px; margin-left: 3px; border-radius: 50%; background: var(--coral); }
.nav-links { display: flex; align-items: center; gap: 6px; list-style: none; }
.nav-links a { display: block; padding: 8px 14px; border-radius: 99px; text-decoration: none; font-weight: 500; font-size: .95rem; color: var(--muted); transition: background .2s, color .2s; }
.nav-links a:hover, .nav-links a.active { background: var(--line); color: var(--ink); }
.theme-btn { width: 42px; height: 42px; margin-left: 8px; border-radius: 50%; border: 1px solid var(--line); background: var(--surface); color: var(--ink); font-size: 1.15rem; cursor: pointer; }

/* ---------- Hero ---------- */
.hero { padding: 70px 0 100px; }
.hero .wrap { display: grid; grid-template-columns: 1.15fr .85fr; align-items: center; gap: 60px; }
.greeting { color: var(--leaf-text); font-weight: 600; margin-bottom: 8px; }
.hero h1 { font-size: clamp(3rem, 8vw, 5.6rem); font-weight: 800; margin-bottom: 14px; }
.role { font-family: var(--display); font-size: clamp(1.3rem, 3vw, 1.9rem); font-weight: 600; min-height: 2.4rem; margin-bottom: 18px; }
.cursor { color: var(--coral); animation: blink 1s steps(1) infinite; }
.bio { color: var(--muted); max-width: 52ch; font-size: 1.1rem; margin-bottom: 32px; }
.btns { display: flex; flex-wrap: wrap; gap: 14px; }
.btn { display: inline-block; padding: 13px 28px; border-radius: 99px; font-weight: 600; text-decoration: none; border: 2px solid var(--ink); cursor: pointer; font-family: inherit; font-size: 1rem; transition: transform .2s, box-shadow .2s; }
.btn:hover { transform: translate(-2px, -2px); box-shadow: 4px 4px 0 var(--ink); }
.btn.primary { background: var(--leaf); color: #0b1f15; }
.btn.ghost { background: transparent; color: var(--ink); }

/* Ảnh chân dung: điểm nhấn chính của trang */
.portrait { position: relative; justify-self: center; width: min(380px, 80vw); aspect-ratio: 1; }
.portrait::before, .portrait::after { content: ''; position: absolute; z-index: 0; }
.portrait::before { inset: 8% -6% -6% 8%; background: var(--sun); border-radius: 58% 42% 55% 45% / 50% 55% 45% 50%; }
.portrait::after { width: 70px; height: 70px; top: -14px; left: -10px; background: var(--sky); border-radius: 50%; }
.portrait img { position: relative; z-index: 1; width: 100%; height: 100%; object-fit: cover; border-radius: 45% 55% 42% 58% / 55% 45% 55% 45%; border: 4px solid var(--ink); background: var(--line); }
.sticker { position: absolute; z-index: 2; padding: 8px 16px; border: 2px solid var(--ink); border-radius: 99px; background: var(--surface); font-weight: 600; font-size: .9rem; box-shadow: 3px 3px 0 var(--ink); }
.sticker.a { bottom: 8%; left: -8%; transform: rotate(-5deg); }
.sticker.b { top: 14%; right: -6%; transform: rotate(4deg); }

/* ---------- Về tôi ---------- */
.about-grid { display: grid; grid-template-columns: 1.3fr 1fr; gap: 50px; align-items: start; }
.about-grid p { color: var(--muted); font-size: 1.08rem; max-width: 60ch; }
.about-grid p + p { margin-top: 16px; }
.facts { list-style: none; border-top: 2px solid var(--ink); }
.facts li { display: flex; justify-content: space-between; gap: 20px; padding: 14px 0; border-bottom: 1px solid var(--line); }
.facts span { color: var(--muted); }
.facts strong { text-align: right; }

/* ---------- Kỹ năng ---------- */
.skill-groups { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 40px; }
.skill-groups h3 { font-size: 1.4rem; margin-bottom: 6px; padding-left: 16px; border-left: 6px solid var(--c); }
.skill-groups p { color: var(--muted); margin: 0 0 16px 22px; font-size: .95rem; }
.chips { display: flex; flex-wrap: wrap; gap: 8px; list-style: none; margin-left: 22px; }
.chips li { padding: 6px 14px; border-radius: 99px; background: var(--surface); border: 1px solid var(--line); font-size: .92rem; font-weight: 500; }

/* ---------- Dự án ---------- */
.project { display: grid; grid-template-columns: 1fr auto; gap: 8px 30px; padding: 28px 0; border-top: 1px solid var(--line); text-decoration: none; transition: padding-left .25s; }
.project:last-child { border-bottom: 1px solid var(--line); }
.project:hover { padding-left: 14px; }
.project h3 { font-size: 1.6rem; }
.project p { grid-column: 1; color: var(--muted); max-width: 60ch; }
.project .tags { grid-column: 1; display: flex; flex-wrap: wrap; gap: 8px; list-style: none; margin-top: 6px; }
.project .tags li { font-size: .85rem; color: var(--leaf-text); font-weight: 600; }
.project .year { grid-row: 1; grid-column: 2; color: var(--muted); }

/* ---------- Liên hệ ---------- */
.contact { background: var(--sun); color: #14291f; border-block: 2px solid var(--ink); }
.contact h2 { max-width: 16ch; }
.contact p { max-width: 50ch; margin-bottom: 28px; }
.contact .btn { border-color: #14291f; color: #14291f; }
.contact .btn.primary { background: #14291f; color: #fffbe8; }
.contact .btn:hover { box-shadow: 4px 4px 0 #14291f; }
.socials { display: flex; flex-wrap: wrap; gap: 22px; margin-top: 30px; list-style: none; font-weight: 600; }

footer { padding: 30px 0; text-align: center; color: var(--muted); font-size: .92rem; }

@keyframes blink { 50% { opacity: 0; } }
@keyframes rise { from { opacity: 0; transform: translateY(24px); } }

/* Một khoảnh khắc chuyển động duy nhất: hero hiện ra khi tải trang */
.hero .wrap > * { animation: rise .8s cubic-bezier(.2, .7, .2, 1) backwards; }
.hero .wrap > :nth-child(2) { animation-delay: .15s; }

@media (max-width: 860px) {
    section { padding: 64px 0; }
    .hero .wrap, .about-grid { grid-template-columns: 1fr; gap: 40px; }
    .portrait { order: -1; width: min(280px, 70vw); }
    .nav-links a { padding: 8px 10px; font-size: .88rem; }
}
@media (max-width: 520px) {
    .nav-links li:nth-child(3) { display: none; }
}
@media (prefers-reduced-motion: reduce) {
    *, *::before, *::after { animation: none !important; transition: none !important; scroll-behavior: auto !important; }
}

/* ---------- Bổ sung: chữ cái thay ảnh, chứng chỉ, ghi chú ---------- */
.initials { position: absolute; z-index: 0; inset: 0; display: grid; place-items: center; font-family: var(--display); font-weight: 800; font-size: clamp(4rem, 12vw, 7rem); background: var(--leaf); color: #0b1f15; border: 4px solid var(--ink); border-radius: 45% 55% 42% 58% / 55% 45% 55% 45%; }
.cert-title { font-size: 1.4rem; margin: 56px 0 12px; }
.certs { list-style: none; border-top: 2px solid var(--ink); }
.certs li { display: flex; align-items: center; gap: 16px; padding: 14px 0; border-bottom: 1px solid var(--line); }
.certs .tick { flex: none; width: 28px; height: 28px; display: grid; place-items: center; border-radius: 50%; background: var(--leaf); color: #0b1f15; font-weight: 700; font-size: .9rem; }
.certs div { display: flex; flex-wrap: wrap; justify-content: space-between; gap: 4px 20px; flex: 1; }
.certs div span { color: var(--muted); }
.project .year { color: var(--leaf-text); font-weight: 600; }
.note { margin-top: 20px; color: var(--muted); }
