const dateFormat = date => {
  const result = date.split('-').reverse();
  result[2] = result[2].slice(2, 4);
  return result.join('.');
};

export default dateFormat;
