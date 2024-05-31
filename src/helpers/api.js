import axios from 'axios';

export const walletAPI = axios.create({
  baseURL: 'https://wallet.b.goit.study/api',
});
