import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(
    popupSelector,
    {
      openPopupClass,
      openOverlayClass,
      closeButtonSelector,
      imagePreviewClass,
      imageTitleClass,
      popupOverlay,
    },
    data
  ) {
    super(popupSelector, {
      openPopupClass,
      openOverlayClass,
      closeButtonSelector,
      popupOverlay,
    });
    this._imagePreviewClass = imagePreviewClass;
    this._imageTitleClass = imageTitleClass;
    this._name = data.name;
    this._image = data.image;
  }

  open() {
    super.open();
    const imageValue = this._popup.querySelector(this._imagePreviewClass);
    imageValue.src = this._image;
    imageValue.alt = this._name;
    const imageTitle = this._popup.querySelector(this._imageTitleClass);
    imageTitle.textContent = this._name;
  }
}
