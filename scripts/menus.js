// Close all menues
const underlayForMenu = document.querySelector(".underlay-for-menu");
underlayForMenu.addEventListener("click", () => {
  hideAllMenus();
});

function hideAllMenus() {
  if (hamMenu.style.left == "0px") {
    hamMenu.style.left = "-350px";
  }
  underlayForMenu.classList.add("non-displayable");
  userLogin.classList.add("non-displayable");
  catalogueMenu.classList.add("non-displayable");
  body.style.overflow = "visible";
  cart.classList.add("non-displayable");
}

// Hamburger menu
const hamMenu = document.querySelector(".hamburger-menu");
const hamMenuBtn = document.querySelector(".btn-show-hide-menu");
const closeMenu = document.querySelector(".close-menu");
const body = document.querySelector("body");

// event listeners
hamMenuBtn.addEventListener("click", () => {
  showHamMenu();
});

closeMenu.addEventListener("click", () => {
  hideHamMenu();
});

// functions
function showHamMenu() {
  hamMenu.style.left = 0;
  underlayForMenu.classList.remove("non-displayable");
  body.style.overflow = "hidden";
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

function showCatalogue() {
  catalogueMenu.classList.remove("non-displayable");
  underlayForMenu.classList.remove("non-displayable");
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

//
//
// Login pop-up window
const userLoginIcon = document.querySelector(".user.header-icon-container");
const userLogin = document.querySelector(".user-login");

userLoginIcon.addEventListener("click", showLoginMenu);

// functions
function showLoginMenu() {
  userLogin.classList.remove("non-displayable");
  underlayForMenu.classList.remove("non-displayable");
  body.style.overflow = "hidden";
}
