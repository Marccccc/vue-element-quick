import axios from 'axios'
import { Message } from 'element-ui'
// import { getCookie, Token } from '@/utils/cookie'
// import router from '@/router'

// 创建axios实例
const service = axios.create({
  baseURL: process.env.DEV_API_URL, // 开发环境API地址
  timeout: 15000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(
  config => {
    // 设置内容类型
    config.headers['Content-Type'] = 'application/json'
    // 请求头统一配置
    config.headers['Accept'] = 'application/json;charset=UTF-8'
    // if (getCookie(Token)) {
    //   config.headers['Authorization'] = getCookie(Token) // 请求头携带Authorization为Token值
    // }
    return config
  },
  error => {
    Promise.reject(error)
  }
)

// respone拦截器
service.interceptors.response.use(
  response => {
    if (response.code !== 200) {
    }
    return response.data
  },
  error => {
    let message = ''
    let code = error.code
    if (code === 'ECONNABORTED') {
      message = '服务器连接超时,请联系平台管理员'
    } else {
      message = error.response.data
    }
    if (!message) {
      message = code + ':服务器异常'
    }
    Message({
      message: message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
