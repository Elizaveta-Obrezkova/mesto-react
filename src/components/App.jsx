import React from 'react';
import '../index.css';
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import PopupWithForm from './PopupWithForm'
import ImagePopup from './ImagePopup'

function App() {

    const [isEditProfilePopupOpen, openEditPopup] = React.useState(false);
    const [isAddPlacePopupOpen, openAddPopup] = React.useState(false);
    const [isEditAvatarPopupOpen, openAvatarPopup] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState();
    
    function closeAllPopups() {
        openEditPopup(false);
        openAddPopup(false);
        openAvatarPopup(false);
        setSelectedCard()
    }

    function handleEditAvatarClick() {
        openAvatarPopup(true)
    }

    function handleEditProfileClick() {
        openEditPopup(true)
    }

    function handleAddPlaceClick() {
        openAddPopup(true)
    }

    function handleCardClick (item) {
        setSelectedCard(item)
    }

    return (
        <div className="page">
            <Header />
            <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onSelectedCard={handleCardClick}/>
            <Footer />
            <PopupWithForm name="edit" title="Редактировать профиль" text="Сохранить" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
                <div className="input-container">
                    <input id="name-owner" name="edit-name-owner" type="text"
                        className="popup__input popup__input_name_owner" required minLength="2" maxLength="40" />
                    <span id="error-name-owner" className="error-message"></span>
                </div>
                <div className="input-container">
                    <input id="about-owner" name="edit-about-owner" type="text"
                        className="popup__input popup__input_name_about-owner" required minLength="2" maxLength="200" />
                    <span id="error-about-owner" className="error-message"></span>
                </div></PopupWithForm>
            <PopupWithForm name="add" title="Новое место" text="Создать" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
                <div className="input-container">
                    <input id="title-place" name="add-title-place" type="text"
                        className="popup__input popup__input_name_title-place" placeholder="Название" required minLength="2"
                        maxLength="30" />
                    <span id="error-title-place" className="error-message"></span>
                </div>
                <div className="input-container">
                    <input id="photo-place" name="add-photo-place" type="url"
                        className="popup__input popup__input_name_photo-place" placeholder="Ссылка на картинку" required />
                    <span id="error-photo-place" className="error-message"></span>
                </div></PopupWithForm>
            <PopupWithForm name="delete-card" title="Вы уверены?" text="Да" onClose={closeAllPopups}/>
            <PopupWithForm name="update-avatar" title="Обновить аватар" text="Сохранить" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
                <div className="input-container">
                    <input id="photo-avatar" name="update-photo-avatar" type="url"
                        className="popup__input popup__input_name_photo-avatar" placeholder="Ссылка на фотографию" required />
                    <span id="error-photo-avatar" className="error-message"></span>
                </div>
            </PopupWithForm>
            { selectedCard && (<ImagePopup card={selectedCard} onClose={closeAllPopups}/>) }
            

        </div>
    );
}

export default App;
