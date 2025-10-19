import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css';
import preImage from '../assets/images/hero.png';
import masalaImage from '../assets/images/Masala.png';
import newariImage from '../assets/images/Newari.jpg';
import lalImage from '../assets/images/Lal.png';
import potatoImage from '../assets/images/Potato.jpg';
import waiwaiImage from '../assets/images/waiwai.jpg';
import whiteImage from '../assets/images/White.jpg';
import brownImage from '../assets/images/brown.jpg';
import twoPmImage from '../assets/images/2 pm.png';

const FEATURED_PRODUCTS = [
  {
    id: 101,
    name: 'Wai Wai',
    manufactured: '2024-06-10',
    expiry: '2025-06-10',
    image: waiwaiImage,
    actualPrice: 25,
    discountedPrice: 20,
  },
  {
    id: 102,
    name: 'Naglo Brown Bread',
    manufactured: '2024-05-20',
    expiry: '2025-05-20',
    image: brownImage,
    actualPrice: 90,
    discountedPrice: 75,
  },
  {
    id: 103,
    name: 'Masala Kurkure',
    manufactured: '2024-04-15',
    expiry: '2025-10-15',
    image: masalaImage,
    actualPrice: 50,
    discountedPrice: 40,
  },
  {
    id: 104,
    name: 'Lal Qilla',
    manufactured: '2024-06-01',
    expiry: '2025-06-01',
    image: lalImage,
    actualPrice: 120,
    discountedPrice: 99,
  },
];

const LATEST_PRODUCTS = [
  {
    id: 201,
    name: 'Newari Sahi Pulau Basmati Rice',
    manufactured: '2024-07-01',
    expiry: '2025-07-01',
    image: newariImage,
    actualPrice: 110,
    discountedPrice: 95,
  },
  {
    id: 202,
    name: '2PM RAMEN',
    manufactured: '2024-06-20',
    expiry: '2025-12-20',
    image: twoPmImage,
    actualPrice: 180,
    discountedPrice: 150,
  },
  {
    id: 203,
    name: 'WHITE BREAD',
    manufactured: '2024-06-10',
    expiry: '2026-06-10',
    image: whiteImage,
    actualPrice: 220,
    discountedPrice: 199,
  },
  {
    id: 204,
    name: 'POTATO CRACKER',
    manufactured: '2024-05-25',
    expiry: '2025-11-25',
    image: potatoImage,
    actualPrice: 90,
    discountedPrice: 75,
  },
];

function Home() {
  const navigate = useNavigate();
  const [cart, setCart] = useState(() => {
    const stored = localStorage.getItem('cart');
    return stored ? JSON.parse(stored) : [];
  });
  // Simulate login state (replace with real auth logic)
  // const [isLoggedIn, setIsLoggedIn] = useState(() => {
  //   return localStorage.getItem('isLoggedIn') === 'true';
  // });

  // React.useEffect(() => {
  //   const loginHandler = () => setIsLoggedIn(true);
  //   window.addEventListener('user-logged-in', loginHandler);
  //   return () => window.removeEventListener('user-logged-in', loginHandler);
  // }, []);

  const addToCart = (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    window.dispatchEvent(new CustomEvent('cart-message', { detail: `${product.name} added to cart!` }));
  };

  return (
    <div className="home-container">
      <div className="hero-image-container">
      <img 
        src={preImage} 
        alt="Pre Banner" 
          className="hero-image"
      />
        <div className="hero-overlay">
      <button className="home-view-products-btn" onClick={() => navigate('/product')}>
        View Products
      </button>
        </div>
      </div>

      <h3 className="home-featured-title">Featured Products</h3>
      <div className="home-featured-list">
        {FEATURED_PRODUCTS.map((product) => (
          <div key={product.id} className="home-product-card">
            <img src={product.image} alt={product.name} className="home-product-img" />
            <h4 className="home-product-name">{product.name}</h4>
            <div className="home-product-meta">Manufactured: {product.manufactured}</div>
            <div className="home-product-meta">Expiry: {product.expiry}</div>
            <div className="home-prices-row">
              <div className="home-product-prices">
                <span className="home-product-actual">Rs{product.actualPrice}</span>
                <span className="home-product-discounted">Rs{product.discountedPrice}</span>
              </div>
              <button className="home-add-to-cart-btn" onClick={() => addToCart(product)}>
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      <h3 className="home-featured-title">Latest Products</h3>
      <div className="home-featured-list">
        {LATEST_PRODUCTS.map((product) => (
          <div key={product.id} className="home-product-card">
            <img src={product.image} alt={product.name} className="home-product-img" />
            <h4 className="home-product-name">{product.name}</h4>
            <div className="home-product-meta">Manufactured: {product.manufactured}</div>
            <div className="home-product-meta">Expiry: {product.expiry}</div>
            <div className="home-prices-row">
              <div className="home-product-prices">
                <span className="home-product-actual">Rs{product.actualPrice}</span>
                <span className="home-product-discounted">Rs{product.discountedPrice}</span>
              </div>
              <button className="home-add-to-cart-btn" onClick={() => addToCart(product)}>
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      <footer className="home-footer">
        <div className="home-footer-content">
          <div className="home-footer-about">
            <strong>Annapurna Food Management System</strong>
          </div>
          <div className="home-footer-links">
            <a href="/about" className="home-footer-link">About</a>
            <a href="/product" className="home-footer-link">Product</a>
            <a href="/contact" className="home-footer-link">Contact</a>
          </div>
        </div>
        <div className="home-footer-bottom">&copy; {new Date().getFullYear()} Annapurna Food Management System. All rights reserved.</div>
      </footer>
    </div>
  );
}

export default Home; 