// ================= CONTACT FORM =================

const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

if (contactForm && formStatus) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!name || !email || !message) {
            formStatus.textContent = "Please fill in all fields.";
            return;
        }

        const subject = encodeURIComponent("Portfolio Contact Message");
        const body = encodeURIComponent(
            "Name: " + name +
            "\nEmail: " + email +
            "\n\nMessage:\n" + message
        );

        formStatus.textContent =
            "Opening your email app. Please send the message there.";

        window.location.href =
            "mailto:your-email@example.com?subject=" +
            subject + "&body=" + body;
    });
}
// ================= MOBILE MENU =================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", function () {
        const isOpen = navLinks.classList.toggle("active");

        menuBtn.textContent = isOpen ? "✕" : "☰";
        menuBtn.setAttribute("aria-expanded", String(isOpen));
    });

    navLinks.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
            navLinks.classList.remove("active");
            menuBtn.textContent = "☰";
            menuBtn.setAttribute("aria-expanded", "false");
        });
    });
}
// ================= THEME TOGGLE =================

const themeBtn = document.querySelector(".theme-btn");

if (themeBtn) {
    themeBtn.addEventListener("click", function () {
        document.body.classList.toggle("light-theme");

        const isLight = document.body.classList.contains("light-theme");

        themeBtn.textContent = isLight ? "🌙" : "☀️";
        themeBtn.setAttribute(
            "aria-label",
            isLight ? "Switch to dark theme" : "Switch to light theme"
        );
    });
}
// ================= BACK TO TOP =================

const backToTop = document.getElementById("back-to-top");

if (backToTop) {
    window.addEventListener("scroll", function () {
        backToTop.classList.toggle("show", window.scrollY > 300);
    });

    backToTop.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}