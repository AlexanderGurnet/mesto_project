class Popup {
  constructor(container, popupMarkup) {
    this._container = container;
    this._popupMarkup = popupMarkup;
    this.popupContainer = this._create();
    this._closeButton = this.popupContainer.querySelector('.popup__close');
    this._setEventListeners();
  }

  open() {
    this._addPopup();
    this._container.classList.add('popup_is-opened'); 
  }

  addImg(imgUrl) {
    this.popupContainer.querySelector('.popup__img').src = imgUrl;
  }

  addUserInfo(objUserInfo) {
    this.popupContainer.querySelector('.popup__input_type_name').value = objUserInfo.name;
    this.popupContainer.querySelector('.popup__input_type_about').value = objUserInfo.about;
  }
  
  getObjCard() {
    return {
      name: this.popupContainer.querySelector('.popup__input_type_name').value,
      link: this.popupContainer.querySelector('.popup__input_type_link-url').value,
    }
  }

  getUserInfo() {
    return {
      name: this.popupContainer.querySelector('.popup__input_type_name').value,
      about: this.popupContainer.querySelector('.popup__input_type_about').value,
    }
  }

  close() {
    this._container.classList.remove('popup_is-opened');  
    this._remove();
  }

  _addPopup() {
    this._container.appendChild(this.popupContainer);
  }

  _create() {
    const popupContainer = document.createElement('div');
    popupContainer.insertAdjacentHTML('afterbegin', this._popupMarkup);
    return popupContainer;
  }

  _remove() {
    this._container.removeChild(this.popupContainer);
  }

  _setEventListeners() {
    this._closeButton.addEventListener('click', () => this.close());
  }
}