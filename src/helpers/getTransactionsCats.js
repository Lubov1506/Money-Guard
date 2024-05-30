import { walletAPI } from './api';

export const getTrnCats = async () => {
  try {
    const { data } = await walletAPI.get('/transaction-categories');
    return data;
  } catch (error) {
    console.log(error);
  }
};
