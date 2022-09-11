import React from 'react';
import '../index.css';
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import PopupWithForm from './PopupWithForm'
import EditProfilePopup from './EditProfilePopup'
import EditAvatarPopup from './EditAvatarPopup'
import AddPlacePopup from './AddPlacePopup'
import ImagePopup from './ImagePopup'
import { api } from '../utils/Api.js'
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function App() {

    const [isEditProfilePopupOpen, openEditPopup] = React.useState(false);
    const [isAddPlacePopupOpen, openAddPopup] = React.useState(false);
    const [isEditAvatarPopupOpen, openAvatarPopup] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState({});
    const [currentUser, setCurrentUser] = React.useState({});
    const [cards, setCards] = React.useState([]);

    function handleCardLike(card) {
        const isLiked = card.likes.some(i => i._id === currentUser._id);
        if (!isLiked) {
            api.likeCard(card._id)
                .then((newCard) => {
                    setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
                })
                .catch((err) => { console.log(err); });
        }
        else {
            api.deleteLike(card._id)
                .then((newCard) => {
                    setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
                })
                .catch((err) => { console.log(err); });
        }
    }

    function handleCardDelete(card) {
        api.deleteCard(card._id)
            .then(() => {
                setCards((state) => state.filter((c) => c._id !== card._id));
            })
            .catch((err) => { console.log(err); });
    }

    React.useEffect(() => {
        api.getCards()
            .then((items) => {
                setCards(items);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    React.useEffect(() => {
        api.getUserData()
            .then((values) => {
                setCurrentUser(values)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    function closeAllPopups() {
        openEditPopup(false);
        openAddPopup(false);
        openAvatarPopup(false);
        setSelectedCard({})
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

    function handleCardClick(item) {
        setSelectedCard(item)
    }

    function handleUpdateUser(info) {
        api.editUserinfo(info)
            .then((res) => {
                setCurrentUser(res)
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                closeAllPopups();
            })
    }

    function handleUpdateAvatar(info) {
        api.updateAvatar(info)
            .then((res) => {
                setCurrentUser(res)
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                closeAllPopups();
            })
    }

    function handleAddPlace(info) {
        api.createCard(info)
            .then((newCard) => {
                setCards([newCard, ...cards]); 
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                closeAllPopups();
            })
    }

    return (
        <CurrentUserContext.Provider value={currentUser}>
            <div className="page">
                <Header />
                <Main
                    onEditProfile={handleEditProfileClick}
                    onAddPlace={handleAddPlaceClick}
                    onEditAvatar={handleEditAvatarClick}
                    onSelectedCard={handleCardClick}
                    cards={cards}
                    onCardLike={handleCardLike}
                    onCardDelete={handleCardDelete}
                />
                <Footer />
                <EditProfilePopup
                    isOpen={isEditProfilePopupOpen}
                    onClose={closeAllPopups}
                    onUpdateUser={handleUpdateUser}
                />
                <AddPlacePopup
                    isOpen={isAddPlacePopupOpen}
                    onClose={closeAllPopups}
                    onAddPlace={handleAddPlace}
                />
                <PopupWithForm name="delete-card" title="Вы уверены?" text="Да" onClose={closeAllPopups} />
                <EditAvatarPopup
                    isOpen={isEditAvatarPopupOpen}
                    onClose={closeAllPopups}
                    onUpdateAvatar={handleUpdateAvatar}
                />
                {selectedCard._id && (<ImagePopup card={selectedCard} onClose={closeAllPopups} />)}
            </div>
        </CurrentUserContext.Provider>

    );
}

export default App;
