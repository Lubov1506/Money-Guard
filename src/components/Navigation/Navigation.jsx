import { NavLink } from 'react-router-dom';
import icons from '../../images/icons/sprite.svg';
import s from './Navigation.module.css';
import clsx from 'clsx';
import { useMedia } from '../../hooks/useMedia';
import { MdHome } from 'react-icons/md';
import { SlGraph } from 'react-icons/sl';
import { FaDollarSign } from 'react-icons/fa6';

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

const Navigation = () => {
  const { isDesktop, isTablet } = useMedia();

  return (
    <ul className={s.link_icon_wrapper}>
      <li>
        <NavLink to="/" className={buildLinkClass}>
          <MdHome className={s.icon} />
          {isTablet || isDesktop ? <span className={s.span}>Home</span> : ''}
        </NavLink>
      </li>
      <li>
        <NavLink to="/statistics" className={buildLinkClass}>
          <SlGraph className={s.icon} />
          {isTablet || isDesktop ? (
            <span className={s.span}>Statistics</span>
          ) : (
            ''
          )}
        </NavLink>
      </li>
      {isTablet || isDesktop ? (
        ''
      ) : (
        <li>
          <NavLink to="/currency" className={buildLinkClass}>
            <FaDollarSign className={s.icon} />
          </NavLink>
        </li>
      )}
    </ul>
  );
};

export default Navigation;
