const validationConfig = {
  formSelector: ".popup__container",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__btn-submit",
  inactiveButtonClass: "popup__btn-submit_inactive",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__input-error_active",
  errorSelector: ".popup__input-error"
};

export class FormValidator {
  constructor( popup, config = validationConfig ){
    this._config = config
    this._popup = popup.querySelector(this._config.formSelector);
  };

  _showError = (formElement, inputElement, errorMessage, inputErrorClass, errorClass) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-input-error`);
    inputElement.classList.add(inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(errorClass);
  };

  _hideError = (formElement, inputElement, inputErrorClass, errorClass) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-input-error`);
    inputElement.classList.remove(inputErrorClass);
    errorElement.classList.remove(errorClass);
    errorElement.textContent = "";
  };

  _checkInputValidity = (formElement, inputElement, inputErrorClass, errorClass) => {
    if (!inputElement.validity.valid) {
      this._showError(formElement, inputElement, inputElement.validationMessage, inputErrorClass, errorClass);
    } else {
      this._hideError(formElement, inputElement, inputErrorClass, errorClass);
    };
  };

  _hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };

  _toggleButtonState = (inputList, buttonElement, inactiveButtonClass) => {
    if (this._hasInvalidInput(inputList)) {
      buttonElement.classList.add(inactiveButtonClass);
      buttonElement.setAttribute("disabled", true);
    } else {
      buttonElement.classList.remove(inactiveButtonClass);
      buttonElement.removeAttribute("disabled");
    };
  };

  _setEventListeners = (formElement, inputSelector, submitButtonSelector, inputErrorClass, errorClass, inactiveButtonClass) => {
    const inputList = Array.from(formElement.querySelectorAll(inputSelector));
    const buttonElement = formElement.querySelector(submitButtonSelector)
    this._toggleButtonState(inputList, buttonElement, inactiveButtonClass);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(formElement, inputElement, inputErrorClass, errorClass);
        this._toggleButtonState(inputList, buttonElement, inactiveButtonClass);
      });
    });
  };

  enableValidation = () => {
    const formList = Array.from(document.querySelectorAll(this._config.formSelector));
    formList.forEach((formElement) => {
      formElement.addEventListener("submit", (evt) => {
        evt.preventDefault();
      });
      this._setEventListeners(formElement, this._config.inputSelector, this._config.submitButtonSelector, this._config.inputErrorClass, this._config.errorClass, this._config.inactiveButtonClass);
    });
  };

  resetValidation = () => {
    const inputList = Array.from(document.querySelectorAll(this._config.inputSelector));
    const errorList = Array.from(document.querySelectorAll(this._config.errorSelector));
    inputList.forEach((inputElement) => {
      inputElement.classList.remove(this._config.inputErrorClass);
    });
    errorList.forEach((errorElement) => {
      errorElement.classList.remove(this._config.errorClass);
    });
  };
};