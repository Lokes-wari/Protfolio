document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contact-form");
    const successMessage = document.getElementById("success-message");
  
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      // You can add form validation here.
      // For simplicity, we'll assume the form is valid.
  
      // Simulate form submission
      setTimeout(function () {
        successMessage.style.display = "block";
        contactForm.reset();
        setTimeout(function () {
          successMessage.style.display = "none";
        }, 3000);
      }, 1000);
    });
  });
  