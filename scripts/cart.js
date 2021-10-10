const cartIcon = document.querySelector(".cart.header-icon-container");
const cart = document.querySelector(".cart-pop-up");
const cartClose = document.querySelector(".cart-pop-up .fa-times");

// event listeners
cartIcon.addEventListener("click", showCart);

// functions
function showCart() {
  cart.classList.remove("non-displayable");
  underlayForMenu.classList.remove("non-displayable");
  body.style.overflow = "hidden";
}

//
//
// Cart carousel
const btnCartCarouselPrev = document.querySelector("#btn_cart_carousel_prev");
const btnCartCarouselNext = document.querySelector("#btn_cart_carousel_next");
const allCartCarouselSubContainers = document.querySelectorAll(
  ".viewed-sub-container"
);
const closeCart = document.querySelector(".cart-close");

btnCartCarouselPrev.addEventListener("click", prevCartCarouselSubContainer);
btnCartCarouselNext.addEventListener("click", nextCartCarouselSubContainer);
closeCart.addEventListener("click", hideAllMenus);

changeButtonVisibility(0);

function nextCartCarouselSubContainer() {
  let currentCartSubContainer = getCurrentCartSubContainer();
  for (i = 0; i < allCartCarouselSubContainers.length; i++) {
    if (allCartCarouselSubContainers[i] == currentCartSubContainer) {
      if (i + 1 < allCartCarouselSubContainers.length) {
        let nextCartSubContainer = allCartCarouselSubContainers[i + 1];
        changeCartSubContainerClasses(
          currentCartSubContainer,
          nextCartSubContainer
        );
      }
      changeButtonVisibility(i + 1);
      changeDot(i, 1);
    }
  }
}

function prevCartCarouselSubContainer() {
  let currentCartSubContainer = getCurrentCartSubContainer();

  for (i = allCartCarouselSubContainers.length - 1; i >= 0; i--) {
    if (allCartCarouselSubContainers[i] == currentCartSubContainer) {
      if (i - 1 >= 0) {
        let nextCartSubContainer = allCartCarouselSubContainers[i - 1];
        changeCartSubContainerClasses(
          currentCartSubContainer,
          nextCartSubContainer
        );
      }
      changeButtonVisibility(i - 1);
      changeDot(i, -1);
    }
  }
}

function changeCartCarouselSubContainer(i) {
  let currentCartSubContainer = getCurrentCartSubContainer();
  let nextCartSubContainer = allCartCarouselSubContainers[i];
  changeCartSubContainerClasses(currentCartSubContainer, nextCartSubContainer);
  changeButtonVisibility(i);
}

function getCurrentCartSubContainer() {
  return document.querySelector(
    ".viewed-sub-container.current-cart-sub-container"
  );
}

function changeCartSubContainerClasses(
  currentCartSubContainer,
  nextCartSubContainer
) {
  currentCartSubContainer.classList.remove("current-cart-sub-container");
  currentCartSubContainer.classList.add("non-displayable");
  nextCartSubContainer.classList.remove("non-displayable");
  nextCartSubContainer.classList.add("current-cart-sub-container");
}

function changeButtonVisibility(i) {
  if (i >= allCartCarouselSubContainers.length - 1) {
    btnCartCarouselNext.classList.add("non-displayable");
  } else {
    btnCartCarouselNext.classList.remove("non-displayable");
  }

  if (i <= 0) {
    btnCartCarouselPrev.classList.add("non-displayable");
  } else {
    btnCartCarouselPrev.classList.remove("non-displayable");
  }
}

// Active dot
const allCartCarouselDots = document.querySelectorAll(".dot");

allCartCarouselDots.forEach((element) => {
  element.addEventListener("click", () => changeDotOnClick(element));
});

function changeDotOnClick(elem) {
  for (i = 0; i < allCartCarouselDots.length; i++) {
    if (allCartCarouselDots[i] == elem) {
      changeDot(i, 0);
      changeCartCarouselSubContainer(i);
    }
  }
}

function changeDot(i, num) {
  let currentCartCarouselDot = document.querySelector(".dot-active");
  currentCartCarouselDot.classList.remove("dot-active");
  allCartCarouselDots[i + num].classList.add("dot-active");
}
