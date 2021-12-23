import axios from 'axios'
import Cookies from 'js-cookie';

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

const authApi = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

const authInterceptor = config => {
    config.headers.Authorization = `${Cookies.get('token')}`
    return config
}

authApi.interceptors.request.use(authInterceptor)

export {
    api,
    authApi
}
