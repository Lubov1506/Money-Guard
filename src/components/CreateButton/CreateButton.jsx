import { useOutletContext } from 'react-router-dom';
import s from './CreateButton.module.css';
import { IoAddSharp } from 'react-icons/io5';

const CreateButton = () => {
  const { openAddModal } = useOutletContext();
  return (
    <button onClick={() => openAddModal()} type="button" className={s.btn}>
      <IoAddSharp className={s.icon} />
    </button>
  );
};

export default CreateButton;
