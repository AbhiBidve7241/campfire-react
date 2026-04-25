import React from 'react';
import PlaceholderImage from './PlaceholderImage';
import './Services.css';

const servicesData = [
  {
    id: 1,
    title: 'Free Shipping',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.',
    icon: 'fa-truck-fast'
  },
  {
    id: 2,
    title: 'Secure Payment',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.',
    icon: 'fa-shield-halved'
  },
  {
    id: 3,
    title: '24/7 Support',
    description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.',
    icon: 'fa-headset'
  },
  {
    id: 4,
    title: 'Easy Returns',
    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
    icon: 'fa-rotate-left'
  },
  {
    id: 5,
    title: 'Genuine Products',
    description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur.',
    icon: 'fa-certificate'
  },
  {
    id: 6,
    title: 'Best Deals',
    description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.',
    icon: 'fa-tags'
  }
];

const Services = ({ showImages = false }) => {
  return (
    <section className="services section">
      <div className="container">
        <div className="section-header">
          <h2>Our Services</h2>
          <p>Why choose us for your tech needs</p>
        </div>

        <div className="services-grid">
          {servicesData.map((service) => (
            <div key={service.id} className="service-card">
              {showImages && (
                <div className="service-image">
                  <PlaceholderImage 
                    height="160px"
                    text={service.title}
                    className="product-placeholder"
                  />
                </div>
              )}
              <div className="service-icon">
                <i className={`fa-solid ${service.icon}`}></i>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
