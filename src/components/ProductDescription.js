import React from 'react';
import PlaceholderImage from './PlaceholderImage';
import './ProductDescription.css';

const ProductDescription = ({ product }) => {
  const demoProduct = product || {
    name: 'Premium Smartphone',
    model: 'Pro Max 2024',
    price: 79999,
    description: 'Experience the future of mobile technology with our flagship device.'
  };

  const features = [
    {
      id: 1,
      title: 'Advanced Camera System',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      id: 2,
      title: 'Powerful Performance',
      text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      id: 3,
      title: 'All-Day Battery Life',
      text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
    }
  ];

  return (
    <section className="product-description section">
      <div className="container">
        <div className="product-description-header">
          <h2>{demoProduct.name} {demoProduct.model}</h2>
          <p className="product-price">₹{demoProduct.price.toLocaleString()}</p>
        </div>

        <div className="product-description-grid">
          {features.map((feature, index) => (
            <div key={feature.id} className="description-card">
              <div className="description-image">
                <PlaceholderImage 
                  height="280px"
                  number={index + 1}
                  className="product-placeholder"
                />
              </div>
              <div className="description-content">
                <span className="description-number">0{feature.id}</span>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="product-full-description">
          <h3>Product Overview</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
          <p>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
            mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit 
            voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab 
            illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductDescription;
