// Page section transitions
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            } else {
                entry.target.classList.remove("visible");
            }

        });
    }, { threshold: 0.2 });

    sections.forEach(section => observer.observe(section));
});

// Mobile Navigation Toggle
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("mobile-active");
});

// fade-in sections for timeline section
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section, .timeline-item");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            } else {
                entry.target.classList.remove("visible");
            }
        });
    }, { threshold: 0.2 });

    sections.forEach(el => observer.observe(el));
});

// Form Submission Verification
const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    const res = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: { 'Accept': 'application/json' }
    });

    if (res.ok) {
        status.textContent = "✔ Message sent successfully!";
        status.style.color = "green";
        form.reset();
    } else {
        status.textContent = "✖ There was a problem sending your message.";
        status.style.color = "red";
    }
});
