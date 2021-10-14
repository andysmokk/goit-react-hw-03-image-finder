import React, { Component } from 'react';
import './App.css';

import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Button from './components/Button/Button';

class App extends Component {
  state = {
    imageName: '',
  };

  onSubmitForm = imageName => {
    this.setState({ imageName });
  };

  render() {
    return (
      <div className="App">
        <Searchbar onSubmit={this.onSubmitForm} />
        <ImageGallery imageName={this.state.imageName} />
        <Button />
      </div>
    );
  }
}

export default App;
