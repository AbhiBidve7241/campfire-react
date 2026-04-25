import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <Link to={product.link} className="product-link">
        <div className="product-image-wrapper">
          <img className='flex w-12 h-10' src={product.image} alt={`${product.name} ${product.model}`} />
        </div>
        <div className="product-details">
          <h5 className="product-brand">{product.name}</h5>
          <span className="product-model">{product.model}</span>
          <p className="product-description">{product.description}</p>
          <p className="product-price">₹{product.price.toLocaleString()}</p>
        </div>
      </Link>
      <button className="add-to-cart-btn" aria-label="Add to cart">
        <i className="fa-solid fa-cart-shopping"></i>
      </button>
    </div>
  );
};

export default ProductCard;
