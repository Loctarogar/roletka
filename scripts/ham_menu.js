const ham_menu = document.querySelector(".hamburger-menu");
const ham_menu_btn = document.querySelector(".btn-show-hide-menu");
const underlay_for_ham_menu = document.querySelector(
  ".underlay-for-hamburger-menu"
);
const closeMenu = document.querySelector(".close-menu");
const body = document.querySelector("body");

// event listeners
ham_menu_btn.addEventListener("click", () => {
  showMenu();
});

underlay_for_ham_menu.addEventListener("click", () => {
  hideMenu();
});

closeMenu.addEventListener("click", () => {
  hideMenu();
});

// functions
function showMenu() {
  ham_menu.style.left = 0;
  underlay_for_ham_menu.classList.toggle("non-displayable");
  body.style.overflow = "hidden";
}

function hideMenu() {
  ham_menu.style.left = "-350px";
  underlay_for_ham_menu.classList.toggle("non-displayable");
  body.style.overflow = "visible";
}

// dropdown menu
const hamServices = document.querySelector(".ham-menu-services");
const hamPartners = document.querySelector(".ham-menu-partners");

hamServices.addEventListener("click", () => toggleClass(hamServices));
hamPartners.addEventListener("click", () => toggleClass(hamPartners));

function toggleClass(elem) {
  const ul = elem.querySelector("ul");
  const i = elem.querySelector("i");
  ul.classList.toggle("ham-dropdown-hiden");
  i.classList.toggle("rotate-180");
}
