import { Component } from 'react';
import s from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import imagesAPI from '../../services/imagesApi';
import ButtonLoadMore from '../ButtonLoadMore/ButtonLoadMore';

class ImageGallery extends Component {
  state = {
    images: [],
    // loading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.imageName !== this.props.imageName) {
      this.setState({ loading: true });

      imagesAPI
        .fetchImages(this.props.imageName)
        .then(images => this.setState({ images: images.hits }));
      // .finally(() => this.setState({ loading: false }));
    }

    // console.log('prevState.images', prevState.images);
    // console.log('this.state.images', this.state.images);

    if (prevState.images !== this.state.images) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  }

  loadMore = moreImages => {
    console.log(moreImages);
    const { images } = this.state;
    this.setState({ images: [...images, ...moreImages] });
  };

  render() {
    return (
      <>
        {/* {this.state.loading && <h1>Загрузка...</h1>} */}
        {!this.props.imageName && <h2>Введите название картинки</h2>}
        <ul className={s.ImageGallery} onClick={this.props.onOpenModal}>
          <ImageGalleryItem
            images={this.state.images}
            currentImage={this.props.currentImage}
          />
        </ul>
        {this.state.images.length > 0 && (
          <ButtonLoadMore
            images={this.state.images}
            imageName={this.props.imageName}
            loadMore={this.loadMore}
          />
        )}
      </>
    );
  }
}

export default ImageGallery;
