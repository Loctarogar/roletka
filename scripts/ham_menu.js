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

hamServices
  .querySelector("i")
  .addEventListener("click", () => toggleClass(hamServices));
hamPartners
  .querySelector("i")
  .addEventListener("click", () => toggleClass(hamPartners));

function toggleClass(elem) {
  const ul = elem.querySelector("ul");
  const i = elem.querySelector("i");
  ul.classList.toggle("ham-dropdown-hiden");
  i.classList.toggle("rotate-180");
}

// catalogue menu
const catalogueBtn = document.querySelector(".btn-catalog");
const catalogueMenu = document.querySelector(".catalogue-menu");
const underlayForMenu = document.querySelector(".underlay-for-hamburger-menu");

catalogueBtn.addEventListener("click", showCatalogue);
underlayForMenu.addEventListener("click", hideCatalogue);

// !!! toggle does not work idk why
// catalogueBtn.addEventListener("click", handleCatalogue);
// underlayForMenu.addEventListener("click", handleCatalogue);

function showCatalogue() {
  catalogueMenu.classList.remove("non-displayable");
  underlay_for_ham_menu.classList.remove("non-displayable");
}

function hideCatalogue() {
  catalogueMenu.classList.add("non-displayable");
  underlay_for_ham_menu.classList.add("non-displayable");
}

// function handleCatalogue() {
//   underlay_for_ham_menu.classList.toggle("non-displayable");
//   catalogueMenu.classList.toggle("non-displayable");
// }

// change subcolumns in catologue
const catalogueCategories = document.querySelectorAll(
  ".catalogue-column .sidebar-list li"
);
const firstCatalogueSet = document.querySelector(".first-set");
const secondCatalogueSet = document.querySelector(".second-set");

console.log(firstCatalogueSet);
console.log(secondCatalogueSet);

function setCatalogueEL() {
  for (item of catalogueCategories) {
    item.addEventListener("mouseover", () => {
      firstCatalogueSet.classList.toggle("non-displayable");
      secondCatalogueSet.classList.toggle("non-displayable");
    });
    // console.log(item);
  }
}
setCatalogueEL();
