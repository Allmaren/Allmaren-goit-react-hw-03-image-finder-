import PropTypes from 'prop-types';
import {
  PhotoCard,
  GalleryImage,
  GalleryBox,
} from './ImageGalleryItem.styled.js';

const ImageGalleryItem = ({ items }) => {
  const elements = items.map(({ id, webformatURL, largeImageURL, tags }) => (
    <PhotoCard key={id}>
      <GalleryImage src={webformatURL} alt={tags} loading="lazy" />
    </PhotoCard>
  ));
  return <GalleryBox>{elements}</GalleryBox>;
};

export default ImageGalleryItem;

ImageGalleryItem.defaultProps = {
  items: [],
};

ImageGalleryItem.propTypes = {
  items: PropTypes.array.isRequired,
};
