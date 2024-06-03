import { createAsyncThunk } from '@reduxjs/toolkit';
import { walletAPI } from '../../helpers/api';
import { toastStyles } from 'components/Toast/toastStyles';
import { toast } from 'react-toastify';

const setAuthHeader = token => {
  walletAPI.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  walletAPI.defaults.headers.common.Authorization = '';
};

export const signUpThunk = createAsyncThunk(
  'auth/signup',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await walletAPI.post('/auth/sign-up', credentials);
      toast.success('You are registered', toastStyles);
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      toast.error('Something went wrong!', toastStyles);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const signInThunk = createAsyncThunk(
  'auth/signin',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await walletAPI.post('/auth/sign-in', credentials);
      setAuthHeader(data.token);
      toast.success('You are logged in', toastStyles);

      return data;
    } catch (error) {
      toast.error('You are not logged in!', toastStyles);

      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const signOutThunk = createAsyncThunk(
  'auth/signout',
  async (_, thunkAPI) => {
    try {
      await walletAPI.delete('/auth/sign-out');
      toast.success('You are logged out!', toastStyles);

      clearAuthHeader();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshUserThunk = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (!persistedToken) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      setAuthHeader(persistedToken);

      const { data } = await walletAPI.get('/users/current');

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const getBalanceThunk = createAsyncThunk(
  'auth/getBalance',
  async (_, thunkAPI) => {
    try {
      const { data } = await walletAPI.get('/users/current');

      return data.balance;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
