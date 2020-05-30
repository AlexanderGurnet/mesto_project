class Card {
  constructor(objCard, markup, func) {
    this._name = objCard.name;
    this._link = objCard.link;
    this._markup = markup;
    this._func = func;
  }

  getLink() {
    return this._link;
  }

  create() {
    const cardContainer = document.createElement('div');
    cardContainer.classList.add('card-wrap');
    cardContainer.insertAdjacentHTML('afterbegin', this._markup);
    cardContainer.querySelector('.place-card__image').style.backgroundImage = `url(${this._link})`;
    cardContainer.querySelector('.place-card__name').textContent = this._name;
    this.cardElement = cardContainer;
    this._setEventListeners();
    return cardContainer;
  }

  _setEventListeners() {
    const card = this.cardElement;
    card.querySelector('.place-card__like-icon').addEventListener('click', this._like);
    card.querySelector('.place-card__delete-icon').addEventListener('click', this._delete);
    card.querySelector('.place-card__image').addEventListener('click', () => this._func(this._link));
  }

  _like(event) {
    event.target.classList.toggle('place-card__like-icon_liked');
  }

  _delete(event) {
    event.stopPropagation();
    event.target.closest('.card-wrap').remove();
  }
}