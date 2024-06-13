export default class Popup {
  constructor(popupSelector) {

    this._popup = document.querySelector(popupSelector);
  }

  open(popup, overlay) {
    popup.classList.add("popup_opened");
    overlay.classList.add("overlay_opened");
    new FormValidator(popup).enableValidation();
  }

  close(popup, overlay) {
    popup.classList.remove("popup_opened");
    overlay.classList.remove("overlay_opened");
    new FormValidator(popup).resetValidation();
  }

  _handleEscClose() {

  }

  setEventListeners() {
    this._element.querySelector(".popup__btn-close").addEventListener("click", () => {
      this.close(popupProfile, popupOverlay);
    });

  }

}
