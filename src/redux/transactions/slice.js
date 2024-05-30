import { createSlice } from '@reduxjs/toolkit';
import {
  addTrnThunk,
  deleteTrnThunk,
  fetchAllTrnThunk,
  fetchPeriodTrnThunk,
} from './operations';

const initialState = {
  items: [],
  periodTransactions: [],
  loading: false,
  error: null,
  currentTransaction: null,
};

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    addCurrentTransaction(state, { payload }) {
      state.currentTransaction = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllTrnThunk.fulfilled, (state, { payload }) => {
        state.items = payload;
      })
      .addCase(fetchPeriodTrnThunk.fulfilled, (state, { payload }) => {
        state.periodTransactions = payload;
      })

      .addCase(addTrnThunk.fulfilled, (state, { payload }) => {
        state.items.push(payload);
      })
      .addCase(deleteTrnThunk.fulfilled, (state, { payload }) => {
        state.items.map((trn) => trn.id !== payload);
      })
      .addMatcher(
        ({ type }) => type.endsWith('/pending'),
        (state) => {
          state.loading = true;
          state.error = null;
        }
      )
      .addMatcher(
        ({ type }) => type.endsWith('/fulfilled'),
        (state) => {
          state.loading = false;
          state.error = null;
        }
      )
      .addMatcher(
        ({ type }) => type.endsWith('/rejected'),
        (state) => {
          state.loading = false;
          state.error = true;
        }
      );
  },
});

export const transactionsReducer = transactionsSlice.reducer;
export const { addCurrentTransaction } = transactionsSlice.actions;
