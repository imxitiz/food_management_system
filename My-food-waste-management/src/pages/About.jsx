import React from 'react';

function About() {
  return (
    <div style={{ padding: '2rem', maxWidth: 700, margin: '0 auto' }}>
      <h1>About Us</h1>
      <p style={{ fontSize: '1.1rem', color: '#444', marginTop: '1.5rem' }}>
        <b> At Annapurna</b>, we believe that good food should never go to waste.

We are a socially driven online marketplace dedicated to reducing food waste by offering near-expiry packaged items at highly discounted prices. Every product you find on our platform is still safe, fresh, and consumable, but close to its expiry date—giving you the chance to save money while helping the planet.<br/>
        <span style={{ color: '#d90429', fontWeight: 600 }}></span>
      </p>
      <h1> What We Offer</h1>
      <ul style={{ fontSize: '1.05rem', color: '#444', marginTop: '1.2rem', marginBottom: '1.2rem', paddingLeft: '1.5rem' }}>
        <li>Browse high-quality products with detailed descriptions and expiry information.</li>
        <li>View featured and popular products right on the homepage.</li>
        <li>Add items to your cart and review them before checkout.</li>
        <li>Easy login and signup for a personalized experience.</li> 
        <li>Modern, user-friendly interface for seamless navigation.</li>
      </ul>
      <h1 style={{ color: '#444', fontWeight: 600 }}>Why Choose Us?</h1>
      <p style={{ fontSize: '1.1rem', color: 'black' }}>
      At Annapurna, we offer safe, high‑quality near‑expiry packaged foods at unbeatable prices through a user‑friendly, visually appealing platform. Enjoy quick, reliable service while saving money and reducing food waste—all in one seamless shopping experience.

</p>
      <p style={{ fontSize: '1.1rem', color: '#444', marginTop: '1.5rem' }}>
        <b>Thank you for choosing Annapurna!</b>
      </p>
    </div>
  );
}

export default About; 