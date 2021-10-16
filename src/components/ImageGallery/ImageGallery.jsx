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
    const { page, images } = this.state;

    if (prevProps.imageName !== imageName) {
      this.setState({ loading: true });

      setTimeout(() => {
        imagesAPI
          .fetchImages(imageName, page)
          .then(images => {
            images.hits.length === 0
              ? toast.info(
                  `Картинок с названием ${`"${imageName}"`} нет. Введите новое название.`,
                )
              : this.setState({ images: images.hits });
          })
          .catch(error => console.log(error))
          .finally(() => this.setState({ loading: false }));
      }, 1000);
    }

    if (prevState.images !== images) {
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
    const { state, loadMore } = this;
    const { images, loading } = state;
    const { imageName, onOpenModal } = this.props;

    return (
      <>
        {!imageName && <h2 className={s.title}>Введите название картинки</h2>}
        <ul className={s.ImageGallery} onClick={onOpenModal}>
          <ImageGalleryItem images={images} />
        </ul>
        {images.length > 0 && (
          <ButtonLoadMore
            images={images}
            imageName={imageName}
            loadMore={loadMore}
          />
        )}
        {loading && <LoaderSpinner />}
      </>
    );
  }
}

export default ImageGallery;
