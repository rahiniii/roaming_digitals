// DOM elements
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");
const closeMenu = document.getElementById("closeMenu");
const navLinks = document.querySelectorAll(".nav a");
const sections = document.querySelectorAll("section");

// OPEN MENU
hamburger.addEventListener("click", () => {
    navMenu.classList.add("show");
});

// CLOSE MENU (X button)
closeMenu.addEventListener("click", () => {
    navMenu.classList.remove("show");
});

// CLOSE MENU WHEN CLICKING A LINK + SET ACTIVE
navLinks.forEach(link => {
    link.addEventListener("click", function () {
        navMenu.classList.remove("show");

        // set active
        navLinks.forEach(item => item.classList.remove("active"));
        this.classList.add("active");
    });
});

// CLOSE MENU WHEN CLICKING OUTSIDE
window.addEventListener("click", (e) => {
    if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
        navMenu.classList.remove("show");
    }
});

// ACTIVE MENU ON SCROLL
window.addEventListener("scroll", () => {
    let scrollPos = window.scrollY + 150;

    sections.forEach(sec => {
        if (scrollPos >= sec.offsetTop && scrollPos < sec.offsetTop + sec.offsetHeight) {

            let id = sec.getAttribute("id");

            navLinks.forEach(link => {
                link.classList.remove("active");

                if (link.getAttribute("href") === `#${id}`) {
                    link.classList.add("active");
                }
            });
        }
    });
});
