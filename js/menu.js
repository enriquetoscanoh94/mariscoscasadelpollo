// ============================================================
// Página de menú — Mariscos Casa del Pollo
// Renderiza categorías y platillos desde MENU (js/menu-data.js),
// maneja el idioma ES/EN y el resaltado de categoría activa.
// ============================================================

// ---- Textos de interfaz (los nombres de platillos no se traducen) ----
const UI = {
  es: {
    'nav-home': 'Home',
    'nav-menu': 'Menú',
    'nav-location': 'Ubicación',
    'nav-contact': 'Contacto',
    'hero-eyebrow': 'Mariscos Casa del Pollo',
    'hero-title': 'Nuestro Menú',
    'hero-sub': 'Preparado al momento, todos los días',
    'cta-title': '¿Listo para ordenar?',
    'cta-sub': 'Llámanos y tu orden estará lista.',
    'cta-call': 'Llamar (831) 443-4010'
  },
  en: {
    'nav-home': 'Home',
    'nav-menu': 'Menu',
    'nav-location': 'Location',
    'nav-contact': 'Contact',
    'hero-eyebrow': 'Mariscos Casa del Pollo',
    'hero-title': 'Our Menu',
    'hero-sub': 'Made fresh, every day',
    'cta-title': 'Ready to order?',
    'cta-sub': 'Call us and your order will be ready.',
    'cta-call': 'Call (831) 443-4010'
  }
};

let currentLang = Site.getStoredLang();
let sectionObserver = null;

const formatPrice = (price) => `$${price.toFixed(2)}`;

// ---- Navegación de categorías (desplegable) ----
const catWrap = document.querySelector('.mp-cat-wrap');
const catToggle = document.getElementById('catToggle');
const catToggleLabel = document.getElementById('catToggleLabel');
let activeCatId = MENU[0].id;

function setCatMenuOpen(open) {
  catWrap.classList.toggle('open', open);
  catToggle.setAttribute('aria-expanded', String(open));
}

function setActiveCategory(catId) {
  activeCatId = catId;
  const cat = MENU.find((c) => c.id === catId);
  if (cat) catToggleLabel.textContent = cat.name[currentLang];
  document.querySelectorAll('.mp-cat-option').forEach((opt) =>
    opt.classList.toggle('active', opt.dataset.target === catId)
  );
}

function renderCategoryNav() {
  const list = document.getElementById('catList');
  list.innerHTML = MENU.map((cat) => `
    <li role="none">
      <button class="mp-cat-option" role="menuitem" data-target="${Site.escapeHtml(cat.id)}">${Site.escapeHtml(cat.name[currentLang])}</button>
    </li>
  `).join('');

  list.querySelectorAll('.mp-cat-option').forEach((opt) => {
    opt.addEventListener('click', () => {
      setCatMenuOpen(false);
      document.getElementById(opt.dataset.target)
        .scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  setActiveCategory(activeCatId);
}

catToggle.addEventListener('click', () => {
  setCatMenuOpen(!catWrap.classList.contains('open'));
});

// Cerrar al tocar fuera del desplegable
document.addEventListener('click', (e) => {
  if (!e.target.closest('.mp-cat-wrap')) setCatMenuOpen(false);
});

function renderItem(item) {
  const badge = item.badge
    ? `<span class="mp-badge">${Site.escapeHtml(item.badge[currentLang])}</span>`
    : '';

  const desc = item.desc
    ? `<p class="mp-desc">${Site.escapeHtml(item.desc[currentLang])}</p>`
    : '';

  const pricing = item.variants
    ? `<ul class="mp-variants">
        ${item.variants.map((v) => `
          <li><span>${Site.escapeHtml(v.label[currentLang])}</span><span class="mp-price">${formatPrice(v.price)}</span></li>
        `).join('')}
      </ul>`
    : '';

  const priceNote = item.priceNote
    ? ` <small class="mp-price-note">${Site.escapeHtml(item.priceNote[currentLang])}</small>`
    : '';

  const headerPrice = item.variants
    ? ''
    : `<span class="mp-price">${formatPrice(item.price)}${priceNote}</span>`;

  return `
    <article class="mp-card">
      <div class="mp-card-img">
        <img src="assets/img/menu/${Site.escapeHtml(item.img || item.id)}.webp" alt="${Site.escapeHtml(item.name)}" loading="lazy" decoding="async" width="720" height="720" />
        ${badge}
      </div>
      <div class="mp-card-body">
        <div class="mp-card-top">
          <h3>${Site.escapeHtml(item.name)}</h3>
          ${headerPrice}
        </div>
        ${desc}
        ${pricing}
      </div>
    </article>
  `;
}

function renderMenu() {
  const root = document.getElementById('menuRoot');
  root.innerHTML = MENU.map((cat) => `
    <section class="mp-section" id="${Site.escapeHtml(cat.id)}">
      <div class="mp-section-head">
        <h2>${Site.escapeHtml(cat.name[currentLang])}</h2>
      </div>
      <div class="mp-grid">
        ${cat.items.map(renderItem).join('')}
      </div>
    </section>
  `).join('');
}

// ---- Categoría activa según scroll ----
function watchActiveCategory() {
  if (sectionObserver) sectionObserver.disconnect();

  sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) setActiveCategory(entry.target.id);
    });
  }, { rootMargin: '-40% 0px -55% 0px' });

  document.querySelectorAll('.mp-section').forEach((s) => sectionObserver.observe(s));
}

// ---- Idioma ----
function applyLang(lang) {
  currentLang = Site.setLang(lang);
  Site.applyTranslations(UI, currentLang);

  // Re-render con el idioma nuevo
  renderCategoryNav();
  renderMenu();
  watchActiveCategory();
}

// ---- Init ----
applyLang(currentLang);
Site.bindLanguageToggle(() => currentLang, applyLang);
Site.bindNavbar();
Site.bindMobileNav();
Site.setCurrentYear();
