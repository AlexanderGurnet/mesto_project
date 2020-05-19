 // ******************************** Переменные ********************************
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

const placesList = document.querySelector('.places-list');
const root = document.querySelector('.root');

const profileName = document.querySelector('.user-info__name');
const profileAbout = document.querySelector('.user-info__job');

const addCardButton = document.querySelector('.user-info__button');
const popupAddCard = document.querySelector('.popup_add-card');
const popupAddCardClose = popupAddCard.querySelector('.popup__close');

const editButton = document.querySelector('.user-info__edit');
const popupEdit = document.querySelector('.popup_edit');
const popupEditClose = popupEdit.querySelector('.popup__close');

const popupImgButton = document.querySelector('.popup__img-content').querySelector('.popup__close');

const formAddCard = document.forms.add;
const formAddCardName = formAddCard.elements.calling;
const formAddCardLink = formAddCard.elements.link;

const formProfile = document.forms.profile;
const formProfileName = formProfile.elements.name;
const formProfileAbout = formProfile.elements.about;

//**************************** Функции ********************************

function createCardMarkup(name, link) {
    const cardContainer = document.createElement('div');
    cardContainer.classList.add('card-wrap');
    cardContainer.insertAdjacentHTML('afterbegin', cardMarkup);
    cardContainer.querySelector('.place-card__image').style.backgroundImage = `url(${link})`;
    cardContainer.querySelector('.place-card__name').textContent = name;
    return cardContainer;
}

function handleButtonsClick(event) {
    const target = event.target;
    if(target === editButton) {
        popupEdit.classList.toggle('popup_is-opened'); 
        formProfileName.value = profileName.textContent;
        formProfileAbout.value = profileAbout.textContent;
        setSubmitButtonState(formProfile);
    }
    if(target === addCardButton) {
        popupAddCard.classList.toggle('popup_is-opened');
        setSubmitButtonState(formAddCard); 
    }
}

function handlePopupClicks(event) {
    const target = event.target;
    if (target.classList.contains('place-card__image')) {
        createPopupImg(event);
    } else if(target === popupEditClose) {
        popupEdit.classList.toggle('popup_is-opened'); 
        resetForm(formProfile);
        deleteErrors();
    } else if(target === popupAddCardClose) {
        popupAddCard.classList.toggle('popup_is-opened'); 
        resetForm(formAddCard);
        deleteErrors();
    } else if(target === popupImgButton) {
        closeImgPopup(event);
    }
}

function handleCardsClick(event) {
    const target = event.target;
    if(target.classList.contains('place-card__like-icon')) {
        likeCard(target);
    } else if(target.classList.contains('place-card__delete-icon')){
        deleteCard(event);
    }

}
function createPopupImg(event) {
    const imgUrl = event.target.style.backgroundImage.slice(5,-2);
    const popupImg = document.querySelector('.popup__img-content');
    popupImg.closest('.popup').classList.add('popup_is-opened');
    popupImg.querySelector('.popup__img').src = imgUrl;
}

function closeImgPopup(event) {
    const imgPopup = event.target.closest('.popup');
    imgPopup.classList.toggle('popup_is-opened');
}

function likeCard(target) {
    target.classList.toggle('place-card__like-icon_liked');
}

function deleteCard(event) {
    event.currentTarget.removeChild(event.target.closest('.card-wrap'));  
}

function getErrorMessage(input) {
    return document.querySelector(`.popup__error[data-for="${input.name}"]`);
}

function checkInputValidity(input, type) {
    const form = input.closest('.popup__form');
    if(type === 'text') {
        if(input.validity.valueMissing) {
            getErrorMessage(input).textContent = 'Это обязательное поле';
        } else if(input.validity.patternMismatch) {
            getErrorMessage(input).textContent = 'Здесь должна быть ссылка';
        } else if(input.validity.tooShort || input.validity.tooLong) {
            getErrorMessage(input).textContent = 'Должно быть от 2 до 30 символов';
        } else if(input.validity.valid) {
            getErrorMessage(input).textContent = '';
        }
    }
    setSubmitButtonState(form);
}

function setSubmitButtonState(form) {
    const button = form.querySelector('button');
    if(form.checkValidity()) {
        button.disabled = false;
    } else {
        button.disabled = true;
    }       
}

function handleInputsChange(event) {
    const target = event.target;
    const type = target.type;
    checkInputValidity(target, type);   
}

function resetForm(form) {
    form.reset();
}

function deleteErrors() {
    formAddCardName.nextElementSibling.textContent = '';
    formAddCardLink.nextElementSibling.textContent = ''; 
    formProfileName.nextElementSibling.textContent = ''; 
    formProfileAbout.nextElementSibling.textContent = '';
}

function switchPopup(popup) {
    popup.classList.toggle('popup_is-opened'); 
}

function submitCard(event) {
    event.preventDefault() 
    addCard(formAddCardName.value, formAddCardLink.value);
    resetForm(formAddCard);
    switchPopup(popupAddCard);     
}

function submitProfile(event) {
    event.preventDefault();
    profileName.textContent = formProfileName.value;
    profileAbout.textContent = formProfileAbout.value;
    switchPopup(popupEdit);
}

function addCard(name, link) {
    placesList.appendChild(createCardMarkup(name, link));
}

//******************************** Слушатели событий ********************************

editButton.addEventListener('click', handleButtonsClick);
addCardButton.addEventListener('click', handleButtonsClick);

placesList.addEventListener('click', handleCardsClick);
root.addEventListener('click', handlePopupClicks);

formProfile.addEventListener('input', handleInputsChange);
formAddCard.addEventListener('input', handleInputsChange);

formAddCard.addEventListener('submit', submitCard);
formProfile.addEventListener('submit', submitProfile);

//******************************** Код программы ********************************

initialCards.forEach(function(item) {
    addCard(item.name, item.link);
});
