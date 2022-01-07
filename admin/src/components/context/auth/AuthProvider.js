import React, {useContext, useEffect, useMemo, useState} from "react";
import { useCookies } from 'react-cookie';
import ApiService from "../../../services/api.service";
import AuthService from "../../../services/admin/auth.service";


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
    const [cookies, setCookie, removeCookie] = useCookies(['token']);

    useEffect(async () => {
        if(cookies.token !== undefined) {
            ApiService.setHeader(cookies.token);
            await AuthService.verify().then((res) => {
                if(res.status === 200){
                    setIsAuth(true);
                    setUser(res.data);
                }
            }).catch((err) => {
                removeCookie('token');
            });
        }
        setLoadingInitial(false);
    }, []);

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
