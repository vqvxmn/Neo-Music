document.addEventListener("DOMContentLoaded", () => {
  // Maintenance mode logic
  const maintenanceMode = false; // Set to true if you want maintenance mode on
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
