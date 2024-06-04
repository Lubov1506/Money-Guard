export const selectTransactions = state => state.transactions.items;
export const selectPeriodTransactions = state =>
  state.transactions.periodTransactions;
export const selectIsLoading = state => state.transactions.loading;
export const selectError = state => state.transactions.error;
export const selectCurrentTransaction = state =>
  state.transactions.currentTransaction;
export const selectCategories = state => state.transactions.categories;
