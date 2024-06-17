export class UserInfo {
  constructor( profileName, profileDescription ){
    this._profileName = profileName;
    this._profileDescription = profileDescription;
  }

  setUserInfo(formData) {
    this._profileName.textContent = formData.name;
    this._profileDescription.textContent = formData.about;
  }

  getUserInfo() {
    document.querySelector("#name-profile").value = this._profileName.textContent;
    document.querySelector("#about-profile").value = this._profileDescription.textContent;
  }
}
