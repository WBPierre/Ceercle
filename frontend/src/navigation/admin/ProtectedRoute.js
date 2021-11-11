import {Redirect, Route} from "react-router-dom";


const ProtectedRoute = ({ component: Comp, loggedIn, exact, path, ...rest }) => {
    return (
        <Route
            path={path}
            {...rest}
            render={(props) => {
                return loggedIn ? <Comp {...props} /> : <Redirect to="/" />;
            }}
        />
    );
};