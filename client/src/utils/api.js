import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:4000',
    headers: {
        'Content-Type': 'application/json'
    }
});

// Request interceptor - token eklemek için
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            // Token formatını standardize et
            const formattedToken = token.startsWith('Bearer ') ? token : `Bearer ${token}`;
            config.headers.Authorization = formattedToken;
            console.log('Request with token:', formattedToken);
        }
        return config;
    },
    (error) => {
        console.error('Request interceptor error:', error);
        return Promise.reject(error);
    }
);

// Response interceptor - hata yönetimi için
api.interceptors.response.use(
    (response) => {
        return response.data;
    },
    (error) => {
        console.error('API Error:', error.response?.data || error.message);
        if (error.response?.status === 401) {
            // Token geçersiz olduğunda tüm auth verilerini temizle
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            window.location.href = '/signin';
        }
        return Promise.reject(error);
    }
);

export const getData = async (url) => {
    try {
        return await api.get(url);
    } catch (error) {
        throw error;
    }
};

export const postData = async (url, data) => {
    try {
        return await api.post(url, data);
    } catch (error) {
        throw error;
    }
};

export const putData = async (url, data) => {
    try {
        return await api.put(url, data);
    } catch (error) {
        throw error;
    }
};

export const deleteData = async (url) => {
    try {
        return await api.delete(url);
    } catch (error) {
        throw error;
    }
};

export const editData = async (url, data) => {
    try {
        return await api.put(url, data);
    } catch (error) {
        throw error;
    }
};

export const newEditData = async (url, data) => {
    try {
        return await api.put(url, data);
    } catch (error) {
        throw error;
    }
}; 