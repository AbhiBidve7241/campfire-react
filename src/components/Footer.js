import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <img src="/Assets/logo/logo.png" alt="CampFire" className="footer-logo" />
          <div className="contact-info">
            <p><strong>Address:</strong> Sector 24 Nigdi 411044, Pune</p>
            <p><strong>Phone:</strong> +91 986532147</p>
          </div>
          <div className="social-links">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <a href="https://404notfound.com/" aria-label="Facebook">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="https://404notfound.com/" aria-label="Instagram">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="https://404notfound.com/" aria-label="Twitter">
                <i className="fa-brands fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-section">
          <h4>Information</h4>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><a href="https://404notfound.com/">Courier Partner</a></li>
            <li><a href="https://404notfound.com/">Privacy Policy</a></li>
            <li><a href="https://404notfound.com/">Terms and Conditions</a></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>My Account</h4>
          <ul>
            <li><a href=" ">Sign In</a></li>
            <li><Link to="/cart">View Cart</Link></li>
            <li><a href=" ">Wishlists</a></li>
            <li><a href=" ">Track Order</a></li>
            <li><a href=" ">Help</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Install App</h4>
          <div className="app-links">
            <a href="https://404notfound.com/">
              <img src="/Assets/Footer/play.jpg" alt="Google Play" />
            </a>
            <a href="https://404notfound.com/">
              <img src="/Assets/Footer/app.jpg" alt="App Store" />
            </a>
          </div>
          <div className="payment-methods">
            <p>Secured Payment Gateways</p>
            <img src="/Assets/Footer/pay.png" alt="Payment Methods" />
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} CampFire. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
