document.addEventListener("DOMContentLoaded", () => {
  const navMenu = document.getElementById("nav-menu");
  const navToggle = document.getElementById("nav__toggle");
  const navClose = document.getElementById("nav__close");

  // === Menu Show ===
  if (navToggle) {
    navToggle.addEventListener("click", () => {
      // Toggle the 'show-menu' class on the navMenu
      navMenu.classList.add("show-menu");
    });
  }

  // === Menu Hidden ===
  if (navClose) {
    navClose.addEventListener("click", () => {
      // Remove the 'show-menu' class to close the menu
      navMenu.classList.remove("show-menu");
    });
  }
});
const navLink = document.querySelectorAll(".nav__link");
const LinkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", LinkAction));

const titleData = document.getElementById("title__data");
const numberData = document.getElementById("number--data");
const textData = document.getElementById("text--data");
const msgChristmas = document.getElementById("msg--christmas");

const christmasCountdown = () => {
  let now = new Date();
  let currentMonth = now.getMonth() + 1;
  let currentDay = now.getDate();

  // calculate the year the next Christmas will be
  let nextChristmasYear = now.getFullYear();
  if (currentMonth == 12 && currentDay > 25) {
    nextChristmasYear += 1;
  }

  let nextChristmasDate = `Dec 25, ${nextChristmasYear} 00:00:00`;
  let christmasDay = new Date(nextChristmasDate);
  let timeLeft = christmasDay - now;

  let days = 0,
    hours = 0,
    minutes = 0,
    seconds = 0;

  if (currentMonth != 12 || (currentMonth == 12 && currentDay != 25)) {
    days = Math.floor(timeLeft / 1000 / 60 / 60 / 24);
    hours = Math.floor(timeLeft / 1000 / 60 / 60) % 24;
    minutes = Math.floor(timeLeft / 1000 / 60) % 60;
    seconds = Math.floor(timeLeft / 1000) % 60;
  }

  if (currentDay == 24) {
    if (numberData) {
      // Check if numberData is not null before setting innerHTML
      numberData.innerHTML = hours < 10 ? `0${hours}` : hours;
    }
    if (textData) {
      // Check if textData is not null before setting innerHTML
      textData.innerHTML = "Hours";
    }
  }
  if (currentDay == 24 && hours == 0) {
    numberData.innerHTML = minutes < 10 ? `0${minutes}` : minutes;
    textData.innerHTML = "Minutes";
  }
  if (currentDay == 24 && hours == 0 && minutes == 0) {
    numberData.innerHTML = seconds < 10 ? `0${seconds}` : seconds;
    textData.innerHTML = "Seconds";
  }

  if (currentMonth == 12 && currentDay == 25) {
    titleData.style.display = "none";
    msgChristmas.style.display = "block";
    msgChristmas.innerHTML = "Today is Dec 25, !!Merry Christmas";
  }
  if (currentMonth == 12 && currentDay == 26) {
    titleData.style.display = "block";
    msgChristmas.style.display = "none";
    
  }
};

setInterval(christmasCountdown, 1000);
