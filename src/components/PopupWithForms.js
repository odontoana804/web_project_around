import Popup from "./Popup.js";

export default class PopupWithForms extends Popup {
  constructor(
    popupTemplateSelector,
    popupSelector,
    {
      openPopupClass,
      openOverlayClass,
      closeButtonSelector,
      popupUbication,
      popupOverlay,
      inputSelector,
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
    this._inputSelector = inputSelector;
    this._submitButtonSelector = submitButtonSelector;
  }

  _getInputValues() {
    this._inputList = this._popup.querySelectorAll(this._inputSelector);
    this._formValues = {};
    this._inputList.forEach(input => {
      this._formValues[input.name] = input.value;
    });
    return this._formValues;
  }

  disableConfirmButton() {
    document.querySelector(this._popupSelector).querySelector(this._submitButtonSelector).classList.add("popup__btn-submit_inactive");
    document.querySelector(this._popupSelector).querySelector(this._submitButtonSelector).setAttribute("disabled", true);
  }

  setEventListeners() {
    super.setEventListeners()
    this._popup.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
    })
  }
}


