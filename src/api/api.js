//  引入vue和axios
import Vue from "vue";
import axios from "axios";

axios.defaults.retry = 4;
axios.defaults.retryDelay = 60 * 1000;

//  继承vue的原型方法
Vue.prototype.axios = axios;

const service = axios.create({
  baseURL: 'http://localhost:4000',
  //  baseURL: 'https://chat.chengxinsong.cn',
  timeout: 60 * 1000
})

service.interceptors.request.use(config => {
  const token = localStorage.getItem('XXXUserToken');
  if (token) {
    /* Bearer是JWT的认证头部信息 */
    config.headers.common['Authorization'] = 'Bearer ' + token;
  }
  return config;
}, error => {
  return Promise.reject(error);
});

service.interceptors.response.use(
  response => {
    let data = response.data;
    if (!data.data) {
      //    登陆成功的回调地址
      return data;
    } else {
      return data;
    }
  },
  error => {
    //  返回接口返回的错误信息
    return Promise.reject(error.response)
  }
);

const baseURL = '/api/koa';

export default {
  /* 登陆 - post */
  login: (params) => {
    return service.post(`${baseURL}/login`, params)
  },
  /* 注册 - post */
  registry: (params) => {
    return service.post(`${baseURL}/registry`, params)
  },
/* *
 * API demo
 *
 * getAPI: (params) => {
 *    getConfig.params = params.params
 *    return axios.get('xxxx.do', getConfig)
 * }
 *
 * postAPI: (params) => {
 *     return axios.post('xxxx.do', params, postConfig)
 * }
  */
}
