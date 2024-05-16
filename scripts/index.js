import { resetValidation } from "./validate.js";

//elementos que se editan en la seccion de profile
const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");

//elementos de el popUp de edición de perfil
const popupProfile = document.querySelector("#popup__profile");
const popupNameProfile = popupProfile.querySelector("#name-profile");
const popupAboutProfile = popupProfile.querySelector("#about-profile");
const confirmButtonProfile = popupProfile.querySelector("#btn-submit-profile");
const cancelButtonProfile = popupProfile.querySelector("#btn-close-profile");
const editButtonProfile = document.querySelector(".profile__edit-button");

//elementos de el popUp de agregar nuevas tarjetas de lugar
const popupPlace = document.querySelector("#popup__place");
const popupNamePlace = popupPlace.querySelector("#name-place");
const popupUrlPlace = popupPlace.querySelector("#url-place");
const addButtonPlace = document.querySelector(".profile__add-button");
const cancelButtonPlace = popupPlace.querySelector("#btn-close-place");
const confirmButtonPlace = popupPlace.querySelector("#btn-submit-place");

//capa fondo semitrasparente de los popUps
const popupOverlay = document.querySelector(".overlay");

//elementos de el popUp de visualización de imagen
const popupImage = document.querySelector("#popup__image");

//elemento donde se muestran las tarjetas
const cardsContainer = document.querySelector(".elements");

//arreglo inicial de tarjetas
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

//Función para crear Id únicos en las tarjetas
function createUniqueId () {
  return Math.floor(Math.random() * new Date().getTime() * 3).toString();
};

//Función para cargar las tarjetas creadas desde el arreglo inicial
function loadCards() {
  let createdCards = "";
  for (let initialCard of initialCards) {
    initialCard.id = createUniqueId(); //crea un Id único para las tarjetas creadas desde el arreglo inicial
    createdCards += addPlace(initialCard.name, initialCard.url, initialCard.id);
  };
  cardsContainer.content = createdCards;
};

//Función para mostrar el popUp de agregar nuevas tarjetas y edición del perfil
function showPopUp(popup, overlay) {
  popup.classList.add("popup_opened");
  overlay.classList.add("overlay_opened");
  document.addEventListener("keydown", closeAnyPopUpEscapeKey);
};

//Función para ocultar el popUp de agregar nuevas tarjetas y edición del perfil
function closePopUp(popup, overlay) {
  popup.classList.remove("popup_opened");
  overlay.classList.remove("overlay_opened");
  document.removeEventListener("keydown", closeAnyPopUpEscapeKey);
  resetValidation({
    inputSelector: ".popup__input",
    errorSelector: ".popup__input-error",
    inputErrorClass: "popup__input_type_error",
    errorClass: "popup__input-error_active"
  });
};

//Función para mostrar el popUp de la visualización de la imagen
function showPopUpImage(popup, overlay) {
  popup.classList.add("img-popup_opened");
  overlay.classList.add("overlay_opened");
  document.addEventListener("keydown", closeAnyPopUpEscapeKey);
};

//Función para ocultar el popUp de la visualización de la imagen
function closePopUpImage(popup, overlay) {
  popup.classList.remove("img-popup_opened");
  overlay.classList.remove("overlay_opened");
  document.removeEventListener("keydown", closeAnyPopUpEscapeKey);
};

//Función para cerrar las ventanas popUps
function closeAnyPopUp () {
  closePopUp(popupProfile, popupOverlay);
  closePopUp(popupPlace, popupOverlay);
  closePopUpImage(popupImage, popupOverlay);
};

//Función para cerrar las ventanas popUps con la tecla Escape
function closeAnyPopUpEscapeKey (evt) {
  if (evt.key === "Escape") {
    closeAnyPopUp ();
  }
};

//Función para editar los campos del nombre del perfil y la profesión
function editProfile(name, about) {
  profileName.textContent = name;
  profileDescription.textContent = about;
};

//Función para agregar tarjetas de lugares
function addPlace(name, url, id) {
  //creación de tarjetas clonando contenido de template
  const cardTemplate = document.querySelector("#card-template").content;
  const newCard = cardTemplate.querySelector(".elements__card").cloneNode(true);
  newCard.querySelector(".elements__card-photo-imagen").src = url;
  newCard.querySelector(".elements__card-photo-imagen").alt = name;
  newCard.querySelector(".elements__card-photo-imagen").setAttribute("id", id )
  newCard.querySelector(".elements__card-title").textContent = name;
  cardsContainer.prepend(newCard);
};

//llamada a la función para cargar las tarjetas ya creadas en el arrgelo inicial
loadCards();

//abre la ventana popup Profile al dar click en el icono del lápiz (editar)
editButtonProfile.addEventListener("click", () => {
  showPopUp(popupProfile, popupOverlay);
  popupNameProfile.value = document.querySelector(".profile__name").textContent;
  popupAboutProfile.value = document.querySelector(".profile__description").textContent;
  confirmButtonProfile.classList.add("popup__btn-submit_inactive");
  confirmButtonProfile.setAttribute("disabled", true);
});

//cierra la ventana popUp Profile al dar click en el icono de X (cerrar)
cancelButtonProfile.addEventListener("click", () => {
  closePopUp(popupProfile, popupOverlay);
});

//cambia el contenido de los campos de nombre y acercaDe del Profile al dar click en el botón Guardar
confirmButtonProfile.addEventListener("click", () => {
  if (popupNameProfile.value !== "" && popupAboutProfile.value !== "") {
    editProfile(popupNameProfile.value, popupAboutProfile.value);
    closePopUp(popupProfile, popupOverlay);
  };
});

//abre la ventana popup Place al dar click en el icono del + (agregar)
addButtonPlace.addEventListener("click", () => {
  showPopUp(popupPlace, popupOverlay);
  popupNamePlace.value = "";
  popupUrlPlace.value = "";
  confirmButtonPlace.classList.add("popup__btn-submit_inactive");
});

//cierra la ventana popUp Place al dar click en el icono de X (cerrar)
cancelButtonPlace.addEventListener("click", () =>{
  closePopUp(popupPlace, popupOverlay);
  confirmButtonPlace.classList.add("popup__btn-submit_inactive");
});

//agrega una nueva tarjeta a lugares al daer click en el botón Crear
confirmButtonPlace.addEventListener("click", () => {
  if (popupUrlPlace.value !== "" && popupNamePlace.value !== "") {
    const idNewPLace = createUniqueId(); //crea un Id único para las nuevas tarjetas
    addPlace(popupNamePlace.value, popupUrlPlace.value, idNewPLace);
    initialCards.push({ name: popupNamePlace.value, url: popupUrlPlace.value, id : idNewPLace });
    closePopUp(popupPlace, popupOverlay);
  };
});

//código para botón de like con event.target y agregar la función de la previsualización de imagen y eliminar un elemento del DOM y del arreglo initialCards
cardsContainer.addEventListener( "click", (evt) => {
  if (evt.target.classList.contains("elements__card-btn-hearth")) {
    evt.target.classList.toggle("elements__card-btn-hearth_active");
  };
  if (evt.target.classList.contains("elements__card-photo-imagen")){
    showPopUpImage(popupImage, popupOverlay);
    const imageValue = popupImage.querySelector(".img-popup__preview");
    imageValue.src = evt.target.currentSrc;
    imageValue.alt = evt.target.alt;
    const imageTitle = popupImage.querySelector(".img-popup__title");
    imageTitle.textContent = evt.target.alt;
  };
  if (evt.target.classList.contains("elements__card-btn-trash")){
    evt.target.closest(".elements__card").remove();
    let indiceEliminar = initialCards.findIndex(
      (initialCard) => initialCard.id === evt.target.previousElementSibling.id
    );
    initialCards.splice(indiceEliminar, 1);
  };
});

//cierra el popup de previsualización de imagen al dar click en el icono de X (cerrar)
popupImage.addEventListener( "click", (evt) => {
  if (evt.target.classList.contains("img-popup__btn-close")) {
    closePopUpImage(popupImage, popupOverlay)
  };
});

//cierra las ventanas popUps cuando se de click en la superposición
popupOverlay.addEventListener("click", closeAnyPopUp);