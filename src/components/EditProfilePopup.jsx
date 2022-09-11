import React from 'react';
import PopupWithForm from './PopupWithForm'
import {CurrentUserContext} from '../contexts/CurrentUserContext';

export default function EditProfilePopup(props) {

    const [name, setName] = React.useState('');
    const [description, setDescription] = React.useState('');


    const currentUser = React.useContext(CurrentUserContext);

    React.useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
    }, [currentUser, props.isOpen]);

    function handleChangeName(e) {
        setName(e.target.value)
    }

    function handleChangeDescription(e) {
        setDescription(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.onUpdateUser({
          name: name,
          about: description,
        });
      } 

    return (
        <PopupWithForm name="edit" title="Редактировать профиль" text="Сохранить" isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit}>
            <div className="input-container">
                <input id="name-owner" name="edit-name-owner" type="text" placeholder='Введите имя' value={name || ''} onChange={handleChangeName}
                    className="popup__input popup__input_name_owner" required minLength="2" maxLength="40" />
                <span id="error-name-owner" className="error-message"></span>
            </div>
            <div className="input-container">
                <input id="about-owner" name="edit-about-owner" type="text" placeholder='Расскажите о себе' value={description || ''} onChange={handleChangeDescription}
                    className="popup__input popup__input_name_about-owner" required minLength="2" maxLength="200" />
                <span id="error-about-owner" className="error-message"></span>
            </div>
        </PopupWithForm>
    )
}