// Smooth scroll helper
function scrollNaarProjecten() {
    const sectie = document.getElementById("projects");
    if (sectie) sectie.scrollIntoView({behavior: "smooth"});
}

/* ===== PRELOADER ===== */
(function () {
    function hidePreloader() {
        const pre = document.getElementById('preloader');
        if (!pre) return;

        pre.classList.add('fade-out');

        const onEnd = (e) => {
            if (e.propertyName !== 'opacity') return;
            pre.classList.add('hidden');
            pre.removeEventListener('transitionend', onEnd);
        };

        pre.addEventListener('transitionend', onEnd);

        // fallback
        setTimeout(() => {
            if (!pre.classList.contains('hidden')) pre.classList.add('hidden');
        }, 1200);
    }

    window.addEventListener('load', () => {
        setTimeout(hidePreloader, 1750);
    });

    setTimeout(() => {
        const pre = document.getElementById('preloader');
        if (pre && !pre.classList.contains('fade-out')) hidePreloader();
    }, 6000);
})();

/* ===== NAVBAR SCROLL EFFECT ===== */
window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;

    if (window.scrollY > 50) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
});

/* ===== AOS: flip every time visible ===== */
document.addEventListener('DOMContentLoaded', function () {
    if (window.AOS) {
        AOS.init({
            duration: 900,
            once: false,   // flip opnieuw bij elke zichtbare keer
            mirror: true   // ook flippen bij terugscrollen
        });
    }
});
