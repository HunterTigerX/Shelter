import dogsList from "./shelter/pets.json" with { type: "json" };

const slideTemplate = document.querySelector(".pet_card-template");
const sliderBlock = document.querySelector(".slider_block");
const sliderBlockLeft = document.querySelector(".slider_block-left");
const sliderBlockCenter = document.querySelector(".slider_block-center");
const sliderBlockRight = document.querySelector(".slider_block-right");
const leftButton = document.querySelector(".slider_scroll_left-button");
const rightButton = document.querySelector(".slider_scroll_right-button");
const rootCss = document.querySelector(":root");

const totalNumberOfSlides = Object.keys(dogsList).length;

let numberSlidesOnPage,
  numbersArray = [],
  currentSlides = [],
  nextSlides = [],
  savedCurrentSlides,
  savedLastSlides,
  lastPosition,
  lastNumberOfSlides;

function setNumberOfSlides() {
  if (window.innerWidth >= 1280) {
    numberSlidesOnPage = 3;
  } else if (window.innerWidth >= 768 && window.innerWidth <= 1279) {
    numberSlidesOnPage = 2;
  } else {
    numberSlidesOnPage = 1;
  }
}
setNumberOfSlides();

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function generateNumbersArray() {
  for (let i = 0; i < totalNumberOfSlides; i++) {
    numbersArray.push(i);
  }
}
generateNumbersArray();

function generateSlides() {
  currentSlides = [];
  let numbersCopy = [...numbersArray];
  for (let i = 0; i < numberSlidesOnPage; i++) {
    currentSlides.push(
      ...numbersCopy.splice(getRndInteger(0, numbersCopy.length - 1), 1)
    );
  }
}
generateSlides();

function generateNewSlidesForOneCard() {
  nextSlides = [];
  let numbersCopy = [...numbersArray];
  for (let i = 0; i < 1; i++) {
    let newNumber = getRndInteger(0, numbersCopy.length - 1);
    while (
      currentSlides.includes(newNumber) ||
      nextSlides.includes(newNumber)
    ) {
      newNumber = getRndInteger(0, numbersCopy.length - 1);
    }
    nextSlides.push(newNumber);
  }
}

function generateNewSlidesForTwoCards() {
  nextSlides = [];
  let numbersCopy = [...numbersArray];
  for (let i = 0; i < 2; i++) {
    let newNumber = getRndInteger(0, numbersCopy.length - 1);
    while (
      currentSlides.includes(newNumber) ||
      nextSlides.includes(newNumber)
    ) {
      newNumber = getRndInteger(0, numbersCopy.length - 1);
    }
    nextSlides.push(newNumber);
  }
}

function generateNewSlidesForThreeCards() {
  nextSlides = [];
  let numbersCopy = [...numbersArray];
  for (let i = 0; i < 3; i++) {
    let newNumber = getRndInteger(0, numbersCopy.length - 1);
    while (
      currentSlides.includes(newNumber) ||
      nextSlides.includes(newNumber)
    ) {
      newNumber = getRndInteger(0, numbersCopy.length - 1);
    }
    nextSlides.push(newNumber);
  }
}

function moveCards(position) {
  if (numberSlidesOnPage === 3) {
    if (position === "left") {
      rootCss.style.setProperty("--left", `${990 + 53}px`);
    } else {
      rootCss.style.setProperty("--left", `${-(990 + 53)}px`);
    }
  } else if (numberSlidesOnPage === 2) {
    if (position === "left") {
      rootCss.style.setProperty("--left", `${580 + 44}px`);
    } else {
      rootCss.style.setProperty("--left", `${-(580 + 44)}px`);
    }
  } else {
    if (position === "left") {
      rootCss.style.setProperty("--left", `${270 + 10}px`);
    } else {
      rootCss.style.setProperty("--left", `${-(270 + 10)}px`);
    }
  }
}

function addAnimation() {
  sliderBlockLeft.classList.add("slideMove");
  sliderBlockCenter.classList.add("slideMove");
  sliderBlockRight.classList.add("slideMove");
}

function removeAnimation() {
  sliderBlockLeft.classList.remove("slideMove");
  sliderBlockCenter.classList.remove("slideMove");
  sliderBlockRight.classList.remove("slideMove");
}

function fillBlockWithPets(array, slideBlockPosition) {
  array = array.slice(0, numberSlidesOnPage);
  slideBlockPosition.innerHTML = "";
  for (let i = 0; i < array.length; i++) {
    const petCard = slideTemplate.content.cloneNode(true);
    const newSlideName = petCard.querySelector(".slider_pet-name");
    const newSlidePicture = petCard.querySelector(".slider_pic");
    newSlideName.textContent = dogsList[array[i]].name;
    newSlidePicture.style.background = `url(${dogsList[array[i]].img}`;
    slideBlockPosition.append(petCard);
  }
  lastNumberOfSlides = numberSlidesOnPage;
}

fillBlockWithPets(currentSlides, sliderBlockCenter);

leftButton.addEventListener("click", onLeftSliderClick);

rightButton.addEventListener("click", onRightSliderClick);

function onLeftSliderClick() {
  if (lastPosition === "right") {
    let temp = currentSlides;
    currentSlides = savedLastSlides;
    savedLastSlides = temp;
    savedCurrentSlides = currentSlides;

    fillBlockWithPets(currentSlides, sliderBlockLeft); //Заполнили слайды справа
    moveCards("left");
    addAnimation(); //Добавили анимацию
    setTimeout(removeAnimation, 500); //Убрали анимацию
    setTimeout(function () {
      fillBlockWithPets(currentSlides, sliderBlockCenter);
    }, 480); //Заменили блок центральный
  } else {
    savedLastSlides = currentSlides;
    if (numberSlidesOnPage === 3) {
      generateNewSlidesForThreeCards();
      savedCurrentSlides = nextSlides;
      currentSlides = nextSlides; //Переместить
    } else if (numberSlidesOnPage === 2) {
      generateNewSlidesForTwoCards();
      savedCurrentSlides = nextSlides;
      currentSlides = nextSlides; //Переместить
    } else if (numberSlidesOnPage === 1) {
      generateNewSlidesForOneCard();
      savedCurrentSlides = nextSlides;
      currentSlides = nextSlides; //Переместить
    }
    fillBlockWithPets(currentSlides, sliderBlockLeft); //Заполнили слайды справа
    moveCards("left");
    addAnimation(); //Добавили анимацию
    setTimeout(removeAnimation, 500); //Убрали анимацию
    setTimeout(function () {
      fillBlockWithPets(currentSlides, sliderBlockCenter);
    }, 480); //Заменили блок центральный
  }
  lastPosition = "left";
}

function onRightSliderClick() {
  if (lastPosition === "left") {
    let temp = currentSlides;
    currentSlides = savedLastSlides;
    savedLastSlides = temp;
    savedCurrentSlides = currentSlides;

    fillBlockWithPets(currentSlides, sliderBlockRight); //Заполнили слайды справа
    moveCards("right");
    addAnimation(); //Добавили анимацию
    setTimeout(removeAnimation, 500); //Убрали анимацию
    setTimeout(function () {
      fillBlockWithPets(currentSlides, sliderBlockCenter);
    }, 480); //Заменили блок центральный
  } else {
    savedLastSlides = currentSlides;
    if (numberSlidesOnPage === 3) {
      generateNewSlidesForThreeCards();
      savedCurrentSlides = nextSlides;
      currentSlides = nextSlides; //Переместить
    } else if (numberSlidesOnPage === 2) {
      generateNewSlidesForTwoCards();
      savedCurrentSlides = nextSlides;
      currentSlides = nextSlides; //Переместить
    } else if (numberSlidesOnPage === 1) {
      generateNewSlidesForOneCard();
      savedCurrentSlides = nextSlides;
      currentSlides = nextSlides; //Переместить
    }
    fillBlockWithPets(currentSlides, sliderBlockRight); //Заполнили слайды справа
    moveCards("right");
    addAnimation(); //Добавили анимацию
    setTimeout(removeAnimation, 500); //Убрали анимацию
    setTimeout(function () {
      fillBlockWithPets(currentSlides, sliderBlockCenter);
    }, 480); //Заменили блок центральный
  }
  lastPosition = "right";
}

window.addEventListener("resize", (event) => {
  setNumberOfSlides();
  if (lastNumberOfSlides !== numberSlidesOnPage) {
    generateSlides();
    if (numberSlidesOnPage === 3) {
      generateNewSlidesForThreeCards();
    } else if (numberSlidesOnPage === 2) {
      generateNewSlidesForTwoCards();
    } else if (numberSlidesOnPage === 1) {
      generateNewSlidesForOneCard();
    }
    fillBlockWithPets(currentSlides, sliderBlockCenter);
  }
});
