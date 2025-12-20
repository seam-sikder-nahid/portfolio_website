# 🚀 Quick Start Guide

Get your personal website up and running in 5 minutes!

## Step 1: Download & Extract

1. Download all project files
2. Extract to a folder on your computer
3. Folder structure should look like:
   ```
   my-website/
   ├── index.html
   ├── assets/
   ├── pages/
   ├── README.md
   └── netlify.toml
   ```

## Step 2: Customize Your Content

### Update Personal Info (5 minutes)

Open `assets/js/data.js` and update:

```javascript
personal: {
    name: "Your Name Here",           // ← Change this
    tagline: "Your Professional Title", // ← Change this
    email: "your.email@example.com",   // ← Change this
    phone: "+1234567890",              // ← Change this
    location: "Your City, Country",    // ← Change this
    // ... update bio, mission, vision
}
```

### Update Social Links

```javascript
social: {
    github: "https://github.com/YOUR_USERNAME",      // ← Your links
    linkedin: "https://linkedin.com/in/YOUR_USERNAME",
    twitter: "https://twitter.com/YOUR_USERNAME",
    // ... add your profiles
}
```

### Add Your Projects

```javascript
projects: [
    {
        title: "Your Amazing Project",
        description: "What it does...",
        technologies: ["React", "Node.js"], // Skills used
        link: "https://project-link.com",
        github: "https://github.com/you/project"
    }
    // Add more projects...
]
```

## Step 3: Test Locally

1. Open `index.html` in your browser
2. Navigate through all pages
3. Check that everything looks good
4. Verify all links work

## Step 4: Deploy to Netlify (3 minutes)

### Option A: Drag & Drop (Easiest!)

1. Go to [netlify.com](https://app.netlify.com/drop)
2. Create account (free)
3. **Drag your entire folder** onto the page
4. Wait 30 seconds
5. ✅ Your site is live!

### Option B: GitHub (Best for Updates)

1. **Create GitHub Repository**
   - Go to [github.com/new](https://github.com/new)
   - Name it `my-personal-website`
   - Click "Create repository"

2. **Upload Your Code**
   ```bash
   # In your project folder, open terminal:
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin YOUR_REPO_URL
   git push -u origin main
   ```

3. **Deploy on Netlify**
   - Go to [app.netlify.com](https://app.netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Choose GitHub
   - Select your repository
   - Click "Deploy site"

4. ✅ Done! Site live in 2 minutes

## Step 5: Configure Contact Form

After deployment:

1. Go to Netlify dashboard
2. Click your site
3. Go to "Forms" tab
4. You'll see form submissions here
5. Add your email for notifications:
   - Site settings → Forms → Form notifications
   - Add your email

## Step 6: Custom Domain (Optional)

### If You Have a Domain:

1. Go to Site settings → Domain management
2. Click "Add custom domain"
3. Enter your domain (e.g., `yourname.com`)
4. Follow DNS setup instructions
5. Wait for DNS propagation (5-60 minutes)

### If You Don't Have a Domain:

Netlify gives you a free subdomain like:
`your-site-name.netlify.app`

You can customize it:
1. Site settings → Domain management
2. Click "Options" next to netlify.app domain
3. Edit site name

## 🎨 Quick Customization Tips

### Change Colors

Edit `assets/css/style.css`:

```css
:root {
    --primary-color: #00d4ff;    /* Main color */
    --secondary-color: #7b2ff7;  /* Accent color */
    /* Change these to your brand colors! */
}
```

### Add Your Photo

1. Put your photo in `assets/images/`
2. Name it `profile.jpg`
3. Reference in pages where needed

### Update Resume

Edit `pages/resume.html` with your:
- Work experience
- Education
- Skills
- Certifications

## 🐛 Common Issues & Fixes

### "Page not loading"
- **Fix**: Clear browser cache (Ctrl+Shift+R)
- Check browser console for errors

### "Contact form not working"
- **Fix**: Form only works on live Netlify site, not locally
- Deploy to Netlify and test there

### "Menu not opening on mobile"
- **Fix**: Hard refresh browser
- Check that JavaScript files are loading

### "Styling looks broken"
- **Fix**: Verify `style.css` path is correct
- Clear cache and reload

## ✅ Checklist Before Launch

- [ ] Updated name and personal info
- [ ] Added your email and phone
- [ ] Updated social media links
- [ ] Added at least 3 projects
- [ ] Written your bio/about section
- [ ] Added your skills
- [ ] Updated education/certifications
- [ ] Tested all navigation links
- [ ] Tested contact form (on live site)
- [ ] Checked mobile responsiveness
- [ ] Tested on multiple browsers

## 🎯 Next Steps

1. **Week 1**: Fill in all content sections
2. **Week 2**: Add blog posts regularly
3. **Week 3**: Update projects with images
4. **Week 4**: Share on social media
5. **Ongoing**: Update monthly with new content

## 📚 Need More Help?

- **Full Documentation**: See `README.md`
- **Customize Further**: Edit HTML/CSS/JS files
- **Add Features**: Modify `router.js` and add pages
- **Report Issues**: Check browser console

## 🎉 You're Done!

Your professional personal website is now live!

**Share it:**
- LinkedIn
- Twitter
- GitHub profile
- Email signature
- Resume

---

**Pro Tip**: Bookmark your Netlify dashboard to easily update your site and check form submissions!

**Questions?** Review the full README.md for detailed instructions.
