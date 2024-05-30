import { useDispatch, useSelector } from "react-redux";
import Modal from "../components/Modal/Modal";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const userEmail = useSelector((state) => state.auth.user.email);
  const userName = userEmail.split("@")[0];
  const dispatch = useDispatch();
  const handleLogout = async () => {
    try {
      const response = await fetch("/api/logout", {
        method: "POST",
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error("Logout failed");
      }

      dispatch({ type: "LOGOUT" });
      localStorage.clear();
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsModalOpen(false);
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
          Exit
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
