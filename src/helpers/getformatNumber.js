export const getformatNumber = number =>
  number
    .toLocaleString('fr-FR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
    .replace(/\s/g, ' ')
    .replace(',', '.');
