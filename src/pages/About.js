import React from 'react';
import PlaceholderImage from '../components/PlaceholderImage';
import Stats from '../components/Stats';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>About Us</h1>
          <p>Your trusted partner in mobile technology</p>
        </div>
      </section>

      <section className="about-content section">
        <div className="container">
          <div className="about-grid">
            <div className="about-text">
              <h2>Who We Are</h2>
              <p>
                At CampFire, we are passionate about bringing you the latest in mobile 
                technology. Founded with a vision to make premium smartphones and accessories 
                accessible to everyone, we've grown into a trusted destination for tech enthusiasts.
              </p>
              <p>
                Our journey began with a simple idea: to create a seamless shopping experience 
                where quality meets affordability. Today, we partner with leading brands to offer 
                you an extensive range of smartphones, accessories, and more.
              </p>
              <p>
                We believe in not just selling products, but in building relationships with our 
                customers. Every purchase is backed by our commitment to quality service, genuine 
                products, and customer satisfaction.
              </p>
            </div>
            
            <div className="about-image">
              <PlaceholderImage 
                height="400px"
                text="About Us"
                className="product-placeholder"
              />
            </div>
          </div>

          <div className="values-section">
            <h2 className="text-center mb-4">Our Values</h2>
            <div className="values-grid">
              <div className="value-card">
                <div className="value-icon">
                  <i className="fa-solid fa-star"></i>
                </div>
                <h3>Quality First</h3>
                <p>We ensure every product meets the highest standards of quality and authenticity.</p>
              </div>

              <div className="value-card">
                <div className="value-icon">
                  <i className="fa-solid fa-shield-halved"></i>
                </div>
                <h3>Customer Trust</h3>
                <p>Building lasting relationships through transparency and excellent service.</p>
              </div>

              <div className="value-card">
                <div className="value-icon">
                  <i className="fa-solid fa-rocket"></i>
                </div>
                <h3>Innovation</h3>
                <p>Staying ahead with the latest technology and trends in the mobile industry.</p>
              </div>

              <div className="value-card">
                <div className="value-icon">
                  <i className="fa-solid fa-heart"></i>
                </div>
                <h3>Passion</h3>
                <p>We love what we do and it shows in every interaction with our customers.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Stats />
    </div>
  );
};

export default About;
