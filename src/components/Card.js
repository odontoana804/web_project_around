export default class Card {
  constructor(
    data,
    cardTemplateSelector,
    cardSelector,
    {
      likeButtonClass,
      likeButtonClassActive,
      likeButtonClassSelector,
      cardImageClass,
      cardImageClassSelector,
      deleteButtonClass,
      deleteButtonClassSelector,
      cardLikesCounterSelector,
      cardTitleSelector,
      userId
    },
    handleCardClick, handleDeleteClick, handleLikeClick ) {
    this._cardId = data._id
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._ownerId = data.owner._id;
    this._cardTemplateSelector = cardTemplateSelector;
    this._cardSelector = cardSelector;
    this._likeButtonClass = likeButtonClass;
    this.likeButtonClassActive = likeButtonClassActive;
    this._likeButtonClassSelector = likeButtonClassSelector;
    this._cardImageClass = cardImageClass;
    this._cardImageClassSelector = cardImageClassSelector;
    this._deleteButtonClass = deleteButtonClass;
    this._deleteButtonClassSelector = deleteButtonClassSelector;
    this._cardLikesCounterSelector = cardLikesCounterSelector;
    this._cardTitleSelector = cardTitleSelector;
    this._userId = userId;
    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = handleDeleteClick;
    this._handleLikeClick = handleLikeClick;
  };

  //función para clonar la plantilla
  _getTemplate() {
    const newCard = document.querySelector(this._cardTemplateSelector).content.querySelector(this._cardSelector).cloneNode(true);
    return newCard;
  };

  _setEventListeners() {
    this._element.addEventListener( "click", (evt) => {
      //evento para funcionalidad del boton de like
      if (evt.target.classList.contains(this._likeButtonClass)) {
        this._handleLikeClick(evt)
      };
      //evento para mostrar el popUp de la visualización de la imagen
      if (evt.target.classList.contains(this._cardImageClass)){
        this._handleCardClick(evt);
      };
      //evento para funcionalidad del boton de eliminar
      if (evt.target.classList.contains(this._deleteButtonClass)){
        this._handleDeleteClick(evt)
      };
    });
  };

  //función para crear la tarjeta
  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();
    this._element.querySelector(this._cardImageClassSelector).src = this._link;
    this._element.querySelector(this._cardImageClassSelector).alt = this._name;
    this._element.querySelector(this._cardLikesCounterSelector).textContent = this._likes.length;
    this._element.setAttribute("id", this._cardId );
    this._element.querySelector(this._cardTitleSelector).textContent = this._name;
    if (this._ownerId !== this._userId) {
      this._element.querySelector(this._deleteButtonClassSelector).remove();
    }
    const values = this._likes.values()
    for (const value of values) {
      if (value._id === this._userId) {
        this._element.querySelector(this._likeButtonClassSelector).classList.add(this.likeButtonClassActive);
      }
    }
    return this._element;
  };
};


