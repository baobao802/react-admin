import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

export const GuardRoute = (props) => {
  const auth = useSelector((state) => state.auth);
  const location = useLocation();

  if (!auth.user) {
    return <Navigate to='/login' state={{ from: location }} replace />;
  }

  return props.children;
};
