function ImagePopup(props) {
  //console.log(props)

  return (
    <div
    className={`popup popup_edit-image ${props.card.link ? 'popup_opened' : ''}`}
    >
      <div className="popup__container-images">
        <img
          className="popup__images"
          src={props.card.link}
          alt={props.card.name}
        />
        <p className="popup__images-title">{props.card.name}</p>
        <button
          className="popup__close popup__close_edit-image"
          type="button"
          onClick={props.onClose}
        ></button>
      </div>
    </div>
  );
}

export default ImagePopup;
