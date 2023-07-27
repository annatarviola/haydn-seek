import { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import AuthContext from "../../store/authContext";

const Header = () => {
  const authCtx = useContext(AuthContext);

  return (
    <div className={styles.header}>
      <h1>Haydn Seek</h1>
      <nav className={styles.nav}>
        {authCtx.token ? (
          <>
            <Link to="">
              <button className={styles.nav_btn}>Home</button>
            </Link>
            <Link to="add-new-log">
              <button className={styles.nav_btn}>New Log</button>
            </Link>
            <button className={styles.nav_btn} onClick={() => authCtx.logout()}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="register">
              <button className={styles.nav_btn}>Sign Up</button>
            </Link>
            <Link to="login">
              <button className={styles.nav_btn}>Login</button>
            </Link>
          </>
        )}
      </nav>
    </div>
  );
};

export default Header;
