import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import { AppDiv } from './App.styled';

export class App extends Component {
  state = {
    request: '',
  };

  formSubmitHandler = request => {
    this.setState({ request });
  };

  render() {
    return (
      <AppDiv>
        <Searchbar onSubmit={this.formSubmitHandler} />
        <ImageGallery request={this.state.request} />
      </AppDiv>
    );
  }
}
