function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

/* Dark mode toggle */
function toggleDarkMode() {
    document.body.classList.toggle("dark");
}

/* Scroll reveal animations */
window.addEventListener("scroll", () => {
    document.querySelectorAll(".reveal").forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 100) {
            el.classList.add("active");
        }
    });
});

/* Typing animation for hero section */
const text = "Hi, I'm A.K. Vidya Sri 👩‍💻";
let i = 0;
const typing = document.querySelector(".typing");

function typeEffect() {
    if (i < text.length) {
        typing.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeEffect, 90);
    }
}
typeEffect();
