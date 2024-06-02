import clsx from 'clsx';
import s from './Logo.module.css';

const Logo = ({ type }) => {
  return (
    <div className={clsx(s.logo, type === 'header' && s.headerLogo)}>
      <img
        // style={{ width, height, fontSize }}
        src="/money-guard.svg"
        alt="Money Guard Logo"
      />
      <h2 className={s.textLogo}>Money Guard</h2>
    </div>
  );
};

export default Logo;
