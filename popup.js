import dogsList from "./shelter/pets.json" with { type: "json" };

const popupWrapper = document.querySelector(".popup__wrapper");
const petPicture = document.querySelector(".popup__picture");
const petName = document.querySelector(".petName");
const petType = document.querySelector(".petType");
const petBreed = document.querySelector(".petBreed");
const petDescription = document.querySelector(".petDescription");
const petAge = document.querySelector(".popup__age");
const petInoculations = document.querySelector(".popup__inoculations");
const petDiseases = document.querySelector(".popup__diseases");
const petParasites = document.querySelector(".popup__parasites");
const popUpCloseButton = document.querySelector(".popup__close-button");

document.addEventListener("click", function (e) {
  if (
    e.target.classList.contains("pet__card-style") ||
    e.target.classList.contains("slides_style")
  ) {
    changePopup(e.target.lastElementChild.firstElementChild.innerText);
  }
  if (
    e.target.classList.contains("pet__block-image") ||
    e.target.classList.contains("slider_pic")
  ) {
    changePopup(e.target.nextElementSibling.firstElementChild.innerText);
  }
  if (
    e.target.classList.contains("pet__name") ||
    e.target.classList.contains("slider_pet-name")
  ) {
    changePopup(e.target.innerText);
  }
  if (
    e.target.classList.contains("pet__block-name") ||
    e.target.classList.contains("slider_disc")
  ) {
    changePopup(e.target.firstElementChild.innerText);
  }
  if (
    e.target.classList.contains("pet__block-button") ||
    e.target.classList.contains("slider_pet-button")
  ) {
    changePopup(e.target.parentNode.firstElementChild.innerText);
  }
  if (e.target.classList.contains("learnMore")) {
    changePopup(e.target.parentNode.parentNode.firstElementChild.innerText);
  }
  if (e.target.classList.contains("popup__shadow")) {
    closePopup();
  }
});

function changePopup(realPetName) {
  for (let i = 0; i < dogsList.length; i++) {
    if (dogsList[i].name === realPetName) {
      petPicture.style.backgroundImage = `url(${dogsList[i].img})`;
      petName.innerText = dogsList[i].name;
      petType.innerText = dogsList[i].type;
      petBreed.innerText = dogsList[i].breed;
      petDescription.innerText = dogsList[i].description;
      petAge.innerText = dogsList[i].age;
      petInoculations.innerText = dogsList[i].inoculations.join(", ");
      petDiseases.innerText = dogsList[i].diseases.join(", ");
      petParasites.innerText = dogsList[i].parasites.join(", ");
      popupWrapper.style.display = "flex";
      popupWrapper.style.top = `${window.scrollY}px`;
      document.body.style.overflow = "hidden";
    }
  }
}

popUpCloseButton.addEventListener("click", function (e) {
  closePopup();
});

function closePopup() {
  popupWrapper.style.display = "none";
  document.body.style.overflow = "auto";
}
