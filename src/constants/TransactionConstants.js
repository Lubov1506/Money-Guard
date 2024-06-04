const getTransactionId = (transactionCategory, categories) => {
  const transactionTargeted = categories.find(
    item => item.name === transactionCategory
  );

  return transactionTargeted.id;
};

const getTransactionCategory = (transactionId, categories) => {
  const transactionTargeted = categories.find(
    item => item.id === transactionId
  );

  return transactionTargeted.name;
};

const formatData = unixData => {
  const year = new Date(unixData).getFullYear();
  const mounth = new Date(unixData).getMonth() + 1;
  const day = new Date(unixData).getDate();

  const doubleDigitsFormatMounth = String(mounth).padStart(2, 0);
  const doubleDigitsFormatDay = String(day).padStart(2, 0);

  return `${doubleDigitsFormatDay}.${doubleDigitsFormatMounth}.${year}`;
};

const Months_OPTIONS = [
  { value: 1, label: 'January' },
  { value: 2, label: 'February' },
  { value: 3, label: 'March' },
  { value: 4, label: 'April' },
  { value: 5, label: 'May' },
  { value: 6, label: 'June' },
  { value: 7, label: 'July' },
  { value: 8, label: 'August' },
  { value: 9, label: 'September' },
  { value: 10, label: 'October' },
  { value: 11, label: 'November' },
  { value: 12, label: 'December' },
];

const CURRENT_YEAR = new Date().getFullYear();

const YEARS_OPTIONS = [CURRENT_YEAR, CURRENT_YEAR - 1, CURRENT_YEAR - 2];

const getTrasactionCategoryColor = category => {
  switch (category) {
    case 'Main expenses':
      return 'rgba(254, 208, 87, 1)';

    case 'Products':
      return 'rgba(255, 0, 255, 1)';

    case 'Car':
      return 'rgba(253, 148, 152, 1)';

    case 'Self care':
      return 'rgba(197, 186, 255, 1)';

    case 'Child care':
      return 'rgba(127, 255, 0, 1)';

    case 'Household products':
      return 'rgba(74, 86, 226, 1)';

    case 'Education':
      return 'rgba(0, 255, 255, 1)';

    case 'Leisure':
      return 'rgba(255, 119, 0, 1)';

    case 'Other expenses':
      return 'rgba(0, 173, 132, 1)';

    case 'Entertainment':
      return 'rgba(177, 15, 72, 1)';

    default:
      return 'rgb(128, 128, 128)';
  }
};

export {
  getTransactionId,
  getTransactionCategory,
  formatData,
  Months_OPTIONS,
  YEARS_OPTIONS,
  getTrasactionCategoryColor,
};
