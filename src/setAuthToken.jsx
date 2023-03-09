import axios from "axios";

export const setAuthToken = token => {

    if (token) {
        axios.defaults.headers.common["Authorization"] = `bearer ${token}`;
    }
    else {
        delete axios.defaults.headers.common["Authorization"];
    }
}


const jwtInterceptor = axios.create({});

jwtInterceptor.interceptors.request.use(
    async (config) => {
        let token = localStorage.getItem('access_token');

        //config.headers.common["Authorization"] = `bearer ${token}`;
        config.headers = {
            ...config.headers,
            authorization: `bearer ${token}`
        };

        return config;
    },
    (error) => Promise.reject(error)
);

jwtInterceptor.interceptors.response.use(
    (response) => response,
    async (error) => {
        console.log(error)
        if (error.response.status === 401) {
            //console.log("401");
            const tokens = {
                accessToken: localStorage.getItem('access_token'),
                refreshToken: localStorage.getItem('refresh_token')
            };

            let response = await axios.post('https://localhost:5001/api/token/refresh', tokens);
            //console.log(response.data.value);
            localStorage.setItem('access_token', response.data.value.accessToken);
            localStorage.setItem('refresh_token', response.data.value.refreshToken);

            error.config.headers["Authorization"] = `bearer ${response.data.accessToken}`;
            return axios(error.config);
        }
        else {
            console.log('response error');
            return Promise.reject(error);
        }
    }
);

export default jwtInterceptor;