import React, { Component } from 'react';
import s from './ButtonLoadMore.module.css';
import imagesAPI from '../../services/imagesApi';

class ButtonLoadMore extends Component {
  state = {
    page: 1,
  };

  buttonLoadMore = () => {
    imagesAPI
      .fetchImages(this.props.imageName, this.state.page + 1)
      .then(images => this.props.loadMore(images.hits))
      .then(this.setState({ page: this.state.page + 1 }));
  };

  render() {
    return (
      <button type="button" className={s.Button} onClick={this.buttonLoadMore}>
        Load more
      </button>
    );
  }
}

export default ButtonLoadMore;
