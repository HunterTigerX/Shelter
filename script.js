let ourFriendsButton = document.querySelector(".ourFriends-button");
ourFriendsButton.addEventListener("click", function () {
  window.open("./pets/index.html", (target = "_self"));
});

let button_header = document.querySelector(".button_header");
button_header.addEventListener("click", function () {
  document.getElementById("ourFriends").scrollIntoView({
    block: "start",
  });
});

let header__block_logo = document.querySelector(".header__block-logo");
header__block_logo.addEventListener("click", function () {
  window.open("#", (target = "_self"));
});

let inAddition_button = document.querySelector(".inAddition-button");
inAddition_button.addEventListener("click", function () {
  document.getElementById("inAddition").scrollIntoView({
    block: "start",
  });
});
