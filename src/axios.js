import axios from 'axios';

export const baseUrl = 'http://54.81.4.236:5000/';

const instance = axios.create({
  baseURL: baseUrl, 
});

instance.interceptors.request.use((request) => {

  let token = localStorage.getItem('token')
  request.headers = {
    'Accept': "application/json, text/plain, */*",
    'Authorization': `Bearer ${token}`,
  }
  return request
});

instance.interceptors.response.use((response) => {
  if (response) {
    return response
  }
}, function (error) {
  // *For unAuthorized 
  // if (error.response.status === 401) {
  //   localStorage.clear()
  // }
  return Promise.reject(error);
});

export default instance;