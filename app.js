// --- Mobile Menu Toggle ---
const menuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const openIcon = document.getElementById('menu-open-icon');
const closedIcon = document.getElementById('menu-closed-icon');

menuButton.addEventListener('click', () => {
    const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', !isExpanded);
    mobileMenu.classList.toggle('hidden');
    openIcon.classList.toggle('hidden');
    closedIcon.classList.toggle('hidden');
});

// --- Close mobile menu when a link is clicked ---
const mobileLinks = mobileMenu.querySelectorAll('a');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuButton.setAttribute('aria-expanded', 'false');
        mobileMenu.classList.add('hidden');
        openIcon.classList.add('hidden');
        closedIcon.classList.remove('hidden');
    });
});


// --- Typewriter Effect ---
const typewriterElement = document.getElementById('typewriter');
const roles = [
    "Computer Engineer",
    "Full-Stack Developer",
    "Mapúa Student",
    "Problem Solver"
];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typeSpeed = 100;
const deleteSpeed = 50;
const delayBetweenRoles = 2000;

function type() {
    const currentRole = roles[roleIndex];
    
    if (isDeleting) {
        // Deleting
        typewriterElement.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            setTimeout(type, 500); // Pause before typing new role
        } else {
            setTimeout(type, deleteSpeed);
        }
    } else {
        // Typing
        typewriterElement.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
        if (charIndex === currentRole.length) {
            isDeleting = true;
            setTimeout(type, delayBetweenRoles); // Pause at end of word
        } else {
            setTimeout(type, typeSpeed);
        }
    }
}

// Start the effect on load
document.addEventListener('DOMContentLoaded', () => {
     if (typewriterElement) {
        setTimeout(type, 250); // Start after a short delay
     }
});

// --- Scroll-in Animations ---
const sections = document.querySelectorAll('.fade-in-section');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            // Optional: unobserve after it's visible so it doesn't re-animate
            observer.unobserve(entry.target); // Only animate once
        }
    });
}, {
    threshold: 0.1 // Trigger when 10% of the section is visible
});

sections.forEach(section => {
    observer.observe(section);
});