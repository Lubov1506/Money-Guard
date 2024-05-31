import styles from './FormButton.module.css';

const FormButton = ({
  type,
  text,
  handlerFunction,
  variant,
  isDisabled = false,
}) => {
  return (
    <button
      type={type}
      onClick={handlerFunction}
      className={`${styles.formButton} ${styles[variant]}`}
      disabled={isDisabled}
    >
      {text}
    </button>
  );
};

export default FormButton;
