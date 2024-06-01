import { NavLink } from 'react-router-dom';
import icons from '../../images/icons/sprite.svg';
import s from './Navigation.module.css';
import clsx from 'clsx';

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

const Navigation = () => {
  return (
    <ul className={s.link_icon_wrapper}>
      <li>
        <NavLink to="/" exact className={buildLinkClass}>
          <svg className={s.icon}>
            <use href={`${icons}#icon-home`} />
          </svg>
        </NavLink>
      </li>
      <li>
        <NavLink to="/statistics" className={buildLinkClass}>
          <svg className={s.icon}>
            <use href={`${icons}#icon-statistics`} />
          </svg>
        </NavLink>
      </li>
      <li>
        <NavLink to="/currency" className={buildLinkClass}>
          <svg className={s.icon}>
            <use href={`${icons}#icon-currency`} />
          </svg>
        </NavLink>
      </li>
    </ul>
  );
};

export default Navigation;
