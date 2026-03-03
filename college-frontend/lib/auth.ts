import api from './api';
import Cookies from 'js-cookie';

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'faculty' | 'student';
}

export const login = async (email: string, password: string) => {
  const response = await api.post('/auth/login', { email, password });
  return response.data;
};

export const register = async (data: {
  name: string;
  email: string;
  password: string;
  role: 'admin' | 'faculty' | 'student';
}) => {
  const response = await api.post('/auth/register', data);
  return response.data;
};

export const logout = async () => {
  try {
    await api.post('/auth/logout');
    Cookies.remove('token');
    if (typeof window !== 'undefined') {
      window.location.href = '/';
    }
  } catch (error) {
    console.error('Logout error:', error);
    Cookies.remove('token');
  }
};

export const getCurrentUser = async () => {
  const response = await api.get('/auth/me');
  return response.data;
};

export const isAuthenticated = (): boolean => {
  if (typeof window === 'undefined') return false;
  return !!Cookies.get('token');
};

export const getUserRole = (): string | null => {
  if (typeof window === 'undefined') return null;
  const token = Cookies.get('token');
  if (!token) return null;

  try {
    const payload = JSON.parse(atob(token.split('.')[1]));
    return payload.role;
  } catch {
    return null;
  }
};
