# EmailJS Setup Guide

Complete step-by-step guide to set up EmailJS for the contact form.

## ⚠️ Important: EmailJS Configuration Required

The contact form on your website requires EmailJS to send emails. Without proper configuration, the form will not send emails.

## 📋 What You'll Get

After setting up EmailJS, the contact form will:
- ✅ Validate all fields
- ✅ Send emails to your inbox
- ✅ Show success/error messages
- ✅ Work on all devices

## 🚀 Step-by-Step Setup

### Step 1: Create EmailJS Account

1. **Visit [emailjs.com](https://www.emailjs.com/)**
2. **Click "Sign Up"** in the top right
3. **Fill in your details:**
   - Email address (preferably your business email)
   - Password (strong password recommended)
   - Verify email address

4. **Confirm your email** - Check your inbox for verification link

### Step 2: Create Email Service

1. **After logging in, go to "Email Services"** (left menu)
2. **Click "Add Email Service"** or "Create New Service"**
3. **Choose your email provider:**
   - **Gmail** (Recommended for beginners)
   - **Office 365**
   - **SendGrid**
   - **Custom SMTP**

#### If using Gmail:

1. **Click "Gmail"**
2. **Select "Connect Account"**
3. **Sign in with your Gmail account**
4. **Grant permissions** to EmailJS
5. **Your service is created!**

**Important:** 
- Use your business email (thedigitalworkspacehq@gmail.com)
- If using Gmail, you may need to create an App Password:
  - Go to Google Account → Security
  - Enable 2-Factor Authentication
  - Create App Password
  - Use App Password in EmailJS

#### Service Details Saved:
- **Service ID**: `service_xxxxxxx` ← You'll need this!

### Step 3: Create Email Template

1. **Go to "Email Templates"** (left menu)
2. **Click "Create New Template"**
3. **Set up template:**

**Template Name:** `contact_form_template` (or anything you like)

**Email Subject:**
```
New Project Request from {{name}}
```

**Email Body:**
```
Hello,

You have received a new project request from your website.

---
CONTACT INFORMATION
---
Name: {{name}}
Email: {{email}}
Phone: {{phone}}

---
BUSINESS DETAILS
---
Business Name: {{business_name}}
Business Type: {{business_type}}

---
PROJECT DETAILS
---
Service Required: {{service}}
Budget: {{budget}}
Timeline: {{timeline}}

Project Description:
{{description}}

---
SENDER EMAIL
---
You can reply directly to: {{email}}

---

Best regards,
The Digital Workspace Website
```

4. **Click "Save"**

**Template Details Saved:**
- **Template ID**: `template_xxxxxxx` ← You'll need this!

### Step 4: Get Your Public Key

1. **Go to "Account"** (left menu, at bottom)
2. **Click on your profile name**
3. **Look for "API"** section
4. **Copy your Public Key**
   - It looks like: `xxxxxxx_xxxxxxxxxxxxxxxxxxxxx`

**Public Key Saved:**
- **Public Key**: `xxxxxxx_xxxxxxxxxxxxxxxxxxxxx` ← You'll need this!

## 🔑 Configure Your Website

Now you have three important credentials:
- Service ID: `service_xxxxxxx`
- Template ID: `template_xxxxxxx`
- Public Key: `xxxxxxx_xxxxxxxxxxxxxxxxxxxxx`

### Update script.js

1. **Open `script.js`** in your text editor
2. **Find this section** (around line 11):

```javascript
const config = {
    emailjs: {
        serviceId: 'SERVICE_ID_PLACEHOLDER',
        templateId: 'TEMPLATE_ID_PLACEHOLDER',
        publicKey: 'PUBLIC_KEY_PLACEHOLDER'
    }
};
```

3. **Replace with your actual credentials:**

```javascript
const config = {
    emailjs: {
        serviceId: 'service_abc123def456',      // Your Service ID
        templateId: 'template_xyz789uvw012',    // Your Template ID
        publicKey: 'abc123def456xyz789uvw'      // Your Public Key
    }
};
```

4. **Save the file**

## ✅ Test Your Setup

### Test Method 1: Use the Website Form

1. **Open your website locally** or on your live domain
2. **Scroll to Contact section**
3. **Fill out the form** with test data
4. **Submit the form**
5. **Check your email inbox** for the test email

### Test Method 2: Use EmailJS Test

1. **In EmailJS, go to "Email Templates"**
2. **Click on your template**
3. **Click "Test it" button**
4. **Fill in test data**
5. **Send test email**
6. **Verify you received it**

### Expected Results

✅ **Success:**
- Form submits
- Shows "Thank you" message
- Email arrives in inbox
- Can reply to sender email

❌ **If Not Working:**
- Check credentials are correct
- Clear browser cache
- Check browser console for errors (F12)
- Verify template variables match form fields
- Check EmailJS account status

## 🛡️ Security Best Practices

### Your Credentials Are Safe Because:

1. **Public Key is intentionally public** - it's for client-side use
2. **Only sends to your email** - service ID controls destination
3. **Form validation** - prevents spam
4. **EmailJS handles security** - encrypted communication

### Protect Your Credentials:

- ❌ Don't share Service ID with others
- ❌ Don't commit credentials to public Git
- ❌ Don't post them on forums/social media
- ✅ Use `.gitignore` to exclude config files
- ✅ Consider environment variables for production

## 📧 Email Template Variables

These variables must match your form fields:

| Template Variable | Form Field | Example |
|------------------|-----------|---------|
| `{{name}}` | Full Name | John Smith |
| `{{email}}` | Email | john@example.com |
| `{{phone}}` | Phone | +91 9876543210 |
| `{{business_name}}` | Business Name | Acme Corp |
| `{{business_type}}` | Business Type | Startup |
| `{{service}}` | Required Service | Web Development |
| `{{budget}}` | Budget Range | ₹100,000 - ₹500,000 |
| `{{timeline}}` | Timeline | 2-4 months |
| `{{description}}` | Project Description | We need a website... |
| `{{to_email}}` | Recipient Email | contact@company.com |

## 🔄 Email Workflow

Here's what happens when someone submits the form:

```
1. User fills out form
   ↓
2. JavaScript validates fields
   ↓
3. EmailJS sends via your Service
   ↓
4. Email arrives in your inbox
   ↓
5. You can reply directly to sender
   ↓
6. User sees success message
```

## 📊 Free EmailJS Limits

**Free Plan Includes:**
- ✅ 200 emails per month
- ✅ 5 email templates
- ✅ 1 service
- ✅ Basic support

**If you exceed limits:**
- Emails will fail (form shows error)
- Upgrade to paid plan
- Or implement rate limiting

## 🚀 Advanced: Rate Limiting

To prevent spam, add this to `script.js`:

```javascript
const emailLimiter = {
    maxEmails: 5,
    timeWindow: 3600000, // 1 hour in ms
    attempts: [],
    
    canSend() {
        const now = Date.now();
        this.attempts = this.attempts.filter(time => now - time < this.timeWindow);
        
        if (this.attempts.length < this.maxEmails) {
            this.attempts.push(now);
            return true;
        }
        return false;
    }
};
```

Then check before sending:

```javascript
if (!emailLimiter.canSend()) {
    showFormError('Too many submissions. Please try again later.');
    return;
}
```

## 🔗 Useful Links

- **EmailJS Docs**: https://www.emailjs.com/docs/
- **Create Template**: https://dashboard.emailjs.com/admin/templates
- **API Docs**: https://www.emailjs.com/docs/sdk/reference/
- **Support**: support@emailjs.com

## ❓ Common Issues & Solutions

### Issue: "Invalid Service ID"
**Solution:**
- Copy Service ID exactly from EmailJS Account
- No spaces or typos
- Restart browser after updating

### Issue: "Invalid Template ID"
**Solution:**
- Copy Template ID from Email Templates page
- Verify template is published
- Check spelling matches exactly

### Issue: "Invalid Public Key"
**Solution:**
- Copy from Account → API
- Make sure it's Public Key, not Secret Key
- No spaces or truncation

### Issue: "Email not received"
**Solution:**
- Check spam/junk folder
- Verify email service is connected in EmailJS
- Test template directly in EmailJS
- Check form console for errors (F12)

### Issue: "403 Forbidden Error"
**Solution:**
- Free tier might be limited
- Check EmailJS account status
- Upgrade to paid plan if needed
- Check rate limiting

### Issue: Form shows "Something went wrong"
**Solution:**
- Open browser console (F12)
- Look for error message
- Check emailjs.send() is called
- Verify all template variables are correct
- Check network tab for failed requests

## 📞 Need Help?

1. **Check error console** (F12 → Console tab)
2. **Review EmailJS docs** (emailjs.com/docs)
3. **Contact EmailJS support** (support@emailjs.com)
4. **Review this guide again** for missed steps

## ✨ After Setup

Once working, consider:

1. **Add form to admin panel** to manage submissions
2. **Implement CAPTCHA** to prevent spam
3. **Store submissions in database** as backup
4. **Create email replies** with pre-made templates
5. **Set up auto-responder** to thank users
6. **Track submission analytics**

---

## 🎉 You're All Set!

Your contact form is now fully functional. Users can submit project requests and you'll receive emails directly!

**Next Steps:**
1. Test the form thoroughly
2. Deploy website to production
3. Monitor form submissions
4. Respond to leads promptly
5. Collect feedback for improvements

**Happy emailing! 📧**
