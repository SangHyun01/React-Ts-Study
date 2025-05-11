import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080', // 예시 서버 주소
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: 5000
});

export default axiosInstance;
 