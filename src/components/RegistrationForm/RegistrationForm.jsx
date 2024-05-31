import { ErrorMessage, Field, Form, Formik } from "formik";
import { MdOutlineMailOutline, MdLock } from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import s from "./RegistrationForm.module.css";
import PasswordStrengthBar from "react-password-strength-bar";
import { useDispatch } from "react-redux";
import { signUpThunk } from "../../redux/auth/operations";
import { validation } from "../../helpers/registerValidation";

export const RegistrationForm = () => {
  const dispatch = useDispatch();
  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const handleSubmit = (values, actions) => {
    const { name: username, email, password } = values;
    const signUpData = { username, email, password };
    dispatch(signUpThunk(signUpData));
    console.log(values);
    console.log(signUpData);
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
              <PasswordStrengthBar
                style={{ top: "-40px" }}
                barColors={["#ddd", "#ffcc00", "#00cc00", "#00cc00", "#00cc00"]}
                scoreWords={[]}
                minLength={3}
                shortScoreWord={""}
              />
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
