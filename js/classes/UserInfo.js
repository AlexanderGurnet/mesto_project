class UserInfo {
  constructor(name, about) {
    this._name = name;
    this._about = about;
  }

  setUserInfo(objUserInfo) {
    this._name = objUserInfo.name;
    this._about = objUserInfo.about;
  }

  getUserInfo() {
    return {
      name: this._name,
      about: this._about,
    }
  }
  
  updateUserInfo() {
    document.querySelector('.user-info__name').textContent = this._name;
    document.querySelector('.user-info__job').textContent = this._about;
  }
}