import { NavLink } from 'react-router-dom';
import './css/Sidebar.css'; 

export default function Sidebar() {
  return (
    <div className="sidebar">
      <h2 className="sidebar-title">Asset Manager</h2>
      <nav className="sidebar-nav">
        <NavLink to="/dashboard/assets" className="sidebar-link">Digital Asset Management</NavLink>
        <NavLink to="/dashboard/portfolio" className="sidebar-link">Portfolio Management</NavLink>
        <NavLink to="/dashboard/tasks" className="sidebar-link">Task Management</NavLink>
      </nav>
    </div>
  );
}
