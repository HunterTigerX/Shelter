const headerBurgerButton = document.querySelector(".header_burger");
const headerLogoBlock = document.querySelector(".header__block-logo");
const headerWrapperPets = document.querySelector(".header_wrapper-pets");
const burgerMenu = document.querySelector(".burger_menu");
const burgerCover = document.querySelector(".burger__cover");
const h1Header = document.querySelector(".h1_header");
const logoBottomText = document.querySelector(".mar_left_4");

headerBurgerButton.addEventListener("click", function () {
  if (!headerBurgerButton.classList.contains("rotate")) {
    headerBurgerButton.classList.add("rotate");
    headerBurgerButton.classList.add("header_burger-rotated");
    headerLogoBlock.classList.add("header__block-logo-rotated");
    document.body.style.overflow = "hidden";
    burgerCover.classList.remove("none");
    burgerMenu.classList.remove("turn_burger-left");
    burgerMenu.classList.add("turn_burger-right");
    headerWrapperPets.style.margin = "30px 8px 30px 10px";
    logoBottomText.style.color = "#FFFFFF";
    h1Header.style.color = "#F1CDB3";
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
  headerWrapperPets.style.margin = "30px 50px 30px 10px";
  logoBottomText.style.color = "#292929";
  h1Header.style.color = "#545454";

  setTimeout(function () {
    document.body.style.overflow = "auto";
    burgerCover.classList.add("none");
  }, 500);
}

document.addEventListener("click", function (e) {
  if (
    e.target.classList.contains("burger_link") ||
    e.target.classList.contains("burger__cover")
  ) {
    closeBurger();
  }
});
