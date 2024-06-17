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
      inputSelector
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
    this._inputSelector = inputSelector
  }


  _getInputValues() {
    this._inputList = this._popup.querySelectorAll(this._inputSelector);
    this._formValues = {};
    this._inputList.forEach(input => {
      this._formValues[input.name] = input.value;
    });
    return this._formValues;
  }

  /* _resetValues() {
    this._inputList = this._popup.querySelectorAll(this._inputSelector);
    this._inputList.forEach(input => {
      input.value = "";
    });
  } */


  setEventListeners() {
    super.setEventListeners()
    this._popup.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
    })
  }
/*
  open () {
    super.open();
    //this._resetValues();
  }

  close() {
    super.close()
   // this._resetValues();
  } */
}

