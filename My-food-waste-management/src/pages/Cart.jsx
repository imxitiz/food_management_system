import React, { useEffect, useState } from 'react';

function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem('cart');
    setCart(stored ? JSON.parse(stored) : []);
  }, []);

  const removeFromCart = (indexToRemove) => {
    const updatedCart = cart.filter((_, idx) => idx !== indexToRemove);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <div style={{ padding: '2rem', background: '#fff', color: '#000' }}>
      <h2 style={{ color: '#000' }}>Your Cart</h2>
      {cart.length === 0 ? (
        <p style={{ color: '#000' }}>Your cart is empty.</p>
      ) : (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', marginTop: '1.5rem' }}>
          {cart.map((product, idx) => (
            <div key={idx} style={{ border: '1px solid #e0e0e0', borderRadius: '8px', padding: '1rem 1.5rem', minWidth: 220, boxShadow: '0 2px 8px rgba(0,0,0,0.04)', position: 'relative', background: '#fff', color: '#000' }}>
              <div style={{ position: 'relative' }}>
                {product.image && (
                  <img src={product.image} alt={product.name} style={{ width: '100%', height: 120, objectFit: 'cover', borderRadius: 6, marginBottom: 10 }} />
                )}
              </div>
              <h3 style={{ margin: '0 0 0.5rem 0', color: '#000' }}>{product.name}</h3>
              <div style={{ fontSize: '0.98rem', color: '#000' }}>Manufactured: {product.manufactured}</div>
              <div style={{ fontSize: '0.98rem', color: '#000' }}>Expiry: {product.expiry}</div>
              <div style={{ margin: '0.7rem 0 0.2rem 0' }}>
                <span style={{ color: '#888', textDecoration: 'line-through', marginRight: 8, fontSize: '1.05rem' }}>₹{product.actualPrice}</span>
                <span style={{ color: '#000', fontWeight: 700, fontSize: '1.15rem' }}>₹{product.discountedPrice}</span>
              </div>
              <button onClick={() => removeFromCart(idx)} style={{ marginTop: '0.5rem', background: '#B22222', color: '#fff', border: 'none', padding: '0.5rem 1.2rem', borderRadius: 4, cursor: 'pointer', fontWeight: 600 }}>
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Cart; 