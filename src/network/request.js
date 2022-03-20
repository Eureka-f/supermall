import axios from 'axios'

export function request(config) {
  // 1.创建axios的实例
  const instance = axios.create({
    // baseURL: 'http://123.207.32.32:8000',
    baseURL: 'http://localhost:3000',
    timeout: 5000
  })

  // 2.axios的拦截器
  
  // 2.1.添加请求拦截器
  instance.interceptors.request.use(config => {
    //在发送请求前做些什么
    
    //请求成功时
    //可以加一些处理代码，比如每次请求成功，都希望在界面显示一个图标


    //注意处理之后，要把config返回出去
    return config
  }, err => {
    //请求失败时
    // console.log(err);
  })

  // 2.2.响应拦截
  instance.interceptors.response.use(res => {

    //要把拦截的信息返回出去，否则就会变成undefined
    return res.data
  }, err => {
    console.log(err);
  })

  // 3.发送真正的网络请求
  //instance(config)返回的是一个promise，用的时候可以直接用.then()
  return instance(config)//这个config是指传入的url、params等config选项
}
