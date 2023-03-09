import axios from "axios"

const TryRefreshToken = async () => {
    const refreshToken = localStorage.getItem('refresh-token');
    const token = localStorage.getItem('token');

    try {

        let response = axios.post('https://localhost:5001/api/token/refresh', { token, refreshToken });

        console.log(response);
    }
    catch (e) {
        console.log(e);
    }

}

export default TryRefreshToken;