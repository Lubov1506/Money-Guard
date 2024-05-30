import { ErrorMessage, Field, Form, Formik } from "formik";
import { MdOutlineMailOutline } from "react-icons/md";
import { MdLock } from "react-icons/md";
import * as yup from "yup";
import s from "./LoginForm.module.css";
import { signInThunk } from "../../redux/auth/operations";
import { useDispatch } from "react-redux";

export const LoginForm = () => {
  const dispatch = useDispatch();
  const initialValues = {
    email: "",
    password: "",
  };
  const validation = yup.object().shape({
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
  });
  const handleSubmit = (values, actions) => {
    dispatch(signInThunk(values));
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
              <button type="submit" className={s.btnColor}>
                Login
              </button>
              <button type="button" className={s.btnWhite}>
                Register
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default LoginForm;
