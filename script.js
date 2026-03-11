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

// Scroll animations handled by enhanced reveal system at bottom of file

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

const spaceColors = [
    [0, 212, 255],    // cyan
    [168, 85, 247],   // purple
    [255, 107, 157],  // pink
    [123, 237, 159],  // green
    [255, 165, 0],    // orange
];

class Particle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 3 + 1;
        this.speedX = (Math.random() - 0.5) * 2;
        this.speedY = (Math.random() - 0.5) * 2;
        this.opacity = 1;
        this.color = spaceColors[Math.floor(Math.random() * spaceColors.length)];
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.opacity -= 0.02;
        this.size -= 0.05;
    }

    draw() {
        const [r, g, b] = this.color;
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${this.opacity})`;
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

// Live coding demo — continuous loop with multiple snippets
const liveCodeEl = document.getElementById('live-code');
const liveCaretEl = document.querySelector('#live .caret');
if (liveCodeEl && liveCaretEl) {
    const snippets = [
        [
            "public class Developer",
            "{",
            "    public string Name => \"Emmanuel Kiptoo Kili\";",
            "    public string Role => \"Software Developer\";",
            "    public string[] Tech => new[] {",
            "        \".NET MAUI\", \"Blazor\", \"ASP.NET Core\"",
            "    };",
            "    public string Mission()",
            "        => \"Building scalable enterprise systems.\";",
            "}",
        ],
        [
            "// API Integration Pipeline",
            "var client = new HttpClient();",
            "var response = await client.GetAsync(endpoint);",
            "var data = await response.Content",
            "    .ReadFromJsonAsync<List<Record>>();",
            "",
            "foreach (var record in data)",
            "{",
            "    await db.Records.AddAsync(record);",
            "}",
            "await db.SaveChangesAsync();",
        ],
        [
            "// .NET MAUI Cross-Platform App",
            "public partial class MainPage : ContentPage",
            "{",
            "    async void OnLoginClicked(object s, EventArgs e)",
            "    {",
            "        var user = await AuthService.Login(",
            "            Email.Text, Password.Text);",
            "        if (user != null)",
            "            await Shell.Current.GoToAsync(\"//home\");",
            "    }",
            "}",
        ],
        [
            "// Real-time Dashboard with SignalR",
            "var hub = new HubConnectionBuilder()",
            "    .WithUrl(\"/dashboardHub\")",
            "    .WithAutomaticReconnect()",
            "    .Build();",
            "",
            "hub.On<Metric>(\"Update\", metric => {",
            "    Dispatcher.Dispatch(() =>",
            "        Chart.AddPoint(metric));",
            "});",
            "await hub.StartAsync();",
        ]
    ];

    let snippetIdx = 0;
    let charIdx = 0;
    let currentText = '';
    let isErasing = false;

    function getSnippet() {
        return snippets[snippetIdx % snippets.length].join('\n');
    }

    function liveType() {
        const snippet = getSnippet();
        if (!isErasing) {
            if (charIdx < snippet.length) {
                currentText += snippet.charAt(charIdx);
                liveCodeEl.textContent = currentText;
                charIdx++;
                setTimeout(liveType, 55);
            } else {
                // Pause then start erasing
                setTimeout(() => { isErasing = true; liveType(); }, 4000);
            }
        } else {
            if (currentText.length > 0) {
                currentText = currentText.slice(0, -1);
                liveCodeEl.textContent = currentText;
                setTimeout(liveType, 18);
            } else {
                // Move to next snippet
                isErasing = false;
                charIdx = 0;
                snippetIdx++;
                setTimeout(liveType, 500);
            }
        }
    }
    setTimeout(liveType, 400);
}

console.log('Portfolio loaded successfully!');

// === SPACE PROJECTS — 2D ELLIPTICAL ORBIT ===
(function() {
    const viewport = document.getElementById('orbitViewport');
    const carousel = document.getElementById('orbitCarousel');
    const ring = document.querySelector('.orbit-ring-visual');
    const leftBtn = document.getElementById('spaceLeft');
    const rightBtn = document.getElementById('spaceRight');
    if (!viewport || !carousel) return;

    const planets = Array.from(carousel.querySelectorAll('.planet'));
    const count = planets.length;
    const angleStep = (2 * Math.PI) / count;
    let angle = 0;           // current rotation in radians
    let animId = null;
    let paused = false;

    // Apply glow colors
    planets.forEach(p => {
        const g = p.getAttribute('data-glow');
        if (g) p.style.setProperty('--glow-color', g);
    });

    // Measure orbit size from viewport (smaller on mobile)
    function getOrbitParams() {
        const w = viewport.offsetWidth;
        const h = viewport.offsetHeight;
        const isMobile = w < 600;
        const isTablet = w < 900 && !isMobile;
        const rx = w * (isMobile ? 0.30 : isTablet ? 0.36 : 0.42);
        const ry = h * (isMobile ? 0.25 : isTablet ? 0.28 : 0.30);
        const cx = w / 2;
        const cy = h / 2 + (isMobile ? 0 : 10);
        return { rx, ry, cx, cy };
    }

    // Position the visible orbit ring element
    function sizeRing() {
        if (!ring) return;
        const { rx, ry, cx, cy } = getOrbitParams();
        ring.style.width = (rx * 2) + 'px';
        ring.style.height = (ry * 2) + 'px';
        ring.style.left = (cx - rx) + 'px';
        ring.style.top = (cy - ry) + 'px';
    }

    // Lay out planets at current angle
    function render() {
        const { rx, ry, cx, cy } = getOrbitParams();
        const isMobile = viewport.offsetWidth < 600;
        const planetSize = isMobile ? 35 : 60; // half of planet width for centering

        planets.forEach((p, i) => {
            const a = angle + angleStep * i;
            const x = cx + rx * Math.cos(a) - planetSize;
            const y = cy + ry * Math.sin(a) - planetSize;

            // depth: sin gives us 1 at bottom (front), -1 at top (back)
            const depth = Math.sin(a);            // -1 … 1
            const scale = 0.75 + 0.25 * ((depth + 1) / 2);  // 0.75 … 1.0
            const zIdx = Math.round((depth + 1) * 100);
            const opacity = 0.5 + 0.5 * ((depth + 1) / 2);  // 0.5 … 1.0

            p.style.transform = `translate(${x}px, ${y}px) scale(${scale})`;
            p.style.zIndex = zIdx;
            p.style.opacity = opacity;

            // Flip info panel below for planets at the back (top of orbit)
            if (depth < 0) {
                p.classList.add('info-below');
            } else {
                p.classList.remove('info-below');
            }
        });
    }

    // Animation loop
    function tick() {
        if (!paused) {
            angle -= 0.0004;   // slow continuous orbit
        }
        render();
        animId = requestAnimationFrame(tick);
    }

    // Step one planet position
    function stepOrbit(dir) {
        angle += dir * angleStep;
    }

    // Arrow buttons
    if (leftBtn) leftBtn.addEventListener('click', () => stepOrbit(1));
    if (rightBtn) rightBtn.addEventListener('click', () => stepOrbit(-1));

    // Drag state (declared early so click handlers can reference it)
    let dragging = false, dragStartX = 0, dragStartAngle = 0, dragMoved = false;

    // Click planet → show info (orbit keeps going)
    planets.forEach(planet => {
        planet.addEventListener('click', (e) => {
            if (dragMoved) return;          // ignore click after a drag
            e.stopPropagation();
            const wasActive = planet.classList.contains('active');
            planets.forEach(p => p.classList.remove('active'));
            if (!wasActive) {
                planet.classList.add('active');
            }
        });
    });

    // Click outside → close info
    document.addEventListener('click', (e) => {
        if (dragMoved) return;
        if (!e.target.closest('.planet') && !e.target.closest('.scroll-arrow')) {
            planets.forEach(p => p.classList.remove('active'));
        }
    });

    // Drag to rotate orbit (only if moved more than 5px)
    viewport.addEventListener('pointerdown', (e) => {
        if (e.target.closest('.planet') || e.target.closest('.scroll-arrow')) return;
        dragging = true;
        dragMoved = false;
        dragStartX = e.clientX;
        dragStartAngle = angle;
        viewport.setPointerCapture(e.pointerId);
    });
    viewport.addEventListener('pointermove', (e) => {
        if (!dragging) return;
        const dx = e.clientX - dragStartX;
        if (Math.abs(dx) > 5) dragMoved = true;
        if (dragMoved) angle = dragStartAngle + dx * 0.005;
    });
    viewport.addEventListener('pointerup', () => {
        dragging = false;
        setTimeout(() => { dragMoved = false; }, 10);  // reset after click events fire
    });

    // Mouse wheel — allow normal page scrolling (use arrows/drag for orbit)

    // Keyboard arrows when section is visible
    let inView = false;
    const vObs = new IntersectionObserver((entries) => {
        inView = entries[0].isIntersecting;
    }, { threshold: 0.2 });
    vObs.observe(viewport.closest('.space-projects'));

    document.addEventListener('keydown', (e) => {
        if (!inView) return;
        if (e.key === 'ArrowRight') stepOrbit(-1);
        if (e.key === 'ArrowLeft') stepOrbit(1);
    });

    // Resize handler
    window.addEventListener('resize', sizeRing);

    // Init
    sizeRing();
    render();
    tick();
})();

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
        youtube: 'https://www.youtube.com/@developerkili'
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

// === PAYMENT MODAL ===
(function() {
    const modal = document.getElementById('payModal');
    const openBtn = document.getElementById('openPayModal');
    const closeBtn = document.getElementById('payModalClose');
    if (!modal || !openBtn) return;

    openBtn.addEventListener('click', () => modal.classList.add('active'));
    closeBtn.addEventListener('click', () => modal.classList.remove('active'));
    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.classList.remove('active');
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) modal.classList.remove('active');
    });

    // Tab switching
    const tabs = modal.querySelectorAll('.pay-tab');
    const contents = modal.querySelectorAll('.pay-tab-content');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            contents.forEach(c => c.classList.remove('active'));
            tab.classList.add('active');
            document.getElementById('tab-' + tab.dataset.tab).classList.add('active');
            // Reset copy buttons
            modal.querySelectorAll('.pay-copy').forEach(btn => {
                btn.innerHTML = '<i class="fas fa-copy"></i> Copy';
            });
        });
    });
})();

// === FAQ ACCORDION ===
document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
        const item = btn.closest('.faq-item');
        const wasOpen = item.classList.contains('open');
        // Close all
        document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
        // Toggle clicked
        if (!wasOpen) item.classList.add('open');
    });
});

// === FUN FACTS COUNTER ===
const factNumbers = document.querySelectorAll('.fact-number');
if (factNumbers.length) {
    let factsCounted = false;
    const factsObs = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && !factsCounted) {
            factsCounted = true;
            factNumbers.forEach(el => {
                const target = parseInt(el.getAttribute('data-target'), 10);
                const suffix = el.getAttribute('data-suffix') || '';
                let current = 0;
                const increment = Math.max(1, Math.floor(target / 50));
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        current = target;
                        clearInterval(timer);
                    }
                    el.textContent = current.toLocaleString() + suffix;
                }, 30);
            });
        }
    }, { threshold: 0.3 });
    const factsGrid = document.querySelector('.funfacts-grid');
    if (factsGrid) factsObs.observe(factsGrid);
}

// === BACK-TO-TOP ROCKET ===
const rocketBtn = document.getElementById('rocketTop');
if (rocketBtn) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 600) {
            rocketBtn.classList.add('visible');
        } else {
            rocketBtn.classList.remove('visible');
        }
    });
    rocketBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// === STATS COUNTER ANIMATION ===
const statNumbers = document.querySelectorAll('.stat-number');
let statsCounted = false;
function animateCounters() {
    statNumbers.forEach(el => {
        const target = parseInt(el.getAttribute('data-target'), 10);
        const suffix = el.getAttribute('data-suffix') || '+';
        let current = 0;
        const increment = Math.max(1, Math.floor(target / 40));
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            el.textContent = current + suffix;
        }, 40);
    });
}
if (statNumbers.length) {
    const statsObs = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && !statsCounted) {
            statsCounted = true;
            animateCounters();
        }
    }, { threshold: 0.3 });
    const statsRow = document.querySelector('.stats-row');
    if (statsRow) statsObs.observe(statsRow);
}

// === 3D TILT HOVER ON CARDS ===
function initTiltCards() {
    const cards = document.querySelectorAll('.skill-card, .education-card, .exp-content, .contact-form, .contact-link, .code-window');
    cards.forEach(card => {
        card.classList.add('tilt-card');
        card.style.position = 'relative';
        card.style.overflow = 'hidden';
        // Add glow element
        const glow = document.createElement('div');
        glow.className = 'tilt-glow';
        card.appendChild(glow);

        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const cx = rect.width / 2;
            const cy = rect.height / 2;
            const rotateX = ((y - cy) / cy) * -6;
            const rotateY = ((x - cx) / cx) * 6;
            card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
            // Move glow
            const gx = (x / rect.width) * 100;
            const gy = (y / rect.height) * 100;
            glow.style.setProperty('--glow-x', gx + '%');
            glow.style.setProperty('--glow-y', gy + '%');
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    });
}
initTiltCards();

// === ENHANCED SCROLL REVEAL WITH STAGGER ===
function initScrollReveal() {
    const revealEls = document.querySelectorAll(
        '.skill-card, .education-card, .exp-item, .contact-form, .contact-info, .about-bio, .about-timeline, .stats-row .stat-item, .tech-badge'
    );
    revealEls.forEach((el, i) => {
        el.classList.add('reveal');
        // Stagger within parent groups
        const siblings = el.parentElement ? Array.from(el.parentElement.children).filter(c => c.classList.contains('reveal')) : [];
        const idx = siblings.indexOf(el);
        el.style.transitionDelay = (idx * 0.1) + 's';
    });

    const revObs = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    revealEls.forEach(el => revObs.observe(el));
}
initScrollReveal();

// === MAGNETIC HOVER ON BUTTONS ===
document.querySelectorAll('.btn, .hire-btn').forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
    });
    btn.addEventListener('mouseleave', () => {
        btn.style.transform = '';
    });
});

// === TESTIMONIALS CAROUSEL ===
(function() {
    const slides = document.querySelectorAll('.testimonial-slide');
    const dotsContainer = document.getElementById('testimonialDots');
    const prevBtn = document.querySelector('.test-prev');
    const nextBtn = document.querySelector('.test-next');
    if (!slides.length || !dotsContainer) return;

    let current = 0;
    // Create dots
    slides.forEach((_, i) => {
        const dot = document.createElement('div');
        dot.className = 'dot' + (i === 0 ? ' active' : '');
        dot.addEventListener('click', () => goTo(i));
        dotsContainer.appendChild(dot);
    });
    const dots = dotsContainer.querySelectorAll('.dot');

    function goTo(idx) {
        slides[current].classList.remove('active');
        dots[current].classList.remove('active');
        current = (idx + slides.length) % slides.length;
        slides[current].classList.add('active');
        dots[current].classList.add('active');
    }
    if (prevBtn) prevBtn.addEventListener('click', () => goTo(current - 1));
    if (nextBtn) nextBtn.addEventListener('click', () => goTo(current + 1));

    // Auto-advance every 6s
    setInterval(() => goTo(current + 1), 6000);
})();

// === GITHUB HEATMAP (simulated) ===
(function() {
    const grid = document.getElementById('heatmapGrid');
    if (!grid) return;
    const levels = ['', 'l1', 'l2', 'l3', 'l4'];
    // 52 weeks x 7 days = 364 cells
    for (let i = 0; i < 364; i++) {
        const cell = document.createElement('div');
        cell.className = 'heatmap-cell';
        // Weighted random: mostly empty, some activity, rare high
        const r = Math.random();
        if (r > 0.55) cell.classList.add(levels[1]);
        if (r > 0.72) cell.classList.add(levels[2]);
        if (r > 0.85) cell.classList.add(levels[3]);
        if (r > 0.93) cell.classList.add(levels[4]);
        grid.appendChild(cell);
    }
})();

// === AMBIENT SPACE SOUND ===
(function() {
    const btn = document.getElementById('soundToggle');
    if (!btn) return;

    // Create ambient sound using Web Audio API (no external file needed)
    let audioCtx = null;
    let isPlaying = false;
    let nodes = [];

    function createAmbient() {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        const master = audioCtx.createGain();
        master.gain.value = 0.08;
        master.connect(audioCtx.destination);

        // Deep space drone — layered oscillators
        [55, 82.5, 110, 165].forEach(freq => {
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.type = 'sine';
            osc.frequency.value = freq;
            gain.gain.value = 0.15 / (freq / 55);
            osc.connect(gain);
            gain.connect(master);
            osc.start();
            nodes.push(osc);
        });

        // Subtle shimmer noise
        const bufferSize = audioCtx.sampleRate * 2;
        const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
            data[i] = (Math.random() * 2 - 1) * 0.02;
        }
        const noise = audioCtx.createBufferSource();
        noise.buffer = buffer;
        noise.loop = true;
        const noiseFilter = audioCtx.createBiquadFilter();
        noiseFilter.type = 'lowpass';
        noiseFilter.frequency.value = 300;
        noise.connect(noiseFilter);
        noiseFilter.connect(master);
        noise.start();
        nodes.push(noise);
    }

    btn.addEventListener('click', () => {
        if (!isPlaying) {
            if (!audioCtx) createAmbient();
            else audioCtx.resume();
            isPlaying = true;
            btn.classList.remove('muted');
            btn.innerHTML = '<i class="fas fa-volume-up"></i>';
        } else {
            if (audioCtx) audioCtx.suspend();
            isPlaying = false;
            btn.classList.add('muted');
            btn.innerHTML = '<i class="fas fa-volume-mute"></i>';
        }
    });
})();

// === EASTER EGG — KONAMI CODE (↑↑↓↓←→←→BA) ===
(function() {
    const konamiCode = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];
    let konamiIndex = 0;
    const overlay = document.getElementById('warpOverlay');
    const warpCanvas = document.getElementById('warpCanvas');
    if (!overlay || !warpCanvas) return;

    const wCtx = warpCanvas.getContext('2d');
    let warpStars = [];
    let warpAnim = null;

    function initWarp() {
        warpCanvas.width = window.innerWidth;
        warpCanvas.height = window.innerHeight;
        warpStars = [];
        for (let i = 0; i < 400; i++) {
            warpStars.push({
                x: Math.random() * warpCanvas.width - warpCanvas.width / 2,
                y: Math.random() * warpCanvas.height - warpCanvas.height / 2,
                z: Math.random() * 1500 + 500,
                px: 0, py: 0
            });
        }
    }

    function drawWarp() {
        wCtx.fillStyle = 'rgba(0,0,0,0.15)';
        wCtx.fillRect(0, 0, warpCanvas.width, warpCanvas.height);
        const cx = warpCanvas.width / 2;
        const cy = warpCanvas.height / 2;

        warpStars.forEach(star => {
            star.px = star.x;
            star.py = star.y;
            star.z -= 30;
            if (star.z <= 0) {
                star.x = Math.random() * warpCanvas.width - cx;
                star.y = Math.random() * warpCanvas.height - cy;
                star.z = 1500;
                star.px = star.x;
                star.py = star.y;
            }
            const sx = (star.x / star.z) * 500 + cx;
            const sy = (star.y / star.z) * 500 + cy;
            const px = (star.px / (star.z + 30)) * 500 + cx;
            const py = (star.py / (star.z + 30)) * 500 + cy;
            const brightness = 1 - star.z / 2000;

            wCtx.strokeStyle = `rgba(${150 + brightness * 105}, ${180 + brightness * 75}, 255, ${brightness})`;
            wCtx.lineWidth = brightness * 2.5;
            wCtx.beginPath();
            wCtx.moveTo(px, py);
            wCtx.lineTo(sx, sy);
            wCtx.stroke();
        });
        warpAnim = requestAnimationFrame(drawWarp);
    }

    function startWarp() {
        initWarp();
        overlay.classList.add('active');
        wCtx.fillStyle = '#000';
        wCtx.fillRect(0, 0, warpCanvas.width, warpCanvas.height);
        drawWarp();
        // Auto-close after 5s
        setTimeout(endWarp, 5000);
    }

    function endWarp() {
        overlay.classList.remove('active');
        if (warpAnim) cancelAnimationFrame(warpAnim);
    }

    document.addEventListener('keydown', (e) => {
        // Close warp on Escape
        if (e.key === 'Escape' && overlay.classList.contains('active')) {
            endWarp();
            return;
        }
        // Track Konami code
        if (e.key === konamiCode[konamiIndex]) {
            konamiIndex++;
            if (konamiIndex === konamiCode.length) {
                konamiIndex = 0;
                startWarp();
            }
        } else {
            konamiIndex = 0;
        }
    });
})();
