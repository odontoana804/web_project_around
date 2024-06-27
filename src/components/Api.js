export class Api {
  constructor({baseUrl, headers}) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}cards`, {
      method: "GET",
      headers: this._headers,
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Error: ${res.status}`);
      })
      .then((data) => {
        return data;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}users/me`, {
      method: "GET",
      headers: this._headers,
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Error: ${res.status}`);
    })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
  }

  setUserInfo(data) {
    return (
      fetch(`${this._baseUrl}users/me`, {
        method: "PATCH",
        headers: this._headers,
        body: JSON.stringify({
          name: data.name,
          about: data.about,
        }),
      })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Error: ${res.status}`);
      })
      .catch((err) => {
        console.log(err);
      })
    );
  }

  addNewCard(data) {
    return fetch(`${this._baseUrl}cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        link: data.link,
      }),
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Error: ${res.status}`);
    })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
  }

  deleteCard(cardId) {
    return fetch(`${this._baseUrl}cards/${cardId}`, {
      method: "DELETE",
      headers: this._headers
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Error: ${res.status}`)
    })
    .catch((err) => {
      console.log(err);
    });
  }

  addLike(cardId) {
    return fetch(`${this._baseUrl}cards/likes/${cardId}`, {
      method: "PUT",
      headers: this._headers,
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Error: ${res.status}`);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  removeLike(cardId) {
    return fetch(`${this._baseUrl}cards/likes/${cardId}`, {
      method: "DELETE",
      headers: this._headers,
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Error: ${res.status}`);
    })
    .catch((err) => {
      console.log(err);
    });
  }


  setUserAvatar(data) {
    return fetch(`${this._baseUrl}users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar: data.avatar,
      }),
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Error: ${res.status}`);
    })
    .catch((err) => {
      console.log(err);
    });
  }

}
