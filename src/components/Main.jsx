import React from 'react';
import avatar from '../Images/AvatarLogo.png';
import { user } from '../utils/Api.js'
import Card from './Card'

function Main(props) {

    const [userName, setUserName] = React.useState();
    const [userDescription, setUserDescription] = React.useState();
    const [userAvatar, setUserAvatar] = React.useState();
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        user.getUserData()
            .then((values) => {
                setUserName(values['name'])
                setUserDescription(values['about'])
                setUserAvatar(values['avatar'])
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    React.useEffect(() => {
        user.getCards()
            .then((items) => {
                setCards(items);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    return (
        <main className="content">
            <section className="profile page__profile">
                <div className="profile__avatar">
                    <img src={userAvatar ? userAvatar: avatar} className="avatar" alt="Владелец профиля" />
                    <button type="button" onClick={props.onEditAvatar} className="edit-button edit-button_type_update-avatar" aria-label="Обновить аватар."></button>
                </div>
                <div className="profile-info">
                    <h1 className="profile-owner">{userName}</h1>
                    <p className="profile-info__about-owner">{userDescription}</p>
                    <button type="button" onClick={props.onEditProfile} className="edit-button edit-button_type_profile-info" aria-label="Изменить данные профиля."></button>
                </div>
                <button type="button" onClick={props.onAddPlace} className="add-button" aria-label="Добавить фотографию."></button>
            </section>
            <section className="elements page__elements">
                {cards.reverse().map((item) =>
                    <Card card={item} key={item._id} onCardClick={props.onSelectedCard}/>
                )}
                    </section>
        </main>
    );
}

export default Main;
