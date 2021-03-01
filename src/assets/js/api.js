import axios from 'axios'
import Vue from 'vue'
const test = axios.create({
  baseURL: '/api',
  timeout: 30000,
  headers: {
    // 'BiGaoAuthorization' : localStorage.getItem('token') || ''
  }
});

// 接口定义 axios二次封装
async function api({url, data, form = true, method = 'post', validateStatus = true}) {
  try {
    const {data: result, status} = await test({
      url,
      data,
      method,
      headers: form ? {'Content-Type': 'application/x-www-form-urlencoded'} : {'Content-Type': 'application/json'},
      transformRequest: form ? [() => {
        let str = '';
        for (let key in data) {
          str += `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}&`;
        }
        str = str.substring(0, str.length - 1);
        return str;
      }] : [],
      validateStatus(status) {
        return status >= 200 && status <= 400;
      }
    });
    if ((validateStatus && !result.status) || !validateStatus || (result.status < 400)) {
      return Promise.resolve(result);
    } else {
      return Promise.reject(result.message || '网络开小差了，请重试~');
    }
  } catch (error) {
    return Promise.reject('网络开小差了，请重试~');
  }
}

function mountApi() {
  Vue.prototype.$api = api;
}

export {
  api,
  mountApi
}