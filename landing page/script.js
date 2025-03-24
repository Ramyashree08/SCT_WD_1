// Function to change the navbar style on scroll
window.onscroll = function () {
    handleScroll();
};

function handleScroll() {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
}

// Optional: Add a hover effect or active link highlighting
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.backgroundColor = '#575757';
    });

    link.addEventListener('mouseout', () => {
        link.style.backgroundColor = '';
    });
});
