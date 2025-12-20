# 🎨 Customization Guide

Complete guide to customizing every aspect of your website.

## 📝 Content Customization

### Personal Information

**File**: `assets/js/data.js`

```javascript
const websiteData = {
    personal: {
        name: "Your Full Name",
        tagline: "Your Professional Title | Skills | Role",
        email: "contact@yourname.com",
        phone: "+1 (555) 123-4567",
        location: "City, State/Country",
        bio: "Your professional bio...",
        mission: "Your mission statement...",
        vision: "Your vision for the future..."
    }
}
```

### Education & Certifications

Add or modify education entries:

```javascript
education: [
    {
        degree: "Your Degree",
        institution: "University Name",
        year: "2020 - 2024",
        description: "What you studied...",
        achievements: [
            "Achievement 1",
            "Achievement 2",
            "Achievement 3"
        ]
    }
]
```

### Skills

Organize your skills by category:

```javascript
skills: {
    cybersecurity: ["Skill 1", "Skill 2", ...],
    technical: ["Python", "JavaScript", ...],
    business: ["Strategy", "Leadership", ...],
    leadership: ["Team Building", "Mentoring", ...]
}
```

### Projects

Showcase your work:

```javascript
projects: [
    {
        id: 1,
        title: "Project Name",
        category: "Web Development | Cybersecurity | Business",
        description: "Detailed description...",
        technologies: ["Tech1", "Tech2", "Tech3"],
        link: "https://live-demo.com",
        github: "https://github.com/you/project",
        image: "project-thumbnail.jpg"
    }
]
```

### Blog Posts

Add articles and thoughts:

```javascript
blog: [
    {
        id: 1,
        title: "Article Title",
        date: "Month DD, YYYY",
        excerpt: "Brief summary...",
        content: "Full article content...",
        category: "Category",
        readTime: "X min read"
    }
]
```

## 🎨 Design Customization

### Color Scheme

**File**: `assets/css/style.css`

```css
:root {
    /* Primary Colors */
    --primary-color: #00d4ff;      /* Cyan - main accent */
    --secondary-color: #7b2ff7;    /* Purple - secondary */
    --accent-color: #ff006e;       /* Pink - highlights */
    
    /* Background Colors */
    --bg-dark: #0a0e27;            /* Main background */
    --bg-darker: #050814;          /* Darker sections */
    --bg-card: #121736;            /* Card backgrounds */
    
    /* Text Colors */
    --text-primary: #ffffff;       /* Main text */
    --text-secondary: #a0aec0;     /* Secondary text */
}
```

### Popular Color Schemes

**Professional Blue:**
```css
--primary-color: #3b82f6;
--secondary-color: #1e40af;
--accent-color: #60a5fa;
```

**Tech Green:**
```css
--primary-color: #10b981;
--secondary-color: #059669;
--accent-color: #34d399;
```

**Purple Theme:**
```css
--primary-color: #a855f7;
--secondary-color: #7c3aed;
--accent-color: #c084fc;
```

**Orange/Red:**
```css
--primary-color: #f97316;
--secondary-color: #ea580c;
--accent-color: #fb923c;
```

### Typography

Change fonts by adding to `index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
```

Then update CSS:

```css
body {
    font-family: 'Inter', sans-serif;
}

.hero-title {
    font-family: 'Inter', sans-serif;
    font-weight: 800;
}
```

**Recommended Font Combinations:**

1. **Modern & Clean**: Inter + Roboto
2. **Professional**: Poppins + Open Sans
3. **Techy**: Fira Code + Space Grotesk
4. **Elegant**: Playfair Display + Source Sans Pro

### Layout Adjustments

**Change maximum content width:**

```css
.section {
    max-width: 1400px;  /* Change to 1200px, 1600px, etc. */
}
```

**Adjust spacing:**

```css
.section {
    padding: 100px 20px;  /* Increase/decrease vertical padding */
}

.card-grid {
    gap: 30px;  /* Adjust gap between cards */
}
```

## 🖼️ Adding Images

### Profile Photo

1. Save image as `profile.jpg` in `assets/images/`
2. Add to hero section in `pages/home.html`:

```html
<div class="hero-content">
    <img src="assets/images/profile.jpg" 
         alt="Your Name" 
         style="width: 200px; height: 200px; border-radius: 50%; 
                margin-bottom: 30px; border: 5px solid var(--primary-color);">
    <h1 class="hero-title">Your Name</h1>
    <!-- rest of content -->
</div>
```

### Project Images

1. Add images to `assets/images/projects/`
2. Reference in data.js:

```javascript
projects: [
    {
        image: "assets/images/projects/project1.jpg"
    }
]
```

3. Display in portfolio (update `pages/portfolio.html`):

```html
<div style="width: 100%; height: 200px; 
     background-image: url('${project.image}'); 
     background-size: cover; background-position: center;">
</div>
```

## 📱 Navigation Customization

### Add New Page

1. **Create HTML file** in `pages/`:
   ```
   pages/services.html
   ```

2. **Add route** in `assets/js/router.js`:
   ```javascript
   registerRoutes() {
       const pages = [
           'home', 'about', 'services', // Add here
           // ... rest
       ];
   }
   ```

3. **Add to navigation** in `assets/js/data.js`:
   ```javascript
   const navigationItems = [
       { name: "Services", hash: "services", icon: "fa-cog" }
   ];
   ```

### Remove Unnecessary Pages

1. Delete HTML file from `pages/`
2. Remove from `router.js` pages array
3. Remove from `navigationItems` in `data.js`

### Reorder Navigation

Simply reorder items in `assets/js/data.js`:

```javascript
const navigationItems = [
    { name: "Home", hash: "home", icon: "fa-home" },
    { name: "About", hash: "about", icon: "fa-user" },
    // Drag items to reorder
];
```

## 🎯 Advanced Customizations

### Custom Animations

Add to CSS:

```css
@keyframes slideInLeft {
    from {
        opacity: 0;
        transform: translateX(-50px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

.custom-animation {
    animation: slideInLeft 0.6s ease-out;
}
```

### Background Patterns

Add geometric patterns:

```css
.hero {
    background-image: 
        radial-gradient(circle at 20% 50%, rgba(0, 212, 255, 0.1) 0%, transparent 50%),
        radial-gradient(circle at 80% 80%, rgba(123, 47, 247, 0.1) 0%, transparent 50%);
}
```

### Particle Effects

Add particles.js (optional):

1. Add before `</body>`:
```html
<div id="particles-js"></div>
<script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>
<script>
    particlesJS.load('particles-js', 'particles-config.json');
</script>
```

2. Style particles container:
```css
#particles-js {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: -1;
}
```

### Custom Cursor

```css
body {
    cursor: url('assets/images/cursor.png'), auto;
}

a, button {
    cursor: url('assets/images/cursor-pointer.png'), pointer;
}
```

## 📧 Contact Form Customization

### Add Fields

In `pages/contact.html`:

```html
<div class="form-group">
    <label for="company">Company (Optional)</label>
    <input type="text" id="company" name="company" />
</div>

<div class="form-group">
    <label for="budget">Budget Range</label>
    <select id="budget" name="budget">
        <option>$1k - $5k</option>
        <option>$5k - $10k</option>
        <option>$10k+</option>
    </select>
</div>
```

### Custom Success Message

Add JavaScript after form:

```javascript
document.getElementById('contact-form').addEventListener('submit', function(e) {
    // Show custom success message
    showNotification('Message sent! I will reply within 24 hours.', 'success');
});
```

## 🔗 Social Media Integration

### Add More Social Links

In `assets/js/data.js`:

```javascript
social: {
    github: "https://github.com/username",
    linkedin: "https://linkedin.com/in/username",
    twitter: "https://twitter.com/username",
    youtube: "https://youtube.com/@username",
    discord: "https://discord.gg/invite",
    telegram: "https://t.me/username",
    medium: "https://medium.com/@username"
}
```

Update footer in `index.html`:

```html
<div class="social-links">
    <a href="#"><i class="fab fa-github"></i></a>
    <a href="#"><i class="fab fa-linkedin"></i></a>
    <a href="#"><i class="fab fa-youtube"></i></a>
    <a href="#"><i class="fab fa-discord"></i></a>
</div>
```

## 🎬 Performance Optimization

### Image Optimization

1. Compress images: Use [TinyPNG](https://tinypng.com)
2. Convert to WebP format
3. Use appropriate sizes:
   - Profile: 500x500px
   - Projects: 800x600px
   - Thumbnails: 400x300px

### Lazy Loading

Add to images:

```html
<img src="image.jpg" loading="lazy" alt="Description">
```

### Minify Files

Before deployment, minify:
- CSS: Use [CSS Minifier](https://cssminifier.com)
- JavaScript: Use [JavaScript Minifier](https://javascript-minifier.com)

## 🌙 Dark/Light Mode Toggle (Optional)

Add theme switcher:

```javascript
function toggleTheme() {
    document.body.classList.toggle('light-mode');
    localStorage.setItem('theme', 
        document.body.classList.contains('light-mode') ? 'light' : 'dark'
    );
}

// Load saved theme
if (localStorage.getItem('theme') === 'light') {
    document.body.classList.add('light-mode');
}
```

Add light mode styles:

```css
body.light-mode {
    --bg-dark: #ffffff;
    --bg-darker: #f7fafc;
    --bg-card: #ffffff;
    --text-primary: #1a202c;
    --text-secondary: #4a5568;
}
```

## 🎓 Best Practices

1. **Keep it simple** - Don't over-customize
2. **Test responsiveness** - Check on mobile after changes
3. **Maintain consistency** - Use same colors/fonts throughout
4. **Optimize images** - Always compress before uploading
5. **Update regularly** - Keep content fresh
6. **Backup before major changes** - Save a copy first

## 🆘 Need Help?

- Review browser console for errors
- Test changes incrementally
- Use browser DevTools to debug CSS
- Check the main README.md for basics
- Validate HTML/CSS online

---

**Happy Customizing! 🎨**

Remember: Small changes can make a big impact. Start with colors and content, then gradually explore more advanced customizations.
