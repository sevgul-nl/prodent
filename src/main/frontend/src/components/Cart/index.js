import React, { PropTypes } from 'react';
import './styles.css';

const Cart = ({ total, showItemAdded }) => {
  return <div className="checkoutSection"></div>;
};

Cart.propTypes = {
  total: PropTypes.number,
  showItemAdded: PropTypes.bool,
};

export default Cart;
