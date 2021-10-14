import React, { Component } from 'react';
import './App.css';

import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
// import ButtonLoadMore from './components/ButtonLoadMore/ButtonLoadMore';

class App extends Component {
  state = {
    imageName: '',
  };

  onSubmitForm = imageName => {
    this.setState({ imageName: imageName });
  };

  render() {
    return (
      <div className="App">
        <Searchbar onSubmit={this.onSubmitForm} />
        <ImageGallery imageName={this.state.imageName} />
        {/* <ButtonLoadMore /> */}
      </div>
    );
  }
}

export default App;
