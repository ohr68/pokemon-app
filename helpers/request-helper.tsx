import axios from 'axios';
import camelCaseKeys from 'camelcase-keys';

export function getApiClient(context?: any) {

    const baseUrl = process.env.NEXT_PUBLIC_REACT_APP_API_BASE_URL!;

    const api = axios.create({
        baseURL: baseUrl,
    });

    api.interceptors.response.use(
        function (response) {
            // any status code that lie within the range of 2xx cause this function to trigger
            // Do something with response data

            return {
                ...response,
                data: camelCaseKeys(response.data, { deep: true }),
            }
        },
        function (error) {
            // Any status codes that falls outside the range of 2xx cause this function to trigger
            // Do something with response error
            return Promise.reject(error);
        }
    )

    return api;
}