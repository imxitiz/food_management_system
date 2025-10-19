import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import Auth from '../pages/Auth';
import './Navbar.css';
import logo from '../assets/images/logo.png';

function Navbar() {
  const [showAuth, setShowAuth] = useState(false);

  useEffect(() => {
    const openAuth = () => setShowAuth(true);
    window.addEventListener('open-auth-modal', openAuth);
    return () => window.removeEventListener('open-auth-modal', openAuth);
  }, []);

  const openAuth = () => setShowAuth(true);
  const closeAuth = () => setShowAuth(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-left">
          <img src={logo} alt="Annapurna Logo" className="logo" />
        </div>
        <div className="navbar-center">
          <NavLink to="/" end className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>Home</NavLink>
          <NavLink to="/product" className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>Product</NavLink>
          <NavLink to="/about" className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>About</NavLink>
          <NavLink to="/contact" className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>Contact</NavLink>
        </div>
        <div className="navbar-right">
          <input type="text" className="search-input" placeholder="Search Product..." />
          <Link to="/cart" className="cart-btn" aria-label="Cart"><FaShoppingCart size={20} /></Link>
          <button className="login-btn" onClick={openAuth}>Login</button>
        </div>
      </nav>
      
      {showAuth && (
        <div className="auth-modal">
          <div className="auth-modal-content">
            <button className="auth-close" onClick={closeAuth}>&times;</button>
            <Auth onClose={closeAuth} />
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar; 