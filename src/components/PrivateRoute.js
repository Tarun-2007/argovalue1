import { Navigate } from 'react-router-dom';
import { authService } from '../services/authService';

const PrivateRoute = ({ children, adminOnly = false }) => {
  if (!authService.isAuthenticated()) {
    return <Navigate to="/login" />;
  }
  
  if (adminOnly && !authService.isAdmin()) {
    return <Navigate to="/dashboard" />;
  }
  
  return children;
};

export default PrivateRoute;
