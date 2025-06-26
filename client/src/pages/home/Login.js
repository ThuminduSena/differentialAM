// src/pages/Login.js
import { useState } from 'react';
import '../../css/home/login.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('All fields are required.');
      return;
    }
    console.log('Logging in with:', { email, password });
  };

  return (
    <div className="login-background" style={{ backgroundImage: "url('home-back.jpg')" }}>
      <div className="login-card">
        <div className="login-img-side">
          <img src="login.jpg" alt="Login Visual" />
        </div>

        <div className="login-form-side">
          <form className="login-form" onSubmit={handleSubmit}>
            <h2 className="login-title">Welcome Back</h2>
            <p className="login-subtitle">Please enter your credentials to log in</p>
            {error && <div className="login-error">{error}</div>}

            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
            />

            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password"
            />

            <button type="submit" className="login-button">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}
