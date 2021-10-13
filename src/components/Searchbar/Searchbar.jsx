import React, { Component } from 'react';
import s from './Searchbar.module.css';

class Searchbar extends Component {
  state = {
    imageName: '',
  };

  onSubmitForm = e => {
    e.preventDefault();

    if (this.state.imageName.trim() === '') {
      alert('введите что-то');
      return;
    }

    this.props.onSubmit(this.state.imageName);
    this.setState({ imageName: '' });
  };

  onChangeImageName = ({ target }) => {
    const { name, value } = target;
    // console.log('e.target.name:', name);
    // console.log('e.target.value:', value);
    this.setState({ [name]: value });
  };

  render() {
    return (
      <header className={s.Searchbar}>
        <form className={s.SearchForm} onSubmit={this.onSubmitForm}>
          <button type="submit" className={s.SearchFormButton}>
            <span className={s.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            name="imageName"
            value={this.state.imageName}
            className={s.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.onChangeImageName}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
