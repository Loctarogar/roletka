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
const currentCartSubContainer = document.querySelector(
  ".viewed-sub-container.current-cart-sub-container"
);

btnCartCarouselPrev.addEventListener("click", prevCartCarouselSubContainer);
btnCartCarouselNext.addEventListener("click", nextCartCarouselSubContainer);

changeButtonVisibility(0);

function nextCartCarouselSubContainer() {
  let currentCartSubContainer = getCurrentCartSubContainer();

  console.log("in next");
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
    }
  }
}

function prevCartCarouselSubContainer() {
  console.log("in prev");
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
    }
  }
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
  console.log("in change buton - " + i);
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
