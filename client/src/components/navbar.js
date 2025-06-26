// src/components/Navbar.js
import { Link } from 'react-router-dom';
import './css/navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo"><Link to="/">DifferentialAM</Link></div>
      <ul className="navbar-links">
        <li><Link to="/login">Log In</Link></li>
        <li><Link to="/signup">Sign Up</Link></li>
      </ul>
    </nav>
  );
}
