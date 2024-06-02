import { Suspense, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ImExit } from 'react-icons/im';
import LogoutModal from '../LogoutModal/LogoutModal';
import { selectUser } from '../../redux/auth/selectors';
import s from './Header.module.css';
import Loader from '../Loader/Loader';
// import { useMediaQuery } from 'react-responsive';
import Logo from '../common/Logo/Logo';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const user = useSelector(selectUser);
  const userName = user ? user.email.split('@')[0] : '';
  const navigate = useNavigate();
  // const isTablet = useMediaQuery({ query: '(min-width: 768px)' });
  const open = () => {
    setIsModalOpen(true);
    console.log('modal is open');
  };

  const close = () => {
    console.log('close');
    setIsModalOpen(false);
    navigate('/login');
  };

  return (
    <>
      <header className={s.header}>
        {/* <a className={s.logo} href="#">
          <img
            src="/money-guard.svg"
            width={isTablet ? '22.5' : '17.1'}
            alt="Company Logo"
          />

          <p>Money Guard</p>
        </a> */}
        <Logo type="header" />
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
