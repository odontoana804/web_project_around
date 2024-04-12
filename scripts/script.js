const editButtonProfile = document.querySelector(".profile__edit-button");
const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");
const popupProfile = document.querySelector("#popup__profile");
const cancelButtonProfile = document.querySelector("#btn-close-profile");
const confirmButtonProfile = document.querySelector("#btn-submit-profile");

const popupName = document.querySelector(".popup__name");
const popupAbout = document.querySelector(".popup__about");
const popupOverlay = document.querySelector(".popup__overlay");

const popupPlace = document.querySelector("#popup__place");
const addButtonPlace = document.querySelector(".elements__add-button");
const cancelButtonPlace = document.querySelector("#btn-close-place");
const confirmButtonPlace = document.querySelector("#btn-submit-place");

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

//------------------------------------------------------------------
// Intento de código para botón de Like
// Solo funciona en la primera tarjeta

const likeButton = document.querySelector(".elements__card__btn-hearth");

function toggleLike() {
  likeButton.classList.toggle("elements__card__btn-hearth_active");
}

likeButton.addEventListener("click", toggleLike);
