class Api {
  constructor() {
    this._token = localStorage.getItem("jwt");
    this._baseUrl = "https://api.ofir1003.students.nomoredomainssbs.ru";
  }
  _onHttpRequest = async (url, method, data) => {
    const res = await fetch(`${this._baseUrl}/${url}`, {
      method,
      headers: {
        authorization: `Bearer ${this._token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Error: ${res.status}`);
    }
  };
  _getUserInfo = () => {
    return this._onHttpRequest("users/me", "GET");
  };
  getInitialCards = () => {
    return this._onHttpRequest("cards", "GET");
  };

  setTokenHeader = (token) => {
    this._token = token;
  };

  getInitInfo = () => {
    return Promise.all([this.getInitialCards(), this._getUserInfo()]);
  };
  setUserInfo = ({name, about}) => {
    return this._onHttpRequest("users/me", "PATCH", {name, about});
  };
  addNewCard = ({name, link, owner}) => {
    return this._onHttpRequest("cards", "POST", {name, link, owner});
  };
  onRemoveItem = (cardId, owner) => {
    return this._onHttpRequest(`cards/${cardId}`, "DELETE", {owner});
  };
  addItemLike = (cardId) => {
    return this._onHttpRequest(`cards/${cardId}/likes`, "PUT");
  };
  removeItemLike = (cardId) => {
    return this._onHttpRequest(`cards/${cardId}/likes`, "DELETE");
  };
  onUpdateProfilePic = ({avatar}) => {
    return this._onHttpRequest("users/me/avatar", "PATCH", {avatar});
  };
}
const api = new Api();

export default api;
