# Quick Start Guide

Get your Digital Workspace website live in 5 minutes!

## ⚡ 5-Minute Quick Start

### Step 1: Deploy to Netlify (2 minutes)

1. **Download/Extract** all files
2. **Go to [netlify.com](https://netlify.com/)**
3. **Drag and drop** the entire folder
4. **Wait** for deployment
5. **Get your live URL** → `https://[name].netlify.app`

✅ **Website is now live!**

### Step 2: Set Up EmailJS (3 minutes)

For contact form to work:

1. **Go to [emailjs.com](https://emailjs.com/)**
2. **Sign up** with your email
3. **Create Email Service** (Gmail recommended)
4. **Create Email Template** (copy this exactly):

**Subject:** `New Project Request from {{name}}`

**Body:**
```
Name: {{name}}
Email: {{email}}
Phone: {{phone}}
Business: {{business_name}}
Service: {{service}}
Budget: {{budget}}
Timeline: {{timeline}}
Description: {{description}}
```

5. **Copy your 3 IDs:**
   - Service ID
   - Template ID  
   - Public Key

6. **Edit `script.js`** (line 10-13):

```javascript
const config = {
    emailjs: {
        serviceId: 'YOUR_SERVICE_ID_HERE',
        templateId: 'YOUR_TEMPLATE_ID_HERE',
        publicKey: 'YOUR_PUBLIC_KEY_HERE'
    }
};
```

7. **Save and redeploy** to Netlify

✅ **Contact form is working!**

## 📋 Essential Customizations (5 minutes)

### 1. Update Your Information

**File:** `index.html`

Find and replace:
- `The Digital Workspace` → Your company name
- `Siddhartha Lenka` → Your name
- `+91 8961157264` → Your phone
- `thedigitalworkspacehq@gmail.com` → Your email
- Kolkata, West Bengal, India → Your location

**File:** `script.js`

- Line 68: Update email address in contact function

### 2. Update Your Brand Colors

**File:** `style.css` (lines 15-20)

Change these colors:
```css
--primary: #00d9ff;        /* Your main color */
--secondary: #6366f1;      /* Your secondary color */
```

Popular options:
- Blue: `--primary: #3b82f6; --secondary: #1e40af;`
- Green: `--primary: #10b981; --secondary: #059669;`
- Purple: `--primary: #a855f7; --secondary: #7e22ce;`

### 3. Update Services

**File:** `index.html` (around line 280)

Edit service names and descriptions to match what you offer.

### 4. Add Your Logo

1. **Create folder:** `assets/images/`
2. **Add file:** `assets/images/logo.png`
3. **Update navbar** in `index.html`:

```html
<a href="#home" class="logo-text">
    <img src="assets/images/logo.png" alt="Logo" height="40">
</a>
```

## 🚀 Go Live in 3 Easy Steps

### Step 1: Test Locally
```bash
# Just open index.html in your browser
# Or use a simple server:
python -m http.server 8000
# Then visit: http://localhost:8000
```

### Step 2: Deploy to Netlify
- Drag folder to [netlify.com](https://netlify.com/)
- Wait for green checkmark
- Copy your live URL

### Step 3: Configure Domain (Optional)
1. **Buy domain** (GoDaddy, Namecheap, etc.)
2. **In Netlify**: Domain Settings → Add Domain
3. **Update nameservers** at registrar
4. **Wait 24-48 hours** for propagation

## ✅ Verify Everything Works

Test these items:

- [ ] Visit your website
- [ ] Fill out contact form
- [ ] Check email for submission
- [ ] Click all navigation links
- [ ] Test on mobile phone
- [ ] Scroll through all sections

## 🎯 Most Important Files

| File | Purpose | Edit? |
|------|---------|-------|
| `index.html` | Website content | ✏️ Yes |
| `style.css` | Design & colors | ✏️ Yes (colors) |
| `script.js` | EmailJS config | ✏️ Yes (IDs) |
| `netlify.toml` | Deployment config | ❌ Keep as is |
| `robots.txt` | SEO settings | ❌ Keep as is |
| `sitemap.xml` | SEO settings | ❌ Keep as is |

## 📞 Contact Form Fields

These fields are available:
- Name ✓
- Email ✓
- Phone ✓
- Business Name ✓
- Business Type ✓
- Service Type ✓
- Budget ✓
- Timeline ✓
- Project Description ✓

**Want to add more fields?** See CUSTOMIZATION.md

## 🎨 Quick Design Changes

### Change Colors
`style.css` lines 15-20

### Change Fonts
`style.css` lines 37-38 (use Google Fonts)

### Change Text
`index.html` - just edit the content

### Add Images
Put in `assets/images/` folder

### Speed Up/Slow Down Animations
`style.css` lines 44-47

## 📊 Performance Check

Run Lighthouse audit:
1. Visit your website
2. Press `F12` (DevTools)
3. Find "Lighthouse" tab
4. Click "Analyze"
5. Target score: **95+**

If score is below 95:
- Compress images
- Remove unused code
- Enable caching

## 🆘 Quick Troubleshooting

### Contact form not sending emails
1. Check EmailJS credentials
2. Verify email is correct
3. Test in EmailJS dashboard
4. Check browser console (F12)

### Website looks broken on mobile
1. Clear browser cache
2. Check viewport meta tag in HTML
3. Test in Chrome DevTools mobile mode

### Colors look wrong
1. Clear browser cache
2. Reload page (Ctrl+F5)
3. Check CSS file was saved

### Navigation links not working
1. Check HTML section IDs match links
2. Verify no typos in IDs
3. Test in different browser

## 📚 Documentation Files

| File | Purpose |
|------|---------|
| README.md | Full documentation |
| DEPLOYMENT.md | Detailed deployment guide |
| EMAILJS_SETUP.md | Complete EmailJS setup |
| CUSTOMIZATION.md | How to customize |
| QUICK_START.md | This file |

## 💡 Pro Tips

1. **Test form before deploying** - Send yourself a test email
2. **Keep content fresh** - Update services/portfolio regularly
3. **Monitor analytics** - Set up Google Analytics (CUSTOMIZATION.md)
4. **Backup your files** - Use Git/GitHub for version control
5. **Security** - Keep EmailJS credentials private
6. **Mobile first** - Always test on phones
7. **Performance** - Use Lighthouse regularly

## 🎯 Next Steps After Going Live

1. **Tell people!**
   - Share on social media
   - Email your contacts
   - Add to directories

2. **Optimize**
   - Monitor form submissions
   - Track analytics
   - Improve based on data

3. **Improve**
   - Add portfolio items
   - Collect testimonials
   - Add blog posts
   - Update regularly

4. **Grow**
   - SEO optimization
   - Social media integration
   - Email marketing
   - Content marketing

## 🚀 Common Next Questions

**Q: Can I use my own domain name?**
A: Yes! Buy domain and point to Netlify (see DEPLOYMENT.md)

**Q: How do I add more services?**
A: Edit the services section in index.html (see CUSTOMIZATION.md)

**Q: Can I accept payments?**
A: Yes! Add Stripe/PayPal (see advanced customization)

**Q: How do I add a blog?**
A: Create blog.html and link from navigation

**Q: Can I use a different email service?**
A: Yes! EmailJS supports many (see EMAILJS_SETUP.md)

## 📞 Support Resources

- **Website Issues**: Check README.md or CUSTOMIZATION.md
- **Deployment Issues**: See DEPLOYMENT.md
- **EmailJS Issues**: See EMAILJS_SETUP.md
- **Design Issues**: Check style.css comments
- **General Help**: MDN Web Docs (mdn.org)

## ✨ You're Ready!

Your professional website is ready to launch. Follow these steps and you'll be live in minutes!

**Questions?** See the detailed guides or read the code comments.

**Ready?** Let's go! 🚀

---

**Built with ❤️ by The Digital Workspace Team**
