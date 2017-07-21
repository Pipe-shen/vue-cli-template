import axios from 'axios';
import store from '../store';

// 创建axios实例
const service = axios.create({
  baseURL: 'http://172.16.200.156:8008', // process.env.BASE_API, // api的base_url
  timeout: 5000,
});
// request拦截器
service.interceptors.request.use(config => {
  console.log('befor request')
  if (store.getters.token) {
    config.headers['X-Token'] = store.getters.token;
  }
  return config;
}, error => console.log(error));
// respone拦截器
service.interceptors.response.use(
  response => {
    console.log('before response');
    return response;
  },
  error => console.log(error),
);

export default service;
