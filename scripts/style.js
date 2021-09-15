const imageList = document.querySelectorAll(".carousel_photo");
const imageListLength = imageList.length - 1;
const btnNext = document.querySelector(".btn_carousel_next");
const btnPrev = document.querySelector(".btn_carousel_prev");
// timer for carousel animation
let inUse = false;
// set default sliders positions
let prevSlider = 0;
let activeSlider = 1;
let nextSlider = 2;

// vars for css classes
const prevImage = "carousel_photo_prev";
const nextImage = "carousel_photo_next";
const activeImage = "carousel_photo_active";
const carouselPhoto = "carousel_photo";
const nonDisplayable = "non-displayable";

// set eventListeners
btnNext.addEventListener("click", nextImg);
btnPrev.addEventListener("click", prevImg);

// set initial classes
function setInitialClasses() {
  imageList[prevSlider].classList.add(prevImage);
  imageList[activeSlider].classList.add(activeImage);
  imageList[nextSlider].classList.add(nextImage);

  showHideButtons();
}

// show next slider
function nextImg() {
  if (!inUse) {
    activeSlider++;
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

// show previous slider
function prevImg() {
  if (!inUse) {
    activeSlider--;
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

// show/hide carousel buttons
function showHideButtons() {
  // if it is first slide
  if (activeSlider == 1) {
    btnPrev.classList.toggle(nonDisplayable);
  } else if (btnPrev.classList.contains(nonDisplayable)) {
    btnPrev.classList.toggle(nonDisplayable);
  }

  // if it is last slide
  if (activeSlider == imageListLength) {
    btnNext.classList.toggle(nonDisplayable);
  } else if (btnNext.classList.contains(nonDisplayable)) {
    btnNext.classList.toggle(nonDisplayable);
  }
}

// set in use for an animation time
function setInUse() {
  inUse = true;
  setTimeout(function () {
    inUse = false;
  }, 700);
}

// auto slide
function autoSlide() {
  // true -> forward, false <- backward
  let direction = true;
  setInterval(function () {
    if (direction && btnNext.classList.contains(nonDisplayable)) {
      direction = false;
    } else if (!direction && btnPrev.classList.contains(nonDisplayable)) {
      direction = true;
    }
    if (!inUse) {
      if (direction && !btnNext.classList.contains(nonDisplayable)) {
        nextImg();
      } else if (!direction && !btnPrev.classList.contains(nonDisplayable)) {
        prevImg();
      }

      setInUse();
    }
  }, 4000);
}

// start autosliding
autoSlide();
