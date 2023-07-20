import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <h1>Haydn Seek</h1>
      <nav className={styles.nav}>
        <Link to="">
          <button className={styles.nav_btn}>Home</button>
        </Link>
        <Link to="add-new-log">
          <button className={styles.nav_btn}>Add New </button>
        </Link>
        <Link to="login">
          <button className={styles.nav_btn}>Login</button>
        </Link>
      </nav>
    </div>
  );
};

export default Header;
