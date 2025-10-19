import React, { useState, useEffect } from 'react';
import './product.css';
import newariImage from '../assets/images/Newari.jpg';
import brownImage from '../assets/images/brown.jpg';
import masalaImage from '../assets/images/Masala.png'; 
import twoPmImage from '../assets/images/2 pm.png'; 
import whiteImage from '../assets/images/White.jpg'; 
import lalImage from '../assets/images/Lal.png'; 

const PRODUCTS = [
  { 
    id: 1, 
    name: 'Newari Sahi Pulau Basmati Rice', 
    manufactured: '2024-06-01', 
    expiry: '2025-06-01', 
    image: newariImage, 
    actualPrice: 110, 
    discountedPrice: 95, 
  },
  { 
    id: 2, 
    name: 'Brown Bread', 
    manufactured: '2024-05-15', 
    expiry: '2025-05-15', 
    image: brownImage, 
    actualPrice: 90, 
    discountedPrice: 75, 
  },
  { 
    id: 3, 
    name: 'Kurkure', 
    manufactured: '2024-04-10', 
    expiry: '2025-04-10', 
    image: masalaImage, 
    actualPrice: 50, 
    discountedPrice: 40, 
  },
  { 
    id: 4, 
    name: '2PM Ramen', 
    manufactured: '2024-03-20', 
    expiry: '2026-03-20', 
    image: twoPmImage, 
    actualPrice: 180, 
    discountedPrice: 150, 
  },
  { 
    id: 5, 
    name: 'White Bread', 
    manufactured: '2024-02-01', 
    expiry: '2026-02-01', 
    image: whiteImage, 
    actualPrice: 220, 
    discountedPrice: 199, 
  },
  { 
    id: 6, 
    name: 'Lal Qilla', 
    manufactured: '2024-01-01', 
    expiry: '2025-01-01', 
    image: lalImage, 
    actualPrice: 120, 
    discountedPrice: 99, 
  }
];

function Product() {
  const [cart, setCart] = useState(() => {
    const stored = localStorage.getItem('cart');
    return stored ? JSON.parse(stored) : [];
  });

  const [localMessage, setLocalMessage] = useState('');

  useEffect(() => {
    const handler = (e) => {
      setLocalMessage(e.detail);
      setTimeout(() => setLocalMessage(''), 2000);
    };

    window.addEventListener('cart-message', handler);

    return () => window.removeEventListener('cart-message', handler);
  }, []);

  const addToCart = (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));

    window.dispatchEvent(
      new CustomEvent('cart-message', {
        detail: `${product.name} added to cart!`
      })
    );
  };

  return (
    <div className="product-container">
      <div className="product-title-row">
        <h2 className="product-title">Our Grocery Products</h2>
        {localMessage && <span className="product-message">{localMessage}</span>}
      </div>

      <div className="product-list">
        {PRODUCTS.map((product) => (
          <div key={product.id} className="product-card">
            <div style={{ position: 'relative' }}>
              <img src={product.image} alt={product.name} className="product-img" />
            </div>
            <h3 className="product-name">{product.name}</h3>
            <div className="product-meta">Manufactured: {product.manufactured}</div>
            <div className="product-meta">Expiry: {product.expiry}</div>
            <div className="product-prices-row">
              <div className="product-prices">
                <span className="product-actual">Rs{product.actualPrice}</span>
                <span className="product-discounted">Rs{product.discountedPrice}</span>
              </div>
              <button
                className="product-add-to-cart-btn"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
