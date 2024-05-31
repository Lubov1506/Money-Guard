import s from './CreateButton.module.css';

const CreateButton = () => {
  return (
    <button
      type="button"
      className={s.btn}
    >
      <img
        src="../../../public/add-button-icon.svg"
        alt="addBtn"
      />
    </button>
  );
};

export default CreateButton;
