// dropdown menu script for bookings page

document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.querySelector(".page-action");
  const dropdown = document.querySelector(".page-dropdown");
  if (toggle && dropdown) {
    toggle.addEventListener("click", function () {
      dropdown.classList.toggle("active");
    });
  }
});
