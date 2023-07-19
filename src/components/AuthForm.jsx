import OuterCard from "./Layout/OuterCard";
import InnerCard from "./Layout/InnerCard";

import styles from "./AuthForm.module.css";

const AuthForm = () => {
  return (
    <OuterCard>
      <h3>Login</h3>
      <hr />
      <InnerCard>
        <form>
          <div className={styles.container}>
            <label className={styles.label}>Username</label>
            <input type="text" />
          </div>
          <div className={styles.container}>
            <label className={styles.label}>Password</label>
            <input type="text" />
          </div>
          <button type="submit" className="solid-btn">
            Login
          </button>
        </form>
      </InnerCard>
    </OuterCard>
  );
};

export default AuthForm;
