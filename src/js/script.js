







const root = document.documentElement;   //
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
