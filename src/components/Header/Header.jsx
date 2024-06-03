import { Suspense, useState } from 'react';
import { useSelector } from 'react-redux';
import { ImExit } from 'react-icons/im';
import { useMedia } from 'hooks';
import { selectUser } from '../../redux/auth/selectors';

import s from './Header.module.css';
import Logo from 'components/common/Logo/Logo';
import Loader from 'components/Loader/Loader';
import LogoutModal from 'components/LogoutModal/LogoutModal';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const user = useSelector(selectUser);
  const userName = user ? user.email.split('@')[0] : '';
  const { isMobile } = useMedia();
  // const navigate = useNavigate();

  const open = () => {
    setIsModalOpen(true);
  };

  const close = () => {
    setIsModalOpen(false);
  };

  // const handleLogout = async () => {
  //   try {
  //     localStorage.clear();
  //     navigate('/login');
  //   } catch (error) {
  //     alert('Failed to exit. Try again');
  //   }
  // };
  return (
    <>
      <header className={s.header}>
        <Logo
          type="header"
          width={isMobile ? 18 : 25}
          height={isMobile ? 18 : 23}
        />

        <div className={s.user}>
          <span className={s.userName}>{userName}</span>
          <button onClick={open} className={s.exitBtn}>
            <ImExit width={18} height={18} />
            {!isMobile && <p>Exit</p>}
          </button>
        </div>
      </header>

      {isModalOpen && (
        <Suspense fallback={<Loader />}>
          <LogoutModal
            onClose={close}
            // onLogout={handleLogout}
          />
        </Suspense>
      )}
    </>
  );
};

export default Header;
