import React, { createContext, useState, useContext, useEffect } from 'react';
import { authService } from '../services/auth';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initAuth = async () => {
      try {
        const token = localStorage.getItem('token');
        const user = localStorage.getItem('user');

        if (!token || !user) {
          console.log('Token veya user eksik:', { token: !!token, user: !!user });
          setIsLoggedIn(false);
          setLoading(false);
          return;
        }

        // Token formatını kontrol et
        if (!token.startsWith('Bearer ')) {
          localStorage.setItem('token', `Bearer ${token}`);
        }

        // Sayfa yenilendiğinde mevcut user verisi varsa direkt kullan
        setIsLoggedIn(true);
        
        // Arka planda profil bilgilerini güncelle
        try {
          const response = await authService.getProfile();
          if (response.success && response.user) {
            localStorage.setItem('user', JSON.stringify(response.user));
          }
        } catch (error) {
          console.error('Profile refresh error:', error);
          // Profil güncellemesi başarısız olsa bile mevcut verileri koru
        }
      } catch (error) {
        console.error('Auth initialization error:', error);
      } finally {
        setLoading(false);
      }
    };

    initAuth();
  }, []);

  const login = async (credentials) => {
    try {
      const response = await authService.login(credentials);
      if (response.success) {
        setIsLoggedIn(true);
      }
      return response;
    } catch (error) {
      console.error('Login hatası:', error);
      setIsLoggedIn(false);
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setIsLoggedIn(false);
  };

  const value = {
    isLoggedIn,
    loading,
    login,
    logout
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext); 