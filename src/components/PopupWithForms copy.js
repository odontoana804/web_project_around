import Popup from "./Popup.js";

export default class PopupWithForms extends Popup {
  constructor(
    popupSelector,
    {
      openPopupClass,
      openOverlayClass,
      closeButtonSelector,
      popupOverlay,
      inputSelector
    },
    handleFormSubmit
  ) {
    super(popupSelector, {
      openPopupClass,
      openOverlayClass,
      closeButtonSelector,
      popupOverlay,
    });
    this._handleFormSubmit = handleFormSubmit;
    this._inputSelector = inputSelector
  }

 /*  _getTemplate() {
    const newPopup = document.querySelector("#popupPlaceTemplate").content.querySelector(".popup__container").cloneNode(true);
    return newPopup;
  }

  generatePopup() {
    this._popup = this._getTemplate();
    this.setEventListeners();
    return this._popup;
  } */

  _getInputValues() {
    this._inputList = this._popup.querySelectorAll(this._inputSelector);
    this._formValues = {};
    this._inputList.forEach(input => {
      this._formValues[input.name] = input.value;
    });
    return this._formValues;
  }

  _resetValues() {
    this._inputList = this._popup.querySelectorAll(this._inputSelector);
    this._inputList.forEach(input => {
      input.value = "";
    });
  }


  setEventListeners() {
    super.setEventListeners()
    this._popup.addEventListener("submit", (evt) => {
      evt.preventDefault();
                          console.log(this._getInputValues())
      this._handleFormSubmit(this._getInputValues());
    })
  }

  open () {
    super.open();
    this._resetValues();
  }

  close() {
    super.close()
   // this._resetValues();
  }
}


