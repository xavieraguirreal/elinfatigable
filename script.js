// ========================================
// elINFATIGABLE - JavaScript
// ========================================

// ---- Preloader ----
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        setTimeout(() => {
            preloader.classList.add('hidden');
        }, 1300);
    }
});

document.addEventListener('DOMContentLoaded', () => {

    // ---- Navbar scroll effect ----
    const navbar = document.getElementById('navbar');
    const handleScroll = () => {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();

    // ---- Mobile menu toggle ----
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });

    // Close menu on link click
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });

    // ---- Counter animation ----
    const counters = document.querySelectorAll('[data-count]');
    let countersAnimated = false;

    const animateCounters = () => {
        if (countersAnimated) return;
        const statsSection = document.querySelector('.hero-stats');
        if (!statsSection) return;

        const rect = statsSection.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            countersAnimated = true;
            counters.forEach(counter => {
                const target = parseInt(counter.dataset.count);
                const duration = 2000;
                const start = performance.now();

                const update = (now) => {
                    const elapsed = now - start;
                    const progress = Math.min(elapsed / duration, 1);
                    const eased = 1 - Math.pow(1 - progress, 3);
                    counter.textContent = Math.floor(target * eased);
                    if (progress < 1) {
                        requestAnimationFrame(update);
                    } else {
                        counter.textContent = target;
                    }
                };
                requestAnimationFrame(update);
            });
        }
    };

    window.addEventListener('scroll', animateCounters);
    animateCounters();

    // ---- Scroll reveal ----
    const revealElements = document.querySelectorAll(
        '.service-card, .plan-card, .tip-card, .testimonial-card, ' +
        '.routine-step, .gallery-item, .about-feature, .location-item, ' +
        '.section-header, .about-grid, .contact-grid, .location-grid, .routine-cta'
    );

    revealElements.forEach(el => el.classList.add('reveal'));

    const revealOnScroll = () => {
        revealElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 80) {
                el.classList.add('visible');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();

    // ---- Smooth active nav highlight ----
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');

    const highlightNav = () => {
        const scrollPos = window.scrollY + 120;
        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');

            if (scrollPos >= top && scrollPos < top + height) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    };

    window.addEventListener('scroll', highlightNav);

    // ---- Contact form ----
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const formData = new FormData(form);
            const data = Object.fromEntries(formData);

            // Show success message
            const wrapper = form.parentElement;
            wrapper.innerHTML = `
                <div class="form-success">
                    <div class="form-success-icon">&#10003;</div>
                    <h3>&#161;Mensaje enviado!</h3>
                    <p>Gracias ${data.nombre ? data.nombre.split(' ')[0] : ''}.
                    Te voy a contactar en menos de 24 horas.</p>
                    <p style="margin-top: 16px; font-size: 0.9rem; color: var(--gray);">
                        - Diego Aguilar
                    </p>
                </div>
            `;

            // Scroll to success message
            wrapper.scrollIntoView({ behavior: 'smooth', block: 'center' });
        });
    }

    // ---- FAQ Accordion ----
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            // Close all
            faqItems.forEach(i => i.classList.remove('active'));
            // Open clicked (if wasn't active)
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });

    // ---- Back to top ----
    const backToTop = document.getElementById('backToTop');
    if (backToTop) {
        window.addEventListener('scroll', () => {
            backToTop.classList.toggle('visible', window.scrollY > 600);
        });
        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // ---- Stagger reveal for grid items ----
    const staggerGroups = [
        '.services-grid .service-card',
        '.plans-grid .plan-card',
        '.tips-grid .tip-card',
        '.testimonials-grid .testimonial-card',
        '.gallery-grid .gallery-item'
    ];

    staggerGroups.forEach(selector => {
        const items = document.querySelectorAll(selector);
        items.forEach((item, i) => {
            item.style.transitionDelay = `${i * 0.1}s`;
        });
    });

});
