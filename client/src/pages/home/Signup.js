import { useState } from 'react';
import '../../css/home/login.css';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!email || !password || !confirmPassword) {
      setError('All fields are required.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    console.log('Signing up with:', { email, password });
    // Proceed with API call here
  };

  return (
    <div className="login-background" style={{ backgroundImage: "url('home-back.jpg')" }}>
      <div className="login-card">
        <div className="login-img-side">
          <img src="login.jpg" alt="Login Visual" />
        </div>

        <div className="login-form-side">
          <form className="login-form" onSubmit={handleSubmit}>
            <h2 className="login-title">Let's Start</h2>
            <p className="login-subtitle">Please fill the following fields</p>

            {error && <div className="login-error">{error}</div>}

            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
            />

            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="new-password"
            />

            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              id="confirm-password"
              type="password"
              placeholder="********"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              autoComplete="new-password"
            />

            <button type="submit" className="login-button">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
}
