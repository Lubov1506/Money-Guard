import * as yup from 'yup';

export const editValidationSchema = yup.object().shape({
  amount: yup.string().required('Required* '),
  comment: yup.string().required('Required*'),
});
