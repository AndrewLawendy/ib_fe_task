import axios from 'axios';

const axiosInstance = axios.create({
  timeout: 20000,
});

axiosInstance.interceptors.response.use((response) => response.data);

export default axiosInstance;
