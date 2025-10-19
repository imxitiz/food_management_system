import React, { useState } from 'react';
import axios from 'axios';
import './auth.css';

export const axiosInstance = axios.create({
	baseURL: "http://127.0.0.1:8000",
	headers: {
		"Content-Type": "application/x-www-form-urlencoded",
	},
});

export const convertToFormParams = (obj) => {
  const params = new URLSearchParams();
  for (const key in obj) {
    params.append(key, obj[key]);
  }
  return params;
}

function Auth() {
  const [mode, setMode] = useState('login');
  const [form, setForm] = useState({
    name: '',
    lastname: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      if (mode === 'signup') {
        if (form.password !== form.confirmPassword) {
          setError('Passwords do not match');
          return;
        }

        // ✅ Signup API call
        const res = await axiosInstance.post(
          "users",
          convertToFormParams({
            name: form.name,
            lastname: form.lastname,
            email: form.email,
            password: form.password,
          }),
        );
        alert(res.data.message || 'Signup successful!');
      } else {
        const res = await axiosInstance.post(
          "auth/login",
          convertToFormParams({
            username: form.email,
            password: form.password,
          }),
        );
        alert(res.data.message || 'Login successful!');
      }
    } catch (err) {
      if (err.response) {
        setError(err.response.data.detail || 'Server error');
      } else {
        setError('Network error. Please check your backend connection.');
      }
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-tabs">
        <button
          className={`auth-tab${mode === 'login' ? ' active' : ''}`}
          onClick={() => setMode('login')}
          type="button"
        >
          Login
        </button>
        <button
          className={`auth-tab${mode === 'signup' ? ' active' : ''}`}
          onClick={() => setMode('signup')}
          type="button"
        >
          Signup
        </button>
      </div>

      <h2>{mode === 'login' ? 'Log In' : 'Create an Account'}</h2>

      <form onSubmit={handleSubmit} className="auth-form">
        {mode === 'signup' && (
          <>
            <input
              name="name"
              type="text"
              placeholder="First Name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              name="lastname"
              type="text"
              placeholder="Last Name"
              value={form.lastname}
              onChange={handleChange}
              required
            />
          </>
        )}
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />
        {mode === 'signup' && (
          <input
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            value={form.confirmPassword}
            onChange={handleChange}
            required
          />
        )}
        {error && <div className="auth-error">{error}</div>}
        <button type="submit">{mode === 'login' ? 'Log In' : 'Sign Up'}</button>
      </form>

      {mode === 'login' ? (
        <p>
          Don't have an account?{' '}
          <button className="switch-btn" onClick={() => setMode('signup')}>
            Sign Up
          </button>
        </p>
      ) : (
        <p>
          Already have an account?{' '}
          <button className="switch-btn" onClick={() => setMode('login')}>
            Log In
          </button>
        </p>
      )}
    </div>
  );
}

export default Auth;
