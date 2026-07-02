import axios from 'axios';

export const GATEWAY_URL = import.meta.env.VITE_API_URL || 'http://192.168.1.246:5173';

export const apiClient = axios.create({
    baseURL: GATEWAY_URL,
});

export const authHeaders = (token) => ({
    headers: { Authorization: `Bearer ${token}` },
});
