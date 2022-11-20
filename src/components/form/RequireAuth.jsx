import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./FormApp";

export default function RequireAuth({ children }) {
  const userContext = useContext(AuthContext);
  if (userContext.user) return children;
  return <Navigate to="/login" />;
}
