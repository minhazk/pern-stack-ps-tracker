const axios = require('axios');

const api = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL,
});

const makeRequest = (url: string, options?: object) => {
    return api(url, options)
        .then((res: any) => res.data)
        .catch((err: any) => Promise.reject(err?.response?.data?.message ?? 'Something went wrong'));
};

export default makeRequest;
