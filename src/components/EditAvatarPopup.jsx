import React from 'react';
import PopupWithForm from './PopupWithForm'


export default function EditAvatarPopup(props) {

    const avatarRef = React.useRef();
    
    React.useEffect(() => {
        avatarRef.current.value = '';
   }, [props.isOpen]);


    function handleSubmit(e) {
        e.preventDefault();
      
        props.onUpdateAvatar({
          avatar: avatarRef.current.value,
        });
      } 

    return (
        <PopupWithForm name="update-avatar" title="Обновить аватар" text="Сохранить" isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit}>
            <div className="input-container">
                <input id="photo-avatar" name="update-photo-avatar" type="url"
                    className="popup__input popup__input_name_photo-avatar" placeholder="Ссылка на фотографию" required ref={avatarRef}/>
                <span id="error-photo-avatar" className="error-message"></span>
            </div>
        </PopupWithForm>
    )
}