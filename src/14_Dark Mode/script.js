const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

themeToggle.addEventListener("click", function () {
  if (
    body.classList.contains("bg-white") &&
    body.classList.contains("text-black")
  ) {
    body.classList.remove("bg-white", "text-black");
    body.classList.add("bg-black", "text-white");
    themeToggle.classList.remove("fa-moon");
    themeToggle.classList.add("fa-sun");
  } else {
    body.classList.remove("bg-black", "text-white");
    body.classList.add("bg-white", "text-black");
    themeToggle.classList.remove("fa-sun");
    themeToggle.classList.add("fa-moon");
  }
});

// Script for mobile navbar
const showMenu = document.getElementById("show-menu");
const hideMenu = document.getElementById("hide-menu");
const mobileUl = document.getElementById("mobile-ul");

hideMenu.addEventListener("click", function hideMenu() {
  if (mobileUl.classList.contains("flex")) {
    mobileUl.classList.remove("flex");
    mobileUl.classList.add("hidden");
  }
});

showMenu.addEventListener("click", function showMenu() {
  if (mobileUl.classList.contains("hidden")) {
    mobileUl.classList.remove("hidden");
    mobileUl.classList.add("flex");
  }
});

// script for current time in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Function to display the real-time clock
function updateClock() {
  const now = new Date();
  const timeString = now.toLocaleTimeString();
  document.getElementById("clock").textContent = `Current Time: ${timeString}`;
}

setInterval(updateClock, 1000);
updateClock();
