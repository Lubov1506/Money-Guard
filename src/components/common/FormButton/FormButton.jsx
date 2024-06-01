import styles from './FormButton.module.css';

const FormButton = ({
  type,
  text,
  handlerFunction,
  variant,
  isDisabled = false,
  width ='280px'
}) => {
  return (
    <button style={{width}}
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
