// ==========================================
// INITIALIZATION & UTILITIES
// ==========================================

const isProduction = window.location.hostname !== 'localhost';
const config = {
    emailjs: {
        serviceId: 'service_dgqcug1',
        templateId: 'template_2f4m16x',
        publicKey: 'B_7FUXwLtvpROqj2l'
    }
};

// Initialize EmailJS (will use placeholder values until configured)
if (typeof emailjs !== "undefined") {
    emailjs.init(config.emailjs.publicKey);
}

// ==========================================
// DOM ELEMENTS
// ==========================================

const loadingScreen = document.getElementById('loadingScreen');
const scrollProgress = document.getElementById('scrollProgress');
const navbar = document.getElementById('navbar');
const navMenu = document.getElementById('navMenu');
const navToggle = document.getElementById('navToggle');
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');
const backToTop = document.getElementById('backToTop');
const cookieBanner = document.getElementById('cookieBanner');
const acceptCookies = document.getElementById('acceptCookies');
const rejectCookies = document.getElementById('rejectCookies');
const faqItems = document.querySelectorAll('.faq-item');

// ==========================================
// LOADING SCREEN
// ==========================================

window.addEventListener('load', () => {
    setTimeout(() => {
        loadingScreen.classList.add('hidden');
    }, 1500);
});

// ==========================================
// SCROLL PROGRESS BAR
// ==========================================

window.addEventListener('scroll', () => {
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.scrollY / windowHeight) * 100;
    scrollProgress.style.width = scrolled + '%';
});

// ==========================================
// NAVIGATION
// ==========================================

// Toggle mobile menu
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close mobile menu on link click
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// Add scrolled class to navbar
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ==========================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ==========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ==========================================
// BACK TO TOP BUTTON
// ==========================================

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ==========================================
// COOKIE BANNER
// ==========================================

function initCookieBanner() {
    // Check if user has already made a choice
    if (!localStorage.getItem('cookieConsent')) {
        cookieBanner.classList.add('show');
    }
}

acceptCookies.addEventListener('click', () => {
    localStorage.setItem('cookieConsent', 'accepted');
    cookieBanner.classList.remove('show');
    // Load Google Analytics
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-PLACEHOLDER');
});

rejectCookies.addEventListener('click', () => {
    localStorage.setItem('cookieConsent', 'rejected');
    cookieBanner.classList.remove('show');
});

initCookieBanner();

// ==========================================
// FAQ ACCORDION
// ==========================================

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
        // Close other items
        faqItems.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('active');
            }
        });
        
        // Toggle current item
        item.classList.toggle('active');
    });
});

// ==========================================
// CONTACT FORM
// ==========================================

// Form validation
function validateForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const businessName = document.getElementById('businessName').value.trim();
    const businessType = document.getElementById('businessType').value;
    const service = document.getElementById('service').value;
    const budget = document.getElementById('budget').value;
    const timeline = document.getElementById('timeline').value;
    const description = document.getElementById('description').value.trim();
    
    const errors = [];
    
    if (!name || name.length < 2) {
        errors.push('Name must be at least 2 characters');
    }
    
    if (!email || !isValidEmail(email)) {
        errors.push('Please enter a valid email address');
    }
    
    if (!phone || !isValidPhone(phone)) {
        errors.push('Please enter a valid phone number');
    }
    
    if (!businessName || businessName.length < 2) {
        errors.push('Business name must be at least 2 characters');
    }
    
    if (!businessType) {
        errors.push('Please select a business type');
    }
    
    if (!service) {
        errors.push('Please select a required service');
    }
    
    if (!budget) {
        errors.push('Please select a budget range');
    }
    
    if (!timeline) {
        errors.push('Please select a timeline');
    }
    
    if (!description || description.length < 10) {
        errors.push('Project description must be at least 10 characters');
    }
    
    return { isValid: errors.length === 0, errors };
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPhone(phone) {
    const phoneRegex = /^[\d\s\-\+\(\)]{7,}$/;
    return phoneRegex.test(phone);
}

// Handle form submission
contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Clear previous messages
    formMessage.classList.remove('success', 'error');
    formMessage.textContent = '';
    
    // Validate form
    const validation = validateForm();
    
    if (!validation.isValid) {
        showFormError(validation.errors.join(', '));
        return;
    }
    
    // Add loading state
    const submitButton = contactForm.querySelector('.btn-submit');
    submitButton.classList.add('loading');
    submitButton.disabled = true;
    
    try {
        // Prepare form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            business_name: document.getElementById('businessName').value,
            business_type: document.getElementById('businessType').value,
            required_service: document.getElementById('service').value,
            budget: document.getElementById('budget').value,
            timeline: document.getElementById('timeline').value,
            project_description: document.getElementById('description').value,
            to_email: 'thedigitalworkspacehq@gmail.com'
        };
        
        // Send email via EmailJS
        const response = await emailjs.send(
            config.emailjs.serviceId,
            config.emailjs.templateId,
            formData
        );
        
        if (response.status === 200) {
            showFormSuccess();
            contactForm.reset();
        } else {
            showFormError();
        }
    } catch (error) {
        console.error('Error sending email:', error);
        showFormError();
    } finally {
        // Remove loading state
        submitButton.classList.remove('loading');
        submitButton.disabled = false;
    }
});

function showFormSuccess() {
    formMessage.classList.add('success');
    formMessage.innerHTML = `
        <strong>Thank you for contacting The Digital Workspace.</strong><br>
        Your project request has been submitted successfully.<br>
        We will review your requirements and contact you shortly.
    `;
    
    // Scroll to message
    formMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    
    // Hide message after 5 seconds
    setTimeout(() => {
        formMessage.classList.remove('success');
    }, 5000);
}

function showFormError(customMessage = null) {
    formMessage.classList.add('error');
    formMessage.innerHTML = `
        <strong>Something went wrong.</strong><br>
        ${customMessage || 'Please try again later or contact us directly by email.'}
    `;
    
    // Scroll to message
    formMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    
    // Hide message after 5 seconds
    setTimeout(() => {
        formMessage.classList.remove('error');
    }, 5000);
}

// ==========================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ========================================== 

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const delay = Array.from(entry.target.parentElement.children).indexOf(entry.target);
            entry.target.style.animationDelay = `${delay * 100}ms`;
            entry.target.style.opacity = '1';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all animatable elements
document.querySelectorAll('.service-card, .process-step, .faq-item').forEach(el => {
    observer.observe(el);
});

// ==========================================
// UTILITY: TRACK SCROLL DEPTH
// ========================================== 

let maxScrollDepth = 0;
let scrollDepthTracked = false;

window.addEventListener('scroll', () => {
    const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    
    if (scrollPercent > maxScrollDepth) {
        maxScrollDepth = scrollPercent;
    }
    
    // Track 50%, 75%, 100% scroll depths
    if (maxScrollDepth >= 50 && !scrollDepthTracked) {
        trackEvent('scroll_depth', 50);
    }
    if (maxScrollDepth >= 75) {
        trackEvent('scroll_depth', 75);
    }
    if (maxScrollDepth >= 90) {
        trackEvent('scroll_depth', 90);
    }
});

// ==========================================
// ANALYTICS HELPER
// ========================================== 

function trackEvent(eventName, eventValue) {
    if (typeof gtag !== 'undefined') {
        gtag('event', eventName, {
            'value': eventValue
        });
    }
}

// Track button clicks
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', () => {
        trackEvent('button_click', btn.textContent.trim());
    });
});

// ==========================================
// FORM INPUT VALIDATION ON BLUR
// ========================================== 

document.getElementById('email').addEventListener('blur', function() {
    if (this.value && !isValidEmail(this.value)) {
        this.style.borderColor = 'var(--error)';
    } else {
        this.style.borderColor = '';
    }
});

document.getElementById('phone').addEventListener('blur', function() {
    if (this.value && !isValidPhone(this.value)) {
        this.style.borderColor = 'var(--error)';
    } else {
        this.style.borderColor = '';
    }
});

// ==========================================
// KEYBOARD SHORTCUTS
// ========================================== 

document.addEventListener('keydown', (e) => {
    // Press '/' to focus search/contact
    if (e.key === '/' && e.target === document.body) {
        e.preventDefault();
        document.getElementById('contactForm').scrollIntoView({ behavior: 'smooth' });
        document.getElementById('name').focus();
    }
    
    // Press 'Esc' to close mobile menu
    if (e.key === 'Escape') {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    }
});

// ==========================================
// PERFORMANCE OPTIMIZATION
// ========================================== 

// Lazy load images (native)
if ('loading' in HTMLImageElement.prototype) {
    document.querySelectorAll('img').forEach(img => {
        img.loading = 'lazy';
    });
}

// Debounce function for resize and scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ==========================================
// ERROR LOGGING
// ========================================== 

window.addEventListener('error', (event) => {
    console.error('Global error:', event.error);
    // In production, you might want to send this to an error tracking service
});

window.addEventListener('unhandledrejection', (event) => {
    console.error('Unhandled promise rejection:', event.reason);
});

// ==========================================
// 404 PAGE LOGIC (if user navigates to non-existent page)
// ========================================== 

function handle404() {
    // Check if page should be 404
    const path = window.location.pathname;
    const validPages = ['/', '/index.html', '/404.html'];
    
    // This is handled server-side typically, but you can add custom logic here
}

// ==========================================
// INITIALIZATION COMPLETE
// ========================================== 

document.addEventListener('DOMContentLoaded', () => {
    // All necessary initializations are complete
    console.log('The Digital Workspace website loaded successfully');
});

const testimonials = [
{
    stars: 5,
    text: "The Digital Workspace delivered a modern, fast, and professional website. Communication was excellent throughout the project, and the final result exceeded our expectations.",
    name: "Ashok Kumar",
    company: "Retail Business",
    avatar: "AC"
},
{
    stars: 4,
    text: "The team understood our requirements quickly and built a clean, responsive website. We look forward to working together on future upgrades.",
    name: "Sophia Wilson ",
    company: "Restaurant Owner",
    avatar: "SW"
},
{
    stars: 4,
    text: "Professional development process with regular updates and timely delivery. The experience was smooth from planning to launch.",
    name: "Rohit Das",
    company: "Startup Founder",
    avatar: "DM"
}
];

let currentTestimonial = 0;

function updateTestimonial() {
    const item = testimonials[currentTestimonial];

    document.getElementById("testimonialStars").textContent =
        "★".repeat(item.stars) + "☆".repeat(5 - item.stars);

    document.getElementById("testimonialText").textContent = item.text;
    document.getElementById("testimonialName").textContent = item.name;
    document.getElementById("testimonialCompany").textContent = item.company;
    document.getElementById("testimonialAvatar").textContent = item.avatar;
}

document.getElementById("nextTestimonial").addEventListener("click", () => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    updateTestimonial();
});

document.getElementById("prevTestimonial").addEventListener("click", () => {
    currentTestimonial =
        (currentTestimonial - 1 + testimonials.length) % testimonials.length;
    updateTestimonial();
});

updateTestimonial();

const serviceDetails = {
    custom: {
        icon: "💻",
        title: "Custom Software Development",
        tagline: "Built for your exact business needs.",
        description: "We build custom software that helps businesses manage operations, reduce manual work, and improve productivity with clean and reliable systems.",
        features: ["Business-specific features", "Secure database structure", "Admin dashboard", "Role-based access", "Reports & analytics", "Long-term scalability"],
        process: [
            ["📋", "Requirement Analysis", "We understand your business process and exact needs."],
            ["🎨", "UI/UX Design", "We design a clean and simple user experience."],
            ["🧠", "Development", "We build the software using reliable technologies."],
            ["🧪", "Testing", "We test every feature before delivery."],
            ["🚀", "Deployment & Support", "We deliver and support the final product."]
        ]
    },
    desktop: {
        icon: "🖥️",
        title: "Desktop Applications",
        tagline: "Powerful. Reliable. Built for performance.",
        description: "We build desktop applications for shops, offices, and businesses that need offline-friendly, fast, and secure software.",
        features: ["Windows support", "Offline functionality", "Fast performance", "Database integration", "Print/export options", "Easy daily use"],
        process: [
            ["📋", "Requirement Analysis", "We understand your daily workflow."],
            ["🎨", "UI/UX Design", "We create a simple and usable interface."],
            ["🧠", "Development", "We build clean and efficient software."],
            ["🧪", "Testing", "We test speed, security, and accuracy."],
            ["🚀", "Deployment & Support", "We install and support the app."]
        ]
    },
    business: {
        icon: "🗂️",
        title: "Business Management Systems",
        tagline: "Manage your business from one place.",
        description: "We create systems for managing sales, suppliers, inventory, payments, employees, customers, reports, and daily operations.",
        features: ["Supplier management", "Customer records", "Payment tracking", "Daily reports", "Inventory control", "Business dashboard"],
        process: [
            ["📋", "Business Study", "We study your operations."],
            ["🧩", "System Planning", "We design the right modules."],
            ["🧠", "Development", "We build connected features."],
            ["📊", "Reports", "We add useful summaries and exports."],
            ["🚀", "Launch", "We deploy and train users."]
        ]
    },
    website: {
        icon: "🌐",
        title: "Website Development",
        tagline: "Modern websites that build trust.",
        description: "We design and develop fast, responsive, and professional websites for businesses, brands, cafés, shops, and startups.",
        features: ["Responsive design", "SEO-friendly structure", "Fast loading", "Contact form", "Modern UI", "Mobile optimized"],
        process: [
            ["🧠", "Brand Understanding", "We understand your brand and audience."],
            ["🎨", "Design", "We create a modern layout."],
            ["🧠", "Development", "We build the website."],
            ["🔍", "Testing", "We test mobile, speed, and forms."],
            ["🚀", "Deployment", "We make the website live."]
        ]
    },
    ecommerce: {
        icon: "🛒",
        title: "Landing Pages & E-Commerce",
        tagline: "Built to convert visitors into customers.",
        description: "We create landing pages and online stores that help businesses showcase products, generate leads, and receive customer enquiries.",
        features: ["Product sections", "Payment-ready structure", "Lead forms", "Fast landing pages", "Offer sections", "Conversion-focused design"],
        process: [
            ["🎯", "Goal Setting", "We define the sales goal."],
            ["🎨", "Page Design", "We design a conversion-focused page."],
            ["🧠", "Development", "We build it cleanly."],
            ["🧪", "Testing", "We test forms and responsiveness."],
            ["📈", "Launch", "We help you start getting leads."]
        ]
    },
    ai: {
        icon: "🤖",
        title: "AI Automation & Workflow",
        tagline: "Automate repetitive work with smart systems.",
        description: "We create automation systems using AI tools to reduce manual work, improve speed, and make business processes more efficient.",
        features: ["AI workflow setup", "Lead automation", "Auto messages", "Data handling", "Process automation", "Business productivity"],
        process: [
            ["🔎", "Workflow Analysis", "We find repetitive tasks."],
            ["⚙️", "Automation Planning", "We choose the right tools."],
            ["🤖", "AI Setup", "We build the automation."],
            ["🧪", "Testing", "We test real cases."],
            ["🚀", "Handover", "We teach you how to use it."]
        ]
    }
};

const serviceItems = document.querySelectorAll(".service-item");
const serviceDetailBox = document.getElementById("serviceDetailBox");

function renderServiceDetail(serviceKey) {
    const service = serviceDetails[serviceKey];

    document.getElementById("serviceDetailIcon").textContent = service.icon;
    document.getElementById("serviceDetailTitle").textContent = service.title;
    document.getElementById("serviceDetailTagline").textContent = service.tagline;
    document.getElementById("serviceDetailDescription").textContent = service.description;

    document.getElementById("serviceFeatureList").innerHTML = service.features
        .map(feature => `<div class="service-feature">${feature}</div>`)
        .join("");

    document.getElementById("serviceProcess").innerHTML = service.process
        .map(step => `
            <div class="process-mini">
                <div class="process-mini-icon">${step[0]}</div>
                <h5>${step[1]}</h5>
                <p>${step[2]}</p>
            </div>
        `)
        .join("");

    document.getElementById("serviceBenefits").innerHTML = `
        <div class="benefit-box"><strong>Fast Delivery</strong><span>Quick and structured development.</span></div>
        <div class="benefit-box"><strong>Secure & Reliable</strong><span>Your data and business are safe.</span></div>
        <div class="benefit-box"><strong>Scalable Solution</strong><span>Built to grow with your business.</span></div>
        <div class="benefit-box"><strong>Ongoing Support</strong><span>Support after launch is available.</span></div>
    `;

    serviceDetailBox.scrollIntoView({ behavior: "smooth", block: "start" });
}

serviceItems.forEach(item => {
    item.addEventListener("click", () => {
        serviceItems.forEach(card => card.classList.remove("active"));
        item.classList.add("active");
        renderServiceDetail(item.dataset.service);
    });
});

document.getElementById("backServiceBtn").addEventListener("click", () => {
    document.getElementById("services").scrollIntoView({ behavior: "smooth" });
});
const service = document.getElementById("service");
const budget = document.getElementById("budget");

const budgetOptions = {
    "web-development": [
        "₹7,999 - ₹15,000",
        "₹15,000 - ₹30,000",
        "₹30,000+"
    ],

    "custom-development": [
        "₹25,000 - ₹50,000",
        "₹50,000 - ₹1,00,000",
        "₹1,00,000+"
    ],

    "desktop": [
        "₹15,000 - ₹30,000",
        "₹30,000 - ₹60,000",
        "₹60,000+"
    ],

    "business-systems": [
        "₹20,000 - ₹40,000",
        "₹40,000 - ₹90,000",
        "₹90,000+"
    ],

    "landing-pages": [
        "₹5,000 - ₹10,000",
        "₹10,000 - ₹25,000",
        "₹20,000+(e-commerce)"
    ],

    "ai-automation": [
        "₹20,000 - ₹50,000",
        "₹50,000 - ₹1,00,000",
        "₹1,00,000+"
    ],

    "maintenance": [
        "₹4,999 / month",
        "₹9,999 / month",
        "₹9,999+ / month"
    ],

    "other": [
        "Let's Discuss"
    ]
};

service.addEventListener("change", () => {

    budget.innerHTML = '<option value="">Select Budget Range</option>';

    const options = budgetOptions[service.value];

    if(options){

        options.forEach(item=>{

            const option=document.createElement("option");

            option.value=item;

            option.textContent=item;

            budget.appendChild(option);

        });

    }

});
//renderServiceDetail("custom");
// ==========================================
// HELPER: EmailJS Configuration Instructions
// ========================================== 

/*
IMPORTANT: Configure EmailJS before deploying

1. Go to https://www.emailjs.com/
2. Sign up for a free account
3. Create a new Email Service
4. Create a new Email Template with the following variables:
   - {{name}}
   - {{email}}
   - {{phone}}
   - {{business_name}}
   - {{business_type}}
   - {{service}}
   - {{budget}}
   - {{timeline}}
   - {{description}}
   - {{to_email}}

5. Copy your:
   - Service ID
   - Template ID
   - Public Key

6. Update the config object at the top of this file:
   config.emailjs = {
       serviceId: 'YOUR_SERVICE_ID',
       templateId: 'YOUR_TEMPLATE_ID',
       publicKey: 'YOUR_PUBLIC_KEY'
   };

7. Test the form by submitting a test email

For more details: https://www.emailjs.com/docs/
*/
