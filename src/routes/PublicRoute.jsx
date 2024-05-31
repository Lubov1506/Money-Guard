import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsLoggedIn } from "../redux/auth/selectors";

const PublicRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return isLoggedIn ? <Navigate to="/" /> : children;
};

export default PublicRoute;
