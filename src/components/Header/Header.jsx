import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Modal from "../Modal/Modal";
import { toast } from "react-toastify";
import s from "./Header.module.css";
import { selectUser } from "../../redux/auth/selectors";
import { ImExit } from "react-icons/im";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const user = useSelector(selectUser);
  const userName = user ? user.email.split("@")[0] : "";
  const dispatch = useDispatch();
  const history = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await fetch("/api/logout", {
        method: "POST",
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error("Logout failed");
      }

      history.push("/login");
    } catch (error) {
      toast.error(error.message);
    } finally {
      dispatch({ type: "LOGOUT" });
      localStorage.clear();
    }
  };
  return (
    <header className={s.header}>
      <div className={s.logo}>
        <img src="/public/money-guard.svg" alt="Company Logo" />
      </div>
      <div className={s.user}>
        <span className={s.userName}>{userName}</span>
        <button onClick={() => setIsModalOpen(true)} className={s.exitBtn}>
          <ImExit /> Exit
        </button>
      </div>
      {isModalOpen && (
        <Modal title="Log Out" onClose={() => setIsModalOpen(false)}>
          <p>Are you sure you want to log out?</p>
          <button onClick={handleLogout}>Log out</button>
          <button onClick={() => setIsModalOpen(false)}>Cancel</button>
        </Modal>
      )}
    </header>
  );
};

export default Header;
