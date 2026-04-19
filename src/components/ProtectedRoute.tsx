import { useContext } from "react";
import { Navigate } from "react-router";
import { AuthContext } from "../context/AuthContext";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const auth = useContext(AuthContext);
  if (auth?.loading) return null;
  if (!auth?.user) return <Navigate to="/login" replace />;
  return <>{children}</>;
};

export default ProtectedRoute;
