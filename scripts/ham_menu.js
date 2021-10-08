// Hamburger menu
const hamMenu = document.querySelector(".hamburger-menu");
const hamMenuBtn = document.querySelector(".btn-show-hide-menu");
const underlayForMenu = document.querySelector(".underlay-for-hamburger-menu");
const closeMenu = document.querySelector(".close-menu");
const body = document.querySelector("body");

// event listeners
hamMenuBtn.addEventListener("click", () => {
  showMenu();
});

underlayForMenu.addEventListener("click", () => {
  hideMenu();
});

closeMenu.addEventListener("click", () => {
  hideMenu();
});

// functions
function showMenu() {
  hamMenu.style.left = 0;
  underlayForMenu.classList.toggle("non-displayable");
  body.style.overflow = "hidden";
}

function hideMenu() {
  hamMenu.style.left = "-350px";
  underlayForMenu.classList.toggle("non-displayable");
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

//
//
// Catalogue menu
const catalogueBtn = document.querySelector(".btn-catalog");
const catalogueMenu = document.querySelector(".catalogue-menu");

catalogueBtn.addEventListener("click", showCatalogue);
underlayForMenu.addEventListener("click", hideCatalogue);

function showCatalogue() {
  catalogueMenu.classList.remove("non-displayable");
  underlayForMenu.classList.remove("non-displayable");
}

function hideCatalogue() {
  catalogueMenu.classList.add("non-displayable");
  underlayForMenu.classList.add("non-displayable");
}

// change subcolumns in catologue
const catalogueCategories = document.querySelectorAll(
  ".catalogue-column .sidebar-list li"
);
const firstCatalogueSet = document.querySelector(".first-set");
const secondCatalogueSet = document.querySelector(".second-set");

function setCatalogueEL() {
  for (item of catalogueCategories) {
    item.addEventListener("mouseover", () => {
      firstCatalogueSet.classList.toggle("non-displayable");
      secondCatalogueSet.classList.toggle("non-displayable");
    });
  }
}
setCatalogueEL();
