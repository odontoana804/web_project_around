import FormValidator from "../components/FormValidator.js";
import { popupAvatar, popupPlace, popupProfile, userInfo } from "../index.js";
import {
  addButtonPlace,
  editButtonProfile,
  profileAvatar,
  profileAvatarEditButton,
  validationConfig,
  avatarValidationConfig,
} from "./constants.js";
//función que abre la ventana popup Profile al dar click en el icono del lápiz (editar)
export const editButtonAction = () => {
  editButtonProfile.addEventListener("click", () => {
    const popup = popupProfile.generatePopup();
    popupProfile.open();
    document.querySelector(".popup").prepend(popup);
    userInfo.getUserInfo();
    new FormValidator(popup, validationConfig).enableValidation();
    popupProfile.disableConfirmButton();
  });
};

//función que abre la ventana popup Place al dar click en el icono del + (agregar)
export const addButtonAction = () => {
  addButtonPlace.addEventListener("click", () => {
    const popup = popupPlace.generatePopup();
    popupPlace.open();
    document.querySelector(".popup").prepend(popup);
    new FormValidator(popup, validationConfig).enableValidation();
  });
};

//función que muestra el botón de editar el avatar
export const editAvatarHover = () => {
  profileAvatar.addEventListener("mouseover", () => {
    profileAvatarEditButton.classList.add("profile__avatar-edit_shown");
  });
  profileAvatar.addEventListener("mouseout", () => {
    profileAvatarEditButton.classList.remove("profile__avatar-edit_shown");
  });
};

//función que abre la ventana popup de editar Avatar al dar click en la imagén de perfil
export const editAvatarAction = () => {
  profileAvatarEditButton.addEventListener("click", () => {
    const popup = popupAvatar.generatePopup();
    popupAvatar.open();
    document.querySelector(".avatar-popup").prepend(popup);
    new FormValidator(popup, avatarValidationConfig).enableValidation();
  });
};
