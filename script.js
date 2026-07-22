document.documentElement.classList.add('js');

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const primaryNav = document.getElementById('primaryNav');

if (navToggle && primaryNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = primaryNav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  primaryNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      primaryNav.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Reveal on scroll
const revealEls = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window && revealEls.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealEls.forEach((el) => observer.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add('is-visible'));
}

// Questionnaire de contact (modale native <dialog>, envoi via mailto)
const contactDialog = document.getElementById('contactDialog');
const contactForm = document.getElementById('contactForm');
const dialogClose = document.getElementById('dialogClose');
const openContactBtns = document.querySelectorAll('.js-open-contact');

if (contactDialog && typeof contactDialog.showModal === 'function' && contactForm) {
  let lastTrigger = null;

  openContactBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      lastTrigger = btn;
      contactDialog.showModal();
    });
  });

  dialogClose.addEventListener('click', () => contactDialog.close());

  contactDialog.addEventListener('click', (e) => {
    if (e.target === contactDialog) contactDialog.close();
  });

  contactDialog.addEventListener('close', () => {
    if (lastTrigger) lastTrigger.focus();
  });

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(contactForm);
    const nom = (data.get('nom') || '').trim();
    const email = (data.get('email') || '').trim();
    const societe = (data.get('societe') || '').trim();
    const motif = data.get('motif') || 'Contact portfolio';
    const message = (data.get('message') || '').trim();

    const bodyLines = [
      `Nom : ${nom}`,
      `Email : ${email}`,
      societe && `Société : ${societe}`,
      '',
      message,
    ].filter((line) => line !== '' && line !== undefined && line !== false);

    const mailto =
      'mailto:diounoujordan@outlook.fr' +
      `?subject=${encodeURIComponent(`Contact portfolio — ${motif}`)}` +
      `&body=${encodeURIComponent(bodyLines.join('\n'))}`;

    window.location.href = mailto;
    contactDialog.close();
    contactForm.reset();
  });
}
// Si <dialog> n'est pas supporté, les boutons .js-open-contact restent des liens
// mailto: classiques (comportement par défaut, aucune interception nécessaire).
