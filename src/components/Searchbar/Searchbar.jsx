import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import s from './Searchbar.module.css';

class Searchbar extends Component {
  state = {
    imageName: '',
  };

  onSubmitForm = e => {
    e.preventDefault();

    if (this.state.imageName.trim() === '') {
      toast.info('Введите название картинки!');
      return;
    }

    this.props.onSubmit(this.state.imageName);
    this.setState({ imageName: '' });
  };

  onChangeImageName = e => {
    // const { name, value } = target;
    // this.setState({ [name]: value });
    this.setState({ imageName: e.target.value });
  };

  render() {
    return (
      <>
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
        <ToastContainer autoClose={2000} />
      </>
    );
  }
}

export default Searchbar;
