import React from 'react';
import avatar from '../Images/AvatarLogo.png';
import Card from './Card'
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main(props) {

    const currentUser = React.useContext(CurrentUserContext);

    return (
        <main className="content">
            <section className="profile page__profile">
                <div className="profile__avatar">
                    <img src={currentUser.avatar ? currentUser.avatar : avatar} className="avatar" alt="Владелец профиля" />
                    <button type="button" onClick={props.onEditAvatar} className="edit-button edit-button_type_update-avatar" aria-label="Обновить аватар."></button>
                </div>
                <div className="profile-info">
                    <h1 className="profile-owner">{currentUser.name}</h1>
                    <p className="profile-info__about-owner">{currentUser.about}</p>
                    <button type="button" onClick={props.onEditProfile} className="edit-button edit-button_type_profile-info" aria-label="Изменить данные профиля."></button>
                </div>
                <button type="button" onClick={props.onAddPlace} className="add-button" aria-label="Добавить фотографию."></button>
            </section>
            <section className="elements page__elements">
                {props.cards.reverse().map((item) =>
                    (<Card card={item} key={item._id} onCardClick={props.onSelectedCard} onCardLike={props.onCardLike} onCardDelete={props.onCardDelete} />)
                )}
            </section>
        </main>
    );
}

export default Main;
