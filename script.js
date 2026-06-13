// =========================
// DARK MODE TOGGLE
// =========================

const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    const icon = themeToggle.querySelector("i");

    if (document.body.classList.contains("dark")) {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
    } else {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
    }

});

// =========================
// TYPING EFFECT
// =========================

const roles = [
    "Aspiring Software Developer",
    "DSA Learner",
    "Full Stack Developer",
    "Web Developer"
];

const typingText = document.getElementById("typing-text");

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {

    const currentRole = roles[roleIndex];

    if (!isDeleting) {

        typingText.textContent =
            currentRole.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentRole.length) {

            isDeleting = true;

            setTimeout(typeEffect, 1500);
            return;
        }

    } else {

        typingText.textContent =
            currentRole.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            isDeleting = false;

            roleIndex++;

            if (roleIndex >= roles.length) {
                roleIndex = 0;
            }
        }
    }

    setTimeout(typeEffect, isDeleting ? 60 : 120);
}

typeEffect();


// =========================
// SCROLL REVEAL ANIMATION
// =========================

const revealElements = document.querySelectorAll(
    ".glass-card, .project-card, .skill-card, .achievement-card, .profile-card, .timeline-item, .card"
);

function revealOnScroll() {

    revealElements.forEach((element) => {

        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {

            element.style.opacity = "1";
            element.style.transform = "translateY(0)";
        }

    });
}

revealElements.forEach((element) => {

    element.style.opacity = "0";
    element.style.transform = "translateY(40px)";
    element.style.transition = "all 0.8s ease";

});

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


// =========================
// ACTIVE NAV LINK
// =========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 150;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === `#${current}`
        ) {
            link.classList.add("active");
        }

    });

});


// =========================
// CONTACT FORM MESSAGE
// =========================

const contactForm =
    document.querySelector(".contact-form");

contactForm.addEventListener("submit", (e) => {

    e.preventDefault();

    alert(
        "Thank you for contacting me! I will get back to you soon."
    );

    contactForm.reset();

});


// =========================
// STATS COUNTER ANIMATION
// =========================

const counters = document.querySelectorAll(".card h2");

let counterStarted = false;

function runCounters() {

    if (counterStarted) return;

    const statsSection =
        document.querySelector(".stats");

    const sectionTop =
        statsSection.getBoundingClientRect().top;

    if (sectionTop < window.innerHeight - 100) {

        counterStarted = true;

        counters.forEach((counter) => {

            const originalText =
                counter.innerText;

            const number =
                parseInt(originalText);

            if (isNaN(number)) return;

            let count = 0;

            const speed = number / 50;

            const updateCounter = () => {

                count += speed;

                if (count < number) {

                    counter.innerText =
                        Math.floor(count) + "+";

                    requestAnimationFrame(
                        updateCounter
                    );

                } else {

                    counter.innerText =
                        originalText;
                }
            };

            updateCounter();
        });
    }
}

window.addEventListener("scroll", runCounters);

runCounters();


// =========================
// SMOOTH BUTTON HOVER EFFECT
// =========================

const buttons =
    document.querySelectorAll(".btn");

buttons.forEach((btn) => {

    btn.addEventListener("mouseenter", () => {

        btn.style.transform =
            "translateY(-4px) scale(1.03)";
    });

    btn.addEventListener("mouseleave", () => {

        btn.style.transform =
            "translateY(0px) scale(1)";
    });

});


// =========================
// CONSOLE MESSAGE
// =========================

console.log(
    "Portfolio Developed by AKASAPU MANJUSHA 🚀"
);