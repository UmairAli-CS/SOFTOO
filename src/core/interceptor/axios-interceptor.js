import axios from 'axios';
const axiosInstance = axios.create();

axiosInstance.interceptors.request.use((config) => {
    return config;
})

axiosInstance.interceptors.response.use((response) => {
    try {
        return response;
    } catch (error) {
        return response;
    }

}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
});

export default axiosInstance