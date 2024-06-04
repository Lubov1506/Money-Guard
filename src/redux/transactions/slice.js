import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  addTrnThunk,
  deleteTrnThunk,
  editTrnThunk,
  fetchAllTrnThunk,
  fetchPeriodTrnThunk,
  getCategoriesThunk,
} from './operations';

const initialState = {
  items: [],
  periodTransactions: [],
  loading: false,
  error: null,
  currentTransaction: null,
  categories: [],
};

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,

  reducers: {
    addCurrentTransaction(state, { payload }) {
      state.currentTransaction = payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchAllTrnThunk.fulfilled, (state, { payload }) => {
        state.items = payload;
      })
      .addCase(fetchPeriodTrnThunk.fulfilled, (state, { payload }) => {
        state.periodTransactions = payload;
      })
      .addCase(getCategoriesThunk.fulfilled, (state, { payload }) => {
        state.categories = payload;
      })
      .addCase(editTrnThunk.fulfilled, (state, { payload }) => {
        payload.transactionDate = payload.transactionDate
          .toString()
          .slice(0, 10);
        state.items = state.items.map(trn =>
          trn.id === payload.id ? payload : trn
        );
      })
      .addCase(addTrnThunk.fulfilled, (state, { payload }) => {
        payload.transactionDate = payload.transactionDate
          .toString()
          .slice(0, 10);
        const { items } = state;
        state.items = [...items, payload];
      })
      .addCase(deleteTrnThunk.fulfilled, (state, { payload }) => {
        state.items = state.items.filter(trn => trn.id !== payload);
      })
      //  state.items = state.items.filter(trn => trn.id !== payload);
      .addMatcher(
        isAnyOf(
          fetchAllTrnThunk.pending,
          fetchPeriodTrnThunk.pending,
          addTrnThunk.pending,
          deleteTrnThunk.pending
        ),
        state => {
          state.loading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchAllTrnThunk.fulfilled,
          fetchPeriodTrnThunk.fulfilled,
          addTrnThunk.fulfilled,
          deleteTrnThunk.fulfilled
        ),
        state => {
          state.loading = false;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          getCategoriesThunk.rejected,
          fetchAllTrnThunk.rejected,
          fetchPeriodTrnThunk.rejected,
          addTrnThunk.rejected,
          deleteTrnThunk.rejected
        ),
        state => {
          state.loading = false;
          state.error = true;
        }
      );
  },
});

export const transactionsReducer = transactionsSlice.reducer;
export const { addCurrentTransaction } = transactionsSlice.actions;
