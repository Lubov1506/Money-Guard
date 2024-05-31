import s from "./LogoutModal.module.css";
const LogoutModal = () => {
  return (
    <div className={s.modal}>
      <div className={s.logo}>
        <img
          src="/public/money-guard.svg"
          alt="Money Guard Logo"
          width={36}
          height={36}
        />
        <h2>Money Guard</h2>
      </div>
      <h3 className={s.text}>Are you sure you want to log out?</h3>
      <div className={s.btns}>
        <button type="submit" className={s.btnColor}>
          Logout
        </button>
        <button type="button" className={s.btnWhite}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default LogoutModal;
