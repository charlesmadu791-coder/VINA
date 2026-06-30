//  DROPDOWN MENU

document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.querySelector(".page-action");
  const dropdown = document.querySelector(".page-dropdown");
  if (toggle && dropdown) {
    toggle.addEventListener("click", function () {
      dropdown.classList.toggle("active");
    });
  }

  // MENU FILTERING

  const categoryMap = {
    meals: [
      "Jollof",
      "Rice Chicken And Plantain",
      "Egusi Soup",
      "Pepper Soup",
      "Caribbean Rice",
      "Fish Pepper Soup",
      "Chicken Pepper Soup",
      "Cow Tail Pepper Soup",
      "Shrimps soup",
      "Assorted Sea Food",
    ],
    snacks: [
      "Nigerian Smallchops",
      "Moi Moi",
      "Suya Skewers",
      "Akara",
      "Bole & Fish",
      "Dodo",
      "Asun",
      "Masa",
      "Kuli-Kuli",
      "Kilishi",
      "Bole",
      "Suya",
      "Sharwarma",
      "Plantain Chips",
      "Akara Balls",
      "puff puff",
      "egg-roll",
      "Samosa",
      "Chocolate Kunafa",
    ],
    desserts: [
      "Chocolate lava cake",
      "Cheesecake",
      "Tiramisu",
      "Crème brûlée",
      "Pavlova",
      "Apple pie",
      "Banoffee pie",
      "Baklava",
      "Gelato",
      "Ice cream sundae",
      "Churros",
      "Panna cotta",
      "Lemon tart",
      "Sticky toffee pudding",
      "Macarons",
      "Rice pudding",
      "Brownies",
      "Fruit sorbet",
      "Eclairs",
      "Mango sticky rice",
      "Zobo Drink",
      "Tiger nut drink",
      "Fura da Nono",
      "Tiger Nut Drink",
      "Chocolate banana bread",
    ],
    cakes: [
      "Chocolate Cake",
      "Anniversary Cake",
      "Birthday Cake",
      "Angel Carrera Cake",
      "Wedding Cake",
    ],
    locals: [
      "Okra Soup",
      "Ofada Rice",
      "Efo Riro",
      "Buka Stew",
      "Edikang Ikong",
      "Nkwobi",
      "Ukwa",
      "Ofe Owerri",
      "Banga Soup",
      "Starch & Banga",
      "Abacha & Ugba",
      "Gbegiri",
      "Ewedu Soup",
      "Afang Soup",
      "Fisherman Soup",
      "Cow Tail Pepper Soup",
      "Shrimps soup",
      "Assorted Sea Food",
      "Egusi Soup",
      "Tuwon Shinkafa",
      "Fufu",
      "Amala",
      "Semo",
      "Pounded Yam",
      "Tuwo Masara",
      "Dawadawa Soup",
      "Bitterleaf Soup",
      "Oha Soup",
      "Ogbono Soup",
      "White Soup",
      "Fufu & Egusi Soup",
      "Abacha & Ugba",
      "Cow Tail Pepper Soup",
      "Shrimps soup",
      "Tuwon Shinkafa",
      "Assorted Sea Food",
      "Ugba",
      "Yam Porridge",
      "Ewa Agoyin",
      "Plantain Porridge",
      "Beans & Corn",
    ],
  };

  const menuItems = document.querySelectorAll(".menu-item");
  menuItems.forEach((item) => {
    const title = item.querySelector("h2")?.textContent.trim();
    let category = "meals";
    for (const [key, list] of Object.entries(categoryMap)) {
      if (list.includes(title)) {
        category = key;
        break;
      }
    }
    item.dataset.category = category;
  });

  const filterButtons = document.querySelectorAll(".filter-button");
  const initializeFilter = (button) => {
    const filter = button.dataset.filter;
    filterButtons.forEach((btn) =>
      btn.classList.toggle("active", btn === button),
    );

    let visibleIndex = 0;
    menuItems.forEach((item) => {
      const isHidden = filter !== "all" && item.dataset.category !== filter;
      item.classList.toggle("hidden", isHidden);

      // Recalculate animation delay for visible items
      if (!isHidden) {
        visibleIndex++;
        item.style.setProperty("--i", visibleIndex);
      } else {
        item.style.setProperty("--i", "0");
      }
    });
  };

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => initializeFilter(button));
  });

  const defaultButton =
    document.querySelector(".filter-button.active") || filterButtons[0];
  initializeFilter(defaultButton);
});
