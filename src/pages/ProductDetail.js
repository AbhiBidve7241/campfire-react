import React from 'react';
import { useParams, Link } from 'react-router-dom';
import ProductDescription from '../components/ProductDescription';
import PlaceholderImage from '../components/PlaceholderImage';
import { featuredProducts } from '../data/products';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  
  // Find product by ID or use first product as demo
  const product = featuredProducts.find(p => {
    const productId = p.link.split('/').pop();
    return productId === id;
  }) || featuredProducts[0];

  return (
    <div className="product-detail-page">
      <section className="product-detail-hero">
        <div className="product-detail-hero-content">
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <i className="fa-solid fa-chevron-right"></i>
            <Link to="/shop">Shop</Link>
            <i className="fa-solid fa-chevron-right"></i>
            <span>{product.name} {product.model}</span>
          </div>
          <h1>{product.name} {product.model}</h1>
        </div>
      </section>

      <section className="product-main section">
        <div className="container">
          <div className="product-main-grid">
            <div className="product-gallery">
              <div className="product-main-image">
                <PlaceholderImage 
                  height="500px"
                  text="Product Main"
                  className="product-placeholder"
                />
              </div>
              <div className="product-thumbnails">
                {[1, 2, 3, 4].map((num) => (
                  <div key={num} className="thumbnail">
                    <PlaceholderImage 
                      height="100px"
                      number={num}
                      className="small-placeholder"
                    />
                  </div>
                ))}
              </div>
            </div>
            
            <div className="product-info">
              <span className="product-brand">{product.name}</span>
              <h2>{product.model}</h2>
              <p className="product-price-large">₹{product.price.toLocaleString()}</p>
              <p className="product-short-desc">{product.description}</p>
              
              <div className="product-actions">
                <button className="btn btn-primary btn-large">
                  <i className="fa-solid fa-cart-shopping"></i>
                  Add to Cart
                </button>
                <button className="btn btn-outline btn-large">
                  <i className="fa-regular fa-heart"></i>
                  Wishlist
                </button>
              </div>

              <div className="product-meta">
                <div className="meta-item">
                  <i className="fa-solid fa-truck-fast"></i>
                  <span>Free Shipping</span>
                </div>
                <div className="meta-item">
                  <i className="fa-solid fa-shield-halved"></i>
                  <span>1 Year Warranty</span>
                </div>
                <div className="meta-item">
                  <i className="fa-solid fa-rotate-left"></i>
                  <span>7-Day Returns</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProductDescription product={product} />
    </div>
  );
};

export default ProductDetail;
