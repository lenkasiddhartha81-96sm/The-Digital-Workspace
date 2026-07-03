# Customization Guide

Complete guide to customize The Digital Workspace website for your needs.

## 📝 Content Customization

### Update Company Information

**File:** `index.html` (lines 1-100)

```html
<!-- Update these meta tags -->
<meta name="description" content="Your custom description">
<meta name="keywords" content="your, custom, keywords">

<!-- Update Open Graph -->
<meta property="og:title" content="Your Custom Title">
<meta property="og:description" content="Your description">

<!-- Update contact information -->
<meta property="og:image" content="https://yourdomain.com/path-to-image.png">
```

### Update Navigation Company Name

**File:** `index.html` (around line 150)

```html
<div class="nav-logo">
    <a href="#home" class="logo-text">
        <span class="logo-gradient">YDW</span>  <!-- Change this -->
    </a>
</div>
```

### Update Hero Section

**File:** `index.html` (around line 230)

```html
<h1 class="hero-title">
    Your Custom Headline Here  <!-- Edit this -->
</h1>
<p class="hero-subtitle">
    Your custom subtitle that explains what you do.  <!-- Edit this -->
</p>
```

### Update Services

**File:** `index.html` (around line 280)

Each service card:
```html
<div class="service-card">
    <div class="service-icon">
        <!-- SVG icon here -->
    </div>
    <h3>Your Service Name</h3>  <!-- Edit -->
    <p>Your service description here.</p>  <!-- Edit -->
</div>
```

Add/remove service cards as needed. Keep the grid flexible.

### Update Development Process

**File:** `index.html` (around line 380)

```html
<div class="process-step">
    <div class="step-number">01</div>
    <h3>Your Step Title</h3>  <!-- Edit -->
    <p>Your step description.</p>  <!-- Edit -->
</div>
```

### Update About Section

**File:** `index.html` (around line 440)

```html
<h2 class="section-title">About Your Company</h2>
<p>Your company description and history.</p>
<p>More details about your company.</p>
<p>Your mission statement.</p>
```

And update the features:
```html
<div class="feature">
    <div class="feature-icon">✓</div>
    <span>Your custom feature</span>  <!-- Edit -->
</div>
```

### Update FAQ Items

**File:** `index.html` (around line 550)

```html
<div class="faq-item">
    <div class="faq-question">
        <h3>Your Question?</h3>  <!-- Edit -->
        <span class="faq-icon">+</span>
    </div>
    <div class="faq-answer">
        <p>Your answer to the question.</p>  <!-- Edit -->
    </div>
</div>
```

### Update Contact Information

**File:** `index.html` (around line 650)

```html
<p><a href="tel:+918961157264">+91 XXXXXXXXXX</a></p>
<p><a href="mailto:your@email.com">your@email.com</a></p>
```

And update WhatsApp link:
```html
<a href="https://wa.me/918961157264" target="_blank">
```

### Update Footer

**File:** `index.html` (around line 750)

```html
<h4>Your Company Name</h4>
<p>Your company tagline or description.</p>

<!-- Footer links -->
<li><a href="#">Your Links</a></li>

<!-- Contact info -->
<p>Email: <a href="mailto:your@email.com">your@email.com</a></p>
```

## 🎨 Design Customization

### Change Color Scheme

**File:** `style.css` (lines 15-40)

```css
:root {
    /* Change primary color */
    --primary: #00d9ff;        /* Your primary color */
    
    /* Change secondary color */
    --secondary: #6366f1;      /* Your secondary color */
    
    /* Optional: Change background colors */
    --bg: #0f0f0f;
    --bg-light: #1a1a1a;
    --text: #ffffff;
    --text-secondary: #a0a0a0;
}
```

### Popular Color Combinations

**Tech/Modern (Default):**
- Primary: `#00d9ff` (Cyan)
- Secondary: `#6366f1` (Indigo)

**Professional:**
- Primary: `#3b82f6` (Blue)
- Secondary: `#1e40af` (Dark Blue)

**Energetic:**
- Primary: `#ec4899` (Pink)
- Secondary: `#8b5cf6` (Purple)

**Professional:**
- Primary: `#059669` (Green)
- Secondary: `#0d9488` (Teal)

### Change Fonts

**File:** `style.css` (line 37)

```css
--font-display: 'Space Grotesk', sans-serif;  /* Headings */
--font-sans: 'Inter', sans-serif;             /* Body text */
```

Replace with your preferred Google Fonts:

1. **Go to Google Fonts**: https://fonts.google.com/
2. **Select fonts** you like
3. **Copy import URL** from HTML section
4. **Add to index.html** `<head>` section:

```html
<link href="https://fonts.googleapis.com/css2?family=YOUR+FONTS&display=swap" rel="stylesheet">
```

5. **Update CSS variables** with your font names

### Change Spacing

**File:** `style.css` (lines 23-35)

```css
--spacing-lg: 1.5rem;    /* Larger spacing */
--spacing-xl: 2rem;      /* Extra large */
--spacing-2xl: 3rem;     /* 2X Large */
```

Increase numbers for more generous spacing.

### Modify Border Radius

**File:** `style.css` - Search for `border-radius`

```css
border-radius: 16px;    /* Change this value */
```

- Smaller (4px-8px) = Sharper edges
- Medium (16px) = Balanced
- Larger (24px+) = Very rounded

### Adjust Animation Speed

**File:** `style.css` (lines 44-47)

```css
--transition-fast: 200ms ease;    /* Faster animations */
--transition-base: 300ms ease;    /* Standard speed */
--transition-slow: 500ms ease;    /* Slower animations */
```

Smaller values = faster, larger = slower

### Modify Shadows

**File:** `style.css` (lines 49-53)

Change shadow values for different depth effects:

```css
--shadow-glow: 0 0 30px rgba(0, 217, 255, 0.2);  /* Glow effect */
```

## 🖼️ Adding Images

### Add Company Logo

Create `assets/images/` folder and add:
- `logo.png` (512x512px)
- `logo-dark.png` (if using light theme)
- `logo-white.png` (for dark backgrounds)

Update navbar:
```html
<a href="#home" class="logo-text">
    <img src="assets/images/logo.png" alt="Logo" class="logo-img">
</a>
```

### Add Hero Image

Create and add `assets/images/hero-image.png` or `hero.jpg`

Add to HTML:
```html
<div class="hero-visual">
    <img src="assets/images/hero-image.png" alt="Hero">
</div>
```

### Add Service Icons

Replace SVG icons with custom images:

```html
<div class="service-icon">
    <img src="assets/images/service-icon.png" alt="Service Name">
</div>
```

## 📧 Contact Form Customization

### Add New Form Fields

**In HTML** (index.html):
```html
<div class="form-group">
    <input type="text" id="newfield" placeholder="New Field" required>
</div>
```

**In JavaScript** (script.js), update validateForm():
```javascript
const newfield = document.getElementById('newfield').value.trim();
if (!newfield) {
    errors.push('New field is required');
}
```

**In EmailJS Template**, add:
```
New Field: {{newfield}}
```

### Change Success Message

**File:** `script.js` (around line 380)

```javascript
function showFormSuccess() {
    formMessage.classList.add('success');
    formMessage.innerHTML = `
        <strong>Your Custom Title</strong><br>
        Your custom success message here.
    `;
}
```

### Change Email Address

**File:** `index.html` (around line 650)

```html
<p><a href="mailto:newemail@company.com">newemail@company.com</a></p>
```

And update form default email:
```javascript
to_email: 'newemail@company.com'
```

## 📱 Mobile Customization

### Adjust Mobile Breakpoints

**File:** `style.css` (around line 1800)

```css
@media (max-width: 768px) {
    /* Tablet styles */
}

@media (max-width: 480px) {
    /* Mobile styles */
}
```

### Hide Elements on Mobile

Add mobile-hide class:
```css
.mobile-hide {
    display: none;
}

@media (min-width: 769px) {
    .mobile-hide {
        display: block;
    }
}
```

## 🔗 Update Links

### External Links

```html
<a href="https://your-social-media.com" target="_blank">Link</a>
```

### Internal Anchors

```html
<a href="#services">Services</a>
```

### Email Links

```html
<a href="mailto:your@email.com">Email Us</a>
```

### Phone Links

```html
<a href="tel:+918961157264">Call Us</a>
```

## 🔍 SEO Customization

### Update Meta Tags

**File:** `index.html` (lines 5-30)

```html
<meta name="description" content="Your unique description (160 chars)">
<meta name="keywords" content="keyword1, keyword2, keyword3">
<meta property="og:title" content="Your Page Title">
<meta property="og:description" content="Your description">
<meta property="og:image" content="https://yourdomain.com/image.png">
```

### Update Page Title

**File:** `index.html` (line ~35)

```html
<title>Your Custom Title | Your Company</title>
```

### Update robots.txt

**File:** `robots.txt`

```
User-agent: *
Allow: /
Sitemap: https://yourdomain.com/sitemap.xml
```

### Update sitemap.xml

**File:** `sitemap.xml`

Update all URLs to match your domain:
```xml
<loc>https://yourdomain.com/</loc>
```

## 🎬 Advanced: Custom Animations

### Add Custom Keyframes

**File:** `style.css` (end of file)

```css
@keyframes myCustomAnimation {
    0% {
        opacity: 0;
        transform: scale(0.8);
    }
    100% {
        opacity: 1;
        transform: scale(1);
    }
}

.my-element {
    animation: myCustomAnimation 0.6s ease forwards;
}
```

### Modify Scroll Animations

**File:** `script.js` (around line 380)

Change intersection observer trigger:
```javascript
const observerOptions = {
    threshold: 0.5,           /* Change when animation triggers */
    rootMargin: '0px 0px -50px 0px'
};
```

## 🚀 Performance Optimization

### Optimize Images

Before uploading images:
1. Compress with [TinyPNG](https://tinypng.com/)
2. Convert to WebP format
3. Use proper dimensions
4. Add alt text

### Minify CSS/JS

For production:
1. Use online minifiers
2. Or use build tools
3. Upload minified versions

### Lazy Loading Images

**File:** `script.js` (around line 410)

```javascript
// Already implemented!
// Images will load when visible
if ('loading' in HTMLImageElement.prototype) {
    document.querySelectorAll('img').forEach(img => {
        img.loading = 'lazy';
    });
}
```

## 📊 Analytics Setup

### Add Google Analytics

**File:** `script.js` (line 12)

Replace `G-PLACEHOLDER` with your Google Analytics ID:

```javascript
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Track Custom Events

**File:** `script.js` (around line 450)

```javascript
function trackEvent(eventName, eventValue) {
    if (typeof gtag !== 'undefined') {
        gtag('event', eventName, {
            'value': eventValue
        });
    }
}

// Usage:
trackEvent('button_click', 'contact_btn');
```

## 🔐 Security Customization

### Update Content Security Policy

**File:** `netlify.toml` (if using Netlify)

```toml
Content-Security-Policy = "default-src 'self'; ..."
```

### Add Robots Meta Tag

**File:** `index.html`

```html
<!-- Prevent indexing if needed -->
<meta name="robots" content="noindex, nofollow">
```

## 📚 Additional Resources

- **HTML Reference**: https://developer.mozilla.org/en-US/docs/Web/HTML
- **CSS Reference**: https://developer.mozilla.org/en-US/docs/Web/CSS
- **JavaScript Guide**: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide
- **Google Fonts**: https://fonts.google.com/
- **Color Tools**: https://coolors.co/

## ✅ Customization Checklist

- [ ] Update company information
- [ ] Change color scheme
- [ ] Update all content
- [ ] Add company logo
- [ ] Update contact info
- [ ] Configure EmailJS
- [ ] Test form submission
- [ ] Update meta tags
- [ ] Add Google Analytics
- [ ] Test on mobile
- [ ] Run Lighthouse audit
- [ ] Deploy to production

---

**Your website is now customized! 🎉**
