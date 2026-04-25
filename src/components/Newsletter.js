import React, { useState } from 'react';
import './Newsletter.css';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Subscribing:', email);
    setEmail('');
  };

  return (
    <section className="newsletter">
      <div className="newsletter-content">
        <div className="newsletter-text">
          <h3>Sign Up For Newsletter</h3>
          <p>Get updates on your e-mail about special offers and updates</p>
        </div>
        
        <form className="newsletter-form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="btn btn-primary">
            Subscribe
          </button>
        </form>

        <p className="newsletter-terms">*T&C will apply according to data policy</p>
      </div>
    </section>
  );
};

export default Newsletter;
