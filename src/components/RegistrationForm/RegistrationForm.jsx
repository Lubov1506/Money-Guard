import { ErrorMessage, Field, Form, Formik } from 'formik';
import { MdOutlineMailOutline, MdLock } from 'react-icons/md';
import { IoPerson } from 'react-icons/io5';
import s from './RegistrationForm.module.css';
import PasswordStrengthBar from 'react-password-strength-bar';
import { useDispatch } from 'react-redux';
import { signUpThunk } from '../../redux/auth/operations';
import { validation } from '../../helpers/registerValidation';
import FormButton from '../common/FormButton/FormButton';
import { Link } from 'react-router-dom';
import Logo from '../common/Logo/Logo';

export const RegistrationForm = () => {
  const dispatch = useDispatch();
  const initialValues = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const handleSubmit = (values, actions) => {
    const { name: username, email, password } = values;
    const signUpData = { username, email, password };
    dispatch(signUpThunk(signUpData));
    console.log(signUpData);
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
                <IoPerson className={s.inputIcon} />
                <Field
                  type="name"
                  name="name"
                  placeholder="Name"
                  className={s.input}
                  required
                />
                <ErrorMessage
                  className={s.error}
                  name="name"
                  component="span"
                />
              </div>
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
              <div className={s.inputGroup}>
                <MdLock className={s.inputIcon} />
                <Field
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm password"
                  className={s.input}
                  required
                />
                <ErrorMessage
                  className={s.error}
                  name="confirmPassword"
                  component="span"
                />
              </div>
              <PasswordStrengthBar
                style={{ top: '-40px' }}
                barColors={['#ddd', '#ffcc00', '#00cc00', '#00cc00', '#00cc00']}
                scoreWords={[]}
                minLength={3}
                shortScoreWord={''}
              />
            </div>
            <div className={s.btns}>
              <FormButton
                type="submit"
                text={'Register'}
                variant={'multiColorButtton'}
              />

              <Link to="/login">
                <FormButton
                  type="button"
                  text={'LogIn'}
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

export default RegistrationForm;
