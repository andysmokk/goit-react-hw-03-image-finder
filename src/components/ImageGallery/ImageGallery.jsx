import { Component } from 'react';
import { toast } from 'react-toastify';

import s from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import imagesAPI from '../../services/imagesApi';
import ButtonLoadMore from '../ButtonLoadMore/ButtonLoadMore';
import LoaderSpinner from '../LoaderSpinner/LoaderSpinner';

class ImageGallery extends Component {
  state = {
    images: [],
    loading: false,
    page: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    const { imageName } = this.props;
    if (prevProps.imageName !== imageName) {
      this.setState({ loading: true });

      setTimeout(() => {
        imagesAPI
          .fetchImages(imageName, this.state.page)
          .then(images => {
            images.hits.length === 0
              ? toast.info(`Картинок с названием ${`"${imageName}"`} нет`)
              : this.setState({ images: images.hits });
          })
          .catch(error => console.log(error))
          .finally(() => this.setState({ loading: false }));
      }, 1000);
    }

    if (prevState.images !== this.state.images) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  }

  loadMore = moreImages => {
    const { images } = this.state;
    this.setState({ images: [...images, ...moreImages] });
  };

  render() {
    return (
      <>
        {!this.props.imageName && (
          <h2 className={s.title}>Введите название картинки</h2>
        )}
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
            dataUpdate={this.dataUpdate}
          />
        )}
        {this.state.loading && <LoaderSpinner />}
      </>
    );
  }
}

export default ImageGallery;
