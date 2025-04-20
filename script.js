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

// Toggle the dropdown menu
function toggleMenu() {
  const menu = document.getElementById("dropdownMenu");
  menu.classList.toggle("active");
}

// Close the dropdown menu when clicking outside
document.addEventListener("click", function (e) {
  const menu = document.getElementById("dropdownMenu");
  const hamburger = document.querySelector(".hamburger");

  // Close the menu if the click is outside the menu and hamburger
  if (!menu.contains(e.target) && !hamburger.contains(e.target)) {
    menu.classList.remove("active");
  }
});

// Toggle menu on hamburger click
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector(".primary-nav");

  hamburger.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
});
document.querySelector('.hamburger').addEventListener('click', function () {
  document.body.classList.toggle('menu-open');
});
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
});
hamburger.addEventListener('click', () => {
  document.body.classList.toggle('menu-open');
  mobileMenu.classList.toggle('active');
});
const overlay = document.querySelector('.overlay');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
  overlay.classList.toggle('active');
  document.body.classList.toggle('menu-open');
});
function toggleMenu() {
  document.getElementById("dropdownMenu").classList.toggle("active");
  document.getElementById("overlay").classList.toggle("active");
  document.body.classList.toggle("menu-open");
}
