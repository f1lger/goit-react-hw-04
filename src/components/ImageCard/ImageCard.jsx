import style from "./ImageCard.module.css"
const ImageCard = ({ url, description, onImageClick }) => {
  return (
    <div>
      <img
        className={style.imageCard}
        src={url}
        alt={description}
        onClick={onImageClick}
      />
    </div>
  );
};
export default ImageCard;