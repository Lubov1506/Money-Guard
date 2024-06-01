import s from './Logo.module.css';

const Logo = ({ width, height }) => {
  return (
    <div className={s.logo}>
      <img
        style={{ width, height }}
        src="/money-guard.svg"
        alt="Money Guard Logo"
      />
      <h2 className={s.textLogo}>Money Guard</h2>
    </div>
  );
};

export default Logo;
