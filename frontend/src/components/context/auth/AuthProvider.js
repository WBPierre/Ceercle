import React, {useEffect, useState} from "react";
import ApiService from "../../../services/api.service";
import AuthService from "../../../services/app/auth.service";
import TokenService from "../../../services/token.service";

const initialState = {
    user: null
};

const initialContext = [{ ...initialState }, () => {}];
// eslint-disable-next-line no-unused-vars
export const AuthContext = React.createContext(initialContext)

const AuthProvider  = (props) => {
    // eslint-disable-next-line react/prop-types
    const [user, setUser] = useState(null);
    const [isAuth, setIsAuth] = useState(false);
    const [loadingInitial, setLoadingInitial] = useState(true);

    // eslint-disable-next-line
    useEffect(async () => {
        const token = TokenService.getLocalAccessToken();
        if(token !== null) {
            ApiService.setHeader(token);
            await AuthService.verify().then((res) => {
                if(res.status === 200){
                    setIsAuth(true);
                    setUser(res.data);
                }
            }).catch((err) => {
                if(err.response.status !== 401){
                    TokenService.removeAccessToken();
                }
            });
        }
        setLoadingInitial(false);
    }, []); // eslint-disable-line

    const contextValue = {
        user: user,
        isAuth: isAuth,
        updateUser: setUser,
        updateAuth: setIsAuth
    }

    return (
        <AuthContext.Provider value={contextValue}>
            {!loadingInitial && props.children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;
