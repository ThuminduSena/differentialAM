// src/App.js
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import routes from './routes';
import Navbar from './components/navbar';
import DigitalAssets from './pages/DigitalAssets';
import Tasks from './pages/Tasks';
import Portfolio from './pages/Portfolio';
import Dashboard from './pages/Dashboard';


function App() {
  return (
    <Router>
      <Navbar />


      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="assets" element={<DigitalAssets />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="tasks" element={<Tasks />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
