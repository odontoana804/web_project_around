export default class Popup {
  constructor(popupSelector, {openPopupClass, openOverlayClass, closeButtonSelector, popupOverlay}) {
    this._popup = document.querySelector(popupSelector);
    this._openPopupClass = openPopupClass;
    this._overlayOpenClass = openOverlayClass;
    this._closeButtonSelector = closeButtonSelector;
    this._popupOverlay = popupOverlay;
  }

  open() {
    this._popup.classList.add(this._openPopupClass);
    this._popupOverlay.classList.add(this._overlayOpenClass);
  }

  close() {
    this._popup.classList.remove(this._openPopupClass);
    this._popupOverlay.classList.remove(this._overlayOpenClass);
  }

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  setEventListeners() {
    this._popup.querySelector(this._closeButtonSelector).addEventListener("click", () => {
      this.close();
    });
    document.addEventListener("keydown", (evt) => this._handleEscClose(evt) );
  }

}

