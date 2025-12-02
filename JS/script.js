const menuButton = document.getElementById('menu-button');
const navLinks = document.querySelector('.nav-links');

function toggleMenu() {
    // Toggle open class
    navLinks.classList.toggle('open');

    // Update accessibility + icon
    const isExpanded = navLinks.classList.contains('open');
    menuButton.setAttribute('aria-expanded', isExpanded);
    menuButton.innerHTML = isExpanded ? '✕' : '☰';
}

menuButton.addEventListener('click', toggleMenu);

navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks.classList.contains('open')) {
            toggleMenu();
        }
    });
});
const scrollBar = document.getElementById('scroll-bar');

const contactForm = document.getElementById('Contact-form');
const messageDiv=document.getElementById('form-message');
if (contactForm && messageDiv) {
    contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
const nameInput = document.getElementById('name').value;
const emailInput = document.getElementById('email').value;
if (nameInput === '' || emailInput === '') {
    messageDiv.textContent = 'Please fill out all required fields.';
    messageDiv.style.color = 'red';
} else {
// Successful mock submission
    messageDiv.textContent = 'Thank you for your message! I will be in touch shortly.';
    messageDiv.style.color = 'green';
    contactForm.reset(); // Clear the form fields
}
});
}