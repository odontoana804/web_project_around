export default class Card {
  constructor( data, cardSelector, /* array, */ handleCardClick, handleDeleteClick) {
    this._id = this._createUniqueId()
    this._name = data.name;
    this._url = data.url;
    this._cardSelector = cardSelector;
    /* this._array = array; */
    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = handleDeleteClick;
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
        this._handleCardClick(evt);
      };
      //evento para funcionalidad del boton de eliminar
      if (evt.target.classList.contains("elements__card-btn-trash")){
        /* evt.target.closest(".elements__card").remove();
        let indiceEliminar = this._array.findIndex(
          (element) => element.id === evt.target.previousElementSibling.id
        );
        this._array.splice(indiceEliminar, 1); */
        this._handleDeleteClick(evt)
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


