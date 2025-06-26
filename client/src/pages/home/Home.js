import { Link } from 'react-router-dom';
import '../../css/home/home.css'; // Keep your CSS import

export default function Home() {
  return (
    <div className="home-hero" style={{ backgroundImage: "url('login-back.jpeg')" }}>
      <div className="home-overlay" />

      <div className="home-content">
        <h1 className="home-title">Differential Asset Management</h1>
        <p className="home-description">
          Smart, real-time infrastructure and inventory tracking system to empower your organization's IT operations.
        </p>

        <div className="home-buttons">
          <Link to="/login" className="home-btn outline">Login</Link>
          <Link to="/dashboard" className="home-btn outline">Dashboard</Link>
        </div>
      </div>
    </div>
  );
}
