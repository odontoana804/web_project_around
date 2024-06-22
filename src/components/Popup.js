export default class Popup {
  constructor(
    popupTemplateSelector,
    popupSelector,
    {
      openPopupClass,
      openOverlayClass,
      closeButtonSelector,
      popupUbication,
      popupOverlay
    }) {
    this._popupTemplateSelector = popupTemplateSelector
    this._popupSelector = popupSelector
    this._openPopupClass = openPopupClass;
    this._overlayOpenClass = openOverlayClass;
    this._closeButtonSelector = closeButtonSelector;
    this._popupUbication = popupUbication;
    this._popupOverlay = popupOverlay;
  }

  _getTemplate() {
    const newPopup = document.querySelector(this._popupTemplateSelector).content.querySelector(this._popupSelector).cloneNode(true);
    return newPopup;
  }

  generatePopup() {
    this._popup = this._getTemplate();
    this._setEventListeners();
    return this._popup;
  };

  open() {
    document.querySelector(this._popupUbication).classList.add(this._openPopupClass);
    this._popupOverlay.classList.add(this._overlayOpenClass);
  }

  close() {
    document.querySelector(this._popupUbication).classList.remove(this._openPopupClass);
    this._popupOverlay.classList.remove(this._overlayOpenClass);
    this._popup.closest(this._popupSelector).remove();
  }

  _setEventListeners() {
    this._popup.querySelector(this._closeButtonSelector).addEventListener("click", () => this.close());

    document.addEventListener("keydown", (evt) => {
      if (evt.key === "Escape") {
        this.close();
      }
    });

    this._popupOverlay.addEventListener("click", () => {
      this.close();
    });
  }
}

