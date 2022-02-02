import axios from 'axios'
import TokenService from "./token.service";

class ApiService{
    constructor() {
        this.instance = axios.create({
            baseURL: '/api/admin'
        })
        this.instance.interceptors.response.use(
            (res) => {
                return res;
            },
            async (err) => {
                const originalConfig = err.config;
                if(originalConfig.url !== "/auth/login" && err.response) {
                    if(err.response.status === 401 && !originalConfig._retry) {
                        originalConfig._retry = true;
                        try {
                            const rs = await this.instance.post('/auth/refreshToken', {
                                refreshToken: TokenService.getLocalRefreshToken()
                            });
                            const {token} = rs.data;
                            TokenService.setLocalAccessToken(token);
                            this.setHeader(token);
                            originalConfig.headers.Authorization = `Token ${token}`;
                            return await this.instance(originalConfig);
                        } catch (_error) {
                            return Promise.reject(_error);
                        }
                    }
                }
                return Promise.reject(err);
            }
        )
    }

    setHeader(token) {
        this.instance.defaults.headers.common.Authorization = `Token ${token}`
    }

    removeHeader() {
        this.instance.defaults.headers.common = {}
    }

    request(method, url, data = {}, config = {}) {
        return this.instance({
            method,
            url,
            data,
            ...config
        })
    }

    async get(url, config = {}) {
        return this.request('GET', url, {}, config);
    }

    async post(url, data, config = {}) {
        return this.request('POST', url, data, config);
    }

    put(url, data, config = {}) {
        return this.request('PUT', url, data, config)
    }

    patch(url, data, config = {}) {
        return this.request('PATCH', url, data, config)
    }

    delete(url, config = {}) {
        return this.request('DELETE', url, {}, config)
    }
}

export default new ApiService();