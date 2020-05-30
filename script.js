/****************************** Переменные *************************************/

const popup = document.querySelector('.popup');

const nameText = document.querySelector('.user-info__name').textContent;
const aboutText = document.querySelector('.user-info__job').textContent;
const userInfo = new UserInfo(nameText, aboutText);

const addCardButton = document.querySelector('.user-info__button');
const editButton = document.querySelector('.user-info__edit');

const editPopup = new Popup(popup, editPopupMarkup);
const formProfile = editPopup.popupContainer.querySelector('form[name="profile"]');
const profileFormValidator = new FormValidator(formProfile);

const addCardPopup = new Popup(popup, addCardPopupMarkup);
const formAddCard = addCardPopup.popupContainer.querySelector('form[name="add"]');
const addFormValidator = new FormValidator(formAddCard);

/****************************** Функции *************************************/

const openImgPopup = (cardLink) => {
  const imgPopup = new Popup(popup, imgPopupMarkup);
  imgPopup.addImg(cardLink);
  imgPopup.open();
}

const newCard = (objCard, cardMarkup, openImgPopup) => {
  const card = new Card(objCard, cardMarkup, openImgPopup);
  return card.create();
}

/****************************** Код Программы *************************************/

const placesList = new CardList(document.querySelector('.places-list'), initialCards, newCard);
placesList.render(cardMarkup, openImgPopup);

/****************************** Слушатели событий *************************************/

editButton.addEventListener('click', () => {
  editButton.blur();
  editPopup.addUserInfo(userInfo.getUserInfo());
  editPopup.open();
  profileFormValidator.checkInitialInputValidity();
});

formProfile.addEventListener('submit', (event) => {
  event.preventDefault();
  editPopup.close();
  userInfo.setUserInfo(editPopup.getUserInfo());
  userInfo.updateUserInfo();
  event.target.reset();
});

addCardButton.addEventListener('click', () => {
  addCardButton.blur();
  addCardPopup.open();
  formAddCard.reset();
  addFormValidator.checkInitialInputValidity();
  addFormValidator.resetErrorMsg();
});

formAddCard.addEventListener('submit', (event) => {
  event.preventDefault();
  addCardPopup.close();
  const cardElem = newCard(addCardPopup.getObjCard(), cardMarkup, openImgPopup);
  placesList.addCard(cardElem);
});
