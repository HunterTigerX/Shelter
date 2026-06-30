import dogsList from "./pets.json" with { type: "json" };

const rightSingleButton = document.querySelector(".right__single-button");
const rightDoubleButton = document.querySelector(".right__double-button");
const leftSingleButton = document.querySelector(".left__single-button");
const leftDoubleButton = document.querySelector(".left__double-button");
const rightSingleSpan = document.querySelector(".right__single");
const rightDoubleSpan = document.querySelector(".right__double");
const leftSingleSpan = document.querySelector(".left__single");
const leftDoubleSpan = document.querySelector(".left__double");
const slideCountButton = document.querySelector(".not__button");

let numberOfSlidesOnThePage, numberOfPages;

async function setNumberOfSlides() {
  if (window.innerWidth >= 1280) {
    numberOfSlidesOnThePage = 8;
  } else if (window.innerWidth >= 768 && window.innerWidth <= 1279) {
    numberOfSlidesOnThePage = 6;
  } else {
    numberOfSlidesOnThePage = 3;
  }
  numberOfPages = (dogsList.length * 6) / numberOfSlidesOnThePage;
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const howManyTimesWeNeedToCopy = 6;
let slideCount = 1;

let arrayOfArrays = [];
let arrayOfDogs = [];

async function fillArrayOfDogs() {
  for (let i = 0; i < dogsList.length; i++) {
    arrayOfDogs.push(i);
  }
}

function shuffleArray() {
  let newShuffledArray = [];
  let copyOfArrayOfDogs = [...arrayOfDogs];
  for (let i = 0; i < arrayOfDogs.length; i++) {
    newShuffledArray.push(
      ...copyOfArrayOfDogs.splice(getRndInteger(0, copyOfArrayOfDogs.length), 1)
    );
  }
  return newShuffledArray;
}

async function generateArrayOfArrays() {
  for (let i = 0; i < howManyTimesWeNeedToCopy; i++) {
    let shuffledArray = shuffleArray();
    if (!arrayOfArrays.includes(shuffledArray)) {
      arrayOfArrays.push(shuffledArray);
    } else {
      shuffledArray = shuffleArray();
      i--;
    }
  }
}

async function fillSliderWithSlides() {
  document.querySelector(".pet__card-block").innerHTML = "";
  const templateCard = document.querySelector(".slider__template");
  for (let i = 0; i < numberOfSlidesOnThePage; i++) {
    let templateCardCopy = templateCard.content.cloneNode(true);
    const petName = templateCardCopy.querySelector(".pet__name");
    const petImage = templateCardCopy.querySelector(".pet__block-image");
    petName.textContent = dogsList[arrayOfArrays[slideCount - 1][i]].name;
    petImage.style.background = `url(${dogsList[arrayOfArrays[slideCount - 1][i]].img
      })`;
    document.querySelector(".pet__card-block").append(templateCardCopy);
  }
}

async function runPets() {
  await setNumberOfSlides();
  await fillArrayOfDogs();
  await generateArrayOfArrays();
  await fillSliderWithSlides();
}

runPets();

function resizearrayOfArrays() {
  setNumberOfSlides();
  let arrayOfArraysCopy = [...arrayOfArrays.join(",").split(",")];
  let newArray = [];
  for (let i = 0; arrayOfArraysCopy.length > 0; i++) {
    newArray.push(arrayOfArraysCopy.splice(0, numberOfSlidesOnThePage));
  }
  arrayOfArrays = newArray;
  fillSliderWithSlides();
}

window.addEventListener("resize", (event) => {
  resizearrayOfArrays();
});

document.addEventListener("click", function (e) {
  const petCardBlocks = document.querySelectorAll(".pet__card-block");

  if (
    (e.target.classList.contains("right__single") ||
      e.target.classList.contains("right__single-button")) &&
    slideCount < numberOfPages
  ) {
    slideCount += 1;
    slideCountButton.innerText = slideCount;
    fillSliderWithSlides();
    changeButtons();
  }
  if (
    (e.target.classList.contains("left__single") ||
      e.target.classList.contains("left__single-button")) &&
    slideCount > 1
  ) {
    slideCount -= 1;
    slideCountButton.innerText = slideCount;
    fillSliderWithSlides();
    changeButtons();
  }
  if (
    (e.target.classList.contains("left__double") ||
      e.target.classList.contains("left__double-button")) &&
    slideCount <= numberOfPages &&
    slideCount > 1
  ) {
    slideCount = 1;
    slideCountButton.innerText = slideCount;
    fillSliderWithSlides();
    changeButtons();
  }
  if (
    (e.target.classList.contains("right__double") ||
      e.target.classList.contains("right__double-button")) &&
    slideCount >= 1 &&
    slideCount < numberOfPages
  ) {
    slideCount = numberOfPages;
    slideCountButton.innerText = slideCount;
    fillSliderWithSlides();
    changeButtons();
  }
});

function changeButtons() {
  if (slideCount === numberOfPages) {
    rightSingleButton.disabled = true;
    rightDoubleButton.disabled = true;
    leftSingleButton.disabled = false;
    leftDoubleButton.disabled = false;
    rightSingleSpan.style.backgroundImage = `url(../assets/icons/ArrowRightOneDisabled.svg)`;
    rightDoubleSpan.style.backgroundImage = `url(../assets/icons/ArrowRightTwoDisabled.svg)`;
    leftSingleSpan.style.backgroundImage = `url(../assets/icons/ArrowLeftOne.svg)`;
    leftDoubleSpan.style.backgroundImage = `url(../assets/icons/ArrowLeftTwo.svg)`;
  } else if (slideCount === 1) {
    leftSingleButton.disabled = true;
    leftDoubleButton.disabled = true;
    rightSingleButton.disabled = false;
    rightDoubleButton.disabled = false;
    leftSingleSpan.style.backgroundImage = `url(../assets/icons/ArrowLeftOneDisabled.svg)`;
    leftDoubleSpan.style.backgroundImage = `url(../assets/icons/ArrowLeftTwoDisabled.svg)`;
    rightSingleSpan.style.backgroundImage = `url(../assets/icons/ArrowRightOne.svg)`;
    rightDoubleSpan.style.backgroundImage = `url(../assets/icons/ArrowRightTwo.svg)`;
  } else {
    rightSingleButton.disabled = false;
    rightDoubleButton.disabled = false;
    leftSingleButton.disabled = false;
    leftDoubleButton.disabled = false;
    rightSingleSpan.style.backgroundImage = `url(../assets/icons/ArrowRightOne.svg)`;
    rightDoubleSpan.style.backgroundImage = `url(../assets/icons/ArrowRightTwo.svg)`;
    leftSingleSpan.style.backgroundImage = `url(../assets/icons/ArrowLeftOne.svg)`;
    leftDoubleSpan.style.backgroundImage = `url(../assets/icons/ArrowLeftTwo.svg)`;
  }
}
