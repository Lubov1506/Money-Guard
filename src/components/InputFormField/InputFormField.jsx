import { ErrorMessage, Field } from 'formik';
import s from './InputFormField.module.css';
import ProgressBar from '../ProgressBar/ProgressBar';
import clsx from 'clsx';

const InputFormField = ({
  icon: Icon,
  type,
  name,
  placeholder,
  passwordValue,
  confirmValue,
}) => {
  return (
    <div className={s.inputGroup}>
      <Icon
        className={clsx(
          s.inputIcon,
          name === 'confirmPassword' && s.inputIconLast
        )}
      />
      <Field
        type={type}
        name={name}
        placeholder={placeholder}
        className={s.input}
        required
      />
      <ErrorMessage className={s.error} name={name} component="span" />
      {name === 'confirmPassword' && (
        <ProgressBar
          className={s.progressBarComponent}
          password={passwordValue}
          confirmPassword={confirmValue}
        />
      )}
    </div>
  );
};

export default InputFormField;
