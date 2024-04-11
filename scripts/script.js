let editButtonProfile = document.querySelector(".profile__edit-button");
let profileName = document.querySelector(".profile__name");
let profileDescription = document.querySelector(".profile__description");
let popupProfile = document.querySelector("#popup__profile");
let cancelButtonProfile = document.querySelector("#btn-close-profile");
let confirmButtonProfile = document.querySelector("#btn-submit-profile");

let popupName = document.querySelector(".popup__name");
let popupAbout = document.querySelector(".popup__about");
let popupOverlay = document.querySelector(".popup__overlay");

let popupPlace = document.querySelector("#popup__place");
let addButtonPlace = document.querySelector(".elements__add-button");
let cancelButtonPlace = document.querySelector("#btn-close-place")
let confirmButtonPlace = document.querySelector("#btn-submit-place")

function showPopUpProfile() {
  popupProfile.classList.add("popup_opened");
  popupOverlay.classList.add("popup__overlay_opened");
  popupName.value = document.querySelector(".profile__name").textContent;
  popupAbout.value = document.querySelector(
    ".profile__description"
  ).textContent;
}

function closePopUpProfile() {
  popupProfile.classList.remove("popup_opened");
  popupOverlay.classList.remove("popup__overlay_opened");
}

function confirmPopUpProfile() {
  profileName.innerHTML = popupName.value;
  if (popupName.value == "") {
    profileName.innerHTML = "Actualizar nombre";
  }
  profileDescription.innerHTML = popupAbout.value;
  if (popupAbout.value == "") {
    profileDescription.innerHTML = "Actualizar profesión";
  }
  closePopUpProfile();
}

function showPopUpPlace() {
  popupPlace.classList.add("popup_opened");
  popupOverlay.classList.add("popup__overlay_opened");
}

function closePopUpPlace() {
  popupPlace.classList.remove("popup_opened");
  popupOverlay.classList.remove("popup__overlay_opened");
}

function confirmPopUpPlace() {
  closePopUpPlace();
}


editButtonProfile.addEventListener("click", showPopUpProfile);

cancelButtonProfile.addEventListener("click", closePopUpProfile);

confirmButtonProfile.addEventListener("click", confirmPopUpProfile);

addButtonPlace.addEventListener("click", showPopUpPlace);

cancelButtonPlace.addEventListener("click", closePopUpPlace);

confirmButtonPlace.addEventListener("click", confirmPopUpPlace);
