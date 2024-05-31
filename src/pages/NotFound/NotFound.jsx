import s from "./NotFound.module.css";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const NotFound = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div className={s.wrapper}>
      <p className={s.error}>The page you requested does not exist</p>
      {isLoggedIn ? (
        <Link className={s.link} to="/home">
          Home
        </Link>
      ) : (
        <Link className={s.link} to="/">
          Log in
        </Link>
      )}
    </div>
  );
};

export default NotFound;
