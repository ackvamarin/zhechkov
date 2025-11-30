document.addEventListener('DOMContentLoaded', function () {
  if (window.hljs) {
    hljs.highlightAll();
  }

  addCopyButtonsToCode();
  initSmoothAnchorScroll();
  createBackToTopButton();
  createMobileNavToggle();
});

function addCopyButtonsToCode() {
  document.querySelectorAll('pre > code').forEach((code) => {
    const pre = code.parentElement;
    // avoid adding duplicate buttons
    if (pre.querySelector('.code-copy-btn')) return;

    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'code-copy-btn';
    btn.setAttribute('aria-label', 'Копировать код');
    btn.textContent = 'Копировать';

    btn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(code.innerText);
        btn.textContent = 'Скопировано!';
        setTimeout(() => (btn.textContent = 'Копировать'), 1500);
      } catch (err) {
        btn.textContent = 'Ошибка';
        setTimeout(() => (btn.textContent = 'Копировать'), 1500);
      }
    });

    pre.style.position = 'relative';
    pre.appendChild(btn);
  });
}

function initSmoothAnchorScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const href = a.getAttribute('href');
      if (!href || href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        try { history.pushState(null, '', href); } catch (e) {}
      }
    });
  });
}

function createBackToTopButton() {
  const btn = document.createElement('button');
  btn.id = 'back-to-top';
  btn.setAttribute('aria-label', 'Наверх');
  btn.title = 'Наверх';
  btn.innerHTML = '↑';
  btn.style.display = 'none';

  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  document.body.appendChild(btn);

  window.addEventListener('scroll', () => {
    if (window.scrollY > 250) btn.style.display = 'block';
    else btn.style.display = 'none';
  });
}

function createMobileNavToggle() {
  const header = document.querySelector('.site-header .container');
  if (!header) return;
  // avoid duplicate toggle
  if (header.querySelector('.nav-toggle')) return;

  const toggle = document.createElement('button');
  toggle.className = 'nav-toggle';
  toggle.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('aria-label', 'Открыть меню');
  toggle.innerHTML = '☰';

  toggle.addEventListener('click', () => {
    const opened = document.body.classList.toggle('nav-open');
    toggle.setAttribute('aria-expanded', opened ? 'true' : 'false');
  });

  header.insertBefore(toggle, header.firstChild);
}

// Re-run copy button injection in case new code blocks are loaded dynamically later
export function refreshCodeHelpers() {
  addCopyButtonsToCode();
}
