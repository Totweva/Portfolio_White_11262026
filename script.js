/* ============================================================
   KENNETH OJIMBA — Interactive Portfolio
   Organized into clear modules for beginners.
   ============================================================ */
(() => {
  'use strict';

  /* ----------------------------------------------------------
     CONFIG — edit these to personalize the site
     ---------------------------------------------------------- */
  const CONFIG = {
    email: 'Totweva@gmail.com',       // ← your real email
    socials: {
      behance:   'https://behance.net/thethoughtweaver',                  // e.g. 'https://behance.net/yourname'
      instagram: 'https://instagram.com/kenny_thethoughtweaver',
      linkedin:  'https://linkedin.com/in/Kenny-Ojimba',
      dribbble:  'https://dribbble.com/thoughtweaver',
    },
    // Fictional / procedural project archive.
    // Replace thumbnails, videos, external URLs and descriptions with real work later.
    projects: [
      {
        id: 'echoes',
        title: 'Motion Design Showreel 2026',
        category: 'animation',
        catLabel: 'Animation',
        desc: 'A reel showing my creative interpretation of clients ideas compiled for your viewing pleasure.',
        thumbnail: 'assets/images/motion_showreel.png',
        videoUrl: 'assets/videos/echoes.mp4',
        externalUrl: 'https://drive.google.com/file/d/11Cfn4_osp2TS2_AgLtG_rcHqbOEfV_3D/view?usp=drive_link',
        externalLabel: 'Watch on Drive',
        hueA: '#2f6bff', hueB: '#8a9bff',
        overview: 'An original motion study created as a demonstration of rhythm, timing and parallax.',
        objective: 'Explore how simple geometric repetition can feel expressive and alive.',
        challenge: 'Maintaining visual interest without narration or character.',
        process: 'Sketched motion boards, tested easing curves, layered parallax shapes.',
        outcome: 'A looping sequence that communicates mood purely through movement.'
      },
      {
        id: 'echoes',
        title: '2D Animation Showreel 2026',
        category: 'animation',
        catLabel: 'Animation',
        desc: 'A 2D animation reelshowing the possibilities of this medium in the right hands.',
        thumbnail: 'assets/images/2d_showreel.png',
        videoUrl: 'assets/videos/echoes.mp4',
        externalUrl: 'https://drive.google.com/file/d/17VTFjjh9GwCyeQYedHE1Ufvj9ZkAf3tz/view?usp=drive_link',
        externalLabel: 'Watch on Drive',
        hueA: '#2f6bff', hueB: '#8a9bff',
        overview: 'An original motion study created as a demonstration of rhythm, timing and parallax.',
        objective: 'Explore how simple geometric repetition can feel expressive and alive.',
        challenge: 'Maintaining visual interest without narration or character.',
        process: 'Sketched motion boards, tested easing curves, layered parallax shapes.',
        outcome: 'A looping sequence that communicates mood purely through movement.'
      },
      {
        id: 'echoes',
        title: 'NIA Promo video',
        category: 'animation',
        catLabel: 'Animation',
        desc: 'A promo video created for NIA University marketing campaign.',
        thumbnail: 'assets/images/nia.png',
        videoUrl: 'assets/videos/echoes.mp4',
        externalUrl: 'https://drive.google.com/file/d/12G3avEPMg0DhgFbOQ1cdcLxAGVb3gLEm/view?usp=drive_link',
        externalLabel: 'Watch on Drive',
        hueA: '#2f6bff', hueB: '#8a9bff',
        overview: 'An original motion study created as a demonstration of rhythm, timing and parallax.',
        objective: 'Explore how simple geometric repetition can feel expressive and alive.',
        challenge: 'Maintaining visual interest without narration or character.',
        process: 'Sketched motion boards, tested easing curves, layered parallax shapes.',
        outcome: 'A looping sequence that communicates mood purely through movement.'
      },
      {
        id: 'echoes',
        title: 'Hackathon 2026',
        category: 'animation',
        catLabel: 'Animation',
        desc: 'A promotional video created for the 2026 Hackathon event hosted my Miva University.',
        thumbnail: 'assets/images/hack.png',
        videoUrl: 'assets/videos/echoes.mp4',
        externalUrl: 'https://www.youtube.com/watch?v=XZJhX_ZQOMc',
        externalLabel: 'Watch on YouTube',
        hueA: '#2f6bff', hueB: '#8a9bff',
        overview: 'An original motion study created as a demonstration of rhythm, timing and parallax.',
        objective: 'Explore how simple geometric repetition can feel expressive and alive.',
        challenge: 'Maintaining visual interest without narration or character.',
        process: 'Sketched motion boards, tested easing curves, layered parallax shapes.',
        outcome: 'A looping sequence that communicates mood purely through movement.'
      },
      {
        id: 'echoes',
        title: 'K12 Refresh',
        category: 'animation',
        catLabel: 'Animation',
        desc: 'Brand identity and refresh for Ulesson, promotional video.',
        thumbnail: 'assets/images/k12.png',
        videoUrl: 'assets/videos/echoes.mp4',
        externalUrl: 'https://drive.google.com/file/d/1ZcD5bA07iDsAm5lYKNEBxu5Q7kJeiSyH/view?usp=drive_link',
        externalLabel: 'Watch on Drive',
        hueA: '#2f6bff', hueB: '#8a9bff',
        overview: 'An original motion study created as a demonstration of rhythm, timing and parallax.',
        objective: 'Explore how simple geometric repetition can feel expressive and alive.',
        challenge: 'Maintaining visual interest without narration or character.',
        process: 'Sketched motion boards, tested easing curves, layered parallax shapes.',
        outcome: 'A looping sequence that communicates mood purely through movement.'
      },
      {
        id: 'echoes',
        title: 'Video Editing',
        category: 'animation',
        catLabel: 'Animation',
        desc: 'An edit of the concluded Content team strategy and award night',
        thumbnail: 'assets/images/edit01.png',
        videoUrl: 'assets/videos/echoes.mp4',
        externalUrl: 'https://drive.google.com/file/d/12xnaxoF2OeQJvz6JAaqIFFZrZNlXfhAd/view?usp=sharing',
        externalLabel: 'Watch on Drive',
        hueA: '#2f6bff', hueB: '#8a9bff',
        overview: 'An original motion study created as a demonstration of rhythm, timing and parallax.',
        objective: 'Explore how simple geometric repetition can feel expressive and alive.',
        challenge: 'Maintaining visual interest without narration or character.',
        process: 'Sketched motion boards, tested easing curves, layered parallax shapes.',
        outcome: 'A looping sequence that communicates mood purely through movement.'
      },
      {
        id: 'Motion Identity/Templates',
        title: 'Unboarding Template',
        category: 'animation',
        catLabel: 'Animation',
        desc: 'A template created for onboarding purposes.',
        thumbnail: 'assets/images/onboarding.png',
        videoUrl: 'assets/videos/echoes.mp4',
        externalUrl: 'https://www.youtube.com/watch?v=XZJhX_ZQOMc',
        externalLabel: 'Watch on YouTube',
        hueA: '#2f6bff', hueB: '#8a9bff',
        overview: 'An original motion study created as a demonstration of rhythm, timing and parallax.',
        objective: 'Explore how simple geometric repetition can feel expressive and alive.',
        challenge: 'Maintaining visual interest without narration or character.',
        process: 'Sketched motion boards, tested easing curves, layered parallax shapes.',
        outcome: 'A looping sequence that communicates mood purely through movement.'
      },
      {
        id: 'bloom',
        title: 'The Bloom Series',
        category: 'illustration',
        catLabel: 'Illustration',
        desc: 'A procedural illustration series exploring organic growth and colour.',
        thumbnail: 'assets/images/bloom-thumb.jpg',
        videoUrl: '',
        externalUrl: 'https://drive.google.com/drive/folders/REPLACE_WITH_YOUR_FOLDER_ID',
        externalLabel: 'View Illustrations on Drive',
        hueA: '#ff9b3d', hueB: '#ffcf94',
        overview: 'A generative illustration series made with layered gradients and SVG forms.',
        objective: 'Use procedural tools to create intimate, organic-feeling artwork.',
        challenge: 'Balancing randomness with compositional intention.',
        process: 'Wrote small scripts to vary composition, then curated the strongest results.',
        outcome: 'A modular body of work that can be recombined endlessly.'
      },
      {
        id: 'form',
        title: 'Form & Function',
        category: 'design',
        catLabel: 'Design',
        desc: 'A visual identity study built around geometric reduction.',
        thumbnail: '',
        videoUrl: '',
        externalUrl: 'https://drive.google.com/drive/folders/REPLACE_WITH_YOUR_FOLDER_ID',
        externalLabel: 'View on Drive',
        hueA: '#12151c', hueB: '#3d4451',
        overview: 'An exploration of identity systems reduced to essential geometric forms.',
        objective: 'Design a modular mark that adapts to multiple contexts.',
        challenge: 'Maintaining recognisability at small and large scales.',
        process: 'Iterated on proportion grids, tested monochrome and full-colour variants.',
        outcome: 'A flexible identity toolkit ready for real-world application.'
      },
      {
        id: 'ripple',
        title: 'Ripple',
        category: 'storytelling',
        catLabel: 'Storytelling',
        desc: 'A visual narrative about small actions with far-reaching consequences.',
        thumbnail: 'assets/images/ripple-thumb.jpg',
        videoUrl: 'assets/videos/ripple.mp4',
        externalUrl: 'https://vimeo.com/REPLACE_WITH_YOUR_VIDEO_ID',
        externalLabel: 'Watch on Vimeo',
        hueA: '#9b7bff', hueB: '#c9b8ff',
        overview: 'A wordless visual story told through expanding circular ripples.',
        objective: 'Communicate narrative through rhythm alone, with no text.',
        challenge: 'Creating emotional arc without characters.',
        process: 'Storyboarded timing, tested pacing against a score.',
        outcome: 'A short poetic sequence that lingers after watching.'
      },
      {
        id: 'drift',
        title: 'Drift',
        category: 'interactive',
        catLabel: 'Interactive',
        desc: 'A responsive particle field that breathes with the viewer.',
        thumbnail: 'assets/images/drift-thumb.jpg',
        videoUrl: 'assets/videos/drift.mp4',
        externalUrl: 'https://example.com/drift-live-demo',
        externalLabel: 'Try the Live Demo',
        hueA: '#2f6bff', hueB: '#ff9b3d',
        overview: 'A live interactive experience where the viewer shapes the composition.',
        objective: 'Reward curiosity with responsive motion and light.',
        challenge: 'Keeping performance smooth at 60fps on mobile.',
        process: 'Built with Canvas, adaptive particle counts, throttled rendering.',
        outcome: 'A living artwork that feels personal to every viewer.'
      },
      {
        id: 'chroma',
        title: 'Chroma Lab',
        category: 'experiments',
        catLabel: 'Experiments',
        desc: 'A playful testbed for colour relationships and harmonies.',
        thumbnail: 'assets/images/chroma-thumb.jpg',
        videoUrl: '',
        externalUrl: 'https://drive.google.com/drive/folders/REPLACE_WITH_YOUR_FOLDER_ID',
        externalLabel: 'View on Drive',
        hueA: '#ff5c8a', hueB: '#ffc46b',
        overview: 'An exploratory tool for generating and testing colour palettes.',
        objective: 'Make colour exploration joyful and immediate.',
        challenge: 'Designing controls that don\'t distract from the colour itself.',
        process: 'Prototyped several interactions before settling on tap-to-copy.',
        outcome: 'A small but satisfying creative utility.'
      }
    ]
  };

  /* ----------------------------------------------------------
     UTILITIES
     ---------------------------------------------------------- */
  const $  = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
  const lerp = (a, b, t) => a + (b - a) * t;
  const rand = (min, max) => Math.random() * (max - min) + min;
  const isTouch = () => window.matchMedia('(hover: none)').matches;
  const prefersReduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

  /* ----------------------------------------------------------
     1. PRELOADER
     ---------------------------------------------------------- */
  function initPreloader() {
    const pre = $('#preloader');
    const ring = $('#preRing');
    const bar = $('#preBar');
    if (!pre) return;

    let progress = 0;
    const timer = setInterval(() => {
      progress = Math.min(100, progress + rand(6, 16));
      if (ring) ring.style.strokeDashoffset = String(326.7 - (progress / 100) * 326.7);
      if (bar) bar.style.width = progress + '%';
      if (progress >= 100) {
        clearInterval(timer);
        setTimeout(() => {
          pre.classList.add('done');
          document.body.classList.add('ready');
        }, 350);
      }
    }, 90);
  }

  /* ----------------------------------------------------------
     2. THEME TOGGLE (with localStorage)
     ---------------------------------------------------------- */
  function initTheme() {
    const btn = $('#themeBtn');
    if (!btn) return;
    const saved = localStorage.getItem('ko-theme');
    if (saved === 'dark') document.body.classList.add('dark');

    btn.addEventListener('click', () => {
      document.body.classList.toggle('dark');
      const isDark = document.body.classList.contains('dark');
      localStorage.setItem('ko-theme', isDark ? 'dark' : 'light');
    });
  }

  /* ----------------------------------------------------------
     3. NAV — mobile toggle, active link, smooth scroll
     ---------------------------------------------------------- */
  function initNav() {
    const burger = $('#burger');
    const links = $('.nav-links');
    const navLinks = $$('.nav-link');
    const sections = ['home', 'about', 'works', 'lab', 'process', 'contact']
      .map(id => document.getElementById(id))
      .filter(Boolean);

    if (burger && links) {
      burger.addEventListener('click', () => {
        const open = links.classList.toggle('open');
        burger.classList.toggle('open', open);
        burger.setAttribute('aria-expanded', String(open));
      });
      navLinks.forEach(l => l.addEventListener('click', () => {
        links.classList.remove('open');
        burger.classList.remove('open');
        burger.setAttribute('aria-expanded', 'false');
      }));
    }

    if ('IntersectionObserver' in window && sections.length) {
      const obs = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            navLinks.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + id));
          }
        });
      }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });
      sections.forEach(s => obs.observe(s));
    }
  }

  /* ----------------------------------------------------------
     4. SCROLL PROGRESS + REVEAL
     ---------------------------------------------------------- */
  function initScrollUI() {
    const bar = $('#scrollProgress');
    const reveals = $$('.reveal, .work-card, .skill-card, .service, .lab-card');

    if ('IntersectionObserver' in window) {
      const obs = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            obs.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
      reveals.forEach(el => obs.observe(el));
    } else {
      reveals.forEach(el => el.classList.add('in'));
    }

    if (bar) {
      let ticking = false;
      window.addEventListener('scroll', () => {
        if (!ticking) {
          requestAnimationFrame(() => {
            const h = document.documentElement.scrollHeight - window.innerHeight;
            bar.style.width = ((window.scrollY / (h || 1)) * 100) + '%';
            ticking = false;
          });
          ticking = true;
        }
      }, { passive: true });
    }
  }

  /* ----------------------------------------------------------
     5. FOG CANVAS (subtle volumetric fog)
     ---------------------------------------------------------- */
  function initFog() {
    const canvas = $('#fog-canvas');
    if (!canvas || prefersReduced()) return;
    const ctx = canvas.getContext('2d');
    let w = 0, h = 0, dpr = 1;
    const blobs = [];
    const mobile = () => window.innerWidth < 700;

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + 'px';
      canvas.style.height = h + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      build();
    }
    function build() {
      blobs.length = 0;
      const n = mobile() ? 3 : 6;
      for (let i = 0; i < n; i++) {
        blobs.push({
          x: Math.random() * w,
          y: Math.random() * h,
          r: 200 + Math.random() * 320,
          vx: (Math.random() - 0.5) * 0.25,
          vy: (Math.random() - 0.5) * 0.25,
          hue: 20 + Math.random() * 30,
          phase: Math.random() * Math.PI * 2
        });
      }
    }
    let t = 0;
    function loop() {
      t += 0.005;
      ctx.clearRect(0, 0, w, h);
      ctx.globalCompositeOperation = 'source-over';
      blobs.forEach(b => {
        b.x += b.vx; b.y += b.vy;
        if (b.x < -b.r) b.x = w + b.r;
        if (b.x > w + b.r) b.x = -b.r;
        if (b.y < -b.r) b.y = h + b.r;
        if (b.y > h + b.r) b.y = -b.r;
        const pulse = 1 + Math.sin(t + b.phase) * 0.1;
        const g = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.r * pulse);
        g.addColorStop(0, `hsla(${b.hue}, 60%, 75%, 0.09)`);
        g.addColorStop(1, `hsla(${b.hue}, 40%, 60%, 0)`);
        ctx.fillStyle = g;
        ctx.fillRect(b.x - b.r * pulse, b.y - b.r * pulse, b.r * pulse * 2, b.r * pulse * 2);
      });
      requestAnimationFrame(loop);
    }
    resize();
    window.addEventListener('resize', () => { clearTimeout(resize._t); resize._t = setTimeout(resize, 200); });
    requestAnimationFrame(loop);
  }

  /* ----------------------------------------------------------
     6. HERO PARTICLES (canvas + mouse interaction)
     ---------------------------------------------------------- */
  function initHeroParticles() {
    const canvas = $('#particle-canvas');
    if (!canvas || prefersReduced()) return;
    const ctx = canvas.getContext('2d');
    const mobile = () => window.innerWidth < 700;
    let w = 0, h = 0, dpr = 1;
    const particles = [];
    let mouse = { x: null, y: null };

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, mobile() ? 1.5 : 2);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      build();
    }
    function build() {
      particles.length = 0;
      const count = mobile() ? 40 : 90;
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.35,
          r: Math.random() * 1.6 + 0.6,
          a: Math.random() * 0.5 + 0.2
        });
      }
    }
    function loop() {
      ctx.clearRect(0, 0, w, h);
      for (const p of particles) {
        if (mouse.x !== null) {
          const dx = mouse.x - p.x, dy = mouse.y - p.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < 20000) {
            const f = (1 - d2 / 20000) * 0.03;
            const d = Math.sqrt(d2) || 1;
            p.vx += (dx / d) * f;
            p.vy += (dy / d) * f;
          }
        }
        p.vx *= 0.985; p.vy *= 0.985;
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = w; if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h; if (p.y > h) p.y = 0;
        ctx.beginPath();
        ctx.fillStyle = `rgba(47,107,255,${p.a})`;
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
      requestAnimationFrame(loop);
    }
    window.addEventListener('mousemove', e => { mouse.x = e.clientX; mouse.y = e.clientY; });
    window.addEventListener('mouseleave', () => { mouse.x = mouse.y = null; });
    resize();
    window.addEventListener('resize', () => { clearTimeout(resize._t); resize._t = setTimeout(resize, 200); });
    requestAnimationFrame(loop);
  }

  /* ----------------------------------------------------------
     7. WORKS GRID + MODAL
     ---------------------------------------------------------- */
  function makeProjectSVG(p) {
    // Original procedural artwork (no external image needed).
    // Only used when p.thumbnail AND p.videoUrl are both empty.
    return `
      <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" role="img" aria-label="${p.title} procedural artwork">
        <defs>
          <linearGradient id="g-${p.id}" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="${p.hueA}"/>
            <stop offset="100%" stop-color="${p.hueB}"/>
          </linearGradient>
        </defs>
        <rect width="400" height="300" fill="url(#g-${p.id})"/>
        <circle cx="${100 + Math.random() * 40}" cy="120" r="80" fill="rgba(255,255,255,0.18)"/>
        <circle cx="300" cy="${150 + Math.random() * 40}" r="55" fill="rgba(255,255,255,0.12)"/>
        <path d="M0 240 Q 100 180 200 220 T 400 200 L 400 300 L 0 300 Z" fill="rgba(0,0,0,0.18)"/>
        <path d="M0 260 Q 140 200 240 250 T 400 240" stroke="rgba(255,255,255,0.5)" fill="none" stroke-width="1.5"/>
        <circle cx="${60 + Math.random() * 60}" cy="60" r="3" fill="rgba(255,255,255,0.8)"/>
        <circle cx="${280 + Math.random() * 60}" cy="220" r="2" fill="rgba(255,255,255,0.7)"/>
      </svg>
    `;
  }

  function initWorks() {
    const grid = $('#worksGrid');
    if (!grid) return;
    const filters = $$('.filter');

    /* Build a thumbnail — custom image first, then video, then SVG fallback */
    function buildThumb(p) {
      if (p.thumbnail) {
        return `
          <img
            src="${p.thumbnail}"
            alt="${p.title} thumbnail"
            loading="lazy"
            decoding="async"
          >
        `;
      }
      if (p.videoUrl) {
        return `
          <video
            src="${p.videoUrl}"
            autoplay
            muted
            loop
            playsinline
            preload="metadata"
            aria-label="${p.title} preview"
          ></video>
        `;
      }
      return makeProjectSVG(p);
    }

    /* Render the grid */
    function render(filter = 'all') {
      grid.innerHTML = '';
      const list = CONFIG.projects.filter(p => filter === 'all' || p.category === filter);
      list.forEach((p, i) => {
        const card = document.createElement('article');
        card.className = 'work-card';
        card.style.transitionDelay = (i * 40) + 'ms';
        card.dataset.id = p.id;

        const hasImage = Boolean(p.thumbnail);
        const hasVideo = Boolean(p.videoUrl);
        const hasExternal = Boolean(p.externalUrl);

        let thumbClass = 'work-thumb';
        if (hasImage) thumbClass += ' is-image';
        else if (hasVideo) thumbClass += ' is-video';

        card.innerHTML = `
          <div class="${thumbClass}">
            ${buildThumb(p)}
          </div>
          <div class="work-body">
            <div class="work-cat">${p.catLabel}</div>
            <h3 class="work-title">${p.title}</h3>
            <p class="work-desc">${p.desc}</p>
            <button class="work-view${hasExternal ? ' is-external' : ''}" type="button">
              ${hasExternal ? (p.externalLabel || 'View Project') : 'View Details'}
            </button>
          </div>
        `;

        /* Thumbnail click → external link */
        const thumb = card.querySelector('.work-thumb');
        if (hasExternal) {
          thumb.style.cursor = 'pointer';
          thumb.setAttribute('role', 'link');
          thumb.setAttribute('tabindex', '0');
          thumb.setAttribute('aria-label', `Open full project: ${p.title}`);
          thumb.addEventListener('click', () => {
            window.open(p.externalUrl, '_blank', 'noopener');
          });
          thumb.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              window.open(p.externalUrl, '_blank', 'noopener');
            }
          });
        }

        /* View button → modal */
        const viewBtn = card.querySelector('.work-view');
        viewBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          openProject(p.id);
        });

        /* Tilt on desktop */
        if (!isTouch()) {
          card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;
            card.style.transform = `perspective(900px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg) translateY(-4px)`;
          });
          card.addEventListener('mouseleave', () => { card.style.transform = ''; });
        }

        grid.appendChild(card);
        requestAnimationFrame(() => card.classList.add('in'));
      });
    }

    /* Filter buttons */
    filters.forEach(f => f.addEventListener('click', () => {
      filters.forEach(x => x.classList.remove('active'));
      f.classList.add('active');
      render(f.dataset.filter);
    }));

    render('all');

    /* ─────────────────────────────────────────────
       Modal
       ───────────────────────────────────────────── */
    const modal = $('#projectModal');
    const modalClose = $('#modalClose');
    const modalPrev = $('#modalPrev');
    const modalNext = $('#modalNext');
    const modalExternal = $('#modalExternal');
    let currentId = null;

    function openProject(id) {
      const p = CONFIG.projects.find(x => x.id === id);
      if (!p) return;
      currentId = id;

      /* Hero: custom thumbnail > video > SVG */
      const heroEl = $('#modalHero');
      if (p.thumbnail) {
        heroEl.innerHTML = `<img src="${p.thumbnail}" alt="${p.title} full artwork" style="width:100%;height:100%;object-fit:cover;display:block;">`;
      } else if (p.videoUrl) {
        heroEl.innerHTML = `
          <video src="${p.videoUrl}" autoplay muted loop playsinline
                 aria-label="${p.title} full preview"></video>
        `;
      } else {
        heroEl.innerHTML = makeProjectSVG(p);
      }

      $('#modalCat').textContent = p.catLabel;
      $('#modalTitle').textContent = p.title;
      $('#modalDesc').textContent = p.desc;
      $('#modalOverview').textContent = p.overview;
      $('#modalObjective').textContent = p.objective;
      $('#modalChallenge').textContent = p.challenge;
      $('#modalProcess').textContent = p.process;
      $('#modalOutcome').textContent = p.outcome;

      /* External button in modal */
      if (modalExternal) {
        if (p.externalUrl) {
          modalExternal.href = p.externalUrl;
          modalExternal.textContent = (p.externalLabel || 'View Full Project') + ' ↗';
          modalExternal.style.display = '';
        } else {
          modalExternal.style.display = 'none';
        }
      }

      modal.classList.add('open');
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      if (modalClose) modalClose.focus();
    }

    function closeModal() {
      modal.classList.remove('open');
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
      currentId = null;
    }

    function navProject(dir) {
      if (!currentId) return;
      const idx = CONFIG.projects.findIndex(x => x.id === currentId);
      const next = (idx + dir + CONFIG.projects.length) % CONFIG.projects.length;
      openProject(CONFIG.projects[next].id);
    }

    if (modalClose) modalClose.addEventListener('click', closeModal);
    $$('[data-close]', modal).forEach(el => el.addEventListener('click', closeModal));
    if (modalPrev) modalPrev.addEventListener('click', () => navProject(-1));
    if (modalNext) modalNext.addEventListener('click', () => navProject(1));
    document.addEventListener('keydown', (e) => {
      if (!modal.classList.contains('open')) return;
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowLeft') navProject(-1);
      if (e.key === 'ArrowRight') navProject(1);
    });
  }

  /* ----------------------------------------------------------
     8. CREATIVE LAB — Particle Playground
     ---------------------------------------------------------- */
  function initLabParticles() {
    const canvas = $('#labParticles');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let w = 0, h = 0;
    const particles = [];
    let speedMult = 1.2;
    let mx = null, my = null;

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      build();
    }
    function build() {
      particles.length = 0;
      const n = window.innerWidth < 700 ? 45 : 85;
      for (let i = 0; i < n; i++) {
        particles.push({
          x: Math.random() * w, y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.7, vy: (Math.random() - 0.5) * 0.7,
          r: Math.random() * 1.8 + 0.8, a: Math.random() * 0.5 + 0.3
        });
      }
    }
    function loop() {
      ctx.clearRect(0, 0, w, h);
      for (const p of particles) {
        if (mx !== null) {
          const dx = mx - p.x, dy = my - p.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < 14000) {
            const f = (1 - d2 / 14000) * 0.06;
            const d = Math.sqrt(d2) || 1;
            p.vx += (dx / d) * f; p.vy += (dy / d) * f;
          }
        }
        p.vx *= 0.985; p.vy *= 0.985;
        p.x += p.vx * speedMult; p.y += p.vy * speedMult;
        if (p.x < 0) p.x = w; if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h; if (p.y > h) p.y = 0;
        ctx.beginPath();
        ctx.fillStyle = `rgba(47,107,255,${p.a})`;
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
      requestAnimationFrame(loop);
    }
    canvas.addEventListener('mousemove', e => {
      const r = canvas.getBoundingClientRect();
      mx = e.clientX - r.left; my = e.clientY - r.top;
    });
    canvas.addEventListener('mouseleave', () => { mx = my = null; });
    canvas.addEventListener('touchmove', e => {
      const t = e.touches[0]; const r = canvas.getBoundingClientRect();
      mx = t.clientX - r.left; my = t.clientY - r.top;
    }, { passive: true });
    canvas.addEventListener('touchend', () => { mx = my = null; });

    const slider = $('#labPSpeed');
    if (slider) slider.addEventListener('input', e => { speedMult = parseFloat(e.target.value); });
    const reset = $('#labPReset');
    if (reset) reset.addEventListener('click', build);

    resize();
    window.addEventListener('resize', () => { clearTimeout(resize._t); resize._t = setTimeout(resize, 200); });
    requestAnimationFrame(loop);
  }

  /* ----------------------------------------------------------
     9. MOTION PLAYGROUND
     ---------------------------------------------------------- */
  function initLabMotion() {
    const ball = $('#motionBall');
    const drop = $('#labMDrop');
    const easeSel = $('#labEase');
    if (!ball || !drop) return;
    let easing = 'cubic-bezier(0.16,1,0.3,1)';

    function doDrop() {
      ball.style.transition = `top 0.9s ${easing}, width 0.2s, height 0.2s, border-radius 0.2s`;
      ball.style.top = 'calc(100% - 60px)';
      setTimeout(() => {
        ball.style.width = '58px'; ball.style.height = '34px'; ball.style.borderRadius = '50%';
      }, 750);
      setTimeout(() => {
        ball.style.transition = 'top 0.9s cubic-bezier(0.34,1.56,0.64,1), width 0.2s, height 0.2s, border-radius 0.2s';
        ball.style.top = '20%';
        ball.style.width = '46px'; ball.style.height = '46px'; ball.style.borderRadius = '50%';
      }, 1000);
    }
    drop.addEventListener('click', doDrop);
    if (easeSel) easeSel.addEventListener('change', e => { easing = e.target.value; });
    const stage = $('#labMotionStage');
    if (stage) stage.addEventListener('click', doDrop);
  }

  /* ----------------------------------------------------------
     10. GENERATIVE ART
     ---------------------------------------------------------- */
  function initLabGenArt() {
    const canvas = $('#labGenArt');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let w = 0, h = 0;

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth; h = canvas.clientHeight;
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      draw();
    }
    function draw() {
      ctx.clearRect(0, 0, w, h);
      const palette = ['#2f6bff', '#ff9b3d', '#9b7bff', '#ff5c8a', '#12151c'];
      const bg = ctx.createLinearGradient(0, 0, w, h);
      bg.addColorStop(0, palette[Math.floor(Math.random() * 2)]);
      bg.addColorStop(1, palette[Math.floor(Math.random() * palette.length)]);
      ctx.fillStyle = bg;
      ctx.globalAlpha = 0.15;
      ctx.fillRect(0, 0, w, h);
      ctx.globalAlpha = 1;

      const layers = 4 + Math.floor(Math.random() * 3);
      for (let l = 0; l < layers; l++) {
        const col = palette[Math.floor(Math.random() * palette.length)];
        ctx.strokeStyle = col;
        ctx.fillStyle = col;
        ctx.globalAlpha = 0.4 + Math.random() * 0.4;
        const cx = Math.random() * w, cy = Math.random() * h;
        const type = Math.floor(Math.random() * 3);
        if (type === 0) {
          const n = 5 + Math.floor(Math.random() * 6);
          for (let i = 0; i < n; i++) {
            ctx.beginPath();
            ctx.arc(cx, cy, (i + 1) * (10 + Math.random() * 20), 0, Math.PI * 2);
            ctx.stroke();
          }
        } else if (type === 1) {
          for (let i = 0; i < 20; i++) {
            ctx.beginPath();
            ctx.arc(cx, cy, 30 + i * 12, Math.random() * Math.PI, Math.PI * (0.5 + Math.random()));
            ctx.stroke();
          }
        } else {
          const gap = 14;
          for (let x = 0; x < w; x += gap) {
            for (let y = 0; y < h; y += gap) {
              const d = Math.hypot(x - cx, y - cy);
              if (d < 160) {
                ctx.beginPath();
                ctx.arc(x, y, Math.max(0.5, 3 - d / 60), 0, Math.PI * 2);
                ctx.fill();
              }
            }
          }
        }
      }
      ctx.globalAlpha = 1;
    }
    const regen = $('#labGRegen');
    if (regen) regen.addEventListener('click', draw);
    resize();
    window.addEventListener('resize', () => { clearTimeout(resize._t); resize._t = setTimeout(resize, 200); });
  }

  /* ----------------------------------------------------------
     11. INTERACTIVE GEOMETRY
     ---------------------------------------------------------- */
  function initLabGeo() {
    const canvas = $('#labGeo');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let w = 0, h = 0, mx = 0.5, my = 0.5, t = 0;
    let palIdx = 0;
    const palettes = [
      ['#2f6bff', '#ff9b3d', '#9b7bff'],
      ['#ff5c8a', '#ffc46b', '#2f6bff'],
      ['#12151c', '#2f6bff', '#f6f4ef'],
    ];

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth; h = canvas.clientHeight;
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    canvas.addEventListener('mousemove', e => {
      const r = canvas.getBoundingClientRect();
      mx = (e.clientX - r.left) / r.width;
      my = (e.clientY - r.top) / r.height;
    });
    canvas.addEventListener('touchmove', e => {
      const r = canvas.getBoundingClientRect();
      const tt = e.touches[0];
      mx = (tt.clientX - r.left) / r.width;
      my = (tt.clientY - r.top) / r.height;
    }, { passive: true });

    const palBtn = $('#labGeoPalette');
    if (palBtn) palBtn.addEventListener('click', () => { palIdx = (palIdx + 1) % palettes.length; });

    function loop() {
      t += 0.01;
      ctx.clearRect(0, 0, w, h);
      const pal = palettes[palIdx];
      const cx = w / 2 + (mx - 0.5) * 30;
      const cy = h / 2 + (my - 0.5) * 30;

      ctx.strokeStyle = pal[0];
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(cx, cy, 70 + Math.sin(t) * 4, 0, Math.PI * 2);
      ctx.stroke();

      for (let i = 0; i < 3; i++) {
        const a = t + i * (Math.PI * 2 / 3);
        const x = cx + Math.cos(a) * 50;
        const y = cy + Math.sin(a) * 50;
        ctx.fillStyle = pal[(i + 1) % pal.length];
        ctx.globalAlpha = 0.85;
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(a);
        ctx.beginPath();
        ctx.moveTo(0, -14);
        ctx.lineTo(12, 10);
        ctx.lineTo(-12, 10);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
      }
      ctx.globalAlpha = 1;

      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(t * 0.5);
      ctx.strokeStyle = pal[2];
      ctx.lineWidth = 2;
      ctx.strokeRect(-18, -18, 36, 36);
      ctx.restore();

      requestAnimationFrame(loop);
    }
    resize();
    window.addEventListener('resize', () => { clearTimeout(resize._t); resize._t = setTimeout(resize, 200); });
    requestAnimationFrame(loop);
  }

  /* ----------------------------------------------------------
     12. COLOR PLAYGROUND
     ---------------------------------------------------------- */
  function initLabPalette() {
    const strip = $('#paletteStrip');
    const genBtn = $('#labPalGen');
    if (!strip) return;

    function makePalette() {
      const base = Math.random() * 360;
      const out = [];
      for (let i = 0; i < 5; i++) {
        const h = (base + i * 72 + rand(-12, 12)) % 360;
        const s = 55 + Math.random() * 25;
        const l = 45 + Math.random() * 20;
        out.push(hslToHex(h, s, l));
      }
      return out;
    }
    function hslToHex(h, s, l) {
      s /= 100; l /= 100;
      const c = (1 - Math.abs(2 * l - 1)) * s;
      const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
      const m = l - c / 2;
      let r = 0, g = 0, b = 0;
      if (h < 60)      [r, g, b] = [c, x, 0];
      else if (h < 120)[r, g, b] = [x, c, 0];
      else if (h < 180)[r, g, b] = [0, c, x];
      else if (h < 240)[r, g, b] = [0, x, c];
      else if (h < 300)[r, g, b] = [x, 0, c];
      else             [r, g, b] = [c, 0, x];
      const toHex = v => Math.round((v + m) * 255).toString(16).padStart(2, '0');
      return '#' + toHex(r) + toHex(g) + toHex(b);
    }
    function render() {
      strip.innerHTML = '';
      const colors = makePalette();
      colors.forEach(hex => {
        const sw = document.createElement('button');
        sw.className = 'palette-swatch';
        sw.style.background = hex;
        sw.textContent = hex.toUpperCase();
        sw.style.color = isLight(hex) ? '#12151c' : '#ffffff';
        sw.innerHTML += `<span class="copied">Copied!</span>`;
        sw.addEventListener('click', () => {
          navigator.clipboard && navigator.clipboard.writeText(hex.toUpperCase()).catch(() => {});
          sw.classList.add('copied');
          setTimeout(() => sw.classList.remove('copied'), 900);
        });
        strip.appendChild(sw);
      });
    }
    function isLight(hex) {
      const r = parseInt(hex.slice(1, 3), 16);
      const g = parseInt(hex.slice(3, 5), 16);
      const b = parseInt(hex.slice(5, 7), 16);
      return (r * 0.299 + g * 0.587 + b * 0.114) > 160;
    }
    if (genBtn) genBtn.addEventListener('click', render);
    render();
  }

  /* ----------------------------------------------------------
     13. PROCESS TIMELINE
     ---------------------------------------------------------- */
  function initProcess() {
    const wrap = $('#processTimeline');
    if (!wrap) return;
    const stages = [
      { n: '01', title: 'Discover', desc: 'Research and understand the challenge.', icon: '<circle cx="16" cy="16" r="10"/><circle cx="16" cy="16" r="4" fill="currentColor"/>' },
      { n: '02', title: 'Define',   desc: 'Identify the problem and establish objectives.', icon: '<rect x="6" y="6" width="20" height="20" rx="3"/>' },
      { n: '03', title: 'Ideate',   desc: 'Explore concepts and creative possibilities.', icon: '<path d="M16 4 L28 26 H4 Z"/>' },
      { n: '04', title: 'Design',   desc: 'Develop the visual language and direction.', icon: '<path d="M6 26 L16 4 L26 26"/>' },
      { n: '05', title: 'Prototype',desc: 'Experiment, visualize and test ideas.', icon: '<rect x="6" y="10" width="20" height="12" rx="2"/><circle cx="12" cy="16" r="2" fill="currentColor"/><circle cx="20" cy="16" r="2" fill="currentColor"/>' },
      { n: '06', title: 'Animate',  desc: 'Bring ideas to life through motion and storytelling.', icon: '<path d="M6 22 Q 16 6 26 22"/><circle cx="16" cy="22" r="2" fill="currentColor"/>' },
      { n: '07', title: 'Refine',   desc: 'Evaluate, improve and polish.', icon: '<path d="M6 22 L16 6 L26 22"/><path d="M6 22 H26"/>' },
      { n: '08', title: 'Deliver',  desc: 'Present the final experience.', icon: '<path d="M16 4 V20 M10 14 L16 20 L22 14"/><rect x="6" y="24" width="20" height="3" rx="1"/>' },
    ];

    stages.forEach((s, i) => {
      const btn = document.createElement('button');
      btn.className = 'proc-stage' + (i === 0 ? ' active' : '');
      btn.setAttribute('role', 'tab');
      btn.setAttribute('aria-selected', i === 0 ? 'true' : 'false');
      btn.innerHTML = `
        <span class="proc-ico"><svg viewBox="0 0 32 32" stroke-linecap="round" stroke-linejoin="round">${s.icon}</svg></span>
        <span class="proc-label">${s.title}</span>
      `;
      btn.addEventListener('click', () => {
        $$('.proc-stage', wrap).forEach(x => { x.classList.remove('active'); x.setAttribute('aria-selected', 'false'); });
        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');
        $('#procNum').textContent = s.n;
        $('#procTitle').textContent = s.title;
        $('#procDesc').textContent = s.desc;
      });
      wrap.appendChild(btn);
    });
  }

  /* ----------------------------------------------------------
     14. CONTACT FORM (mailto) + copy email + socials
     ---------------------------------------------------------- */
  function initContact() {
    const form = $('#contactForm');
    const status = $('#formStatus');

    // Socials config
    $$('a[data-social]').forEach(a => {
      const key = a.dataset.social;
      const url = CONFIG.socials[key];
      if (url) { a.href = url; a.target = '_blank'; a.rel = 'noopener'; }
      else {
        a.href = '#';
        a.addEventListener('click', (e) => { e.preventDefault(); if (status) status.textContent = 'This social link has not been configured yet.'; });
        a.style.opacity = '0.5';
        a.title = 'Not configured yet';
      }
    });

    // Copy email
    const copyBtn = $('#copyEmail');
    if (copyBtn) {
      const emailText = $('#emailText');
      if (emailText) emailText.textContent = CONFIG.email;
      copyBtn.dataset.email = CONFIG.email;
      copyBtn.addEventListener('click', () => {
        navigator.clipboard && navigator.clipboard.writeText(CONFIG.email)
          .then(() => { if (status) status.textContent = 'Email copied to clipboard.'; })
          .catch(() => { if (status) status.textContent = 'Copy failed — please select and copy manually.'; });
      });
    }

    // Validation + mailto
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        let valid = true;
        const fields = [
          { id: 'cfName',  msg: 'Please enter your name (2+ characters).', test: v => v.trim().length >= 2 },
          { id: 'cfEmail', msg: 'Please enter a valid email address.',     test: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) },
          { id: 'cfType',  msg: 'Please choose a project type.',           test: v => v !== '' },
          { id: 'cfDesc',  msg: 'Please describe the project (10+ characters).', test: v => v.trim().length >= 10 },
        ];
        fields.forEach(f => {
          const el = document.getElementById(f.id);
          const err = document.querySelector(`.err[data-for="${f.id}"]`);
          if (!el) return;
          if (!f.test(el.value)) { valid = false; if (err) err.textContent = f.msg; el.style.borderColor = '#d03850'; }
          else { if (err) err.textContent = ''; el.style.borderColor = ''; }
        });
        if (!valid) { if (status) status.textContent = 'Please fix the highlighted fields.'; return; }

        const name = $('#cfName').value.trim();
        const email = $('#cfEmail').value.trim();
        const type = $('#cfType').value;
        const desc = $('#cfDesc').value.trim();
        const subject = encodeURIComponent(`New project enquiry — ${type}`);
        const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nProject Type: ${type}\n\nProject Description:\n${desc}`);
        window.location.href = `mailto:${CONFIG.email}?subject=${subject}&body=${body}`;
        if (status) status.textContent = 'Opening your email client… If nothing happens, copy the address above.';
      });
    }

    // Back to top
    const back = $('#backTop');
    if (back) back.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  /* ----------------------------------------------------------
     15. FOOTER YEAR
     ---------------------------------------------------------- */
  function initYear() {
    const y = $('#year');
    if (y) y.textContent = String(new Date().getFullYear());
  }

  /* ----------------------------------------------------------
     16. MAGNETIC BUTTONS + CUSTOM CURSOR (desktop)
     ---------------------------------------------------------- */
  function initPointerFX() {
    if (isTouch() || prefersReduced()) return;
    document.body.classList.add('has-cursor');
    const cur = $('#cursor'), dot = $('#cursorDot');
    let mx = 0, my = 0, cx = 0, cy = 0;
    window.addEventListener('mousemove', e => {
      mx = e.clientX; my = e.clientY;
      if (dot) { dot.style.left = mx + 'px'; dot.style.top = my + 'px'; }
    });
    function loop() {
      cx = lerp(cx, mx, 0.2); cy = lerp(cy, my, 0.2);
      if (cur) { cur.style.left = cx + 'px'; cur.style.top = cy + 'px'; }
      requestAnimationFrame(loop);
    }
    loop();

    $$('.magnetic').forEach(btn => {
      btn.addEventListener('mousemove', e => {
        const r = btn.getBoundingClientRect();
        const x = (e.clientX - r.left - r.width / 2) * 0.2;
        const y = (e.clientY - r.top - r.height / 2) * 0.3;
        btn.style.transform = `translate(${x}px, ${y}px)`;
      });
      btn.addEventListener('mouseleave', () => { btn.style.transform = ''; });
    });
  }

  /* ----------------------------------------------------------
     17. HERO PARALLAX
     ---------------------------------------------------------- */
  function initParallax() {
    if (prefersReduced()) return;
    const els = $$('[data-parallax]');
    if (!els.length) return;
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (ticking) return;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        els.forEach(el => {
          const s = parseFloat(el.dataset.parallax) || 0.05;
          el.style.transform = `translateY(${y * s}px)`;
        });
        ticking = false;
      });
      ticking = true;
    }, { passive: true });
  }

  /* ----------------------------------------------------------
     BOOT
     ---------------------------------------------------------- */
  document.addEventListener('DOMContentLoaded', () => {
    initPreloader();
    initTheme();
    initNav();
    initScrollUI();
    initFog();
    initHeroParticles();
    initWorks();
    initLabParticles();
    initLabMotion();
    initLabGenArt();
    initLabGeo();
    initLabPalette();
    initProcess();
    initContact();
    initYear();
    initPointerFX();
    initParallax();
  });
})();