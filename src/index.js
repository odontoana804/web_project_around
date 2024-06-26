import "./pages/index.css";
import Card from "./components/Card.js";
import PopupWithForms from "./components/PopupWithForms.js";
import PopupWithImage from "./components/PopupWithImage.js";
import Section from "./components/Section.js";
import UserInfo from "./components/UserInfo.js";
import {
  cardsListSelector,
  profileName,
  profileAvatarImage,
  popupImageConfig,
  popupWithFormConfig,
  popupConfirmationConfig,
  popupAvatarConfig,
  profileDescription
} from "./utils/constants.js";
import { addButtonAction, editAvatarAction, editAvatarHover, editButtonAction } from "./utils/utils.js";
import ConfirmationPopup from "./components/ConfirmationPopup.js";
import { Api } from "./components/Api.js";

//crea instancia de la clase Api
export const apiInstance = new Api ({
  baseUrl : "https://around.nomoreparties.co/v1/web_es_11/",
  headers: {
    authorization: "04d1875f-c579-4568-96e2-fbf8888c1f19",
    "Content-Type": "application/json"
  }
})

//crea instancia de la clase UserInfo
export const userInfo = new UserInfo(profileName, profileDescription);

//crea instancia de la clase PopupWithForms para el popup del perfil
export const popupProfile = new PopupWithForms(
  "#popupProfileTemplate",
  "#popup__profile",
  popupWithFormConfig,
  (formData) => {
    apiInstance.setUserInfo(formData).then(data => {
      userInfo.setUserInfo(data);
    })
    .then(
      popupProfile.close()
    )
  }
);

//crea instancia de la clase PopupWithForms para el popup de agregar lugar
export const popupPlace = new PopupWithForms(
  "#popupPlaceTemplate",
  "#popup__place",
  popupWithFormConfig,
  (formData) => {

    apiInstance.addNewCard(formData)
    .then((formData)=> {
      const card = new Card(
        formData,
        "#card-template",
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
              apiInstance.deleteCard(evt.target.previousElementSibling.id)
              confirmationPopup.close();
            }
          )
          const popup = confirmationPopup.generatePopup();
          confirmationPopup.open();
          document
          .querySelector(popupConfirmationConfig.popupUbication)
          .prepend(popup);
        }
      );
      const cardElement = card.generateCard();
      document.querySelector(cardsListSelector).prepend(cardElement)
    })
    .then(
      popupPlace.close()
    )
  }
);

//crea instancia de la clase PopupWithForms para el popup de editar imagen de Avatar
export const popupAvatar = new PopupWithForms (
  "#popupAvatarTemplate",
  "#popup__avatar",
  popupAvatarConfig,
  (formData) => {
    profileAvatarImage.src = formData.avatar;
    popupAvatar.close();
  }
);

//ejecuta función para obtener datos de las tarjetas desde el servidor
apiInstance.getInitialCards().then(data => {

  //Función para renderizar las tarjetas del servidor
  const cardsList = new Section(
    {
      data: data,
      renderer: (initialCard) => {
        const card = new Card(
          initialCard,
          "#card-template",
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
                apiInstance.deleteCard(evt.target.previousElementSibling.id)
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
        const cardElement = card.generateCard();
        cardsList.setItem(cardElement);
      },
    },
    cardsListSelector
  );

  //renderizar las tarjetas iniciales
  cardsList.renderItems();
});

//ejecuta función para obtener datos del perfil de usuario desde servidor y renderizarlos
apiInstance.getUserInfo().then(data => {
  userInfo.setUserInfo(data);
});

//ejecución de función que abre la ventana popup Profile al dar click en el icono del lápiz (editar)
editButtonAction();

//ejecución de función que abre la ventana popup Place al dar click en el icono del + (agregar)
addButtonAction();

//ejeución de función que muestra el botón de editar el avatar
editAvatarHover();

//ejeución de función que abre la ventana popup de editar Avatar al dar click en la imagén de perfil
editAvatarAction();

