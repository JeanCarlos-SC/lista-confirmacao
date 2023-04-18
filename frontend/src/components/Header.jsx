import React from 'react';
import '../style/Header.css';
import capa from '../img/convite-header-sem.png';

class Header extends React.Component {
  state = {
    products: [],
  };

  componentDidMount() {
    const GET_PRODUCTS = localStorage.getItem('productsOnCart');
    if (GET_PRODUCTS) {
      this.setState({ products: JSON.parse(GET_PRODUCTS) });
    }
  }

  componentDidUpdate(_, prevState) {
    const GET_PRODUCTS = JSON.parse(localStorage.getItem('productsOnCart'));
    if (GET_PRODUCTS && GET_PRODUCTS.length !== prevState.products.length) {
      this.setState({ products: GET_PRODUCTS });
    }
  }

  render() {
    return (
      <header>
        <img src={ capa } />
      </header>
    );
  }
}
export default Header;
