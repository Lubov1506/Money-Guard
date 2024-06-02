import { ErrorMessage, Field, Form, Formik } from 'formik';
import { MdOutlineMailOutline } from 'react-icons/md';
import { MdLock } from 'react-icons/md';
import s from './LoginForm.module.css';
import { signInThunk } from '../../redux/auth/operations';
import { useDispatch } from 'react-redux';
import { validation } from '../../helpers/loginValidation';
import FormButton from '../common/FormButton/FormButton';
import { Link } from 'react-router-dom';
import Logo from '../common/Logo/Logo';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const initialValues = {
    email: '',
    password: '',
  };
  const handleSubmit = (values, actions) => {
    dispatch(signInThunk(values));
    console.log(values);
    actions.resetForm();
  };

  return (
    <div className={s.backdrop}>
      <div className={s.modal}>
        <Logo />
        <Formik
          initialValues={initialValues}
          validationSchema={validation}
          onSubmit={handleSubmit}
        >
          <Form className={s.form}>
            <div className={s.inputs}>
              <div className={s.inputGroup}>
                <MdOutlineMailOutline className={s.inputIcon} />
                <Field
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  className={s.input}
                  required
                />
                <ErrorMessage
                  className={s.error}
                  name="email"
                  component="span"
                />
              </div>
              <div className={s.inputGroup}>
                <MdLock className={s.inputIcon} />
                <Field
                  type="password"
                  name="password"
                  placeholder="Password"
                  className={s.input}
                  required
                />
                <ErrorMessage
                  className={s.error}
                  name="password"
                  component="span"
                />
              </div>
            </div>
            <div className={s.btns}>
              <FormButton
                type="submit"
                text={'LogIn'}
                variant={'multiColorButtton'}
              />

              <Link to="/register">
                <FormButton
                  type="button"
                  text={'Register'}
                  variant={'whiteButtton'}
                />
              </Link>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default LoginForm;
