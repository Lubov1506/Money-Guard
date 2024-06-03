import * as Yup from 'yup';

export const addTrnValidSchema = isOnIncomeTab => {
  return isOnIncomeTab
    ? Yup.object({
        amount: Yup.string().required('Required* '),
        comment: Yup.string().required('Required*'),
      })
    : Yup.object({
        amount: Yup.string().required('Required*'),
        comment: Yup.string().required('Required*'),
        category: Yup.string().required('Required*'),
      });
};
