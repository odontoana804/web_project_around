export class Card {
  constructor( data, cardSelector) {
    this._id = this._createUniqueId()
    this._name = data.name;
    this._url = data.url;
    this._cardSelector = cardSelector;
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

    this._element.addEventListener( "click", (evt) => {
      //evento para el boton de like
      if (evt.target.classList.contains("elements__card-btn-hearth")) {
        evt.target.classList.toggle("elements__card-btn-hearth_active");
      };
      //evento para abrir el popup de imagen
      if (evt.target.classList.contains("elements__card-photo-imagen")){
        showPopUpImage(popupImage, popupOverlay);
        const imageValue = popupImage.querySelector(".img-popup__preview");
        imageValue.src = evt.target.currentSrc;
        imageValue.alt = evt.target.alt;
        const imageTitle = popupImage.querySelector(".img-popup__title");
        imageTitle.textContent = evt.target.alt;
      };
      //evento para el boton de eliminar
      if (evt.target.classList.contains("elements__card-btn-trash")){
        evt.target.closest(".elements__card").remove();
        let indiceEliminar = initialCards.findIndex(
          (initialCard) => initialCard.id === evt.target.previousElementSibling.id
        );
        initialCards.splice(indiceEliminar, 1);
      };
    });
  };

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


