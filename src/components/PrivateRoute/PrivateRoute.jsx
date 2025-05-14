import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import {
  selectIsLoggedIn,
  selectIsRefreshing,
} from "../../redux/auth/selectors";

const PrivateRoute = ({ component: Component }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);

  return !isRefreshing && isLoggedIn ? Component : <Navigate to="/login" />;
};

export default PrivateRoute;
