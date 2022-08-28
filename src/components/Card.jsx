import React from 'react';


function Card(props) {

    function handleClick() {
        props.onCardClick(props.card);
      } 

    return (
        <div className="element">
            <img className="element__photo" alt={props.card.name} src={props.card.link} onClick={handleClick}/>
            <div className="element__caption">
                <h2 className="element__title">{props.card.name}</h2>
                <div className="element__like">
                    <button type="button" className="button-like" aria-label="Мне нравится."></button>
                    <p className="element__like-counter">{props.card.likes.length}</p>
                </div>
            </div>
            <button type="button" className="button-delete" aria-label="Удалить."></button>
        </div>
    )
}

export default Card;
