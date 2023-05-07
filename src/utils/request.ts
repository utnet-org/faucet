// 管理网络请求
import axios from 'axios'

const baseURL = ''

// 创建 axios 副本对象
let request = axios.create({
    baseURL: baseURL,
    timeout: 5000
})
// 设置请求拦截器
request.interceptors.request.use(
    config => {
        return config
    },
    err => {
        return Promise.reject(err)
    }
)
// 设置响应拦截器
request.interceptors.response.use(
    response => {
        return response
    },
    err => {
        return Promise.reject(err)
    }
)
// 暴露对象
export default request

