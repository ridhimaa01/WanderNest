// script.js

// Fade in body on page load
window.addEventListener('DOMContentLoaded', () => {
  document.body.style.opacity = '1';
});

function suggestDestination() {
  const vibe = document.getElementById("vibe").value;
  const weather = document.getElementById("weather").value;
  const result = document.getElementById("result");

  if (!vibe || !weather) {
    result.textContent = "Please select both options!";
    return;
  }

  let destination = "";

  if (vibe === "relax" && weather === "warm") destination = "Bali 🌴";
  else if (vibe === "adventure" && weather === "cold") destination = "Switzerland ⛷️";
  else if (vibe === "culture" && weather === "moderate") destination = "India 🕌";
  else if (vibe === "modern" && weather === "cold") destination = "South Korea 🌆";
  else if (vibe === "culture" && weather === "warm") destination = "Egypt 🏜️";
  else destination = "Thailand 🏝️";

  result.textContent = `You should travel to... ✈️ ${destination}`;
}


// Optional: Add smooth scroll effect for anchor links (if added later)
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//   anchor.addEventListener('click', function (e) {
//     e.preventDefault();
//     document.querySelector(this.getAttribute('href')).scrollIntoView({
//       behavior: 'smooth'
//     });
//   });
// });
