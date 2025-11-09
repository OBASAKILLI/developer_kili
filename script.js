// Scroll Progress Indicator
const scrollProgress = document.querySelector('.scroll-progress');
window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    scrollProgress.style.width = scrollPercent + '%';
});

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close menu when link is clicked
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Contact form handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(this);
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const message = this.querySelector('textarea').value;
        
        // Create mailto link
        const mailtoLink = `mailto:emmanuel@example.com?subject=Portfolio Contact from ${name}&body=${encodeURIComponent(message)}%0A%0AFrom: ${name}%0AEmail: ${email}`;
        
        // Show success message
        alert('Thank you for reaching out! Your email client will open to send your message.');
        window.location.href = mailtoLink;
        
        // Reset form
        this.reset();
    });
}

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe skill cards and project cards
document.querySelectorAll('.skill-card, .project-card, .education-card, .exp-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Cursor trail effect (optional - subtle)
const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
let particles = [];

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.style.position = 'fixed';
canvas.style.top = '0';
canvas.style.left = '0';
canvas.style.pointerEvents = 'none';
canvas.style.zIndex = '500';
document.body.appendChild(canvas);

class Particle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 3 + 1;
        this.speedX = (Math.random() - 0.5) * 2;
        this.speedY = (Math.random() - 0.5) * 2;
        this.opacity = 1;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.opacity -= 0.02;
        this.size -= 0.05;
    }

    draw() {
        ctx.fillStyle = `rgba(0, 212, 255, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    // Create particles occasionally
    if (Math.random() > 0.8) {
        particles.push(new Particle(mouseX, mouseY));
    }
});

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    for (let i = particles.length - 1; i >= 0; i--) {
        particles[i].update();
        particles[i].draw();
        
        if (particles[i].opacity <= 0 || particles[i].size <= 0) {
            particles.splice(i, 1);
        }
    }
    
    requestAnimationFrame(animateParticles);
}

animateParticles();

// Handle window resize
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// Typing animation for hero title (optional enhancement)
const heroTitle = document.querySelector('.hero-title');
if (heroTitle) {
    const text = heroTitle.textContent;
    heroTitle.textContent = '';
    let index = 0;
    
    function typeText() {
        if (index < text.length) {
            heroTitle.textContent += text.charAt(index);
            index++;
            setTimeout(typeText, 30);
        }
    }
    
    // Start typing after a short delay
    setTimeout(typeText, 500);
}

// Add active state to nav links based on scroll position
window.addEventListener('scroll', () => {
    let current = '';
    
    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Add active state styling
const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        color: var(--accent);
    }
`;
document.head.appendChild(style);

// Stagger animation for tech badges
const techBadges = document.querySelectorAll('.tech-badge');
techBadges.forEach((badge, index) => {
    badge.style.animationDelay = (index * 0.15) + 's';
});

// Smooth scroll for hire me button
const hireMeBtn = document.querySelector('.hire-btn');
if (hireMeBtn) {
    hireMeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(hireMeBtn.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
}

// Live coding demo typing effect
const liveCodeEl = document.getElementById('live-code');
const liveCaretEl = document.querySelector('#live .caret');
if (liveCodeEl && liveCaretEl) {
    const snippet = [
        "public class Developer",
        "{",
        "    public string Name => \"Emmanuel Kiptoo Kili\";",
        "    public string Role => \"Software Developer & IT Specialist\";",
        "    public string[] Tech => new[]{\".NET MAUI\", \"Blazor\", \"ASP.NET Core\", \"C#\", \"API Integrations\", \"Networking\"};",
        "    public string Mission() => \"Building scalable systems that empower enterprises.\";",
        "}",
        "",
        "Console.WriteLine(new Developer().Mission());"
    ].join("\n");

    let idx = 0;
    function typeNext() {
        if (idx < snippet.length) {
            liveCodeEl.textContent += snippet.charAt(idx);
            idx++;
            requestAnimationFrame(() => setTimeout(typeNext, 18));
        } else {
            liveCaretEl.style.display = 'none';
        }
    }
    setTimeout(typeNext, 400);
}

console.log('Portfolio loaded successfully!');

const chatToggle = document.querySelector('.chat-toggle');
const chatWidget = document.querySelector('.chat-widget');
const chatClose = document.querySelector('.chat-close');
const chatInput = document.getElementById('chat-input');
const chatSend = document.getElementById('chat-send');
const chatMessages = document.getElementById('chat-messages');

function scrollToSection(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
}

function appendMsg(sender, text, html) {
    const div = document.createElement('div');
    div.className = 'msg ' + sender;
    if (html) div.innerHTML = html; else div.textContent = text;
    chatMessages.appendChild(div);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function chips(items) {
    const wrap = document.createElement('div');
    wrap.className = 'suggestions';
    items.forEach(t => {
        const c = document.createElement('button');
        c.type = 'button';
        c.className = 'chip';
        c.textContent = t;
        c.addEventListener('click', () => {
            handleSend(t);
        });
        wrap.appendChild(c);
    });
    chatMessages.appendChild(wrap);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function welcome() {
    appendMsg('bot', "Hi, I'm your assistant. Ask me about Emmanuel, skills, projects, experience, education, or how to contact.");
    chips(['Show skills', 'View projects', 'Experience', 'Education', 'Contact info']);
}

const kb = {
    name: 'Emmanuel Kiptoo Kili',
    role: 'Software Developer & IT Specialist',
    mission: 'Building scalable systems that empower enterprises.',
    skills: ['.NET MAUI', 'Blazor', 'ASP.NET Core', 'C#', 'API Integrations', 'Networking', 'MySQL', 'SQLite', 'SQL Server'],
    links: {
        email: 'mailto:emmanuel@example.com',
        github: 'https://github.com/OBASAKILLI',
        linkedin: 'https://linkedin.com',
        youtube: 'https://youtube.com'
    },
    projects: [
        'E-Citizen of Ghana – ASP.NET Core, Blazor',
        '24-Security App – Mobile service marketplace',
        'Capital Markets Authority System – Compliance platform',
        'Relay E-Commerce App – .NET MAUI cross-platform',
        'Pro-Silo Management System – Manufacturing IoT',
        'ICTAMS (KRA) – Asset Management',
        'MumCare App – Health reminders',
        'Colnev Medicare System – EMR'
    ]
};

function botReply(q) {
    const s = q.toLowerCase().trim();
    if (!s) return;
    if (/(hello|hi|hey)\b/.test(s)) {
        appendMsg('bot', `Hello! I'm here to guide you about ${kb.name}.`);
        return chips(['Who is Emmanuel?', 'Show skills', 'View projects']);
    }
    if (/who|your name|about you/.test(s)) {
        return appendMsg('bot', `${kb.name} — ${kb.role}. ${kb.mission}`);
    }
    if (/skill|stack|technology/.test(s)) {
        scrollToSection('skills');
        return appendMsg('bot', `Key skills: ${kb.skills.join(', ')}.`);
    }
    if (/project|portfolio|work/.test(s)) {
        scrollToSection('projects');
        return appendMsg('bot', `Some projects: ${kb.projects.slice(0,5).join(' • ')}. View more in the Projects section.`);
    }
    if (/experience|job|career/.test(s)) {
        scrollToSection('experience');
        return appendMsg('bot', 'Opening the Professional Experience timeline.');
    }
    if (/education|certificate|certification|degree/.test(s)) {
        scrollToSection('education');
        return appendMsg('bot', 'Showing Education & Certifications.');
    }
    if (/contact|reach|email|hire|cv|resume/.test(s)) {
        scrollToSection('contact');
        const links = kb.links;
        const html = `Contact options:<br><a href="${links.email}">Email</a> • <a href="${links.linkedin}" target="_blank">LinkedIn</a> • <a href="${links.github}" target="_blank">GitHub</a> • <a href="${links.youtube}" target="_blank">YouTube</a>`;
        return appendMsg('bot', '', html);
    }
    if (/github/.test(s)) {
        return appendMsg('bot', '', `<a href="${kb.links.github}" target="_blank">Open GitHub profile</a>`);
    }
    if (/linkedin/.test(s)) {
        return appendMsg('bot', '', `<a href="${kb.links.linkedin}" target="_blank">Open LinkedIn</a>`);
    }
    if (/youtube|video|channel/.test(s)) {
        return appendMsg('bot', '', `<a href="${kb.links.youtube}" target="_blank">Visit YouTube</a>`);
    }
    if (/email|mail/.test(s)) {
        return appendMsg('bot', '', `<a href="${kb.links.email}">Send Email</a>`);
    }
    if (/live demo|coding|code/.test(s)) {
        scrollToSection('live');
        return appendMsg('bot', 'Opening the Live Coding Demo section.');
    }
    appendMsg('bot', "I can help with skills, projects, experience, education, and contact info. Try 'View projects' or 'Show skills'.");
}

function handleSend(text) {
    const msg = (text != null ? text : chatInput.value).trim();
    if (!msg) return;
    appendMsg('user', msg);
    chatInput.value = '';
    setTimeout(() => botReply(msg), 250);
}

if (chatToggle && chatWidget) {
    chatToggle.addEventListener('click', () => {
        chatWidget.classList.toggle('open');
        const open = chatWidget.classList.contains('open');
        chatWidget.setAttribute('aria-hidden', open ? 'false' : 'true');
        if (open && chatMessages.childElementCount === 0) welcome();
        if (open) chatInput.focus();
    });
}

if (chatClose) {
    chatClose.addEventListener('click', () => {
        chatWidget.classList.remove('open');
        chatWidget.setAttribute('aria-hidden', 'true');
    });
}

if (chatSend) chatSend.addEventListener('click', () => handleSend());
if (chatInput) chatInput.addEventListener('keydown', (e) => { if (e.key === 'Enter') handleSend(); });
