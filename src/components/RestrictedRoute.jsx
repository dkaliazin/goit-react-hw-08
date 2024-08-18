import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/auth/selectors";

export default function RestrictedRoute({ component, redirectTo }) {
    const isLoggenIn = useSelector(selectIsLoggedIn);
    return isLoggenIn ? <Navigate to={redirectTo} /> : component;
}