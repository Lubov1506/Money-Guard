import axios from "axios";
const instance = axios.create({
  baseURL: "https://api.monobank.ua/bank/currency",
});
const getCurrency = async () => {
  const { data } = await instance.get();
  return data;
};
export default getCurrency;
