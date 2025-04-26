function openSidebar() {
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");

  if (sidebar && overlay) {
    sidebar.classList.add("active");
    overlay.classList.add("active");
  } else {
    console.error("Sidebar or overlay element not found!");
  }
}

function closeSidebar() {
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");

  if (sidebar && overlay) {
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
  } else {
    console.error("Sidebar or overlay element not found!");
  }
}

document.querySelector('.hamburger').addEventListener('click', function () {
  document.body.classList.toggle('menu-open');
});

// Toggle light/dark mode
function toggleMode() {
  document.body.classList.toggle("light-mode");

  // Save to localStorage
  const mode = document.body.classList.contains("light-mode") ? "light" : "dark";
  localStorage.setItem("theme", mode);
}

// Check saved mode on page load
window.onload = function () {
  const savedMode = localStorage.getItem("theme");
  if (savedMode === "light") {
    document.body.classList.add("light-mode");
  }
};