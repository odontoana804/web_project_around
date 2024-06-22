import "./pages/index.css";
import Card from "./components/Card.js";
import PopupWithForms from "./components/PopupWithForms.js";
import PopupWithImage from "./components/PopupWithImage.js";
import Section from "./components/Section.js";
import UserInfo from "./components/UserInfo.js";
import {
  initialCards,
  cardsListSelector,
  profileName,
  popupImageConfig,
  popupWithFormConfig,
  popupConfirmationConfig,
  profileDescription,
} from "./utils/constants.js";
import { addButtonAction, editButtonAction } from "./utils/utils.js";
import ConfirmationPopup from "./components/ConfirmationPopup.js";

//Función para cargar las tarjetas creadas desde el arreglo inicial
const cardsList = new Section(
  {
    data: initialCards,
    renderer: (initialCard) => {
      const card = new Card(
        initialCard,
        "#card-template",
        /* initialCards, */
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
        },
        (evt) => {
          const confirmationPopup = new ConfirmationPopup(
            "#popupConfirmationTemplate",
            "#popup__confirmation",
            popupConfirmationConfig,
            () => {
              evt.target.closest(".elements__card").remove();
              let indiceEliminar = initialCards.findIndex(
                (element) => element.id === evt.target.previousElementSibling.id
              );
              initialCards.splice(indiceEliminar, 1);
              confirmationPopup.close();
            }
          )
          const popup = confirmationPopup.generatePopup()
          confirmationPopup.open();
          document
          .querySelector(popupConfirmationConfig.popupUbication)
          .prepend(popup);
        }
      );
      initialCard.id = card._id;
      const cardElement = card.generateCard();
      cardsList.setItem(cardElement);
    },
  },
  cardsListSelector
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
    const card = new Card(
      formData,
      "#card-template",
      /* initialCards, */
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
        document.querySelector(popupImageConfig.popupUbication).prepend(popup);
      },
      (evt) => {
        const confirmationPopup = new ConfirmationPopup(
          "#popupConfirmationTemplate",
          "#popup__confirmation",
          popupConfirmationConfig,
          () => {
            evt.target.closest(".elements__card").remove();
            let indiceEliminar = initialCards.findIndex(
              (element) => element.id === evt.target.previousElementSibling.id
            );
            initialCards.splice(indiceEliminar, 1);
            confirmationPopup.close();
          }
        )
        const popup = confirmationPopup.generatePopup()
        confirmationPopup.open();
        document
        .querySelector(popupConfirmationConfig.popupUbication)
        .prepend(popup);
      }
    );
    formData.id = card._id;
    initialCards.push(formData);
    const cardElement = card.generateCard();
    cardsList.setItem(cardElement);
    popupPlace.close();
  }
);

//ejecución de función que abre la ventana popup Profile al dar click en el icono del lápiz (editar)
editButtonAction();

//ejecución de función que abre la ventana popup Place al dar click en el icono del + (agregar)
addButtonAction();