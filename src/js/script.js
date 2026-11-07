const root = document.documentElement;   //
const themeBtn = document.querySelector('#theme-btn');

themeBtn.addEventListener('click', () => {
  const next = root.dataset.theme === 'light' ? 'dark' : 'light';
  root.dataset.theme = next;             // CSS reads this: :root[data-theme="light"]
  themeBtn.textContent = next === 'light' ? 'Dark mode' : 'Light mode';
});

document.querySelector('#year').textContent = new Date().getFullYear();
