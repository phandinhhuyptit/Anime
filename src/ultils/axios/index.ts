import axios, { AxiosRequestConfig } from 'axios';
import { API_URL } from "../constants";
const ins = axios.create({
    baseURL: API_URL,
    timeout: 10000
})

ins.interceptors.request.use((request: AxiosRequestConfig) => {
    request.headers = request.headers ?? {};
    const accessToken: string = localStorage.getItem('token') || "";
    request.headers.Authorization = `Bearer ${accessToken}`

    return request
})

export default ins