// Mobile Navigation Toggle
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
});

// Pretend to send message and show an error
const contactForm = document.querySelector('.contact-content form');
contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    // Change the button text to indicate it's "sending"
    const submitButton = contactForm.querySelector('.btn[type="submit"]');
    submitButton.disabled = true;
    submitButton.innerText = 'Sending...';

    // Simulate a delay before showing the error
    setTimeout(() => {
        submitButton.disabled = false;
        submitButton.innerText = 'Send Message';

        // Show error message
        alert("An error occurred while sending your message. Please send an email instead.");
    }, 2000);
});
