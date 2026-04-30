import { useAuth } from "../hooks/useAuth";
import { Navigate } from "react-router-dom";
const ProtectedRoute = ({ children }) => {
  const { username } = useAuth();
    if (!username) {
      return <Navigate to="/" replace />;
    }

  return children;
};

export default ProtectedRoute;
