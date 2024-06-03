import { ErrorMessage, Field, Form, Formik } from 'formik';
import { MdOutlineMailOutline, MdLock } from 'react-icons/md';
import { IoPerson } from 'react-icons/io5';
import s from './RegistrationForm.module.css';
import PasswordStrengthBar from 'react-password-strength-bar';
import { useDispatch } from 'react-redux';
import { signUpThunk } from '../../redux/auth/operations';
import { registerValidatSchema } from 'helpers';
import FormButton from '../common/FormButton/FormButton';
import { Link } from 'react-router-dom';
import Logo from '../common/Logo/Logo';
import ProgressBar from '../ProgressBar/ProgressBar';

export const RegistrationForm = () => {
  const dispatch = useDispatch();
  const initialValues = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  };
  // const { password } = this.state.password;

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
          validationSchema={registerValidatSchema}
          onSubmit={handleSubmit}
        >
          {({ values }) => (
            <Form className={s.form}>
              <div className={s.inputs}>
                <div className={s.inputGroup}>
                  <IoPerson className={s.inputIcon} />
                  <Field
                    type="text"
                    name="name"
                    placeholder="Name"
                    className={s.input}
                    required
                    // autoComplete="off"
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
                    // autoComplete="off"
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
                    // autoComplete="off"
                  />
                  <ErrorMessage
                    className={s.error}
                    name="password"
                    component="span"
                  />
                </div>
                <div className={s.inputGroup}>
                  <MdLock className={s.inputIconLast} />
                  <Field
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm password"
                    className={s.input}
                    required
                    // autoComplete="off"
                  />
                  <ProgressBar
                    className={s.progressBarComponent}
                    password={values.password}
                    confirmPassword={values.confirmPassword}
                  />
                  <ErrorMessage
                    className={s.error}
                    name="confirmPassword"
                    component="span"
                  />
                </div>
                {/* <PasswordStrengthBar
                  password={values.password}
                  className={s.bar}
                  style={{ top: '-40px' }}
                  barColors={[
                    '#ddd',
                    '#ffcc00',
                    '#00cc00',
                    '#00cc00',
                    '#00cc00',
                  ]}
                  scoreWords={[]}
                  shortScoreWord={''}
                /> */}
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
          )}
        </Formik>
      </div>
    </div>
  );
};

export default RegistrationForm;
