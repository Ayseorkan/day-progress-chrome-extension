// DOM elements
let bar = document.querySelector(".progress-bar");
let time = document.querySelector(".time");
let percentText = document.querySelector(".bar-percent");

// Returns seconds elapsed since start of the day
function getSecondsToday(){
  let now = new Date();
  let start = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  return (now - start) / 1000;
}

// Update progress bar every second
setInterval(() => {
  let percent = getSecondsToday() / 86400 * 100;
  bar.style.width = percent + "%";

  let d = new Date();
  let h = d.getHours().toString().padStart(2,"0");
  let m = d.getMinutes().toString().padStart(2,"0");

  percentText.textContent = percent.toFixed(1) + "%";
  time.textContent = h + ":" + m;
}, 1000);

// Theme toggle logic
const toggle = document.getElementById("theme-toggle");
const icon = document.querySelector(".icon");

// Default mode: dark
document.body.classList.add("dark-mode");
icon.textContent = "☀️"; 

// Apply saved theme
if(localStorage.getItem("theme") === "light"){
  document.body.classList.remove("dark-mode");
  document.body.classList.add("light-mode");
  icon.textContent = "🌙";
}

// Toggle theme with animation
toggle.addEventListener("click", () => {
  icon.style.transform = "rotate(180deg)";
  icon.style.opacity = "0";

  setTimeout(() => {
    if(document.body.classList.contains("dark-mode")){
      document.body.classList.remove("dark-mode");
      document.body.classList.add("light-mode");
      icon.textContent = "🌙";
      localStorage.setItem("theme","light");
    } else {
      document.body.classList.remove("light-mode");
      document.body.classList.add("dark-mode");
      icon.textContent = "☀️";
      localStorage.setItem("theme","dark");
    }

    icon.style.transform = "rotate(0deg)";
    icon.style.opacity = "1";
  }, 150);
});