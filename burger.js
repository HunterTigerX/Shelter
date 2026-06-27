const headerBurgerButton = document.querySelector(".header_burger");
const headerLogoBlock = document.querySelector(".header__block-logo");
const burgerMenu = document.querySelector(".burger_menu");
const burgerCover = document.querySelector(".burger__cover");

headerBurgerButton.addEventListener("click", function () {
  // console.log(headerBurgerButton.classList.contains("rotate"))
  if(!headerBurgerButton.classList.contains("rotate")) {
    headerBurgerButton.classList.add("rotate");
    headerBurgerButton.classList.add("header_burger-rotated");
    headerLogoBlock.classList.add("header__block-logo-rotated");
    document.body.style.overflow = "hidden";
    burgerCover.classList.remove("none");
    burgerMenu.classList.remove("turn_burger-left");
    burgerMenu.classList.add("turn_burger-right");
  } else {
    closeBurger();
  }

});

function closeBurger() {
  headerBurgerButton.classList.remove("rotate");
  headerBurgerButton.classList.remove("header_burger-rotated");
  headerLogoBlock.classList.remove("header__block-logo-rotated");
  burgerMenu.classList.add("turn_burger-left");
  burgerMenu.classList.remove("turn_burger-right");
  setTimeout(function () {
    document.body.style.overflow = "auto";
    burgerCover.classList.add("none");
  }, 500);
}

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("burger_link") || e.target.classList.contains("burger__cover")) {
    closeBurger();
  }
});
