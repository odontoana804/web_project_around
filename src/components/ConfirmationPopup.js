import Popup from "./Popup";

export default class ConfirmationPopup extends Popup {
  constructor(
    popupTemplateSelector,
    popupSelector,
    {
      openPopupClass,
      openOverlayClass,
      closeButtonSelector,
      popupUbication,
      popupOverlay,
      submitButtonSelector,
    },
    handleFormSubmit
  ) {
    super(
      popupTemplateSelector,
      popupSelector,
      {
        openPopupClass,
        openOverlayClass,
        closeButtonSelector,
        popupUbication,
        popupOverlay,
      }
    );
    this._handleFormSubmit = handleFormSubmit;
    this._submitButtonSelector = submitButtonSelector;
  }

  _setEventListeners() {
    super._setEventListeners()
    this._popup.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit();
    })
  }

}