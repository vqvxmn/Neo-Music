document.addEventListener("DOMContentLoaded", () => {
  // Theme toggle logic
  const themeToggle = document.getElementById("theme-toggle");
  const html = document.documentElement;

  // Load saved theme or default to dark
  const savedTheme = localStorage.getItem("theme") || "dark";
  html.setAttribute("data-theme", savedTheme);

  // Update toggle icon
  function updateThemeIcon(theme) {
    if (themeToggle) {
      themeToggle.textContent = theme === "dark" ? "🌙" : "☀️";
    }
  }
  updateThemeIcon(savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const current = html.getAttribute("data-theme");
      const next = current === "dark" ? "light" : "dark";
      html.setAttribute("data-theme", next);
      localStorage.setItem("theme", next);
      updateThemeIcon(next);
    });
  }

  // Maintenance mode logic
  const maintenanceMode = true; // Set to true if you want maintenance mode on
  if (maintenanceMode) {
    const banner = document.getElementById("maintenance-banner");
    if (banner) banner.style.display = "block";
    const btn = document.getElementById("invite-button");
    if (btn) {
      btn.classList.add("disabled");
      btn.removeAttribute("href");
      btn.textContent = "Unavailable";
      // NOTE: The button remains visible! Only visually faded and unclickable.
    }
  }
});
