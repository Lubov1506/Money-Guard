import { ErrorMessage, Field, Form, Formik } from "formik";
import { MdOutlineMailOutline, MdLock, IoPerson } from "react-icons/md";
import * as yup from "yup";
import s from "./RegistrationForm.module.css";
import PasswordStrengthBar from "react-password-strength-bar";
// import { signUpThunk } from "../../redux/auth/operations";

export const RegistrationForm = () => {
  // const dispatch = useDispatch();
  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const { password } = this.state;
  const validation = yup.object().shape({
    name: yup
      .string()
      .required("Name is required")
      .min(3, "Must be at least 3 characters long")
      .max(50, "Too long")
      .trim(),
    email: yup
      .string()
      .email("Invalid email")
      .required("Email is required")
      .min(3, "Must be at least 3 characters long")
      .max(50, "Too long")
      .trim(),
    password: yup
      .string()
      .required("Password is required")
      .min(6, "Must be at least 3 characters long")
      .max(12, "Too long"),
    confirmPassword: yup
      .string()
      .required("Password is required")
      .min(6, "Must be at least 3 characters long")
      .max(12, "Too long"),
  });
  const handleSubmit = (values, actions) => {
    //   dispatch(signUpThunk(values));
    console.log(values);
    actions.resetForm();
  };

  return (
    <div className={s.backdrop}>
      <div className={s.modal}>
        <div className={s.logo}>
          <img
            src="/public/money-guard.svg"
            alt="Money Guard Logo"
            width={28}
            height={35}
          />
          <h2 className={s.textLogo}>Money Guard</h2>
        </div>
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
              <PasswordStrengthBar password={password} />
            </div>
            <div className={s.btns}>
              <button type="submit" className={s.btnColor}>
                Register
              </button>
              <button type="button" className={s.btnWhite}>
                Login
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default RegistrationForm;
