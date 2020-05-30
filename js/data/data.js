const initialCards = [{
  name: 'Архыз',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
},
{
  name: 'Челябинская область',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
},
{
  name: 'Иваново',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
},
{
  name: 'Камчатка',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
},
{
  name: 'Холмогорский район',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
},
{
  name: 'Байкал',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
},
{
  name: 'Нургуш',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/khrebet-nurgush.jpg'
},
{
  name: 'Тулиновка',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/tulinovka.jpg'
},
{
  name: 'Остров Желтухина',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/zheltukhin-island.jpg'
},
{
  name: 'Владивосток',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/vladivostok.jpg'
}
];

const cardMarkup = `<div class="place-card">
              <div class="place-card__image">
                  <button class="place-card__delete-icon"></button>
              </div>
              <div class="place-card__description">
                  <h3 class="place-card__name"></h3>
                  <button class="place-card__like-icon"></button>
              </div>
              </div>`; 
              
const imgPopupMarkup = `<div class="popup__img-content">
                      <img class="popup__img" src="" alt="картинка">
                      <img src="./images/close.svg" alt="" class="popup__close">
                  </div> `;

const editPopupMarkup = `<div class="popup__content popup__content-edit">
                      <img src="./images/close.svg" alt="" class="popup__close">
                      <h3 class="popup__title">Редактировать профиль</h3>
                      <form class="popup__form" name="profile" novalidate>
                          <div class="popup__row">
                              <input type="text" name="name" class="popup__input popup__input_type_name" minlength="2" maxlength="30" required placeholder="Имя">
                              <span class="popup__error" data-for="name"></span>
                          </div>
                          <div class="popup__row">
                              <input type="text" name="about" class="popup__input popup__input_type_about" minlength="2" maxlength="30" required placeholder="О себе">
                              <span class="popup__error" data-for="about"></span>
                          </div>
                          <button type="submit" name="button" class="button popup__button popup__button_edit">Сохранить</button>
                      </form>
                   </div>`;

const addCardPopupMarkup = `<div class="popup__content popup__content-add-card">
                          <img src="./images/close.svg" alt="" class="popup__close">
                          <h3 class="popup__title">Новое место</h3>
                          <form class="popup__form" name="add" novalidate>
                              <div class="popup__row">
                                  <input type="text" name="calling" class="popup__input popup__input_type_name" minlength="2" maxlength="30" required placeholder="Название">
                                  <span class="popup__error" data-for="calling"></span>
                              </div>
                              <div class="popup__row">
                                  <input type="text" name="link" class="popup__input popup__input_type_link-url" pattern="https?://.+" required placeholder="Ссылка на картинку">
                                  <span class="popup__error" data-for="link"></span>
                              </div>
                              <button type="submit" name="button" class="button popup__button popup__button_add-card" disabled>+</button>
                          </form>
                      </div>`;