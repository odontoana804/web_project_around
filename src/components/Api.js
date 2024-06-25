export class Api {
  constructor (options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers || null;
    this._body = options.body || null;

  }

  getInitialCards() {
    return fetch(this._baseUrl, {
      headers: this._headers
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }

        return Promise.reject(`Error: ${res.status}`);
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}