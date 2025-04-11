// 导入 axios 库
import axios from 'axios'
// 导入 useStore 函数和 Message 组件
import { Message } from '@arco-design/web-react'

// 创建一个名为 useAxios 的 axios 实例，设置基础URL为空字符串
export const request = axios.create({
  // baseURL: API_BASE_URL
  baseURL: '/api'
  // baseURL: 'http://111.170.34.220:25577'
})

// 请求拦截器，用于在每个请求中添加 token 头部信息
request.interceptors.request.use((config) => {
  // 使用 useStore 函数获取 store 实例
  // const store = useStore();
  // 在请求头部添加 token
  // config.headers["token"] = store.userInfo.token;
  return config
})

// 响应拦截器，处理成功和失败的响应
request.interceptors.response.use(
  // 处理成功的响应
  (response) => {
    // 如果响应状态不是200，输出错误信息到控制台
    if (response.status !== 200) {
      console.log('服务失败', response.status)
      // 使用 Message 组件显示错误信息
      Message.error(response.statusText)
      // 返回一个带有拒绝状态的 Promise，并传递错误信息
      return Promise.reject(response.statusText)
    }
    // 返回响应的数据部分
    return response.data
  },
  // 处理失败的响应
  (err) => {
    console.log('服务错误', err)
    // 使用 Message 组件显示错误信息
    Message.error(err.message)
    // 返回一个带有拒绝状态的 Promise，并传递错误信息
    return Promise.reject(err.message)
  }
)
