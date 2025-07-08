// Theme toggling logic
const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;

// Initial theme from localStorage or default to dark
function setTheme(theme) {
  html.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  themeToggle.textContent = theme === 'dark' ? '🌙' : '☀️';
}

function toggleTheme() {
  const current = html.getAttribute('data-theme');
  setTheme(current === 'dark' ? 'light' : 'dark');
}

themeToggle.addEventListener('click', toggleTheme);

// On load, set theme from storage or default to dark
(function() {
  const saved = localStorage.getItem('theme');
  if (saved === 'dark' || saved === 'light') {
    setTheme(saved);
  } else {
    setTheme('dark');
  }
})();
