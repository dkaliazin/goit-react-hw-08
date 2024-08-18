import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/auth/selectors";

export default function PrivateRoute({ component, redirectTo }) {
    const isLoggenIn = useSelector(selectIsLoggedIn);
    return isLoggenIn ? component : <Navigate to={redirectTo} />;
}