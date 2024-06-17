import { Card } from "../components/Card.js";
import PopupWithForms from "../components/PopupWithForms.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js";
import { UserInfo } from "../components/UserInfo.js";
import {
  initialCards,
  cardsListSection,
  profileName,
  popupImageConfig,
  popupWithFormConfig,
  profileDescription,
} from "../utils/constants.js";

profileDescription;
//Función para cargar las tarjetas creadas desde el arreglo inicial
const cardsList = new Section(
  {
    data: initialCards,
    renderer: (initialCard) => {
      const card = new Card(
        initialCard,
        "#card-template",
        initialCards,
        (evt) => {
          const popupImage = new PopupWithImage(
            "#popupImageTemplate",
            "#popup__image",
            popupImageConfig,
            {
              name: evt.target.alt,
              image: evt.target.currentSrc,
            }
          );
          const popup = popupImage.generatePopup();
          popupImage.open();
          document
            .querySelector(popupImageConfig.popupUbication)
            .prepend(popup);
        }
      );
      initialCard.id = card._id;

      const cardElement = card.generateCard();

      cardsList.setItem(cardElement);
    },
  },
  cardsListSection
);

//renderizar las 6 tarjetas iniciales
cardsList.renderItems();

//crea instancia de la clase UserInfo
export const userInfo = new UserInfo(profileName, profileDescription);

//crea instancia de la clase PopupWithForms para el popup del perfil
export const popupProfile = new PopupWithForms(
  "#popupProfileTemplate",
  "#popup__profile",
  popupWithFormConfig,
  (formData) => {
    userInfo.setUserInfo(formData);
    popupProfile.close();
  }
);

//crea instancia de la clase PopupWithForms para el popup de agregar lugar
export const popupPlace = new PopupWithForms(
  "#popupPlaceTemplate",
  "#popup__place",
  popupWithFormConfig,
  (formData) => {
    const card = new Card(formData, "#card-template", initialCards, (evt) => {
      const popupImage = new PopupWithImage(
        "#popupImageTemplate",
        "#popup__image",
        popupImageConfig,
        {
          name: evt.target.alt,
          image: evt.target.currentSrc,
        }
      );
      const popup = popupImage.generatePopup();
      popupImage.open();
      document.querySelector(popupImageConfig.popupUbication).prepend(popup);
    });
    formData.id = card._id;
    initialCards.push(formData);
    const cardElement = card.generateCard();
    cardsList.setItem(cardElement);
    popupPlace.close();
  }
);
