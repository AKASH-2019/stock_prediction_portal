import axios from "axios";

const baseURL = import.meta.env.VITE_BACKEND_BASE_API
const axiosInstance = axios.create({
    baseURL: baseURL,
    headers: {
        'Content-Type': 'application/json',
    }
})

// doumentation: https://axios-http.com/docs/interceptors
axiosInstance.interceptors.request.use(
    function (config) {
        // Do something before request is sent
        console.log('request without auth header==>', config)
        const accessToken = localStorage.getItem('accessToken')
        if(accessToken){
            config.headers['Authorization'] = `Bearer ${accessToken}`
        }
        console.log('after add aut header ==>', config)
        return config;
    }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });


  // Response Interceptor
axiosInstance.interceptors.response.use(
    function(response){
        return response;
    },
    // Handle failed responses
    async function(error){
        const originalRequest = error.config;
        if(error.response.status === 401 && !originalRequest.retry){
            originalRequest.retry = true;
            const refreshToken = localStorage.getItem('refreshToken')
            try{
                const response = await axiosInstance.post('/token/refresh/', {refresh: refreshToken})
                console.log('New access token==>', response.data.access)
                localStorage.setItem('accessToken', response.data.access)
                originalRequest.headers['Authorization'] = `Bearer ${response.data.access}`
                return axiosInstance(originalRequest)
            }catch(error){
                localStorage.removeItem('accessToken')
                localStorage.removeItem('refreshToken')
            }
        }
        return Promise.reject(error);
    }
)




export default axiosInstance;