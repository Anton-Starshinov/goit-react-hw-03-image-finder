import React, { Component } from 'react';
import {
  SearchbarStyled,
  SearchForm,
  SearchFormButton,
  SearchFormButtonSpan,
  SearchFormInput,
} from './Searchbar.styled';

class Searchbar extends Component {
  state = {
    request: '',
  };

  handleChange = evt => {
    this.setState({ request: evt.currentTarget.value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.onSubmit(this.state.request);
    this.reset();
  };

  reset = () => {
    this.setState({ request: '' });
  };

  render() {
    return (
      <SearchbarStyled>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormButton type="submit">
            <SearchFormButtonSpan>Search</SearchFormButtonSpan>
          </SearchFormButton>

          <SearchFormInput
            type="text"
            autoComplete="off"
            autoFocus
            value={this.state.request}
            placeholder="Search images and photos"
            onChange={this.handleChange}
          />
        </SearchForm>
      </SearchbarStyled>
    );
  }
}

export default Searchbar;