// Smooth scroll helper
function scrollNaarProjecten() {
    const sectie = document.getElementById("projects");
    if (sectie) sectie.scrollIntoView({ behavior: "smooth" });
}

/* PRELOADER - robust: fade + remove */
(function () {
    function hidePreloader() {
        const pre = document.getElementById('preloader');
        if (!pre) return;
        pre.classList.add('fade-out');

        const onEnd = (e) => {
            if (e.propertyName && e.propertyName !== 'opacity') return;
            pre.classList.add('hidden');
            pre.removeEventListener('transitionend', onEnd);
        };
        pre.addEventListener('transitionend', onEnd);

        // fallback
        setTimeout(() => {
            if (!pre.classList.contains('hidden')) pre.classList.add('hidden');
        }, 5400);
    }

    window.addEventListener('load', () => {
        // short visible delay so loader doesn't flicker
        setTimeout(hidePreloader, 1700);
    });

    // safety fallback if load takes too long
    setTimeout(() => {
        const pre = document.getElementById('preloader');
        if (pre && !pre.classList.contains('fade-out')) hidePreloader();
    }, 6000);
})();

/* NAVBAR scroll effect */
window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;
    if (window.scrollY > 50) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
});

/* AOS init */
document.addEventListener('DOMContentLoaded', function () {
    if (window.AOS) AOS.init({ duration: 900, once: true });
});
