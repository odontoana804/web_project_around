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
const popupUrlPlace = document.querySelector("#popup__url-place");
const addButtonPlace = document.querySelector(".profile__add-button");
const cancelButtonPlace = document.querySelector("#btn-close-place");
const confirmButtonPlace = document.querySelector("#btn-submit-place");

const cardContainer = document.querySelector(".elements");

//muestra las ventanas popUps
function showPopUp(popup, overlay) {
  popup.classList.add("popup_opened");
  overlay.classList.add("overlay_opened");
}

//cierra las ventanas popUps
function closePopUp(popup, overlay) {
  popup.classList.remove("popup_opened");
  overlay.classList.remove("overlay_opened");
}

//edita los campos del nombre del perfil y la profesión
function editProfile(name, about) {
  profileName.textContent = name;
  profileDescription.textContent = about;
}

//agrega el código HTML de las tarjetas de lugares
function addPlace(name, url) {
  cardContainer.insertAdjacentHTML(
    "beforeend",
    `
          <div class="elements__card">
            <div class="elements__card-photo">
            <img
                src=${url}
                alt=${name}
                class="elements__card-photo-imagen"
                />
              <button class="elements__card-btn-trash"></button>
            </div>
            <div class="elements__card-info">
              <p class="elements__card-title">${name}</p>
              <button class="elements__card-btn-hearth"></button>
            </div>
          </div>
      `
  );
}

//abre la ventana popup Profile al dar click en el icono del lápiz (editar)
editButtonProfile.addEventListener("click", () => {
  showPopUp(popupProfile, popupOverlay);
  popupNameProfile.value = document.querySelector(".profile__name").textContent;
  popupAboutProfile.value = document.querySelector(
    ".profile__description"
  ).textContent;
});

//cierra la ventana popUp Profile al dar click en el icono de X (cerrar)
cancelButtonProfile.addEventListener("click", () =>
  closePopUp(popupProfile, popupOverlay)
);

//cambia el contenido de los campos de nombre y acercaDe del Profile al dar click en el botón Guardar
confirmButtonProfile.addEventListener("click", () => {
  if (popupNameProfile.value !== "" && popupAboutProfile.value !== "") {
    editProfile(popupNameProfile.value, popupAboutProfile.value);
    closePopUp(popupProfile, popupOverlay);
  }
});

//abre la ventana popup Place al dar click en el icono del + (agregar)
addButtonPlace.addEventListener("click", () => {
  showPopUp(popupPlace, popupOverlay);
  popupNamePlace.value = "";
  popupUrlPlace.value = "";
});

//cierra la ventana popUp Place al dar click en el icono de X (cerrar)
cancelButtonPlace.addEventListener("click", () =>
  closePopUp(popupPlace, popupOverlay)
);

//agrega una nueva tarjeta a lugares al daer click en el botón Crear
confirmButtonPlace.addEventListener("click", () => {
  if (popupUrlPlace.value !== "" && popupNamePlace.value !== "") {
    addPlace(popupNamePlace.value, popupUrlPlace.value);
    closePopUp(popupPlace, popupOverlay);
  }
});

//------------------------------------------------------------------
// Intento de código para botón de Like, solo funciona en las tarjetas ya creadas, no en las nuevas

function toggleLike() {
  const likeButtons = document.querySelectorAll(".elements__card-btn-hearth");
  for (let button of likeButtons) {
    button.addEventListener("click", () => {
      button.classList.toggle("elements__card-btn-hearth_active");
    });
  }
}

toggleLike();


/* function toggleLike() {
  const likeButtons = document.querySelectorAll(".elements__card-btn-hearth");
  likeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      button.classList.toggle("elements__card-btn-hearth_active");
    });
  });
}

toggleLike();
 */