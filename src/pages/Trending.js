import React from 'react';
import ProductCard from '../components/ProductCard';
import { featuredProducts } from '../data/products';
import './Trending.css';

const Trending = () => {
  return (
    <div className="trending-page">
      <section className="trending-hero">
        <div className="trending-hero-content">
          <h1>#TrendingNow</h1>
          <p>Discover what's hot in the mobile world</p>
        </div>
      </section>

      <section className="trending-content section">
        <div className="container">
          <div className="section-header">
            <h2>Trending Products</h2>
            <p>Most popular smartphones this month</p>
          </div>

          <div className="products-grid">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Trending;
