export default class Card {
  constructor( data, cardSelector, handleCardClick, handleDeleteClick, handleLikeClick ) {
    this._cardId = data._id
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._ownerId = data.owner._id;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = handleDeleteClick;
    this._handleLikeClick = handleLikeClick;
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
        this._handleLikeClick(evt)
      };
      //evento para mostrar el popUp de la visualización de la imagen
      if (evt.target.classList.contains("elements__card-photo-imagen")){
        this._handleCardClick(evt);
      };
      //evento para funcionalidad del boton de eliminar
      if (evt.target.classList.contains("elements__card-btn-trash")){
        this._handleDeleteClick(evt)
      };
    });
  };

  //función para crear la tarjeta
  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();
    this._element.querySelector(".elements__card-photo-imagen").src = this._link;
    this._element.querySelector(".elements__card-photo-imagen").alt = this._name;
    this._element.querySelector(".elements__card-likes-counter").textContent = this._likes.length;
    this._element.setAttribute("id", this._cardId );
    this._element.querySelector(".elements__card-title").textContent = this._name;
    if (this._ownerId !== "95360503a2d4a266f1fa94e5") {
      this._element.querySelector(".elements__card-btn-trash").remove();
    }
    const values = this._likes.values()
    for (const value of values) {
      if (value._id === "95360503a2d4a266f1fa94e5") {
        this._element.querySelector(".elements__card-btn-hearth").classList.add("elements__card-btn-hearth_active");
      }
    }

    return this._element;
  };
};


