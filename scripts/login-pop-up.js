const userLoginIcon = document.querySelector(".user.header-icon-container");
const userLogin = document.querySelector(".user-login");

userLoginIcon.addEventListener("click", showMenu);

// functions
function showMenu() {
  userLogin.classList.toggle("non-displayable");
  underlayForMenu.classList.toggle("non-displayable");
  body.style.overflow = "hidden";
}

function hideMenu() {
  userLogin.classList.toggle("non-displayable");
  body.style.overflow = "visible";
}
