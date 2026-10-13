document.addEventListener("DOMContentLoaded", () => {
  const year = document.querySelector("[data-year]");
  if (year) year.textContent = new Date().getFullYear();

  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav-links");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(isOpen));
      toggle.textContent = isOpen ? "×" : "☰";
    });
  }

  const params = new URLSearchParams(window.location.search);
  const product = params.get("product");
  const interest = document.querySelector("#interest");
  const message = document.querySelector("#message");
  if (product && interest) {
    const match = [...interest.options].find(option => option.text.toLowerCase() === product.toLowerCase());
    if (match) interest.value = match.value;
    else if (message) message.value = `I'm interested in: ${product}\n\n`;
  }

  const form = document.querySelector("#contact-form");
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = new FormData(form);
      const email = "YOUR_EMAIL_HERE"; // Replace with the company's real enquiry email.
      if (email === "YOUR_EMAIL_HERE") {
        const status = form.querySelector(".form-status");
        status.textContent = "Before publishing, replace YOUR_EMAIL_HERE in contact.html and script.js with your business email.";
        return;
      }
      const subject = encodeURIComponent(`Website enquiry: ${data.get("interest") || "General"}`);
      const body = encodeURIComponent(
        `Name: ${data.get("name")}\nEmail: ${data.get("email")}\nPhone: ${data.get("phone") || "Not provided"}\nInterested in: ${data.get("interest") || "Not specified"}\n\nMessage:\n${data.get("message")}`
      );
      window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    });
  }
});