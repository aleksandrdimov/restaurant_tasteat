const iconMenu = document.querySelector(".burger");
const menuBurger = document.querySelector(".header__wrapper");
const main = document.querySelector(".js-main");
arrNavItems = document.querySelectorAll(".nav__item");

iconMenu.addEventListener("click", function (e) {
  iconMenu.classList.toggle("js-active");
  menuBurger.classList.toggle("js-active");
});

main.addEventListener("click", function (e) {
  iconMenu.classList.remove("js-active");
  menuBurger.classList.remove("js-active");
});

arrNavItems.forEach((el) => {
  el.addEventListener("click", function () {
    iconMenu.classList.remove("js-active");
    menuBurger.classList.remove("js-active");
  });
});
