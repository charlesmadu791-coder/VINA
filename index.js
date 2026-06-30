// BACKGROUND IMAGE SCRIPT

const hero = document.querySelector(".hero");
const images = [
  "vhina/jllof.jpg",
  "vhina/download.jpg",
  "vhina/Nigerian Party .jpg",
  "vhina/Nigerian smallchops.jpg",
];
let currentIndex = 0;

function setHeroBackground(index) {
  currentIndex = (index + images.length) % images.length;
  hero.style.backgroundImage = `linear-gradient(180deg, rgba(255, 112, 146, 0.45), rgba(242, 190, 121, 0.35)), url("${images[currentIndex]}")`;
  hero.style.backgroundPosition = "center";
  hero.style.backgroundSize = "cover";
  hero.style.backgroundRepeat = "no-repeat";
}

let autoChange = setInterval(() => setHeroBackground(currentIndex + 1), 1900);

hero.addEventListener("mouseenter", () => clearInterval(autoChange));
hero.addEventListener("mouseleave", () => {
  autoChange = setInterval(() => setHeroBackground(currentIndex + 1), 1900);
});

// DROPDOWN MENU SCRIPT

const pageToggle = document.querySelector(".page-action");
const Dropdown = document.querySelector(".dropdown");
if (pageToggle && Dropdown) {
  pageToggle.addEventListener("click", function () {
    Dropdown.classList.toggle("active");
  });
}
