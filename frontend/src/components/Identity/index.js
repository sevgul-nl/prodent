import React, { Component, PropTypes } from 'react';
import Product from '../Product';
import CustomerInfoForm from '../UserProfileForm';
import './styles.css';

class Identity extends Component {
  renderForm() {
    const { handleSubmit } = this.props;
    return <CustomerInfoForm onSubmit={handleSubmit} />;
  }

  renderProductList() {
    const { products } = this.props;
    const hasProducts = products.length > 0;
    const nodes = hasProducts ? (
      products.map((product) => (
        <Product
          name={product.name}
          price={product.price}
          quantity={product.quantity}
          image={product.image}
          key={product.productId}
        />
      ))
    ) : (
      //TODO: Ask Josh for formatting
      <span className="emptyMessage"></span>
    );
    return (
      <div>
        <div className="infoHeader">Product List</div>
        <div className="productSection">{nodes}</div>
      </div>
    );
  }

  render() {
    return (
      <div>
        <div className="panel">
          <div className="formSection">{this.renderForm()}</div>
          <div className="listSection">{this.renderProductList()}</div>
        </div>
      </div>
    );
  }
}

Identity.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      productId: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
  total: PropTypes.string,
  handleSubmit: PropTypes.func,
};

export default Identity;
