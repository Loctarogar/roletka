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

function nextCartCarouselSubContainer() {
  let currentCartSubContainer = document.querySelector(
    ".viewed-sub-container.current-cart-sub-container"
  );

  for (i = 0; i < allCartCarouselSubContainers.length; i++) {
    if (allCartCarouselSubContainers[i] == currentCartSubContainer) {
      if (i + 1 < allCartCarouselSubContainers.length) {
        let nextCartSubContainer = allCartCarouselSubContainers[i + 1];
        currentCartSubContainer.classList.remove("current-cart-sub-container");
        currentCartSubContainer.classList.add("non-displayable");
        nextCartSubContainer.classList.remove("non-displayable");
        nextCartSubContainer.classList.add("current-cart-sub-container");
      } else {
        btnCartCarouselNext.classList.add("non-displayable");
      }
    }
  }
}

function prevCartCarouselSubContainer() {}
