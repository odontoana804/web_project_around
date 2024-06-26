import Card from "../components/Card.js";
import ConfirmationPopup from "../components/ConfirmationPopup.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js";
import { apiInstance, popupAvatar, popupPlace, popupProfile, userInfo } from "../index.js";
import {
  addButtonPlace,
  editButtonProfile,
  profileAvatar,
  profileAvatarEditButton,
  validationConfig,
  avatarValidationConfig,
  cardsListSelector,
  popupConfirmationConfig,
  popupImageConfig,
  cardConfig,
} from "./constants.js";

//función que abre la ventana popup Profile al dar click en el icono del lápiz (editar)
export const editButtonAction = () => {
  editButtonProfile.addEventListener("click", () => {
    const popup = popupProfile.generatePopup();
    popupProfile.open();
    document.querySelector(".popup").prepend(popup);
    popup.querySelector("#name-profile").focus();
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
    popup.querySelector("#name-place").focus();
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
    popup.querySelector("#url-avatar").focus();
    new FormValidator(popup, avatarValidationConfig).enableValidation();
  });
};

//función que renderiza las tarjetas desde el servidor
export function renderCards () {
  apiInstance.getInitialCards().then(data => {

    //Función para renderizar las tarjetas del servidor
    const cardsList = new Section(
      {
        data: data,
        renderer: (initialCard) => {
          const card = new Card(
            initialCard,
            "#card-template",
            ".elements__card",
            cardConfig,
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
                  apiInstance.deleteCard(evt.target.parentElement.parentElement.id)
                  .then(() => {
                    evt.target.closest(".elements__card").remove();
                    confirmationPopup.close();
                  })
                  .catch((err) => {
                    console.log(err);
                  });
                }
              )
              const popup = confirmationPopup.generatePopup()
              confirmationPopup.open();
              document
              .querySelector(popupConfirmationConfig.popupUbication)
              .prepend(popup);
              popup.querySelector(popupConfirmationConfig.submitButtonSelector).focus();
            },
            (evt) => {
              if (evt.target.classList.contains("elements__card-btn-hearth_active")) {
                apiInstance.removeLike(evt.target.parentElement.parentElement.parentElement.id)
                .then(()=>{
                  evt.target.classList.toggle("elements__card-btn-hearth_active");
                  evt.target.nextElementSibling.textContent = Number(evt.target.nextElementSibling.textContent) - 1;
                })
                .catch((err) => {
                  console.log(err);
                });
              } else {
                apiInstance.addLike(evt.target.parentElement.parentElement.parentElement.id)
                .then(() => {
                  evt.target.classList.toggle("elements__card-btn-hearth_active");
                  evt.target.nextElementSibling.textContent = Number(evt.target.nextElementSibling.textContent) + 1;
                })
                .catch((err) => {
                  console.log(err);
                });
              }
            }
          );
          const cardElement = card.generateCard();
          cardsList.setItem(cardElement);
        },
      },
      cardsListSelector
    );
    //renderizar las tarjetas
    cardsList.renderItems();
  })
  .catch((err) => {
    console.log(err);
  });
}

//función para eliminar el contenido de la lista de tarjetas
export const clearCardList = () => {
  document.querySelector(cardsListSelector).innerHTML = "";
}