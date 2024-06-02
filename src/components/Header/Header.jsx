import { Suspense, useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { ImExit } from 'react-icons/im';
import LogoutModal from '../LogoutModal/LogoutModal';
import { selectUser } from '../../redux/auth/selectors';
import s from './Header.module.css';
import Loader from '../Loader/Loader';
import Logo from '../common/Logo/Logo';
import { useMedia } from '../../hooks/useMedia';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const user = useSelector(selectUser);
  const userName = user ? user.email.split('@')[0] : '';

  const { isMobile } = useMedia();
  const open = () => {
    setIsModalOpen(true);
    console.log('modal is open');
  };

  const close = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <header className={s.header}>
        <NavLink to="">
          <Logo
            type="header"
            width={isMobile ? 18 : 25}
            height={isMobile ? 18 : 23}
          />
        </NavLink>

        <div className={s.user}>
          <span className={s.userName}>{userName}</span>
          <button onClick={open} className={s.exitBtn}>
            <ImExit width={18} height={18} />
            {!isMobile && <p>Exit</p>}
          </button>
        </div>

        {isModalOpen && (
          <Suspense fallback={<Loader />}>
            <LogoutModal onClose={close} />
          </Suspense>
        )}
      </header>
    </>
  );
};

export default Header;
