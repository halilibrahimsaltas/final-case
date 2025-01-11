import { postData, getData } from '../utils/api';

export const authService = {
    async register(userData) {
        try {
            const response = await postData('/api/user/register', userData);
            return response;
        } catch (error) {
            console.error('Register error:', error);
            throw error;
        }
    },

    async login(credentials) {
        try {
            const response = await postData('/api/user/login', credentials);
            if (response.success) {
                localStorage.setItem('token', `Bearer ${response.token}`);
                localStorage.setItem('user', JSON.stringify(response.user));
                
                console.log('Auth service - Login successful:', {
                    token: localStorage.getItem('token'),
                    user: localStorage.getItem('user')
                });
            }
            return response;
        } catch (error) {
            console.error('Login error:', error);
            throw error;
        }
    },

    async getProfile() {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                console.log('No token found in getProfile');
                return { success: false, message: 'Authentication required' };
            }

            try {
                const response = await getData('/api/user/profile');
                console.log('Profile response:', response);
                
                if (response.success) {
                    localStorage.setItem('user', JSON.stringify(response.user));
                }
                
                return response;
            } catch (error) {
                console.error('Profile fetch error:', error);
                return { success: false, message: 'Profile fetch failed' };
            }
        } catch (error) {
            console.error('Get profile error:', error);
            throw error;
        }
    },

    async updateProfile(userId, userData) {
        try {
            const response = await postData(`/api/user/${userId}`, userData);
            if (response.success) {
                localStorage.setItem('user', JSON.stringify(response.user));
            }
            return response;
        } catch (error) {
            console.error('Update profile error:', error);
            throw error;
        }
    },

    logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
    },

    isAuthenticated() {
        return !!localStorage.getItem('token');
    },

    getToken() {
        return localStorage.getItem('token');
    },

    getUser() {
        const user = localStorage.getItem('user');
        return user ? JSON.parse(user) : null;
    }
}; 