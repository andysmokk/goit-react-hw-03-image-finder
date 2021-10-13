import React, { Component } from 'react';
import './App.css';

import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';

class App extends Component {
  state = {
    imageName: '',
  };
  onSubmitForm = imageName => {
    this.setState({ imageName });
    console.log(imageName);
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.onSubmitForm} />
        <ImageGallery imageName={this.state.imageName} />
      </div>
    );
  }
}

export default App;
