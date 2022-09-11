import React from 'react';
import PopupWithForm from './PopupWithForm'


export default function AddPlacePopup (props) {

    const [name, setName] = React.useState('');
    const [link, setLink] = React.useState('');

    function handleChangeName(e) {
        setName(e.target.value)
    }

    function handleChangeLink(e) {
        setLink(e.target.value)
    }

    function handleAddPlaceSubmit(e) {
        e.preventDefault();

        props.onAddPlace({
            name: name,
            link: link,
        });

    }

    return (
        <PopupWithForm name="add" title="Новое место" text="Создать" isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleAddPlaceSubmit}>
            <div className="input-container">
                <input id="title-place" name="add-title-place" type="text"
                    className="popup__input popup__input_name_title-place" placeholder="Название" required minLength="2"
                    maxLength="30" value={name} onChange={handleChangeName}/>
                <span id="error-title-place" className="error-message"></span>
            </div>
            <div className="input-container">
                <input id="photo-place" name="add-photo-place" type="url" value={link} onChange={handleChangeLink}
                    className="popup__input popup__input_name_photo-place" placeholder="Ссылка на картинку" required />
                <span id="error-photo-place" className="error-message"></span>
            </div>
        </PopupWithForm>
    )
}