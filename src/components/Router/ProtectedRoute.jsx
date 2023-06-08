import { Navigate } from 'react-router-dom';
import useAuthContext from '../../contexts/AuthContext';

const ProtectedRoute = ({ children, authorizedRoles, isProtected = false }) => {
  const { user } = useAuthContext();

  if (isProtected && (!user || !authorizedRoles.includes(user.role))) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
