import s from './CreateButton.module.css';
import { IoAddSharp } from 'react-icons/io5';

const CreateButton = () => {
  return (
    <button type="button" className={s.btn}>
      <IoAddSharp className={s.icon} />
    </button>
  );
};

export default CreateButton;
