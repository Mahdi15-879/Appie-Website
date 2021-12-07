let menu = document.querySelector(".second-navbar");
let icon = document.querySelector(".navbar__icon");

icon.addEventListener("click", function () {
  if (this.classList.contains("fa-bars")) {
    this.classList = "fas fa-times fa-3x navbar__icon";
    menu.style.left = 0;
  } else {
    this.classList = "fas fa-bars fa-3x navbar__icon";
    menu.style.left = "-1000px";
  }
});

// .............................

let clickToExpand_1 = document.querySelector(".clickToExpand-1");
let subMenu_1 = document.querySelector(".nav-list-submenu-1");
let flag_1 = false;

clickToExpand_1.addEventListener("click", function () {
  flag_1 = !flag_1;
  if (flag_1) {
    subMenu_1.style.display = "block";
  } else {
    subMenu_1.style.display = "none";
  }
});

// .............................

let clickToExpand_2 = document.querySelector(".clickToExpand-2");
let subMenu_2 = document.querySelector(".nav-list-submenu-2");
let flag_2 = false;

clickToExpand_2.addEventListener("click", function () {
  flag_2 = !flag_2;
  if (flag_2) {
    subMenu_2.style.display = "block";
  } else {
    subMenu_2.style.display = "none";
  }
});

// .............................

let clickToExpand_3 = document.querySelector(".clickToExpand-3");
let subMenu_3 = document.querySelector(".nav-list-submenu-3");
let flag_3 = false;

clickToExpand_3.addEventListener("click", function () {
  flag_3 = !flag_3;
  if (flag_3) {
    subMenu_3.style.display = "block";
  } else {
    subMenu_3.style.display = "none";
  }
});
