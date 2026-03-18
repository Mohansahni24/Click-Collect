import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { selectCartItemsCount } from './cartSlice';

const CartIcon = () => {
  const cartCount = useSelector(selectCartItemsCount);

  return (
    <Link to="/cart" className="relative">
      <FaShoppingCart className="text-2xl text-secondary hover:text-primary transition-colors" />
      {cartCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-danger text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
          {cartCount}
        </span>
      )}
    </Link>
  );
};

export default CartIcon;