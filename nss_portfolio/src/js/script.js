// ===== 1. MOBILE MENU =====
// Find the Menu button and the nav in the HTML using their ids
const menuBtn = document.querySelector('#menu-btn');
const nav = document.querySelector('#nav');

// When the Menu button is clicked...
menuBtn.addEventListener('click', () => {
  // toggle() adds the class "open" if missing, removes it if present.
  // It returns true when the class is now on.
  const isOpen = nav.classList.toggle('open');
  // Tell screen readers whether the menu is open
  menuBtn.setAttribute('aria-expanded', isOpen);
});

// When any link inside the nav is clicked, close the menu again
nav.addEventListener('click', (event) => {
  if (event.target.tagName === 'A') {
    nav.classList.remove('open');
  }
});

// ===== 2. DARK / LIGHT THEME =====
const root = document.documentElement;   // the <html> element
const themeBtn = document.querySelector('#theme-btn');

themeBtn.addEventListener('click', () => {
  // If the theme is light, switch to dark. Otherwise switch to light.
  const next = root.dataset.theme === 'light' ? 'dark' : 'light';
  root.dataset.theme = next;             // CSS reads this: :root[data-theme="light"]
  // Make the button say what it will do next
  themeBtn.textContent = next === 'light' ? 'Dark mode' : 'Light mode';
});

// ===== 3. FOOTER YEAR =====
// new Date().getFullYear() gives the current year, e.g. 2026
document.querySelector('#year').textContent = new Date().getFullYear();
