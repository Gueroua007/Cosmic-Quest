// إنشاء النجوم في الخلفية
document.addEventListener("DOMContentLoaded", function () {
    const numStars = 100;
    const container = document.body;

    for (let i = 0; i < numStars; i++) {
        let star = document.createElement("div");
        star.className = "star";
        star.style.top = Math.random() * window.innerHeight + "px";
        star.style.left = Math.random() * window.innerWidth + "px";
        container.appendChild(star);
    }
});

// عند الضغط على أيقونة الصاروخ
function startGame() {
    alert("🚀 بدء اللعبة!");
}

// عند الضغط على أيقونة الإحصائيات
function showStats() {
    alert("📊 عرض الإحصائيات!");
}