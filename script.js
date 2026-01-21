// ============================================
// MOBILE MENU TOGGLE
// ============================================

document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle mobile menu
    hamburger.addEventListener('click', function () {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close mobile menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function (event) {
        const isClickInsideNav = navMenu.contains(event.target);
        const isClickOnHamburger = hamburger.contains(event.target);

        if (!isClickInsideNav && !isClickOnHamburger && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
});

// ============================================
// SMOOTH SCROLL BEHAVIOR (FALLBACK)
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// ADD ACTIVE STATE TO NAVBAR LINKS ON SCROLL
// ============================================

window.addEventListener('scroll', function () {
    let current = '';

    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});
