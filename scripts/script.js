let editButton = document.querySelector(".profile__edit-button");
let cancelButton = document.querySelector(".popup___btn-cerrar");
let popupProfile = document.querySelector("#popup__profile");
let confirmButton = document.querySelector(".popup__btn-guardar");
let popupName = document.querySelector(".popup__name");
let profileName = document.querySelector(".profile__name");
let popupAbout = document.querySelector(".popup__about");
let profileDescription = document.querySelector(".profile__description");
let popupOverlay = document.querySelector(".popup__overlay");

function showPopUp() {
  popupProfile.classList.add("popup_opened");
  popupOverlay.classList.add("popup__overlay_opened");
  popupName.value = document.querySelector(".profile__name").textContent;
  popupAbout.value = document.querySelector(
    ".profile__description"
  ).textContent;
}

function closePopUp() {
  popupProfile.classList.remove("popup_opened");
  popupOverlay.classList.remove("popup__overlay_opened");
}

function confirmPopUp() {
  profileName.innerHTML = popupName.value;
  if (popupName.value == "") {
    profileName.innerHTML = "Actualizar nombre";
  }
  profileDescription.innerHTML = popupAbout.value;
  if (popupAbout.value == "") {
    profileDescription.innerHTML = "Actualizar profesión";
  }
  closePopUp();
}

editButton.addEventListener("click", showPopUp);

cancelButton.addEventListener("click", closePopUp);

confirmButton.addEventListener("click", confirmPopUp);
