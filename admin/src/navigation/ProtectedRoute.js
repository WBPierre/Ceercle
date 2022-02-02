import { Navigate } from "react-router-dom";
import useAuth from "../components/context/auth/AuthHelper";
import * as Admin_Routes from "./Routes";
import {LOGIN} from "./Routes";



function ProtectedRoute({ children }) {
    const context = useAuth();
    return context.isAuth ? children : <Navigate to={Admin_Routes.LOGIN} />;
}

export default ProtectedRoute;