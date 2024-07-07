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

export const cardConfig = {
  likeButtonClass: "elements__card-btn-hearth",
  likeButtonClassActive: "elements__card-btn-hearth_active",
  likeButtonClassSelector: ".elements__card-btn-hearth",
  cardImageClass: "elements__card-photo-imagen",
  cardImageClassSelector: ".elements__card-photo-imagen",
  deleteButtonClass: "elements__card-btn-trash",
  deleteButtonClassSelector: ".elements__card-btn-trash",
  cardLikesCounterSelector: ".elements__card-likes-counter",
  cardTitleSelector: ".elements__card-title",
  userId: "95360503a2d4a266f1fa94e5"
}

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
  inactiveButtonClass: "popup__btn-submit_inactive",
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

export const apiInstanceConfig = {
  baseUrl : "https://around.nomoreparties.co/v1/web_es_11",
  headers: {
    authorization: "04d1875f-c579-4568-96e2-fbf8888c1f19",
  }
};