import { Suspense, useState } from 'react';
import { useSelector } from 'react-redux';
import { ImExit } from 'react-icons/im';
import { useMedia } from 'hooks';
import { selectUser } from '../../redux/auth/selectors';

import s from './Header.module.css';
import Logo from 'components/common/Logo/Logo';
import Loader from 'components/Loader/Loader';
import LogoutModal from 'components/LogoutModal/LogoutModal';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const user = useSelector(selectUser);
  const userName = user ? user.username : null;
  const { isMobile } = useMedia();

  const open = () => {
    setIsModalOpen(true);
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
          <span className={s.userName}>{userName || 'Guest'}</span>
          <button onClick={open} className={s.exitBtn}>
            <ImExit width={18} height={18} />
            {!isMobile && <p>Exit</p>}
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
