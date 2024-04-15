const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");

const popupProfile = document.querySelector("#popup__profile");
const popupNameProfile = document.querySelector("#popup__name-profile");
const popupAboutProfile = document.querySelector("#popup__about-profile");
const confirmButtonProfile = document.querySelector("#btn-submit-profile");
const cancelButtonProfile = document.querySelector("#btn-close-profile");
const editButtonProfile = document.querySelector(".profile__edit-button");

const popupOverlay = document.querySelector(".overlay");

const popupPlace = document.querySelector("#popup__place");
const popupNamePlace = document.querySelector("#popup__name-place");
const popupAboutPlace = document.querySelector("#popup__about-place");
const addButtonPlace = document.querySelector(".profile__add-button");
const cancelButtonPlace = document.querySelector("#btn-close-place");
const confirmButtonPlace = document.querySelector("#btn-submit-place");

const cardContainer = document.querySelector(".elements");

function showPopUpProfile() {
  popupProfile.classList.add("popup_opened");
  popupOverlay.classList.add("overlay_opened");
  popupNameProfile.value = document.querySelector(".profile__name").textContent;
  popupAboutProfile.value = document.querySelector(
    ".profile__description"
  ).textContent;
}

function closePopUpProfile() {
  popupProfile.classList.remove("popup_opened");
  popupOverlay.classList.remove("overlay_opened");
}

function confirmPopUpProfile() {
  if (popupNameProfile.value !== "" && popupAboutProfile.value !== "") {
    profileName.innerHTML = popupNameProfile.value;
    profileDescription.innerHTML = popupAboutProfile.value;
    closePopUpProfile();
  }
}

function showPopUpPlace() {
  popupPlace.classList.add("popup_opened");
  popupOverlay.classList.add("overlay_opened");
}

function closePopUpPlace() {
  popupPlace.classList.remove("popup_opened");
  popupOverlay.classList.remove("overlay_opened");
}

function confirmPopUpPlace() {
  if (popupAboutPlace.value !== "" && popupNamePlace.value !== "") {
    cardContainer.insertAdjacentHTML(
      "beforeend",
      `
          <div class="elements__card">
            <div class="elements__card-photo">
            <img
                src=${popupAboutPlace.value}
                alt=${popupNamePlace.value}
                class="elements__card-photo-imagen"
                />
              <button class="elements__card-btn-trash"></button>
            </div>
            <div class="elements__card-info">
              <p class="elements__card-title">${popupNamePlace.value}</p>
              <button class="elements__card-btn-hearth"></button>
            </div>
          </div>
      `
    );
    popupNamePlace.value = "";
    popupAboutPlace.value = "";
    closePopUpPlace();
  }
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

const likeButton = document.querySelector(".elements__card-btn-hearth");

function toggleLike() {
  likeButton.classList.toggle("elements__card-btn-hearth_active");
}

likeButton.addEventListener("click", toggleLike);
