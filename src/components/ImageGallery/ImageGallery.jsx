import ImageCard from "../ImageCard/ImageCard";
import style from "./ImageGallery.module.css";

const ImageGallery = ({ galleryList, onImageClick }) => {
  return (
    <ul className={style.galleryCont}>
      {/* Набір елементів списку із зображеннями */}
      {galleryList.map(({ description, id, urls: { small, regular } }) => (
        <li key={id} className={style.imageCont}>
          <div>
            <ImageCard
              alt={description}
              url={small}
              onImageClick={() => onImageClick({ url: regular, description })}
            />
          </div>
        </li>
      ))}
    </ul>
  );
};
export default ImageGallery;
