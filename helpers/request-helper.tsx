import axios from 'axios';
import { parseCookies } from 'nookies';

export function getApiClient(context?: any) {

    const baseUrl = process.env.REACT_APP_API_BASE_URL!;

    const api = axios.create({
        baseURL: baseUrl,
    });

    return api;
}