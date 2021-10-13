const popUpWindow = document.querySelector(".pop-up");

popUpWindow.addEventListener("click", closePopUpWindow);

function showPopUpWindow() {
  popUpWindow.style.right = "24px";
}

function closePopUpWindow() {
  popUpWindow.style.display = "none";
}

setTimeout(showPopUpWindow, 3000);
