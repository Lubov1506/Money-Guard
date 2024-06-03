export const getformatNumber = number =>
  number
    .toLocaleString('fr-FR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
    .replace(/\s/g, ' ')
    .replace(',', '.');

export const getformattedBalance = balance =>
  balance
    .toLocaleString('uk-UA', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
    .replace(/,/, '.');
