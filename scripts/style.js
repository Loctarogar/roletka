const carouselBtnPrev = document.getElementById("btn_carousel_prev");
const carouselBtnNext = document.getElementById("btn_carousel_next");
const carouselImages = document.querySelectorAll(".carousel img");

let currentSlider = 0;
console.log(currentSlider);
console.log(carouselImages.length);

carouselBtnNext.addEventListener("click", nextSlide);
carouselBtnPrev.addEventListener("click", prevSlide);

function nextSlide() {
  carouselImages[currentSlider].classList.toggle("current");
  carouselImages[currentSlider].classList.toggle("non-displayable");
  if (carouselImages[currentSlider + 1]) {
    console.log(carouselImages[currentSlider + 1]);
    currentSlider = currentSlider + 1;
    console.log(currentSlider);
    carouselImages[currentSlider].classList.toggle("current");
    carouselImages[currentSlider].classList.toggle("non-displayable");
  }

  if (currentSlider + 1 == carouselImages.length) {
    carouselBtnNext.classList.toggle("non-displayable");
  }
}

function prevSlide() {
  carouselImages[currentSlider].classList.toggle("current");
  carouselImages[currentSlider].classList.toggle("non-displayable");
  currentSlider = currentSlider - 1;
  carouselImages[currentSlider].classList.toggle("current");
  carouselImages[currentSlider].classList.toggle("non-displayable");
  console.log(currentSlider);

  if (currentSlider == 0) {
    carouselBtnNext.classList.toggle("non-displayable");
  }
}
