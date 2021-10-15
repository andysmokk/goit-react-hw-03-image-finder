import { Component } from 'react';
import s from './ImageGalleryItem.module.css';

class ImageGalleryItem extends Component {
  render() {
    return (
      <>
        {this.props.images &&
          this.props.images.map(image => (
            <li className={s.ImageGalleryItem} key={image.id}>
              <img
                src={image.webformatURL}
                alt={image.tags}
                className={s.ImageGalleryItemImage}
                data-image={image.largeImageURL}
              />
            </li>
          ))}
      </>
    );
  }
}

export default ImageGalleryItem;
