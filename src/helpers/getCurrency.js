import axios from 'axios';
const instance = axios.create({
  baseURL: 'https://api.monobank.ua/bank/currency',
});
const fetchCurrency = async () => {
  const { data } = await instance.get();
  return data;
};

export const getCurrency = async () => {
  const cachedCurrency = JSON.parse(localStorage.getItem('currency'));
  const now = Date.now();

  if (cachedCurrency && now - cachedCurrency.date < 3600000) {
    return cachedCurrency;
  }

  try {
    const data = await fetchCurrency();
    const usd = data.find(
      item => item.currencyCodeA === 840 && item.currencyCodeB === 980
    );
    const eur = data.find(
      item => item.currencyCodeA === 978 && item.currencyCodeB === 980
    );
    const currencyData = {
      date: now,
      usd: { buy: usd.rateBuy.toFixed(2), sell: usd.rateSell.toFixed(2) },
      eur: { buy: eur.rateBuy.toFixed(2), sell: eur.rateSell.toFixed(2) },
    };
    localStorage.setItem('currency', JSON.stringify(currencyData));
    return currencyData;
  } catch (err) {
    throw new Error(err.message);
  }
};
