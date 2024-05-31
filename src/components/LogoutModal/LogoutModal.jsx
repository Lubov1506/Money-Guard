import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import s from './LogoutModal.module.css';
import { signOutThunk } from '../../redux/auth/operations';
import FormButton from '../common/FormButton/FormButton';

const LogoutModal = ({ onClose }) => {
  const dispatch = useDispatch();

  const handleBackDropClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <div className={s.wrapper} onClick={handleBackDropClick}>
      <div className={s.modal}>
        <div className={s.logo}>
          <img
            src="/public/money-guard.svg"
            alt="Money Guard Logo"
            width={36}
            height={36}
          />
          <h2>Money Guard</h2>
        </div>
        <h3 className={s.text}>Are you sure you want to log out?</h3>
        <div className={s.btns}>
          <FormButton
            type="button"
            text={'Logout'}
            variant={'multiColorButtton'}
            handlerFunction={() => dispatch(signOutThunk())}
          />

          <FormButton
            type="button"
            text={'Cancel'}
            variant={'whiteButtton'}
            handlerFunction={onClose}
          />
        </div>
      </div>
    </div>
  );
};

export default LogoutModal;
