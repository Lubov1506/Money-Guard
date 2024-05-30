import { walletAPI } from './api';

export const getTrnCats = async () => {
  const { data } = await walletAPI.get('/transaction-categories');
  return data;
};
