import PopupWithImage from "./PopupWithImage.js";

const popupImageConfig = {
  openPopupClass: "img-popup_opened",
  openOverlayClass: "overlay_opened",
  closeButtonSelector: ".img-popup__btn-close",
  imagePreviewClass: ".img-popup__preview",
  imageTitleClass: ".img-popup__title",
  popupOverlay: document.querySelector(".overlay"),
};


export class Card {
  constructor( data, cardSelector, array) {
    this._id = this._createUniqueId()
    this._name = data.name;
    this._url = data.url;
    this._cardSelector = cardSelector;
    this._array = array;
  };

  _createUniqueId () {
    return Math.floor(Math.random() * new Date().getTime() * 3).toString();
  };

  //función para clonar la plantilla
  _getTemplate() {
    const newCard = document.querySelector(this._cardSelector).content.querySelector(".elements__card").cloneNode(true);
    return newCard;
  };

  _setEventListeners() {
    this._popupImage = document.querySelector("#popup__image");
    this._popupOverlay = document.querySelector(".overlay");

    this._element.addEventListener( "click", (evt) => {
      //evento para funcionalidad del boton de like
      if (evt.target.classList.contains("elements__card-btn-hearth")) {
        evt.target.classList.toggle("elements__card-btn-hearth_active");
      };
      //evento para mostrar el popUp de la visualización de la imagen
      if (evt.target.classList.contains("elements__card-photo-imagen")){
        const popupImage = new PopupWithImage("#popup__image", popupImageConfig, {
          name: evt.target.alt,
          image: evt.target.currentSrc
        })
        popupImage.open()
        popupImage.setEventListeners()
       /*  this._showPopUpImage(this._popupImage, this._popupOverlay);
        const imageValue = this._popupImage.querySelector(".img-popup__preview");
        imageValue.src = evt.target.currentSrc;
        imageValue.alt = evt.target.alt;
        const imageTitle = this._popupImage.querySelector(".img-popup__title");
        imageTitle.textContent = evt.target.alt;
        document.addEventListener("keydown", this._closePopUpImageEscapeKey); */
      };
      //evento para funcionalidad del boton de eliminar
      if (evt.target.classList.contains("elements__card-btn-trash")){
        evt.target.closest(".elements__card").remove();
        let indiceEliminar = this._array.findIndex(
          (element) => element.id === evt.target.previousElementSibling.id
        );
        this._array.splice(indiceEliminar, 1);
      };
    });
  };
  //Función para mostrar el popUp de la visualización de la imagen
/*   _showPopUpImage(popup, overlay) {
    popup.classList.add("img-popup_opened");
    overlay.classList.add("overlay_opened");
  }; */

 /*  _closePopUpImageEscapeKey (evt) {
    this._popupImage = document.querySelector("#popup__image");
    this._popupOverlay = document.querySelector(".overlay");
    if (evt.key === "Escape") {
      this._popupImage.classList.remove("img-popup_opened");
      this._popupOverlay.classList.remove("overlay_opened");
    };
  }; */

  //función para crear la tarjeta
  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    this._element.querySelector(".elements__card-photo-imagen").src = this._url;
    this._element.querySelector(".elements__card-photo-imagen").alt = this._name;
    this._element.querySelector(".elements__card-photo-imagen").setAttribute("id", this._id );
    this._element.querySelector(".elements__card-title").textContent = this._name;

    return this._element;
  };
};


