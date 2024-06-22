import liberty from "../images/estatua-de-la-libertad.jpg";
import goldenGate from "../images/Golden-Gate-Bridge.jpg";
import niagaraFalls from "../images/Cataratas-del-niagara.jpg";
import rushmore from "../images/monte-rushmore.jpg";
import spaceNeddle from "../images/space-neddle.jpg";
import empireState from "../images/empire-state-building.jpg";



//elementos que se editan en la seccion de profile
export const profileName = document.querySelector(".profile__name");
export const profileDescription = document.querySelector(".profile__description");

//elementos de el popUp de edición de perfil
export const editButtonProfile = document.querySelector(".profile__edit-button");

//elementos de el popUp de agregar nuevas tarjetas de lugar
export const addButtonPlace = document.querySelector(".profile__add-button");

//selector de elemento donde se muestran las tarjetas
export const cardsListSelector = ".elements";

export const initialCards = [
  {
    name: "Estatua de la libertad",
    url: liberty,
  },
  {
    name: "Golden Gate Bridge",
    url: goldenGate,
  },
  {
    name: "Cataratas del Niágara",
    url: niagaraFalls,
  },
  {
    name: "Monte Rushmore",
    url: rushmore,
  },
  {
    name: "Space Neddle",
    url: spaceNeddle,
  },
  {
    name: "Empire State Building",
    url: empireState,
  },
];

export const validationConfig = {
  formSelector: ".popup__container",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__btn-submit",
  inactiveButtonClass: "popup__btn-submit_inactive",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__input-error_active",
  errorSelector: ".popup__input-error"
};

export const popupImageConfig = {
  openPopupClass: "img-popup_opened",
  openOverlayClass: "overlay_opened",
  closeButtonSelector: ".img-popup__btn-close",
  popupUbication: ".img-popup",
  imagePreviewClass: ".img-popup__preview",
  imageTitleClass: ".img-popup__title",
  popupOverlay: document.querySelector(".overlay"),
};

export const popupWithFormConfig = {
  openPopupClass: "popup_opened",
  openOverlayClass: "overlay_opened",
  closeButtonSelector: ".popup__btn-close",
  popupUbication: ".popup",
  popupOverlay: document.querySelector(".overlay"),
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__btn-submit",
};

export const popupConfirmationConfig = {
  openPopupClass: "confirmation-popup_opened",
  openOverlayClass: "overlay_opened",
  closeButtonSelector: ".confirmation-popup__btn-close",
  popupUbication: ".confirmation-popup",
  popupOverlay: document.querySelector(".overlay"),
  submitButtonSelector: ".confirmation-popup__btn-submit",
};