import React, { Component } from 'react';
import s from './ButtonLoadMore.module.css';
import imagesAPI from '../../services/imagesApi';
import LoaderSpinner from '../LoaderSpinner/LoaderSpinner';

class ButtonLoadMore extends Component {
  state = {
    page: 1,
    loading: false,
  };

  buttonLoadMore = () => {
    this.setState({ loading: true });
    console.log();

    setTimeout(() => {
      imagesAPI
        .fetchImages(this.props.imageName, this.state.page + 1)
        .then(images => this.props.loadMore(images.hits))
        .then(this.setState({ page: this.state.page + 1 }))
        .finally(() => this.setState({ loading: false }));
    }, 1000);
    console.log('this.props.imageName', this.props.imageName);
  };

  render() {
    return (
      <button type="button" className={s.Button} onClick={this.buttonLoadMore}>
        {this.state.loading ? <LoaderSpinner /> : <p>Load more</p>}
      </button>
    );
  }
}

export default ButtonLoadMore;
