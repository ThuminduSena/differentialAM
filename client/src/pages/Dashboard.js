import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import '../css/Dashboard.css'; 

export default function Dashboard() {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboard-content">
        <Outlet /> {/* This will render the nested page: assets, portfolio, or tasks */}
      </div>
    </div>
  );
}
