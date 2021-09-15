const imageList = document.querySelectorAll(".carousel_photo");
const imageListLength = imageList.length - 1;
const btnNext = document.querySelector(".btn_carousel_next");
const btnPrev = document.querySelector(".btn_carousel_prev");
// timer for carousel animation
let inUse = false;
// console.log(imageList);

let activeSlider = 1;
let prevSlider = 0;
let nextSlider = 2;

// vars for classes
const prevImage = "carousel_photo_prev";
const nextImage = "carousel_photo_next";
const activeImage = "carousel_photo_active";
const carouselPhoto = "carousel_photo";

// eventListeners
btnNext.addEventListener("click", nextImg);
btnPrev.addEventListener("click", prevImg);

// set initial classes
function setInitialClasses() {
  imageList[prevSlider].classList.add("carousel_photo_prev");
  imageList[activeSlider].classList.add("carousel_photo_active");
  imageList[nextSlider].classList.add("carousel_photo_next");
  showHideButtons();
}

// functions for eventListeners
// next slider
function nextImg() {
  if (!inUse) {
    activeSlider++;
    console.log(`nextImg : ${activeSlider}`);
    if (activeSlider < imageListLength) {
      prevSlider = activeSlider - 1;
      nextSlider = activeSlider + 1;
    } else {
      activeSlider = imageListLength;
      prevSlider = imageListLength - 1;
      nextSlider = 0;
    }

    setInUse();
    setClasses();
    showHideButtons();
  }
}

function prevImg() {
  if (!inUse) {
    activeSlider--;
    console.log(`prevImg : ${activeSlider}`);
    if (activeSlider > 1) {
      nextSlider = activeSlider + 1;
      prevSlider = activeSlider - 1;
    } else {
      activeSlider = 1;
      nextSlider = activeSlider + 1;
      prevSlider = 0;
    }

    setInUse();
    setClasses();
    showHideButtons();
  }
}

// set classes for images and buttons
function setClasses() {
  imageList[activeSlider].className = `${carouselPhoto} ${activeImage}`;
  imageList[prevSlider].className = `${carouselPhoto} ${prevImage}`;
  imageList[nextSlider].className = `${carouselPhoto} ${nextImage}`;
}

function showHideButtons() {
  if (activeSlider == 1) {
    btnPrev.classList.toggle("non-displayable");
  } else if (btnPrev.classList.contains("non-displayable")) {
    btnPrev.classList.toggle("non-displayable");
  }

  if (activeSlider == imageListLength) {
    btnNext.classList.toggle("non-displayable");
  } else if (btnNext.classList.contains("non-displayable")) {
    btnNext.classList.toggle("non-displayable");
  }
}

// set in use for an animation time
function setInUse() {
  inUse = true;
  setTimeout(function () {
    inUse = false;
  }, 700);
}
