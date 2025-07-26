// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    // Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe elements with fade-in class
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));

    // Add fade-in class to service cards and feature items
    const serviceCards = document.querySelectorAll('.service-card');
    const featureItems = document.querySelectorAll('.feature-item');
    
    serviceCards.forEach(card => {
        card.classList.add('fade-in');
        observer.observe(card);
    });

    featureItems.forEach(item => {
        item.classList.add('fade-in');
        observer.observe(item);
    });

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.backdropFilter = 'blur(10px)';
        } else {
            navbar.style.background = '#fff';
            navbar.style.backdropFilter = 'none';
        }
    });
});

// Contact Form Validation
function validateContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return true;

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const company = document.getElementById('company');
    const service = document.getElementById('service');
    const message = document.getElementById('message');

    let isValid = true;

    // Clear previous errors
    clearErrors();

    // Validate name
    if (!name.value.trim()) {
        showError('name', 'Name is required');
        isValid = false;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value.trim()) {
        showError('email', 'Email is required');
        isValid = false;
    } else if (!emailRegex.test(email.value)) {
        showError('email', 'Please enter a valid email address');
        isValid = false;
    }

    // Validate phone
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    if (!phone.value.trim()) {
        showError('phone', 'Phone number is required');
        isValid = false;
    } else if (!phoneRegex.test(phone.value.replace(/[\s\-\(\)]/g, ''))) {
        showError('phone', 'Please enter a valid phone number');
        isValid = false;
    }

    // Validate company
    if (!company.value.trim()) {
        showError('company', 'Company name is required');
        isValid = false;
    }

    // Validate service
    if (!service.value) {
        showError('service', 'Please select a service');
        isValid = false;
    }

    // Validate message
    if (!message.value.trim()) {
        showError('message', 'Message is required');
        isValid = false;
    } else if (message.value.trim().length < 10) {
        showError('message', 'Message must be at least 10 characters long');
        isValid = false;
    }

    return isValid;
}

function showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const errorElement = field.parentNode.querySelector('.error-message');
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }
    field.style.borderColor = '#dc2626';
}

function clearErrors() {
    const errorMessages = document.querySelectorAll('.error-message');
    const formFields = document.querySelectorAll('input, textarea, select');
    
    errorMessages.forEach(error => {
        error.style.display = 'none';
    });
    
    formFields.forEach(field => {
        field.style.borderColor = '#e5e7eb';
    });
}

function submitContactForm(event) {
    event.preventDefault();
    
    if (validateContactForm()) {
        // Show success message
        const successMessage = document.querySelector('.success-message');
        if (successMessage) {
            successMessage.style.display = 'block';
            successMessage.textContent = 'Thank you for your message! We will get back to you soon.';
        }
        
        // Reset form
        document.getElementById('contactForm').reset();
        
        // Hide success message after 5 seconds
        setTimeout(() => {
            if (successMessage) {
                successMessage.style.display = 'none';
            }
        }, 5000);
    }
}

// Gallery Image Modal (for service pages)
function openImageModal(src, caption) {
    // Create modal overlay
    const modal = document.createElement('div');
    modal.className = 'image-modal';
    modal.innerHTML = `
        <div class="modal-overlay">
            <div class="modal-content">
                <span class="close-modal">&times;</span>
                <img src="${src}" alt="${caption}">
                <p class="modal-caption">${caption}</p>
            </div>
        </div>
    `;
    
    // Add modal styles
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.9);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 2000;
    `;
    
    const modalContent = modal.querySelector('.modal-content');
    modalContent.style.cssText = `
        position: relative;
        max-width: 90%;
        max-height: 90%;
        text-align: center;
    `;
    
    const closeBtn = modal.querySelector('.close-modal');
    closeBtn.style.cssText = `
        position: absolute;
        top: -40px;
        right: 0;
        color: white;
        font-size: 30px;
        cursor: pointer;
        font-weight: bold;
    `;
    
    const img = modal.querySelector('img');
    img.style.cssText = `
        max-width: 100%;
        max-height: 80vh;
        object-fit: contain;
    `;
    
    const modalCaption = modal.querySelector('.modal-caption');
    modalCaption.style.cssText = `
        color: white;
        margin-top: 20px;
        font-size: 18px;
    `;
    
    document.body.appendChild(modal);
    
    // Close modal handlers
    closeBtn.addEventListener('click', () => {
        document.body.removeChild(modal);
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            document.body.removeChild(modal);
        }
    });
    
    // Close with Escape key
    const handleEscape = (e) => {
        if (e.key === 'Escape') {
            document.body.removeChild(modal);
            document.removeEventListener('keydown', handleEscape);
        }
    };
    document.addEventListener('keydown', handleEscape);
}

// Initialize gallery click handlers
document.addEventListener('DOMContentLoaded', function() {
    const galleryItems = document.querySelectorAll('.gallery-item img');
    galleryItems.forEach(img => {
        img.style.cursor = 'pointer';
        img.addEventListener('click', function() {
            const imageCaption = this.alt || 'Image';
            openImageModal(this.src, imageCaption);
        });
    });
});

// Back to top button
function createBackToTopButton() {
    const button = document.createElement('button');
    button.innerHTML = '<i class="fas fa-arrow-up"></i>';
    button.className = 'back-to-top';
    button.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: #f97316;
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        display: none;
        align-items: center;
        justify-content: center;
        font-size: 18px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        transition: all 0.3s ease;
        z-index: 1000;
    `;
    
    document.body.appendChild(button);
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            button.style.display = 'flex';
        } else {
            button.style.display = 'none';
        }
    });
    
    // Scroll to top on click
    button.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Hover effect
    button.addEventListener('mouseenter', () => {
        button.style.background = '#ea580c';
        button.style.transform = 'translateY(-2px)';
    });
    
    button.addEventListener('mouseleave', () => {
        button.style.background = '#f97316';
        button.style.transform = 'translateY(0)';
    });
}

// Initialize back to top button
document.addEventListener('DOMContentLoaded', createBackToTopButton);
