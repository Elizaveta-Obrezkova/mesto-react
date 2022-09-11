import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';


function Card(props) {

    const currentUser = React.useContext(CurrentUserContext);

    const isOwn = props.card.owner._id === currentUser._id;

    const isLiked = props.card.likes.some(i => i._id === currentUser._id);

    function handleClick() {
        props.onCardClick(props.card);
    }

    function handleCardLike() {
        props.onCardLike(props.card);
    }

    function handleCardDelete() {
        props.onCardDelete(props.card);
    }


    return (
        <div className="element">
            <img className="element__photo" alt={props.card.name} src={props.card.link} onClick={handleClick} />
            <div className="element__caption">
                <h2 className="element__title">{props.card.name}</h2>
                <div className="element__like">
                    <button type="button" className={isLiked ? 'button-like button-like_active' : 'button-like'} aria-label="Мне нравится." onClick={handleCardLike}></button>
                    <p className="element__like-counter">{props.card.likes.length}</p>
                </div>
            </div>
           { isOwn && <button type="button" className="button-delete" aria-label="Удалить." onClick={handleCardDelete}></button> }
        </div>
    )
}

export default Card;
