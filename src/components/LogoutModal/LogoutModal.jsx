import { useDispatch } from 'react-redux';
import s from './LogoutModal.module.css';
import { signOutThunk } from '../../redux/auth/operations';
import FormButton from '../common/FormButton/FormButton';
import { useMedia } from 'hooks';
import Logo from '../common/Logo/Logo';

const LogoutModal = ({ onClose }) => {
  const dispatch = useDispatch();
  const { isMobile } = useMedia();

  return (
    <div className={s.modal}>
      {!isMobile && <Logo />}
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
  );
};

export default LogoutModal;
