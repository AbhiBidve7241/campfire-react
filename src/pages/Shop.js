import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { featuredProducts, newArrivals } from '../data/products';
import './Shop.css';

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const allProducts = [...featuredProducts, ...newArrivals];
  
  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'smartphones', name: 'Smartphones' },
    { id: 'accessories', name: 'Accessories' }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? allProducts 
    : selectedCategory === 'smartphones'
    ? featuredProducts
    : newArrivals;

  return (
    <div className="shop-page">
      <section className="shop-hero">
        <div className="shop-hero-content">
          <h1>#StayHome</h1>
          <p>Save more with coupons & up to 70% off!</p>
        </div>
      </section>

      <section className="shop-content section">
        <div className="container">
          <div className="shop-filters">
            {categories.map(category => (
              <button
                key={category.id}
                className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>

          <div className="products-grid">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;
