import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import PopupWithForms from "../components/PopupWithForms.js";
import Section from "../components/Section.js";
import { UserInfo } from "../components/UserInfo.js";
import { initialCards, cardsListSection, profileName, profileDescription } from "../scripts/utils.js";

//Función para cargar las tarjetas creadas desde el arreglo inicial
const cardsList = new Section({
  data: initialCards,
  renderer: (initialCard) => {
    const card = new Card(initialCard, "#card-template", initialCards);
    initialCard.id = card._id;

    const cardElement = card.generateCard();

    cardsList.setItem(cardElement);
    },
  },
  cardsListSection
);

//renderizar las 6 tarjetas iniciales
cardsList.renderItems();


const popupWithFormConfig = {
  openPopupClass : "popup_opened",
  openOverlayClass: "overlay_opened",
  closeButtonSelector: ".popup__btn-close",
  popupUbication: ".popup",
  popupOverlay: document.querySelector(".overlay"),
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__btn-submit",
}

export const userInfo = new UserInfo(profileName, profileDescription);

export const popupProfile = new PopupWithForms(
  "#popupProfileTemplate",
  "#popup__profile",
  popupWithFormConfig,
  (formData) => {
    userInfo.setUserInfo(formData)
    popupProfile.close()
  }
);

export const popupPlace = new PopupWithForms(
  "#popupPlaceTemplate",
  "#popup__place",
  popupWithFormConfig,
  (formData) => {
    const card = new Card(formData, "#card-template");
    const cardElement = card.generateCard();
    cardsList.setItem(cardElement);
    popupPlace.close()
  }
);
