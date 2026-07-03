const Site = (() => {
  const defaultLang = 'es';
  const supportedLangs = new Set(['es', 'en']);

  function getStoredLang() {
    const saved = localStorage.getItem('lang');
    return supportedLangs.has(saved) ? saved : defaultLang;
  }

  function setLang(lang) {
    const nextLang = supportedLangs.has(lang) ? lang : defaultLang;
    localStorage.setItem('lang', nextLang);
    document.documentElement.lang = nextLang;
    return nextLang;
  }

  function renderLangToggle(lang) {
    const toggle = document.getElementById('langToggle');
    if (!toggle) return;

    const isSpanish = lang === 'es';
    toggle.replaceChildren(
      createTogglePart('ES', isSpanish),
      createTogglePart('|', false, 'lang-sep'),
      createTogglePart('EN', !isSpanish)
    );
  }

  function createTogglePart(text, active, className = '') {
    const span = document.createElement('span');
    span.textContent = text;
    if (className) span.className = className;
    if (active) span.classList.add('lang-active');
    return span;
  }

  function applyTranslations(dictionary, lang) {
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      const value = dictionary?.[lang]?.[key];
      if (value) el.textContent = value;
    });
    renderLangToggle(lang);
  }

  function bindLanguageToggle(getLang, onChange) {
    const toggle = document.getElementById('langToggle');
    if (!toggle) return;

    toggle.addEventListener('click', () => {
      const currentLang = getLang();
      onChange(currentLang === 'es' ? 'en' : 'es');
    });
  }

  function bindNavbar() {
    const nav = document.querySelector('.nav');
    if (!nav) return;

    const updateNavState = () => nav.classList.toggle('scrolled', window.scrollY > 40);
    updateNavState();
    window.addEventListener('scroll', updateNavState, { passive: true });
  }

  function bindMobileNav() {
    const burger = document.getElementById('navBurger');
    const navLinks = document.querySelector('.nav-links');
    if (!burger || !navLinks) return;

    burger.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      burger.setAttribute('aria-expanded', String(isOpen));
    });

    navLinks.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        burger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  function bindReveal(selector) {
    const elements = document.querySelectorAll(selector);
    if (!elements.length) return;

    if (!('IntersectionObserver' in window)) {
      elements.forEach((el) => el.classList.add('visible'));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.15 });

    elements.forEach((el) => {
      el.classList.add('reveal');
      observer.observe(el);
    });
  }

  function setCurrentYear() {
    const year = document.getElementById('year');
    if (year) year.textContent = new Date().getFullYear();
  }

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, (char) => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    }[char]));
  }

  return {
    applyTranslations,
    bindLanguageToggle,
    bindMobileNav,
    bindNavbar,
    bindReveal,
    escapeHtml,
    getStoredLang,
    renderLangToggle,
    setCurrentYear,
    setLang
  };
})();
