const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");

const popupProfile = document.querySelector("#popup__profile");
const popupNameProfile = popupProfile.querySelector("#popup__name-profile");
const popupAboutProfile = popupProfile.querySelector("#popup__about-profile");
const confirmButtonProfile = popupProfile.querySelector("#btn-submit-profile");
const cancelButtonProfile = popupProfile.querySelector("#btn-close-profile");
const editButtonProfile = document.querySelector(".profile__edit-button");

const popupOverlay = document.querySelector(".overlay");

const popupPlace = document.querySelector("#popup__place");
const popupNamePlace = popupPlace.querySelector("#popup__name-place");
const popupUrlPlace = popupPlace.querySelector("#popup__url-place");
const addButtonPlace = document.querySelector(".profile__add-button");
const cancelButtonPlace = popupPlace.querySelector("#btn-close-place");
const confirmButtonPlace = popupPlace.querySelector("#btn-submit-place");

const popupImage = document.querySelector("#popup__image");

const cardsContainer = document.querySelector(".elements");

const initialCards = [
  {
    name: "Estatua de la libertad",
    url: "./images/estatua-de-la-libertad.jpg",
  },
  {
    name: "Golden Gate Bridge",
    url: "./images/Golden-Gate-Bridge.jpg",
  },
  {
    name: "Cataratas del Niágara",
    url: "./images/Cataratas-del-niagara.jpg",
  },
  {
    name: "Monte Rushmore",
    url: "./images/monte-rushmore.jpg",
  },
  {
    name: "Space Neddle",
    url: "./images/space-neddle.jpg",
  },
  {
    name: "Empire State Building",
    url: "./images/empire-state-building.jpg",
  },
];

//carga las tarjetas creadas desde el arreglo
function loadCards() {
  let createdCards = "";
  for (let initialCard of initialCards) {
    createdCards += addPlace(initialCard.name, initialCard.url);
  }
  cardsContainer.content = createdCards;
}

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

//muesta la ventana de visaulización de las imagenes
function showPopUpImage(popup, overlay) {
  popup.classList.add("img-popup_opened");
  overlay.classList.add("overlay_opened");
}

//cierre la ventana de visualización de las imagenes
function closePopUpImage(popup, overlay) {
  popup.classList.remove("img-popup_opened");
  overlay.classList.remove("overlay_opened");
}

//revisar esta función
function deleteCard() {
  const trashButtons = document.querySelectorAll(".elements__card-btn-trash");
  for (const button of trashButtons) {
    button.addEventListener("click", (id) => {
      let indiceEliminar = initialCards.findIndex(
        (initialCard) => initialCard.id === id
      );
      initialCards.splice(indiceEliminar, 1);
      const cardItem = button.closest(".elements__card");
      cardItem.remove();
    });
  }
}

//función para agregar tarjetas de lugares
function addPlace(name, url) {
  //creación de tarjetas clonando contenido de template
  const cardTemplate = document.querySelector("#card-template").content;
  const newCard = cardTemplate.querySelector(".elements__card").cloneNode(true);
  newCard.querySelector(".elements__card-photo-imagen").src = url;
  newCard.querySelector(".elements__card-photo-imagen").alt = name;
  newCard.querySelector(".elements__card-title").textContent = name;
  cardsContainer.prepend(newCard);

  //llamada a la función para eliminar una tarjeta
  deleteCard();

  //codigo para botón de like con event.target
  const likeButton = newCard.querySelector(".elements__card-btn-hearth");
  likeButton.addEventListener("click", (evt) => {
    evt.target.classList.toggle("elements__card-btn-hearth_active");
  });

  //código para agregar la función de la previsualización de imagen
  const imagePreview = newCard.querySelector(".elements__card-photo-imagen");
  imagePreview.addEventListener("click", () => {
    showPopUpImage(popupImage, popupOverlay);
    const imageValue = popupImage.querySelector(".img-popup__preview");
    imageValue.src = url;
    const imageTitle = popupImage.querySelector(".img-popup__title");
    imageTitle.textContent = name;
  });

  //código para cerrar el popup de previsualización de imagen con el cancel buton
  const cancelButtonPopupImage = popupImage.querySelector("#btn-close-image");
  cancelButtonPopupImage.addEventListener("click", () =>
    closePopUpImage(popupImage, popupOverlay)
  );
}

//llamada a la función para cargar las tarjetas ya creadas
loadCards();

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
