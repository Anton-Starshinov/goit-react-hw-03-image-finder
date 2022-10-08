import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';

export class App extends Component {
  state = {
    request: '',
  };

  formSubmitHandler = request => {
    console.log(request);
    this.setState({ request });
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.formSubmitHandler} />
      </div>
    );
  }
}
