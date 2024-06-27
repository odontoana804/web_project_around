import "./pages/index.css";
import PopupWithForms from "./components/PopupWithForms.js";
import UserInfo from "./components/UserInfo.js";
import {
  profileName,
  profileAvatarImage,
  popupWithFormConfig,
  popupAvatarConfig,
  profileDescription,
  apiInstanceConfig
} from "./utils/constants.js";
import {
  addButtonAction,
  clearCardList,
  editAvatarAction,
  editAvatarHover,
  editButtonAction,
  renderCards
} from "./utils/utils.js";
import { Api } from "./components/Api.js";

//crea instancia de la clase Api
export const apiInstance = new Api (apiInstanceConfig);

//crea instancia de la clase UserInfo
export const userInfo = new UserInfo(profileName, profileDescription);

//crea instancia de la clase PopupWithForms para el popup del perfil
export const popupProfile = new PopupWithForms(
  "#popupProfileTemplate",
  "#popup__profile",
  popupWithFormConfig,
  (formData) => {
    apiInstance.setUserInfo(formData).then(data => {
      userInfo.setUserInfo(data);
    })
    .then(() => {
      popupProfile.close();
    })
    .catch((err) => {
      console.log(err);
    });
  }
);

//crea instancia de la clase PopupWithForms para el popup de agregar lugar
export const popupPlace = new PopupWithForms(
  "#popupPlaceTemplate",
  "#popup__place",
  popupWithFormConfig,
  (formData) => {
    apiInstance.addNewCard(formData)
    .then(()=>{
      clearCardList();
    })
    .then(() => {
      renderCards();
    })
    .then(() => {
      popupPlace.close();
    })
    .catch((err) => {
      console.log(err);
    });
  }
);

//crea instancia de la clase PopupWithForms para el popup de editar imagen de Avatar
export const popupAvatar = new PopupWithForms (
  "#popupAvatarTemplate",
  "#popup__avatar",
  popupAvatarConfig,
  (formData) => {
    apiInstance.setUserAvatar(formData)
    .then(() => {
      profileAvatarImage.src = formData.avatar;
    })
    .then(() => {
      popupAvatar.close();
    })
    .catch((err) => {
      console.log(err);
    });
  }
);

//ejecuta función para obtener datos del perfil de usuario desde servidor y renderizarlos
apiInstance.getUserInfo()
.then((data) => {
  userInfo.setUserInfo(data);
  profileAvatarImage.src = data.avatar;
})
.catch((err) => {
  console.log(err);
});

//ejecuta función para obtener datos de las tarjetas desde el servidor
renderCards();

//ejecución de función que abre la ventana popup Profile al dar click en el icono del lápiz (editar)
editButtonAction();

//ejecución de función que abre la ventana popup Place al dar click en el icono del + (agregar)
addButtonAction();

//ejeución de función que muestra el botón de editar el avatar
editAvatarHover();

//ejeución de función que abre la ventana popup de editar Avatar al dar click en la imagén de perfil
editAvatarAction();

