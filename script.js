// تحريك النجوم
const canvas = document.getElementById("starsCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const stars = [];
for (let i = 0; i < 100; i++) {
    stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2,
        speed: Math.random() * 0.5 + 0.2
    });
}

function animateStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "white";
    stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();
        star.y += star.speed;
        if (star.y > canvas.height) {
            star.y = 0;
            star.x = Math.random() * canvas.width;
        }
    });
    requestAnimationFrame(animateStars);
}
animateStars();

// تشغيل اللعبة
function startGame() {
    alert("🚀 تم بدء اللعبة!");
}

// إظهار التصنيفات
function showLeaderboard() {
    alert("📊 عرض التصنيفات...");
}

// فتح التجارة
function openTrade() {
    alert("🔄 فتح التجارة...");
}

// فتح الإعدادات
function openSettings() {
    alert("⚙️ فتح الإعدادات...");
}

// فتح المهام اليومية
function showTasks() {
    alert("📜 عرض المهام...");
}

// فتح الدردشة الخاصة
function openPrivateChat() {
    alert("💬 فتح الدردشة الخاصة...");
}

// فتح الدردشة العامة
function openGlobalChat() {
    alert("🌍 فتح الدردشة العامة...");
}

// فتح المحفظة
function openWallet() {
    alert("💰 فتح المحفظة...");
}

// دعوة الأصدقاء
function inviteFriends() {
    alert("📩 دعوة الأصدقاء...");
}
