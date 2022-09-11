function ImagePopup(props) {
    console.log(props)
    return (
        <div className={props.card._id ? `popup popup_type_see-photo popup_opened` : `popup popup_type_see-photo`}>
            <div className="photo-card">
                <button type="button" className="popup__close" aria-label="Закрыть." onClick={props.onClose}></button>
                <img className="photo-card__images" alt={props.card.name} src={props.card.link}/>
                <h2 className="photo-card__title">{props.card.name}</h2>
            </div>
        </div>
    );
}

export default ImagePopup;