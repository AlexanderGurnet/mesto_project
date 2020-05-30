class CardList {
  constructor(container, cards, func) {
    this.container = container;
    this.cards = cards;
    this.func = func;
  }

  addCard = (element) => {
    this.container.appendChild(element);
  }
  
  render = (markup, openPopupImg) => {
    this.cards.forEach((objCard) => {

      const card = this.func(objCard, markup, openPopupImg);

      this.addCard(card);
    })
  }
}