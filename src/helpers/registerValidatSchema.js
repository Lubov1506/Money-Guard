import * as yup from 'yup';

export const registerValidatSchema = yup.object().shape({
  username: yup
    .string()
    .required('Name is required')
    .min(3, 'Must be at least 3 characters long')
    .max(50, 'Too long')
    .trim(),
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
    .min(6, 'Must be at least 6 characters long')
    .max(12, 'Too long'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Password is required')
    .min(6, 'Must be at least 6 characters long')
    .max(12, 'Too long'),
});
