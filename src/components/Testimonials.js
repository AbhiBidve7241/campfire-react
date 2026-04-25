import React, { useState, useEffect } from 'react';
import PlaceholderImage from './PlaceholderImage';
import './Testimonials.css';

const testimonialsData = [
  {
    id: 1,
    name: 'Rahul Sharma',
    role: 'Verified Buyer',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. The product quality exceeded my expectations.',
    rating: 5
  },
  {
    id: 2,
    name: 'Priya Patel',
    role: 'Tech Enthusiast',
    text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore. Amazing service and fast delivery. Would definitely recommend to friends and family.',
    rating: 5
  },
  {
    id: 3,
    name: 'Amit Kumar',
    role: 'Regular Customer',
    text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Great value for money and excellent customer support.',
    rating: 4
  },
  {
    id: 4,
    name: 'Sneha Gupta',
    role: 'First Time Buyer',
    text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque. The ordering process was smooth and the product arrived in perfect condition.',
    rating: 5
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => setCurrentIndex(index);

  return (
    <section className="testimonials section">
      <div className="container">
        <div className="section-header">
          <h2>What Our Customers Say</h2>
          <p>Real feedback from real customers</p>
        </div>

        <div className="testimonials-slider">
          {testimonialsData.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`testimonial-card ${index === currentIndex ? 'active' : ''}`}
            >
              <div className="testimonial-avatar">
                <PlaceholderImage 
                  width="80px" 
                  height="80px" 
                  text={testimonial.name.charAt(0)}
                  className="small-placeholder"
                  style={{ borderRadius: '50%' }}
                />
              </div>
              <div className="testimonial-rating">
                {[...Array(5)].map((_, i) => (
                  <i 
                    key={i} 
                    className={`fa-solid fa-star ${i < testimonial.rating ? 'filled' : ''}`}
                  ></i>
                ))}
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="testimonial-author">
                <h4>{testimonial.name}</h4>
                <span>{testimonial.role}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="testimonial-indicators">
          {testimonialsData.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
