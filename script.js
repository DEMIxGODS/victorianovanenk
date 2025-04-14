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
<<<<<<< HEAD
  const links = document.querySelector(".extra-links");
  links.classList.toggle("active");
=======
  const menu = document.getElementById("dropdownMenu");
  menu.classList.toggle("active");
>>>>>>> 7ee638c (Updated navbar layout and added new project pages)
}
document.addEventListener("click", function (e) {
  const menu = document.getElementById("dropdownMenu");
  const hamburger = document.querySelector(".hamburger");

  if (!menu.contains(e.target) && !hamburger.contains(e.target)) {
    menu.classList.remove("active");
  }
});
