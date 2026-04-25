import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'Trending', path: '/trending' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <Link to="/" className="logo-link">
          <img src="/Assets/logo/logo.png" alt="CampFire" className="logo" />
        </Link>

        <nav className={`navbar ${isMobileMenuOpen ? 'active' : ''}`}>
          <button 
            className="close-btn"
            onClick={toggleMobileMenu}
            aria-label="Close menu"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
          
          <ul className="nav-list">
  {navItems.map((item) => (
    <li key={item.path}>
      <Link
        to={item.path}
        className={location.pathname === item.path ? 'active nav-link' : 'nav-link'}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        {item.name}
      </Link>
    </li>
  ))}

  <li className="cart-item">
    <Link to="/cart" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>
      <i className="fa-solid fa-cart-shopping"></i>
      <span>Cart</span>
    </Link>
  </li>
</ul>
        </nav>

        <div className="mobile-actions">
          <Link to="/cart" className="mobile-cart">
            <i className="fa-solid fa-cart-shopping"></i>
          </Link>
          <button 
            className="menu-btn"
            onClick={toggleMobileMenu}
            aria-label="Open menu"
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </div>

      
    </header>
  );
};

export default Header;
