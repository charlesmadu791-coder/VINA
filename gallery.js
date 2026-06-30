// dropdown menu script for gallery page

document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.querySelector(".page-action");
  const dropdown = document.querySelector(".dropdown");
  if (toggle && dropdown) {
    toggle.addEventListener("click", function () {
      dropdown.classList.toggle("active");
    });
  }
});
