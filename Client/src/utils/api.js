// src/utils/api.js
import axios from 'axios';

const API_URL = "http://localhost:5000/api/v2"; // Update this with the backend URL

export const api = axios.create({
    baseURL: API_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

// Optionally, include the user's authentication token in the request headers
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});
