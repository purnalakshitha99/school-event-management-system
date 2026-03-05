import React, { createContext, useContext, useReducer, useEffect } from 'react';

const AuthContext = createContext();

const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        isAuthenticated: true,
        loading: false,
        error: null,
      };
    case 'LOGOUT':
      return {
        ...state,
        user: null,
        token: null,
        isAuthenticated: false,
        loading: false,
        error: null,
      };
    case 'SET_LOADING':
      return {
        ...state,
        loading: action.payload,
      };
    case 'SET_ERROR':
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case 'CLEAR_ERROR':
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

const initialState = {
  user: null,
  token: null,
  isAuthenticated: false,
  loading: true,
  error: null,
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    // Check for existing auth on app load
    const token = localStorage.getItem('authToken');
    const userData = localStorage.getItem('user');

    if (token && userData) {
      try {
        const user = JSON.parse(userData);
        dispatch({
          type: 'LOGIN_SUCCESS',
          payload: { user, token },
        });
      } catch (error) {
        localStorage.removeItem('authToken');
        localStorage.removeItem('user');
        dispatch({ type: 'SET_LOADING', payload: false });
      }
    } else {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  }, []);

  const login = async (credentials) => {
    try {
      dispatch({ type: 'SET_LOADING', payload: true });
      dispatch({ type: 'CLEAR_ERROR' });

      // Simulate API call with dummy data
      await new Promise(resolve => setTimeout(resolve, 1000));

      const dummyUser = {
        id: 1,
        email: credentials.email,
        name: 'John Doe',
        role: credentials.email.includes('admin') ? 'admin' : 
              credentials.email.includes('organizer') ? 'organizer' : 'student',
        avatar: 'https://ui-avatars.com/api/?name=John+Doe&background=4f46e5&color=fff',
      };

      const token = 'dummy-jwt-token-' + Date.now();

      localStorage.setItem('authToken', token);
      localStorage.setItem('user', JSON.stringify(dummyUser));

      dispatch({
        type: 'LOGIN_SUCCESS',
        payload: { user: dummyUser, token },
      });

      return { success: true };
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: error.message });
      return { success: false, error: error.message };
    }
  };

  const register = async (userData) => {
    try {
      dispatch({ type: 'SET_LOADING', payload: true });
      dispatch({ type: 'CLEAR_ERROR' });

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      const newUser = {
        id: Math.floor(Math.random() * 1000),
        email: userData.email,
        name: userData.name,
        role: 'student',
        avatar: `https://ui-avatars.com/api/?name=${userData.name}&background=4f46e5&color=fff`,
      };

      const token = 'dummy-jwt-token-' + Date.now();

      localStorage.setItem('authToken', token);
      localStorage.setItem('user', JSON.stringify(newUser));

      dispatch({
        type: 'LOGIN_SUCCESS',
        payload: { user: newUser, token },
      });

      return { success: true };
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: error.message });
      return { success: false, error: error.message };
    }
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    dispatch({ type: 'LOGOUT' });
  };

  const value = {
    ...state,
    login,
    register,
    logout,
    clearError: () => dispatch({ type: 'CLEAR_ERROR' }),
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};