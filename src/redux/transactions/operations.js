import { createAsyncThunk } from '@reduxjs/toolkit';
import { walletAPI } from '../../helpers/api';
import { getBalanceThunk } from '../auth/operations';

export const fetchAllTrnThunk = createAsyncThunk(
  'transactions/fetchAllTransactions',
  async (_, thunkAPI) => {
    try {
      const { data } = await walletAPI.get('/transactions');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchPeriodTrnThunk = createAsyncThunk(
  'transactions/fetchByPeriodTransactions',
  async (period, thunkAPI) => {
    try {
      const { month, year } = period;
      if (month || year) {
        const { data } = await walletAPI.get('/transactions-summary', {
          params: { month, year },
        });
        return data;
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addTrnThunk = createAsyncThunk(
  'transactions/addTransaction',
  async (transaction, thunkAPI) => {
    try {
      const { data } = await walletAPI.post('/transactions', transaction);
      await thunkAPI.dispatch(getBalanceThunk());
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editTrnThunk = createAsyncThunk(
  'transactions/editTransaction',
  async (transaction, thunkAPI) => {
    try {
      const { id, transactionDate, type, comment, amount } = transaction;
      const { data } = await walletAPI.patch(`/transactions/${id}`, {
        transactionDate,
        type,
        comment,
        amount,
      });
      await thunkAPI.dispatch(getBalanceThunk());
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteTrnThunk = createAsyncThunk(
  'transactions/deleteTransaction',
  async (transactionId, thunkAPI) => {
    try {
      await walletAPI.delete(`/transactions/${transactionId}`);
      await thunkAPI.dispatch(getBalanceThunk());
      return transactionId;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getCategoriesThunk = createAsyncThunk(
  'transactions/getCategories',
  async (_, thunkAPI) => {
    try {
      const { data } = await walletAPI.get('/transaction-categories');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
