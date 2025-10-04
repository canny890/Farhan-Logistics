// Data
const SERVICES = [
    {
        title: 'Container Handling',
        description: 'Professional container handling services with care and precision.',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" class="service-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M18 8v10a2 2 0 01-2 2H8a2 2 0 01-2-2V8m12 0h2a2 2 0 012 2v8a2 2 0 01-2 2h-2m-4-12V4m0 4h.01M8 4h8a2 2 0 012 2v2H6V6a2 2 0 012-2z" />
        </svg>`
    },
    {
        title: 'Trailer on Rent',
        description: 'Flexible and reliable trailer rental solutions for all your needs.',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" class="service-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>`
    },
    {
        title: 'Shipping Line Agent',
        description: 'Expert coordination with shipping lines for smooth operations.',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" class="service-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 10h18M3 14h18M5 6l2-3h10l2 3M4 10v10a2 2 0 002 2h12a2 2 0 002-2V10" />
        </svg>`
    },
    {
        title: 'General Transport',
        description: 'Comprehensive transport solutions for all types of cargo.',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" class="service-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10l2 2h8a1 1 0 001-1z" />
        </svg>`
    }
];

const FLEET = [
    {
        name: 'Warehouse Management Fleet',
        image: 'https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&w=800',
        specs: {
            type: 'Warehouse Equipment',
            capacity: 'Custom Solutions',
            idealFor: 'Warehousing, distribution centers'
        }
    },
    {
        name: 'Transport Operator Fleet',
        image: 'https://images.pexels.com/photos/1427107/pexels-photo-1427107.jpeg?auto=compress&cs=tinysrgb&w=800',
        specs: {
            type: 'Mixed Fleet',
            capacity: 'Various',
            idealFor: 'Comprehensive transport solutions'
        }
    },
    {
        name: 'Heavy-Duty Crane Trailer',
        image: 'https://images.pexels.com/photos/1169754/pexels-photo-1169754.jpeg?auto=compress&cs=tinysrgb&w=800',
        specs: {
            type: 'Hydraulic Crane',
            capacity: '100-250 Tons',
            idealFor: 'Heavy lifting, construction sites'
        }
    },
    {
        name: 'General Trading Fleet',
        image: 'https://images.pexels.com/photos/8828525/pexels-photo-8828525.jpeg?auto=compress&cs=tinysrgb&w=800',
        specs: {
            type: 'Multi-Purpose',
            capacity: 'Various',
            idealFor: 'Trading companies, distributors'
        }
    },
    {
        name: 'Container Handling Equipment',
        image: 'https://images.pexels.com/photos/2226458/pexels-photo-2226458.jpeg?auto=compress&cs=tinysrgb&w=800',
        specs: {
            type: 'Reach Stacker',
            capacity: '45 Tons',
            idealFor: 'Port operations, container yards'
        }
    },
    {
        name: 'Shipping Line Fleet',
        image: 'https://images.pexels.com/photos/906982/pexels-photo-906982.jpeg?auto=compress&cs=tinysrgb&w=800',
        specs: {
            type: 'Dedicated Transport',
            capacity: 'Various',
            idealFor: 'Shipping line partners'
        }
    },
    {
        name: '40ft Container Trailer',
        image: 'https://images.pexels.com/photos/1427541/pexels-photo-1427541.jpeg?auto=compress&cs=tinysrgb&w=800',
        specs: {
            type: 'Container Trailer',
            capacity: '40ft / 30 Tons',
            idealFor: 'Standard shipping containers'
        }
    },
    {
        name: '20ft Flatbed Trailer',
        image: 'https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&w=800',
        specs: {
            type: 'Flatbed Trailer',
            capacity: '20ft / 25 Tons',
            idealFor: 'Oversized loads, machinery'
        }
    },
    {
        name: 'Lowbed Trailer',
        image: 'https://images.pexels.com/photos/1078884/pexels-photo-1078884.jpeg?auto=compress&cs=tinysrgb&w=800',
        specs: {
            type: 'Lowbed Trailer',
            capacity: '50-100 Tons',
            idealFor: 'Heavy machinery, equipment'
        }
    },
    {
        name: 'Side Curtain Trailer',
        image: 'https://images.pexels.com/photos/1486222/pexels-photo-1486222.jpeg?auto=compress&cs=tinysrgb&w=800',
        specs: {
            type: 'Curtainsider',
            capacity: '24 Pallets / 45ft',
            idealFor: 'General cargo, fast loading'
        }
    },
    {
        name: 'Heavy Haulage Trailer',
        image: 'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg?auto=compress&cs=tinysrgb&w=800',
        specs: {
            type: 'Modular Trailer',
            capacity: '200+ Tons',
            idealFor: 'Oversized cargo, industrial equipment'
        }
    },
    {
        name: 'Bulk Cargo Trailer',
        image: 'https://images.pexels.com/photos/210182/pexels-photo-210182.jpeg?auto=compress&cs=tinysrgb&w=800',
        specs: {
            type: 'Tipper Trailer',
            capacity: '40 Cubic Meters',
            idealFor: 'Construction materials, bulk cargo'
        }
    }
];

const TESTIMONIALS = [
    {
        quote: 'Farhan Logistics is our go-to partner for container transport from the port. Their service is efficient, reliable, and absolutely critical to our import business.',
        name: 'Imran Sheikh',
        company: 'Director, S.I. Traders'
    },
    {
        quote: 'We hired a crane and a low-bed trailer for our project site. The equipment was top-notch and their operator was highly professional. They made a complex job seem easy.',
        name: 'Salman Baig',
        company: 'Project Manager, Apex Construction'
    },
    {
        quote: 'Their ability to coordinate with shipping lines and manage our cargo has saved us countless headaches. Farhan Logistics is a truly dependable logistics specialist.',
        name: 'Nida Aslam',
        company: 'Logistics Head, Global Exports Co.'
    }
];

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initMobileMenu();
    initFloatingContact();
    renderServices();
    renderFleet();
    renderTestimonials();
    initForm();
    setCurrentYear();
});

// Navigation
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
    const sections = document.querySelectorAll('section[id]');

    // Smooth scroll
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                    // Close mobile menu
                    document.getElementById('mobileMenu').classList.remove('active');
                    document.getElementById('mobileMenuBtn').classList.remove('active');
                }
            }
        });
    });

    // Active section highlighting
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop - 100) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href');
            if (href === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Mobile Menu
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    mobileMenuBtn.addEventListener('click', () => {
        mobileMenuBtn.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });
}

// Floating Contact
function initFloatingContact() {
    const floatingToggle = document.getElementById('floatingToggle');
    const floatingActions = document.getElementById('floatingActions');

    floatingToggle.addEventListener('click', () => {
        floatingToggle.classList.toggle('active');
        floatingActions.classList.toggle('active');
    });
}

// Render Services
function renderServices() {
    const servicesGrid = document.getElementById('servicesGrid');
    servicesGrid.innerHTML = SERVICES.map(service => `
        <div class="service-card">
            ${service.icon}
            <h3>${service.title}</h3>
            <p>${service.description}</p>
        </div>
    `).join('');
}

// Render Fleet
function renderFleet() {
    const fleetGrid = document.getElementById('fleetGrid');
    fleetGrid.innerHTML = FLEET.map(vehicle => `
        <div class="vehicle-card">
            <img src="${vehicle.image}" alt="${vehicle.name}" class="vehicle-image" loading="lazy">
            <div class="vehicle-info">
                <h3>${vehicle.name}</h3>
                <ul class="vehicle-specs">
                    <li>
                        <span class="label">Type:</span>
                        <span>${vehicle.specs.type}</span>
                    </li>
                    <li>
                        <span class="label">Capacity:</span>
                        <span>${vehicle.specs.capacity}</span>
                    </li>
                    <li>
                        <span class="label">Ideal For:</span>
                        <span>${vehicle.specs.idealFor}</span>
                    </li>
                </ul>
                <button class="btn btn-accent vehicle-btn">Book Now</button>
            </div>
        </div>
    `).join('');

    // Add event listeners to book buttons
    document.querySelectorAll('.vehicle-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
        });
    });
}

// Render Testimonials
function renderTestimonials() {
    const testimonialsGrid = document.getElementById('testimonialsGrid');
    testimonialsGrid.innerHTML = TESTIMONIALS.map(testimonial => `
        <div class="testimonial-card">
            <p class="testimonial-quote">"${testimonial.quote}"</p>
            <div class="testimonial-author">
                <p class="testimonial-name">${testimonial.name}</p>
                <p class="testimonial-company">${testimonial.company}</p>
            </div>
        </div>
    `).join('');
}

// Form Handling
function initForm() {
    const form = document.getElementById('quoteForm');
    const submitBtn = document.getElementById('submitBtn');
    const formMessage = document.getElementById('formMessage');

    // Set min date to today
    const dateInput = document.getElementById('shipmentDate');
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Clear previous errors
        clearErrors();
        formMessage.style.display = 'none';

        // Validate form
        if (!validateForm()) {
            return;
        }

        // Get form data
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);

        // Disable submit button
        submitBtn.disabled = true;
        submitBtn.innerHTML = `
            <svg style="width: 1rem; height: 1rem; display: inline-block; vertical-align: middle; animation: spin 1s linear infinite;" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle style="opacity: 0.25;" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path style="opacity: 0.75;" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Submitting...
        `;

        try {
            // Simulate API call (replace with actual endpoint)
            await new Promise(resolve => setTimeout(resolve, 1500));

            // Show success message
            formMessage.className = 'form-message success';
            formMessage.textContent = 'Thank you! Your quote request has been submitted. We\'ll contact you shortly.';
            formMessage.style.display = 'block';

            // Reset form
            form.reset();

            // Scroll to message
            formMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

        } catch (error) {
            // Show error message
            formMessage.className = 'form-message error';
            formMessage.textContent = 'Failed to submit your request. Please try again or call us directly.';
            formMessage.style.display = 'block';
        } finally {
            // Re-enable submit button
            submitBtn.disabled = false;
            submitBtn.textContent = 'Get Free Quote';
        }
    });
}

// Form Validation
function validateForm() {
    let isValid = true;

    // Name validation
    const name = document.getElementById('name');
    if (!name.value.trim()) {
        showError('name', 'Full name is required');
        isValid = false;
    }

    // Email validation
    const email = document.getElementById('email');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value.trim()) {
        showError('email', 'Email is required');
        isValid = false;
    } else if (!emailRegex.test(email.value)) {
        showError('email', 'Invalid email format');
        isValid = false;
    }

    // Phone validation
    const phone = document.getElementById('phone');
    const phoneRegex = /^[0-9+\s-]+$/;
    if (!phone.value.trim()) {
        showError('phone', 'Phone number is required');
        isValid = false;
    } else if (!phoneRegex.test(phone.value)) {
        showError('phone', 'Please enter a valid phone number');
        isValid = false;
    }

    // Pickup validation
    const pickup = document.getElementById('pickup');
    if (!pickup.value.trim()) {
        showError('pickup', 'Pickup location is required');
        isValid = false;
    }

    // Dropoff validation
    const dropoff = document.getElementById('dropoff');
    if (!dropoff.value.trim()) {
        showError('dropoff', 'Drop-off location is required');
        isValid = false;
    }

    // Shipment type validation
    const shipmentType = document.getElementById('shipmentType');
    if (!shipmentType.value) {
        showError('shipmentType', 'Please select a shipment type');
        isValid = false;
    }

    // Shipment date validation
    const shipmentDate = document.getElementById('shipmentDate');
    if (!shipmentDate.value) {
        showError('shipmentDate', 'Please select a preferred date');
        isValid = false;
    }

    return isValid;
}

function showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const errorElement = document.getElementById(`${fieldId}Error`);

    field.classList.add('error');
    if (errorElement) {
        errorElement.textContent = message;
    }
}

function clearErrors() {
    const errorElements = document.querySelectorAll('.error-message');
    errorElements.forEach(el => el.textContent = '');

    const errorInputs = document.querySelectorAll('.error');
    errorInputs.forEach(input => input.classList.remove('error'));
}

// Set current year in footer
function setCurrentYear() {
    document.getElementById('currentYear').textContent = new Date().getFullYear();
}

// Add spin animation for loading spinner
const style = document.createElement('style');
style.textContent = `
    @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }
`;
document.head.appendChild(style);
