//elementos que se editan en la seccion de profile
export const profileName = document.querySelector(".profile__name");
export const profileDescription = document.querySelector(".profile__description");
export const profileAvatar = document.querySelector(".profile__avatar-container");
export const profileAvatarEditButton = document.querySelector("#avatarEditButton");
export const profileAvatarImage = document.querySelector(".profile__avatar-image");

//elementos de el popUp de edición de perfil
export const editButtonProfile = document.querySelector(".profile__edit-button");

//elementos de el popUp de agregar nuevas tarjetas de lugar
export const addButtonPlace = document.querySelector(".profile__add-button");

//selector de elemento donde se muestran las tarjetas
export const cardsListSelector = ".elements";

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

export const popupAvatarConfig = {
  openPopupClass: "avatar-popup_opened",
  openOverlayClass: "overlay_opened",
  closeButtonSelector: ".avatar-popup__btn-close",
  popupUbication: ".avatar-popup",
  popupOverlay: document.querySelector(".overlay"),
  inputSelector: ".avatar-popup__input",
  submitButtonSelector: ".avatar-popup__btn-submit",
};

export const avatarValidationConfig = {
  formSelector: ".avatar-popup__container",
  inputSelector: ".avatar-popup__input",
  submitButtonSelector: ".avatar-popup__btn-submit",
  inactiveButtonClass: "avatar-popup__btn-submit_inactive",
  inputErrorClass: "avatar-popup__input_type_error",
  errorClass: "avatar-popup__input-error_active",
  errorSelector: ".avatar-popup__input-error"
};