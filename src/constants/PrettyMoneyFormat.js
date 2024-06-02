const prettyMoneyFormat = number => {
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
    .format(Math.abs(number))
    .replace(/,/g, ' ');
};
export default prettyMoneyFormat;
