class TokenService {

    getLocalRefreshToken() {
        return localStorage.getItem('refreshToken');
    }

    setLocalRefreshToken(refreshToken) {
        localStorage.setItem("refreshToken", refreshToken);
    }

    getLocalAccessToken(){
        return localStorage.getItem('token');
    }

    setLocalAccessToken(token){
        localStorage.setItem("token", token);
    }

    removeAccessToken(){
        localStorage.removeItem("token");
    }
}

export default new TokenService();