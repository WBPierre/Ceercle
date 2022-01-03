import { Navigate } from "react-router-dom";
import useAuth from "../../components/context/auth/AuthHelper";
import * as App_Routes from "./Routes";



function ProtectedRoute({ children }) {
    const context = useAuth();
    return context.isAuth ? children : <Navigate to={'/app' + App_Routes.LOGIN} />;
};

export default ProtectedRoute;