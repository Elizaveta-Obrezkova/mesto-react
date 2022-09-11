function PopupWithForm(props) {
    return (
        <div className={props.isOpen ? `popup popup_type_${props.name} popup_opened` : `popup popup_type_${props.name}` }>
            <div className={`popup__container popup__container_type_${props.name}`}>
                <button type="button" className="popup__close" aria-label="Закрыть." onClick={props.onClose}></button>
                <h2 className="popup__title">{props.title}</h2>
                <form name={`${props.name}-form`} className={`popup__form popup__form_type_${props.name}`} onSubmit={props.onSubmit}>
                    {props.children}
                    <button type="submit" className="popup__button">{props.text}</button>
                </form>
            </div>
        </div>
    );
}

export default PopupWithForm;
