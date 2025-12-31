import React, { createContext, useState, useContext, useEffect } from 'react';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';

const API_BASE_URL = 'https://backend-two-mu-11.vercel.app/api';

const AuthContext = createContext(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for existing session on mount
    const checkSession = () => {
      try {
        const sessionUser = Cookies.get('user_session');
        if (sessionUser) {
          try {
            const userData = JSON.parse(sessionUser);
            setUser(userData);
          } catch (error) {
            console.error('Error parsing user session:', error);
            Cookies.remove('user_session');
            setUser(null);
          }
        } else {
          setUser(null);
        }
      } catch (error) {
        console.error('Error checking session:', error);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    checkSession();
  }, []);

  const login = async (email, password) => {
    try {
      if (!email || !password) {
        throw new Error('Email and password are required');
      }

      const response = await fetch(`${API_BASE_URL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Login failed. Please try again.');
      }

      // Store user data from API response
      const userData = {
        ...data.user,
        loginTime: new Date().toISOString(),
      };

      // Set session cookie with 7 days expiration
      Cookies.set('user_session', JSON.stringify(userData), {
        expires: 7,
        secure: true,
        sameSite: 'strict',
      });

      setUser(userData);
      toast.success(data.message || 'Login successful!', {
        position: 'top-right',
        autoClose: 3000,
      });
      return { success: true };
    } catch (error) {
      toast.error(error.message || 'Login failed. Please try again.', {
        position: 'top-right',
        autoClose: 3000,
      });
      return { success: false, error: error.message };
    }
  };

  const signup = async (username, email, phone_number, country, password, confirm_password) => {
    try {
      if (!username || !email || !password || !confirm_password) {
        throw new Error('All required fields must be filled');
      }

      if (password !== confirm_password) {
        throw new Error('Passwords do not match');
      }

      if (password.length < 6) {
        throw new Error('Password must be at least 6 characters');
      }

      const response = await fetch(`${API_BASE_URL}/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          email: email,
          phone_number: phone_number || '',
          country: country || '',
          password: password,
          confirm_password: confirm_password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Signup failed. Please try again.');
      }

      // Store user data from API response
      const userData = {
        ...data.user,
        loginTime: new Date().toISOString(),
      };

      // Set session cookie with 7 days expiration
      Cookies.set('user_session', JSON.stringify(userData), {
        expires: 7,
        secure: true,
        sameSite: 'strict',
      });

      setUser(userData);
      toast.success(data.message || 'Account created successfully!', {
        position: 'top-right',
        autoClose: 3000,
      });
      return { success: true };
    } catch (error) {
      toast.error(error.message || 'Signup failed. Please try again.', {
        position: 'top-right',
        autoClose: 3000,
      });
      return { success: false, error: error.message };
    }
  };

  const resetPassword = async (email, new_password, confirm_password) => {
    try {
      if (!email || !new_password || !confirm_password) {
        throw new Error('All fields are required');
      }

      if (new_password !== confirm_password) {
        throw new Error('Passwords do not match');
      }

      if (new_password.length < 6) {
        throw new Error('Password must be at least 6 characters');
      }

      const response = await fetch(`${API_BASE_URL}/reset-password`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          new_password: new_password,
          confirm_password: confirm_password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Password reset failed. Please try again.');
      }

      toast.success(data.message || 'Password reset successfully!', {
        position: 'top-right',
        autoClose: 3000,
      });
      return { success: true };
    } catch (error) {
      toast.error(error.message || 'Failed to reset password.', {
        position: 'top-right',
        autoClose: 3000,
      });
      return { success: false, error: error.message };
    }
  };

  const logout = () => {
    Cookies.remove('user_session');
    setUser(null);
    toast.info('Logged out successfully', {
      position: 'top-right',
      autoClose: 3000,
    });
  };

  const value = {
    user,
    loading,
    login,
    signup,
    resetPassword,
    logout,
    isAuthenticated: !!user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

