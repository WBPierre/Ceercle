import {Navigate} from "react-router-dom";
import useAuth from "../../components/context/auth/AuthHelper";
import * as App_Routes from "./Routes";



function ProtectedRoute({ children }) {
    const context = useAuth();
    if(!window.location.host.includes("ceercle")){
        return context.isAuth ? children : <Navigate to={App_Routes.LOGIN} />;
    }else{
        return context.isAuth ? children : <Navigate to={App_Routes.LOGIN} />;
    }
};

export default ProtectedRoute;