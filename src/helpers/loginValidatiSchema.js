import * as yup from 'yup';

export const loginValidatiSchema = yup.object().shape({
  email: yup
    .string()
    .email('Invalid email')
    .required('Email is required')
    .min(3, 'Must be at least 3 characters long')
    .max(50, 'Too long')
    .trim(),
  password: yup
    .string()
    .required('Password is required')
    .min(6, 'Must be at least 3 characters long')
    .max(12, 'Too long'),
});
