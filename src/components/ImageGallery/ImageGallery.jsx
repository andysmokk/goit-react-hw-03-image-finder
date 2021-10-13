import { Component } from 'react';
import s from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

class ImageGallery extends Component {
  render() {
    return (
      <ul className={s.ImageGallery}>
        <ImageGalleryItem imageName={this.props.imageName} />
      </ul>
    );
  }
}

export default ImageGallery;
