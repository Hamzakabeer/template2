// Get elements
const toggle = document.getElementById("toggle");
const status = document.getElementById("status");
const body = document.body;

// Add event listener
toggle.addEventListener("click", () => {
  toggle.classList.toggle("active");
  body.classList.toggle("active"); // Toggle body background image
  status.textContent = toggle.classList.contains("active") ? "ON" : "OFF";
});
