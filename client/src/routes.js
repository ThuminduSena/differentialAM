// src/routes.js
import Home from './pages/home/Home';
import Login from './pages/home/Login';
import Signup from './pages/home/Signup';
import Dashboard from './pages/Dashboard';

const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },

];

export default routes;
