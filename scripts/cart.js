const cartIcon = document.querySelector(".cart.header-icon-container");
const cart = document.querySelector(".cart-pop-up");
const cartClose = document.querySelector(".cart-pop-up .fa-times");
// console.log(cart);
cartIcon.addEventListener("click", showCart);

function showCart() {
  cart.classList.remove("non-displayable");
  console.log(underlayForMenu);
  underlayForMenu.classList.remove("non-displayable");
}
