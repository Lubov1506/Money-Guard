import { Suspense, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ImExit } from 'react-icons/im';
import LogoutModal from '../LogoutModal/LogoutModal';
import { selectUser } from '../../redux/auth/selectors';
import s from './Header.module.css';
import Loader from '../Loader/Loader';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const user = useSelector(selectUser);
  const userName = user ? user.email.split('@')[0] : '';
  const navigate = useNavigate(); // useNavigate is the correct hook to navigate programmatically

  const open = () => {
    setIsModalOpen(true);
    console.log('modal is open');
  };

  const close = () => {
    console.log('close');
    setIsModalOpen(false);
  };

  return (
    <>
      <header className={s.header}>
        <a className={s.logo} href="#">
          <img
            src="/money-guard.svg"
            width="17"
            height="17"
            alt="Company Logo"
          />
          <p>Money Guard</p>
        </a>
        <div className={s.user}>
          <span className={s.userName}>{userName}</span>
          <button onClick={open} className={s.exitBtn}>
            <ImExit /> Exit
          </button>
        </div>
      </header>

      {isModalOpen && (
        <Suspense fallback={<Loader />}>
          <LogoutModal onClose={close} />
        </Suspense>
      )}
    </>
  );
};

export default Header;
