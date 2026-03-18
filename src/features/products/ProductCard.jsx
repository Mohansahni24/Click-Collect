import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from '../cart/cartSlice';
import { FaStar, FaCartPlus } from 'react-icons/fa';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      quantity: 1,
      size: product.sizes?.[0] || 'M',
      color: product.colors?.[0] || 'black'
    }));
  };

  return (
    <div className="card product-card">
      <div className="relative overflow-hidden">
        <img 
          src={product.images[0]} 
          alt={product.name}
          className="product-card-image"
        />
        {product.discount > 0 && (
          <div className="absolute top-3 left-3">
            <span className="badge badge-danger">
              -{product.discount}%
            </span>
          </div>
        )}
        {!product.inStock && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <span className="text-white font-semibold">Out of Stock</span>
          </div>
        )}
      </div>
      
      <div className="product-card-body">
        <div className="mb-2">
          <span className="text-sm text-secondary">{product.brand}</span>
        </div>
        
        <Link to={`/product/${product.id}`}>
          <h3 className="product-card-title" title={product.name}>
            {product.name}
          </h3>
        </Link>
        
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-1">
            <FaStar className="text-warning" />
            <span className="font-medium">{product.rating}</span>
            <span className="text-sm text-secondary">({product.reviews})</span>
          </div>
          {product.inStock ? (
            <span className="badge badge-success text-xs">In Stock</span>
          ) : (
            <span className="badge badge-danger text-xs">Out of Stock</span>
          )}
        </div>
        
        <div className="mt-auto">
          <div className="flex items-center justify-between mb-4">
            <div>
              <span className="product-card-price">${product.price}</span>
              {product.originalPrice && (
                <span className="text-sm text-secondary line-through ml-2">
                  ${product.originalPrice}
                </span>
              )}
            </div>
          </div>
          
          <div className="product-card-actions">
            <Link to={`/product/${product.id}`} className="flex-1">
              <button className="btn btn-outline-primary w-full">
                View Details
              </button>
            </Link>
            {product.inStock && (
              <button 
                className="btn btn-primary w-full flex-1 flex items-center justify-center gap-2"
                onClick={handleAddToCart}
              >
                <FaCartPlus />
                Add to Cart
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;