import { Component } from 'react';
import s from './ImageGalleryItem.module.css';

class ImageGalleryItem extends Component {
  state = {
    images: [],
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.imageName !== this.props.imageName) {
      fetch(
        `https://pixabay.com/api/?q=${this.props.imageName}&page=1&key=23025169-5a1370e5bf826cff1ac1e8732&image_type=photo&orientation=horizontal&per_page=12`,
      )
        .then(response => response.json())
        .then(images => this.setState({ images: images.hits }));
    }
  }

  render() {
    return (
      <>
        {this.state.images.map(image => (
          <li className={s.ImageGalleryItem} key={image.id}>
            <img
              src={image.webformatURL}
              alt={image.tags}
              className={s.ImageGalleryItemImage}
            />
          </li>
        ))}
      </>
    );
  }
}

export default ImageGalleryItem;
