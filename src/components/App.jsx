import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    request: '',
  };

  formSubmitHandler = request => {
    this.setState({ request });
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.formSubmitHandler} />
        <ImageGallery request={this.state.request} />
      </div>
    );
  }
}
