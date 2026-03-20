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

// === KILI AI CHATBOT ===
(function() {
    const chatToggle = document.querySelector('.chat-toggle');
    const chatWidget = document.querySelector('.chat-widget');
    const chatClose = document.querySelector('.chat-close');
    const chatInput = document.getElementById('chat-input');
    const chatSend = document.getElementById('chat-send');
    const chatMessages = document.getElementById('chat-messages');
    if (!chatToggle || !chatWidget) return;

    // ── Conversation State ──
    const state = {
        history: [],
        lastTopic: null,
        userName: null,
        messageCount: 0,
        greeted: false,
        topicsDiscussed: new Set()
    };

    // ── Knowledge Base ──
    const KB = {
        person: {
            name: 'Emmanuel Kiptoo Kili',
            nickname: 'Kili',
            role: 'Software Developer & IT Specialist',
            location: 'Kenya',
            mission: 'Building scalable enterprise systems that empower organizations across Africa and beyond.',
            bio: 'A passionate software developer with expertise in the .NET ecosystem, specializing in enterprise-grade web and mobile applications. Experienced in working with government institutions, healthcare systems, and manufacturing industries across multiple countries.',
            yearsExp: '5+',
            phone: '0799092727',
            availability: 'Available for hire — open to full-time, contract, and freelance opportunities.'
        },
        skills: {
            primary: ['.NET MAUI', 'Blazor', 'ASP.NET Core', 'C#'],
            databases: ['SQL Server', 'MySQL', 'SQLite'],
            other: ['API Integrations', 'Cisco Networking', 'IT Infrastructure', 'DevOps'],
            tools: ['Visual Studio', 'Azure DevOps', 'Git', 'Docker', 'Postman']
        },
        projects: [
            { name: 'E-Citizen of Ghana', tech: 'ASP.NET Core, Blazor', desc: 'Digital government services platform for Ghanaian citizens' },
            { name: '24-Security App', tech: '.NET MAUI', desc: 'Mobile marketplace connecting security service providers with clients' },
            { name: 'Capital Markets Authority', tech: 'ASP.NET Core', desc: 'Regulatory compliance platform for financial markets' },
            { name: 'Relay E-Commerce', tech: '.NET MAUI', desc: 'Cross-platform e-commerce mobile application' },
            { name: 'Pro-Silo Management', tech: 'ASP.NET Core, IoT', desc: 'Manufacturing silo monitoring with IoT integration' },
            { name: 'ICTAMS (KRA)', tech: 'ASP.NET Core', desc: 'ICT Asset Management System for Kenya Revenue Authority' },
            { name: 'MumCare App', tech: '.NET MAUI', desc: 'Maternal health reminders and tracking application' },
            { name: 'Colnev Medicare', tech: 'ASP.NET Core, Blazor', desc: 'Electronic Medical Records system for healthcare facilities' }
        ],
        experience: [
            { role: 'Software Developer', company: 'Multiple Enterprises', period: 'Current', desc: 'Building enterprise solutions for government and private sector across Africa.' },
            { role: 'IT Infrastructure Specialist', company: 'Various', desc: 'Network setup, Cisco configurations, and server management.' }
        ],
        education: [
            { degree: 'Software Engineering', institution: 'University studies in Computer Science & Software Engineering' },
            { cert: 'Microsoft Certified', desc: '.NET development certifications' },
            { cert: 'Cisco Networking', desc: 'Network infrastructure certifications' }
        ],
        services: [
            'Custom Web Application Development',
            'Mobile App Development (.NET MAUI)',
            'API Design & Integration',
            'IT Infrastructure & Network Setup',
            'Database Design & Optimization',
            'System Architecture Consulting'
        ],
        links: {
            email: 'mailto:emmanuel@example.com',
            github: 'https://github.com/OBASAKILLI',
            linkedin: 'https://linkedin.com',
            youtube: 'https://www.youtube.com/@developerkili'
        },
        funFacts: [
            'Has consumed over 500 cups of coffee while coding',
            'Has written more than 10,000 lines of code',
            'Has worked on projects spanning 3+ countries in Africa',
            'Loves late-night coding sessions',
            'Is passionate about empowering African enterprises through technology'
        ]
    };

    // ── Utility Functions ──
    function scrollTo(id) {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    }

    function timeOfDay() {
        const h = new Date().getHours();
        if (h < 12) return 'morning';
        if (h < 17) return 'afternoon';
        return 'evening';
    }

    function timestamp() {
        return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }

    function pick(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }

    function delay() {
        return 1200 + Math.random() * 1000;
    }

    // ── Message Rendering ──
    function appendMsg(sender, html) {
        // Remove any existing typing indicator
        const existingTyping = chatMessages.querySelector('.typing-indicator');
        if (existingTyping) existingTyping.remove();

        const div = document.createElement('div');
        div.className = 'msg ' + sender;
        div.innerHTML = html + `<span class="msg-time">${timestamp()}</span>`;
        chatMessages.appendChild(div);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function showTyping() {
        const div = document.createElement('div');
        div.className = 'typing-indicator';
        div.innerHTML = '<span></span><span></span><span></span>';
        chatMessages.appendChild(div);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function botSay(html, suggestionsArr) {
        showTyping();
        setTimeout(() => {
            appendMsg('bot', html);
            if (suggestionsArr && suggestionsArr.length) chips(suggestionsArr);
        }, delay());
    }

    function chips(items) {
        // Remove old suggestions
        chatMessages.querySelectorAll('.suggestions').forEach(s => s.remove());
        setTimeout(() => {
            const wrap = document.createElement('div');
            wrap.className = 'suggestions';
            items.forEach(t => {
                const c = document.createElement('button');
                c.type = 'button';
                c.className = 'chip';
                c.textContent = t;
                c.addEventListener('click', () => {
                    wrap.remove();
                    handleSend(t);
                });
                wrap.appendChild(c);
            });
            chatMessages.appendChild(wrap);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }, 150);
    }

    // ── Rich HTML Builders ──
    function card(title, content) {
        return `<div class="msg-card"><div class="msg-card-title">${title}</div>${content}</div>`;
    }

    function list(items) {
        return `<ul class="msg-list">${items.map(i => `<li>${i}</li>`).join('')}</ul>`;
    }

    function linkBtn(url, label, external) {
        return `<a href="${url}"${external ? ' target="_blank"' : ''} style="display:inline-flex;align-items:center;gap:4px;">${label}</a>`;
    }

    // ── Intent Detection (scored fuzzy matching) ──
    const intents = [
        { id: 'greeting',    keywords: ['hello', 'hi', 'hey', 'sup', 'howdy', 'good morning', 'good afternoon', 'good evening', 'greetings', 'whats up', "what's up", 'yo'], weight: 1 },
        { id: 'farewell',    keywords: ['bye', 'goodbye', 'see you', 'later', 'take care', 'gotta go', 'ciao', 'peace out'], weight: 1 },
        { id: 'thanks',      keywords: ['thank', 'thanks', 'thx', 'appreciate', 'grateful', 'cheers'], weight: 1 },
        { id: 'who',         keywords: ['who is', 'who are', 'about emmanuel', 'about kili', 'tell me about', 'introduce', 'about him', 'about you', 'your name', 'who'], weight: 1.2 },
        { id: 'skills',      keywords: ['skill', 'stack', 'technology', 'technologies', 'tech stack', 'what can he do', 'expertise', 'proficiency', 'tools', 'languages', 'frameworks', 'capable'], weight: 1.2 },
        { id: 'projects',    keywords: ['project', 'portfolio', 'work', 'built', 'developed', 'applications', 'apps', 'showcase', 'case study', 'what has he built', 'creations'], weight: 1.2 },
        { id: 'experience',  keywords: ['experience', 'job', 'career', 'work history', 'employment', 'professional', 'background', 'worked at', 'companies', 'resume'], weight: 1.2 },
        { id: 'education',   keywords: ['education', 'certificate', 'certification', 'degree', 'university', 'study', 'qualified', 'credentials', 'school', 'academic', 'learning'], weight: 1.2 },
        { id: 'contact',     keywords: ['contact', 'reach', 'hire', 'cv', 'available', 'email', 'phone', 'get in touch', 'connect', 'talk to', 'call', 'message'], weight: 1.1 },
        { id: 'services',    keywords: ['service', 'offer', 'what do you do', 'consulting', 'freelance', 'help me', 'build me', 'develop', 'need a developer', 'looking for', 'hire', 'pricing'], weight: 1.1 },
        { id: 'github',      keywords: ['github', 'git', 'repository', 'repos', 'source code', 'open source'], weight: 1 },
        { id: 'linkedin',    keywords: ['linkedin', 'professional network', 'connect on linkedin'], weight: 1 },
        { id: 'youtube',     keywords: ['youtube', 'video', 'channel', 'tutorials', 'watch', 'subscribe', 'content'], weight: 1 },
        { id: 'blog',        keywords: ['blog', 'article', 'post', 'writing', 'read', 'publications'], weight: 1 },
        { id: 'funfacts',    keywords: ['fun fact', 'interesting', 'hobby', 'hobbies', 'fun', 'random', 'tell me something', 'surprise me', 'cool fact'], weight: 1 },
        { id: 'location',    keywords: ['where', 'location', 'based', 'country', 'city', 'from', 'live'], weight: 1 },
        { id: 'availability',keywords: ['available', 'freelance', 'open to work', 'status', 'can i hire', 'hiring'], weight: 1.1 },
        { id: 'coffee',      keywords: ['coffee', 'support', 'donate', 'buy me', 'mpesa', 'tip', 'contribute', 'pay'], weight: 1 },
        { id: 'more',        keywords: ['more', 'tell me more', 'elaborate', 'detail', 'expand', 'go on', 'continue', 'what else', 'anything else'], weight: 0.8 },
        { id: 'compliment',  keywords: ['awesome', 'great', 'amazing', 'impressive', 'cool', 'nice', 'beautiful', 'love it', 'well done', 'fantastic', 'excellent'], weight: 0.9 },
        { id: 'joke',        keywords: ['joke', 'funny', 'laugh', 'humor', 'make me laugh', 'tell me a joke'], weight: 1 },
        { id: 'help',        keywords: ['help', 'what can you do', 'menu', 'options', 'commands', 'how to use', 'guide'], weight: 1 }
    ];

    function detectIntent(input) {
        const s = input.toLowerCase().trim();
        let bestIntent = null;
        let bestScore = 0;

        for (const intent of intents) {
            let score = 0;
            for (const kw of intent.keywords) {
                if (s.includes(kw)) {
                    // Longer keyword matches score higher
                    score += (kw.split(' ').length * intent.weight);
                }
            }
            // Boost exact matches
            if (intent.keywords.includes(s)) score += 3;
            if (score > bestScore) {
                bestScore = score;
                bestIntent = intent.id;
            }
        }
        return bestScore > 0 ? bestIntent : 'unknown';
    }

    // ── Detect user name from input ──
    function extractName(input) {
        const patterns = [
            /(?:my name is|i'm|i am|call me|this is)\s+([A-Z][a-z]+)/i,
            /^([A-Z][a-z]+)\s+here$/i
        ];
        for (const p of patterns) {
            const m = input.match(p);
            if (m) return m[1];
        }
        return null;
    }

    // ── Response Handlers ──
    const responses = {
        greeting() {
            const greetings = [
                `Good ${timeOfDay()}! I'm <strong>Kili AI</strong>, Emmanuel's virtual assistant. How can I help you today?`,
                `Hey there! Welcome! I'm here to tell you all about <strong>Emmanuel Kiptoo Kili</strong> and his work. What would you like to know?`,
                `Hello! Great to see you here. I can share details about Emmanuel's skills, projects, experience, and more. Just ask!`
            ];
            const name = state.userName;
            let msg = pick(greetings);
            if (name) msg = msg.replace('Hey there!', `Hey ${name}!`).replace('Hello!', `Hello ${name}!`);
            state.greeted = true;
            botSay(msg, ['Who is Emmanuel?', 'View projects', 'Skills & tech stack', 'Services offered']);
        },

        farewell() {
            const farewells = [
                `Goodbye! It was great chatting with you. Feel free to come back anytime!`,
                `See you later! Don't forget — Emmanuel is <strong>available for hire</strong> if you need a developer.`,
                `Take care! If you need anything else, I'm always here. Have a wonderful ${timeOfDay()}!`
            ];
            botSay(pick(farewells));
        },

        thanks() {
            const replies = [
                `You're welcome! Is there anything else you'd like to know?`,
                `Happy to help! Feel free to ask more questions.`,
                `Glad I could assist! Anything else on your mind?`
            ];
            botSay(pick(replies), ['View projects', 'Contact Emmanuel', 'Services offered']);
        },

        who() {
            state.lastTopic = 'who';
            state.topicsDiscussed.add('who');
            const p = KB.person;
            const html = `<strong>${p.name}</strong> is a <strong>${p.role}</strong> based in ${p.location} with ${p.yearsExp} years of experience.` +
                `<br><br>${p.bio}` +
                card('Mission', `<em>"${p.mission}"</em>`);
            botSay(html, ['View skills', 'See projects', 'Work experience', 'Hire Emmanuel']);
        },

        skills() {
            state.lastTopic = 'skills';
            state.topicsDiscussed.add('skills');
            scrollTo('skills');
            const s = KB.skills;
            const html = `Here's Emmanuel's technical arsenal:` +
                card('Primary Stack', list(s.primary)) +
                card('Databases', list(s.databases)) +
                card('Other Skills', list(s.other)) +
                card('Dev Tools', list(s.tools));
            botSay(html, ['View projects', 'Services offered', 'Work experience']);
        },

        projects() {
            state.lastTopic = 'projects';
            state.topicsDiscussed.add('projects');
            scrollTo('projects');
            const projHtml = KB.projects.map(p =>
                `<strong>${p.name}</strong> — <em>${p.tech}</em><br><span style="color:rgba(255,255,255,0.5);font-size:0.78rem">${p.desc}</span>`
            ).join('<br><br>');
            const html = `Emmanuel has built impactful solutions across government, healthcare, and enterprise:` +
                card('Project Portfolio', projHtml) +
                `<br>These projects span across <strong>3+ African countries</strong>.`;
            botSay(html, ['Tell me about skills', 'Work experience', 'Contact Emmanuel']);
        },

        experience() {
            state.lastTopic = 'experience';
            state.topicsDiscussed.add('experience');
            scrollTo('experience');
            const html = `Emmanuel has <strong>${KB.person.yearsExp} years</strong> of professional experience in software development and IT infrastructure.` +
                card('Career Highlights', list([
                    'Built enterprise solutions for government institutions (KRA, Ghana E-Citizen)',
                    'Developed healthcare systems (MumCare, Colnev Medicare)',
                    'Created manufacturing IoT solutions (Pro-Silo)',
                    'Deployed mobile apps across multiple platforms',
                    'Managed IT infrastructure and Cisco networking setups'
                ])) +
                `<br>I've scrolled to the <strong>Experience</strong> section for you.`;
            botSay(html, ['View projects', 'Education & certs', 'Hire Emmanuel']);
        },

        education() {
            state.lastTopic = 'education';
            state.topicsDiscussed.add('education');
            scrollTo('education');
            const html = `Emmanuel's educational background and certifications:` +
                card('Qualifications', list([
                    'Software Engineering & Computer Science studies',
                    'Microsoft Certified — .NET Development',
                    'Cisco Networking Certifications',
                    'Continuous self-learning and online courses'
                ])) +
                `<br>I've navigated to the <strong>Education</strong> section.`;
            botSay(html, ['View skills', 'Work experience', 'Contact']);
        },

        contact() {
            state.lastTopic = 'contact';
            state.topicsDiscussed.add('contact');
            scrollTo('contact');
            const l = KB.links;
            const html = `Here's how you can reach Emmanuel:` +
                card('Contact Options',
                    `${linkBtn(l.email, '📧 Send Email')} &nbsp; ${linkBtn(l.linkedin, '💼 LinkedIn', true)}<br><br>` +
                    `${linkBtn(l.github, '💻 GitHub', true)} &nbsp; ${linkBtn(l.youtube, '🎬 YouTube', true)}`
                ) +
                `<br><strong>Phone:</strong> ${KB.person.phone}<br>` +
                `<br><em>${KB.person.availability}</em>`;
            botSay(html, ['Services offered', 'View projects', 'Buy me a coffee']);
        },

        services() {
            state.lastTopic = 'services';
            state.topicsDiscussed.add('services');
            scrollTo('services');
            const html = `Emmanuel offers professional development services:` +
                card('Services', list(KB.services)) +
                `<br>Whether you need a full web app, a mobile solution, or IT infrastructure setup — Emmanuel can help!`;
            botSay(html, ['Contact Emmanuel', 'View projects', 'Check availability']);
        },

        github() {
            state.topicsDiscussed.add('github');
            const html = `Check out Emmanuel's open-source work and repositories:<br><br>` +
                `${linkBtn(KB.links.github, '🔗 Visit GitHub Profile', true)}<br><br>` +
                `You'll find code samples, project repos, and contributions there.`;
            botSay(html, ['View projects', 'YouTube channel', 'LinkedIn']);
        },

        linkedin() {
            state.topicsDiscussed.add('linkedin');
            const html = `Connect with Emmanuel professionally:<br><br>` +
                `${linkBtn(KB.links.linkedin, '🔗 Open LinkedIn Profile', true)}<br><br>` +
                `Great for professional networking and career opportunities.`;
            botSay(html, ['GitHub profile', 'Contact', 'YouTube']);
        },

        youtube() {
            state.topicsDiscussed.add('youtube');
            const html = `Emmanuel shares tutorials and dev content on YouTube:<br><br>` +
                `${linkBtn(KB.links.youtube, '🎬 Visit YouTube Channel', true)}<br><br>` +
                `Subscribe for .NET, Blazor, and software development tutorials!`;
            botSay(html, ['GitHub profile', 'View projects', 'LinkedIn']);
        },

        blog() {
            state.topicsDiscussed.add('blog');
            scrollTo('blog');
            const html = `Emmanuel writes about software development topics:` +
                card('Recent Articles', list([
                    'Building Enterprise APIs with ASP.NET Core',
                    'Cross-Platform Development with .NET MAUI',
                    'DevOps Best Practices for .NET Projects'
                ])) +
                `<br>I've scrolled to the <strong>Blog</strong> section for you.`;
            botSay(html, ['View projects', 'Skills', 'Contact']);
        },

        funfacts() {
            state.topicsDiscussed.add('funfacts');
            scrollTo('funfacts');
            const fact = pick(KB.funFacts);
            const html = `Here's a fun fact about Emmanuel:<br><br>` +
                `<strong>💡 ${fact}</strong><br><br>` +
                `Want to hear another one?`;
            botSay(html, ['Another fun fact', 'View projects', 'Skills']);
        },

        location() {
            const html = `Emmanuel is based in <strong>${KB.person.location}</strong>.<br><br>` +
                `He works with clients both locally and internationally, having delivered projects across <strong>Kenya, Ghana, and other African nations</strong>.<br><br>` +
                `He's open to remote work and international collaborations.`;
            botSay(html, ['Hire Emmanuel', 'Services offered', 'View projects']);
        },

        availability() {
            const html = `<span style="color:#00ff64;font-weight:700">● Available for Hire</span><br><br>` +
                `Emmanuel is currently <strong>open to opportunities</strong> including:<br>` +
                list(['Full-time positions', 'Contract work', 'Freelance projects', 'Technical consulting']) +
                `<br>Ready to start a conversation?`;
            botSay(html, ['Contact Emmanuel', 'Services offered', 'View projects']);
        },

        coffee() {
            state.topicsDiscussed.add('coffee');
            scrollTo('support');
            const html = `Love Emmanuel's work? Support him with a coffee! ☕<br><br>` +
                card('Payment Options', 
                    `<strong>Lipa na M-Pesa:</strong> Till No. <strong>9598045</strong><br>` +
                    `<strong>Send Money:</strong> <strong>0799092727</strong><br>` +
                    `<em style="font-size:0.78rem;color:rgba(255,255,255,0.4)">Name: Emmanuel Kiptoo Kili</em>`
                ) +
                `<br>You can also click the <strong>Buy Me a Coffee</strong> button for full payment details.`;
            botSay(html, ['View projects', 'Contact', 'Back to top']);
        },

        more() {
            const last = state.lastTopic;
            if (!last) {
                return botSay(`What would you like to know more about? I can tell you about Emmanuel's skills, projects, experience, or services.`,
                    ['Skills', 'Projects', 'Experience', 'Services']);
            }
            const moreMap = {
                who: () => {
                    botSay(`More about Emmanuel:<br><br>He's driven by a passion for using technology to solve real-world problems in Africa. From digitizing government services to building healthcare platforms, every project has a purpose.` +
                        card('Key Strengths', list(['Problem solver with enterprise mindset', 'Full-stack .NET expertise', 'Cross-country project delivery', 'Strong communication skills'])),
                        ['View projects', 'Services', 'Contact']);
                },
                skills: () => {
                    botSay(`Diving deeper into Emmanuel's expertise:<br><br>He doesn't just write code — he architects <strong>complete systems</strong>. From database design to API architecture to deployment pipelines, he handles the full software lifecycle.` +
                        card('Specialized In', list(['Enterprise resource planning (ERP) systems', 'Government digital transformation', 'Healthcare information systems', 'IoT-connected manufacturing solutions'])),
                        ['Projects', 'Experience', 'Contact']);
                },
                projects: () => {
                    botSay(`What makes Emmanuel's projects special:<br><br>Each project addresses a <strong>real-world need</strong>. The E-Citizen platform serves millions, the KRA system manages national assets, and MumCare protects maternal health.` +
                        `<br><br>These aren't just coding exercises — they're <strong>solutions that impact lives</strong>.`,
                        ['Skills', 'Hire Emmanuel', 'Fun facts']);
                }
            };
            if (moreMap[last]) return moreMap[last]();
            return responses[last] ? responses[last]() : responses.help();
        },

        compliment() {
            const replies = [
                `Thank you! I'll pass that along to Emmanuel. He put a lot of effort into this portfolio!`,
                `That's kind of you to say! Emmanuel is always working to improve and deliver the best.`,
                `Glad you like it! Emmanuel would appreciate hearing that. Want to connect with him?`
            ];
            botSay(pick(replies), ['Contact Emmanuel', 'View projects', 'Buy me a coffee']);
        },

        joke() {
            const jokes = [
                `Why do programmers prefer dark mode? Because light attracts bugs! 🐛`,
                `A SQL query walks into a bar, walks up to two tables, and asks... "Can I join you?" 🍻`,
                `Why was the JavaScript developer sad? Because he didn't Node how to Express himself! 😄`,
                `There are only 10 types of people in the world: those who understand binary, and those who don't. 🤓`,
                `Emmanuel's code doesn't have bugs — it has "surprise features." ✨`
            ];
            botSay(pick(jokes), ['Another joke', 'Back to business', 'View projects']);
        },

        help() {
            const html = `I'm <strong>Kili AI</strong>, Emmanuel's virtual assistant. Here's what I can help with:` +
                card('Ask Me About', list([
                    '<strong>Who is Emmanuel?</strong> — Background & mission',
                    '<strong>Skills</strong> — Tech stack & expertise',
                    '<strong>Projects</strong> — Portfolio & case studies',
                    '<strong>Experience</strong> — Career timeline',
                    '<strong>Education</strong> — Qualifications & certs',
                    '<strong>Services</strong> — What Emmanuel offers',
                    '<strong>Contact</strong> — How to reach him',
                    '<strong>Fun facts</strong> — Interesting tidbits',
                    '<strong>Buy me a coffee</strong> — Support his work'
                ])) +
                `<br>You can also ask me for a <strong>joke</strong>, or just chat naturally!`;
            botSay(html, ['Who is Emmanuel?', 'View projects', 'Skills', 'Contact']);
        },

        unknown(input) {
            // Try to be helpful even with unknown input
            const suggestions = [];
            if (!state.topicsDiscussed.has('who')) suggestions.push('Who is Emmanuel?');
            if (!state.topicsDiscussed.has('projects')) suggestions.push('View projects');
            if (!state.topicsDiscussed.has('skills')) suggestions.push('Skills & tech');
            if (!state.topicsDiscussed.has('contact')) suggestions.push('Contact info');
            if (suggestions.length === 0) suggestions.push('Services', 'Fun facts', 'Help');

            const unknowns = [
                `I'm not sure I understood that. I'm best at answering questions about Emmanuel's skills, projects, and experience. Let me help you find what you need!`,
                `Hmm, I don't have an answer for that one. Try asking about Emmanuel's work, skills, or how to contact him.`,
                `That's a bit outside my expertise! I specialize in everything about Emmanuel Kiptoo Kili. Here are some things I can help with:`
            ];
            botSay(pick(unknowns), suggestions);
        }
    };

    // ── Main Processing ──
    function processMessage(input) {
        state.messageCount++;
        state.history.push({ role: 'user', text: input });

        // Check for name introduction
        const name = extractName(input);
        if (name) {
            state.userName = name;
            botSay(`Nice to meet you, <strong>${name}</strong>! How can I help you today?`, ['Who is Emmanuel?', 'View projects', 'Skills']);
            return;
        }

        // Detect intent
        const intent = detectIntent(input);

        // Handle "another" for repeatable intents
        if (/another|one more/i.test(input)) {
            if (state.lastTopic === 'funfacts') return responses.funfacts();
            if (state.lastTopic === 'joke' || /joke/i.test(input)) return responses.joke();
        }

        // Handle "back to business" chip
        if (/back to business/i.test(input)) return responses.help();

        // Route to handler
        if (responses[intent]) {
            if (['who','skills','projects','experience','education','services','contact','funfacts','blog'].includes(intent)) {
                state.lastTopic = intent;
            }
            if (intent === 'joke') state.lastTopic = 'joke';
            responses[intent]();
        } else {
            responses.unknown(input);
        }
    }

    // ── Welcome Message ──
    function welcome() {
        const hour = new Date().getHours();
        let greeting;
        if (hour < 12) greeting = 'Good morning';
        else if (hour < 17) greeting = 'Good afternoon';
        else greeting = 'Good evening';

        showTyping();
        setTimeout(() => {
            appendMsg('bot',
                `${greeting}! I'm <strong>Kili AI</strong>, Emmanuel's virtual assistant. 🤖<br><br>` +
                `I can tell you about his <strong>skills</strong>, <strong>projects</strong>, <strong>experience</strong>, <strong>services</strong>, and much more. Just type a question or tap a suggestion below!`
            );
            chips(['Who is Emmanuel?', 'View projects', 'Skills & tech', 'Services offered', 'Contact info']);
        }, delay());
    }

    // ── Send Handler ──
    function handleSend(text) {
        const msg = (text != null ? text : chatInput.value).trim();
        if (!msg) return;
        appendMsg('user', msg);
        chatInput.value = '';
        // Remove old suggestion chips
        chatMessages.querySelectorAll('.suggestions').forEach(s => s.remove());
        processMessage(msg);
    }

    // ── Event Listeners ──
    chatToggle.addEventListener('click', () => {
        chatWidget.classList.toggle('open');
        const open = chatWidget.classList.contains('open');
        chatWidget.setAttribute('aria-hidden', open ? 'false' : 'true');
        if (open && chatMessages.childElementCount === 0) welcome();
        if (open) setTimeout(() => chatInput.focus(), 100);
    });

    if (chatClose) {
        chatClose.addEventListener('click', () => {
            chatWidget.classList.remove('open');
            chatWidget.setAttribute('aria-hidden', 'true');
        });
    }

    if (chatSend) chatSend.addEventListener('click', () => handleSend());
    if (chatInput) chatInput.addEventListener('keydown', (e) => { if (e.key === 'Enter') handleSend(); });
})();

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
