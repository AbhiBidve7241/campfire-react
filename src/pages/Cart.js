import React, { useState } from 'react';
import './Cart.css';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Samsung Galaxy S23 Ultra',
      price: 79999,
      quantity: 1,
      image: '/Assets/Smartphones/s23 ultra.jpg'
    },
    {
      id: 2,
      name: 'iPhone 15 Pro',
      price: 59999,
      quantity: 1,
      image: '/Assets/Smartphones/iphone15.jpg'
    }
  ]);

  const updateQuantity = (id, change) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 0; // Free shipping
  const total = subtotal + shipping;

  return (
    <div className="cart-page">
      <section className="cart-hero">
        <div className="cart-hero-content">
          <h1>Shopping Cart</h1>
          <p>{cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} in your cart</p>
        </div>
      </section>

      <section className="cart-content section">
        <div className="container">
          {cartItems.length === 0 ? (
            <div className="empty-cart">
              <i className="fa-solid fa-cart-shopping"></i>
              <h2>Your cart is empty</h2>
              <p>Add some products to get started</p>
              <a href="/shop" className="btn btn-primary">Continue Shopping</a>
            </div>
          ) : (
            <div className="cart-grid">
              <div className="cart-items">
                <h2>Cart Items</h2>
                {cartItems.map(item => (
                  <div key={item.id} className="cart-item">
                    <img src={item.image} alt={item.name} />
                    <div className="item-details">
                      <h3>{item.name}</h3>
                      <p className="item-price">₹{item.price.toLocaleString()}</p>
                    </div>
                    <div className="item-quantity">
                      <button onClick={() => updateQuantity(item.id, -1)}>
                        <i className="fa-solid fa-minus"></i>
                      </button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, 1)}>
                        <i className="fa-solid fa-plus"></i>
                      </button>
                    </div>
                    <div className="item-total">
                      ₹{(item.price * item.quantity).toLocaleString()}
                    </div>
                    <button 
                      className="remove-btn"
                      onClick={() => removeItem(item.id)}
                      aria-label="Remove item"
                    >
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </div>
                ))}
              </div>

              <div className="cart-summary">
                <h2>Order Summary</h2>
                <div className="summary-row">
                  <span>Subtotal</span>
                  <span>₹{subtotal.toLocaleString()}</span>
                </div>
                <div className="summary-row">
                  <span>Shipping</span>
                  <span className="free">Free</span>
                </div>
                <div className="summary-divider"></div>
                <div className="summary-row total">
                  <span>Total</span>
                  <span>₹{total.toLocaleString()}</span>
                </div>
                <button className="btn btn-primary checkout-btn">
                  Proceed to Checkout
                </button>
                <a href="/shop" className="continue-shopping">
                  Continue Shopping
                </a>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Cart;
