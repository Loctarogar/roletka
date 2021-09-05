const carouselBtnPrev = document.getElementById("btn_carousel_prev");
const carouselBtnNext = document.getElementById("btn_carousel_next");
const carouselImages = document.querySelectorAll(".carousel img");

let currentSlider = 0;

carouselBtnNext.addEventListener("click", nextSlide);
carouselBtnPrev.addEventListener("click", prevSlide);

function nextSlide() {
  classToggle();
  if (carouselImages[currentSlider + 1]) {
    currentSlider = currentSlider + 1;
    classToggle();
  }

  carouselBtnVisibility();
}

function prevSlide() {
  classToggle();
  if (carouselImages[currentSlider - 1]) {
    currentSlider = currentSlider - 1;
    classToggle();
  }

  carouselBtnVisibility();
}

function classToggle() {
  carouselImages[currentSlider].classList.toggle("non-displayable");
}

function carouselBtnVisibility() {
  console.log(currentSlider);
  if (currentSlider <= 0) {
    carouselBtnPrev.classList.add("non-displayable");
  } else {
    carouselBtnPrev.classList.remove("non-displayable");
  }
  if (currentSlider + 1 == carouselImages.length) {
    carouselBtnNext.classList.add("non-displayable");
  } else {
    carouselBtnNext.classList.remove("non-displayable");
  }
}
