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
    if (this.state.request.trim() === '') {
      alert('Введите название картинки!');
      return;
    }
    this.props.onSubmit(this.state.request);
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
