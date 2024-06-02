import { NavLink } from 'react-router-dom';
import icons from '../../images/icons/sprite.svg';
import s from './Navigation.module.css';
import clsx from 'clsx';
import { useMedia } from '../../hooks/useMedia';

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

const Navigation = () => {
  const { isDesktop, isTablet } = useMedia();

  return (
    <ul className={s.link_icon_wrapper}>
      <li>
        <NavLink to="/" className={buildLinkClass}>
          <svg className={s.icon}>
            <use href={`${icons}#icon-home`} />
          </svg>
          {isTablet || isDesktop ? <span className={s.span}>Home</span> : ''}
        </NavLink>
      </li>
      <li>
        <NavLink to="/statistics" className={buildLinkClass}>
          <svg className={s.icon}>
            <use href={`${icons}#icon-statistics`} />
          </svg>
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
            <svg className={s.icon}>
              <use href={`${icons}#icon-currency`} />
            </svg>
          </NavLink>
        </li>
      )}
    </ul>
  );
};

export default Navigation;
