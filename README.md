# Emmanuel Kiptoo Kili - Developer Portfolio

A high-end, professional developer portfolio website with modern dark-mode design, smooth animations, and enterprise-grade aesthetics.

## ✨ New Enhanced Features

- **Scroll Progress Indicator** - Visual progress bar at the top
- **Portrait Integration** - Circular/hex-framed glowing portrait in navbar and hero
- **Tech Stack Badges** - Animated badges showcasing your skills
- **Floating Code Background** - Subtle code fragments floating in the hero
- **Sticky Hire Me Button** - Fixed CTA button on bottom-right
- **Improved Animations** - Smooth transitions and micro-interactions
- **Responsive Design** - Perfect on desktop, tablet, and mobile

## 🎨 Design Features

- **Color Scheme**: Deep blue (#0f3460), charcoal grey (#1a1a1a), cyan (#00d4ff), and Kenyan green (#1b7a3a)
- **Typography**: Poppins (headings) + Roboto Mono (code)
- **Aesthetic**: Modern glassmorphism with subtle gradients
- **Animations**: Smooth transitions, hover effects, scroll animations
- **Responsive**: Fully responsive design for all devices

## 📁 Project Structure

```
portfolio/
├── index.html          # Main HTML file with all sections
├── styles.css          # CSS with animations and new features
├── script.js           # JavaScript for interactivity
├── portrait.jpg        # Your portrait (add this file)
├── cv.pdf              # Your CV (optional)
├── README.md           # This file
├── QUICKSTART.txt      # Quick start guide
└── DEPLOYMENT.md       # Deployment instructions
```

## 🚀 Sections Included

1. **Hero Section** - Portrait on left, dynamic text on right with tech badges
2. **About Me** - Bio, tech stack icons, and career timeline
3. **Skills & Expertise** - Organized skill cards with hover effects
4. **Featured Projects** - 8 showcase projects with screenshots and tags
5. **Experience Timeline** - Professional experience with glowing markers
6. **Education & Certifications** - Academic background and certifications
7. **Contact Section** - Contact form and social links
8. **Floating Social Links** - Fixed sidebar with GitHub, LinkedIn, YouTube
9. **Sticky Hire Me Button** - Fixed CTA button for conversions
10. **Scroll Progress Indicator** - Visual progress bar at top

## ✨ Features

- **Scroll Progress Indicator**: Visual progress bar shows reading progress
- **Glowing Logo**: Animated portrait in navbar with subtle glow
- **Tech Badges**: Animated skill badges with stagger effect
- **Floating Code**: Code fragments float in hero background
- **Smooth Scrolling**: Navigation links smoothly scroll to sections
- **Mobile Menu**: Hamburger menu for mobile devices
- **Particle Effects**: Subtle cursor trail animation
- **Scroll Animations**: Elements fade in as you scroll
- **Form Handling**: Contact form with mailto integration
- **Active Navigation**: Highlights current section in navbar
- **Hover Effects**: Interactive cards with smooth transitions

## 🔧 Customization Guide

### 📸 Adding Your Portrait

1. **Prepare your image**
   - Get a professional headshot (400x400px or larger)
   - Optimize to 50-100KB using TinyPNG.com
   - Save as `portrait.jpg` in the portfolio folder

2. **Update HTML**
   - Find line ~20 in index.html (navbar logo)
   - Replace: `<img src="data:image/svg+xml,...">` 
   - With: `<img src="portrait.jpg" alt="Emmanuel Kiptoo Kili">`
   - Do the same for hero section portrait (around line ~75)

3. **Test**
   - Open index.html in browser
   - Verify portrait appears with glowing hexagon frame

### 🎨 Customize Colors

Edit CSS variables in `styles.css` (lines 7-15):

```css
:root {
    --accent: #00d4ff;        /* Primary accent (cyan) */
    --green: #1b7a3a;         /* Secondary accent (green) */
    --dark: #1a1a1a;          /* Dark background */
    --darker: #0f3460;        /* Darker blue */
    --secondary: #16213e;     /* Secondary blue */
    --silver: #e8e8e8;        /* Light text */
    --light: #f0f0f0;         /* Lighter text */
}
```

**Popular Color Schemes:**
- **Purple & Pink**: `--accent: #a855f7; --green: #ec4899;`
- **Orange & Teal**: `--accent: #f97316; --green: #06b6d4;`
- **Red & Gold**: `--accent: #ef4444; --green: #f59e0b;`

### ✏️ Update Content

**Hero Section** (lines ~60-75):
```html
<div class="hero-greeting">Hey, I'm <span class="name-highlight">Your Name</span> 👋</div>
<h1 class="hero-title">Your Title Here</h1>
<p class="hero-subtitle">Your subtitle here</p>
```

**Tech Badges** (lines ~77-83):
```html
<span class="tech-badge">Your Tech 1</span>
<span class="tech-badge">Your Tech 2</span>
```

**About Section** (line ~85):
```html
<p class="about-bio">Your bio here...</p>
```

**Projects** (lines ~240-375):
- Update project name, description, and tags
- Add screenshots: Replace placeholder with `<img src="project.jpg">`

**Experience** (lines ~130-160):
- Update company names, dates, and descriptions

### 🔗 Update Social Links

Replace these URLs throughout index.html:
- GitHub: `https://github.com/OBASAKILLI` → your GitHub
- LinkedIn: `https://linkedin.com` → your LinkedIn
- YouTube: `https://youtube.com` → your YouTube
- Email: `mailto:emmanuel@example.com` → your email

**Locations to update:**
- Line ~45: YouTube button in hero
- Line ~515: Email in contact
- Line ~523: GitHub in contact
- Line ~542: Footer social links
- Line ~551: Floating social sidebar

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎯 Performance

- Optimized CSS with minimal bloat
- Efficient JavaScript with intersection observers
- Smooth animations using CSS transforms
- Lightweight particle effect system
- Scroll progress indicator with minimal overhead
- Lazy-load ready for images

## 🚀 Deployment

### Quick Deploy Options

**Netlify (Easiest)**
1. Go to netlify.com
2. Drag & drop portfolio folder
3. Done! Your site is live

**Vercel**
1. Go to vercel.com
2. Upload folder
3. Automatic deployment

**GitHub Pages**
1. Create GitHub repo
2. Upload files
3. Enable Pages in settings

**Traditional Hosting**
- Upload via FTP to any web host
- No build process needed

### Before Deploying
- ✓ Add your portrait image
- ✓ Update all personal information
- ✓ Update social media links
- ✓ Test on mobile devices
- ✓ Optimize all images
- ✓ Check all links work

## 📝 Notes

- Update all social links with your actual URLs
- Contact form uses mailto integration
- Particle effects are subtle and performance-optimized
- Mobile menu automatically closes when a link is clicked
- Scroll progress indicator updates in real-time
- Portrait frame has subtle glow animation

## 🆘 Troubleshooting

**Portrait not showing?**
- Check file path is correct
- Ensure image file exists in portfolio folder
- Try using absolute URL instead
- Check browser console (F12) for errors

**Colors not changing?**
- Clear browser cache (Ctrl+Shift+Delete)
- Make sure you edited the :root section
- Save the file and hard refresh (Ctrl+F5)

**Animations not working?**
- Check browser compatibility
- Ensure JavaScript is enabled
- Try different browser
- Check console for errors

**Mobile layout broken?**
- Test in different browsers
- Clear cache and reload
- Check on actual mobile device

## 📚 Resources

- Font Awesome Icons: https://fontawesome.com/icons
- Color Picker: https://htmlcolorcodes.com
- Image Optimizer: https://tinypng.com
- CSS Reference: https://developer.mozilla.org/en-US/docs/Web/CSS
- JavaScript Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript

## 📄 License

© 2024 Emmanuel Kiptoo Kili. All rights reserved.

---

**Your portfolio is ready! It's modern, professional, and optimized for success. Good luck! 🚀**
