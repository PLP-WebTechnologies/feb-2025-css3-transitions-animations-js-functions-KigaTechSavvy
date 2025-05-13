// Load theme from localStorage
function applySavedTheme() {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    }
  }
  
  // Toggle between light and dark themes
  function toggleTheme() {
    const isDark = document.body.classList.contains("dark");
    if (isDark) {
      document.body.classList.replace("dark", "light");
      localStorage.setItem("theme", "light");
    } else {
      document.body.classList.replace("light", "dark");
      localStorage.setItem("theme", "dark");
    }
  }
  
  // Animate button on click
  function animateButton() {
    const btn = document.getElementById("animate-btn");
    btn.classList.add("clicked");
  
    // Remove class after animation ends so it can be re-triggered
    btn.addEventListener("animationend", () => {
      btn.classList.remove("clicked");
    }, { once: true });
  }
  
  // Set up event listeners
  document.getElementById("animate-btn").addEventListener("click", animateButton);
  document.getElementById("theme-toggle-btn").addEventListener("click", toggleTheme);
  
  // Apply saved theme on page load
  applySavedTheme();
  