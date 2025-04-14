function toggleMode() {
    document.body.classList.toggle("light-mode");
  }
  
  console.log("JavaScript is working!");

  console.log("✅ JavaScript is working, Victoriano!");
alert("Hello, Victoriano! This message is from your script.js file 😄");
// Check saved mode
window.onload = function () {
  const savedMode = localStorage.getItem("theme");
  if (savedMode === "light") {
    document.body.classList.add("light-mode");
  }
};

function toggleMode() {
  document.body.classList.toggle("light-mode");

  // Save to localStorage
  const mode = document.body.classList.contains("light-mode") ? "light" : "dark";
  localStorage.setItem("theme", mode);
}
function toggleMenu() {
  const nav = document.getElementById("navLinks");
  nav.classList.toggle("active");
}
