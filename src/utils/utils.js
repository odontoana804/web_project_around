import { FormValidator } from "../components/FormValidator.js";
import { popupPlace, popupProfile, userInfo } from "../pages/index.js";
import { addButtonPlace, editButtonProfile } from "./constants.js";


//abre la ventana popup Profile al dar click en el icono del lápiz (editar)
editButtonProfile.addEventListener("click", () => {

  const popup = popupProfile.generatePopup()
  popupProfile.open()
  document.querySelector(".popup").prepend(popup)
  userInfo.getUserInfo()
  new FormValidator(popup).enableValidation();
  popupProfile.disableConfirmButton();
});

//abre la ventana popup Place al dar click en el icono del + (agregar)
addButtonPlace.addEventListener("click", () => {

  const popup = popupPlace.generatePopup()
  popupPlace.open()
  document.querySelector(".popup").prepend(popup)
  new FormValidator(popup).enableValidation();
});
