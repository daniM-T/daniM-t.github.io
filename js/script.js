function scrollNaarProjecten() {
    const sectie = document.getElementById("projects");
    sectie.scrollIntoView({ behavior: "smooth" });
}

// PRELOADER
window.addEventListener("load", function() {
    const preloader = document.getElementById("preloader");

    setTimeout(() => {
        preloader.classList.add("fade-out");
    }, 2300);
});

// NAVBAR SCROLL EFFECT
window.addEventListener("scroll", function() {
    const navbar = document.getElementById("navbar");

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});
