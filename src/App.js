import React, { Component } from 'react';
import { ToastContainer, Zoom } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import './App.css';

import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Modal from './components/Modal/Modal';
// import ButtonLoadMore from './components/ButtonLoadMore/ButtonLoadMore';

class App extends Component {
  state = {
    imageName: '',
    showModal: false,
    currentImage: '',
  };

  toggleModal = () => {
    this.setState(state => ({ showModal: !state.showModal }));
  };

  onOpenModal = e => {
    // console.log(e.target.nodeName);
    if (e.target.nodeName === 'IMG') {
      this.setState(({ showModal }) => ({
        currentImage: e.target.dataset.image,
        showModal: !showModal,
      }));
    }
  };

  onSubmitForm = imageName => {
    this.setState({ imageName: imageName });
  };

  render() {
    return (
      <div className="App">
        {this.state.showModal && (
          <Modal onCloseModal={this.toggleModal}>
            <img src={this.state.currentImage} alt="" width="950" />
          </Modal>
        )}
        <Searchbar onSubmit={this.onSubmitForm} />
        <ImageGallery
          imageName={this.state.imageName}
          onOpenModal={this.onOpenModal}
          currentImage={this.state.currentImage}
        />
        <ToastContainer
          autoClose={2500}
          position="bottom-right"
          transition={Zoom}
        />
        {/* <Loader
          type="Bars"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={2000}
        /> */}
      </div>
    );
  }
}

export default App;
