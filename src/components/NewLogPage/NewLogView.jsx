import LogForm from "../Forms/LogForm";
import Quote from "./Quote";
import styles from "./NewLogView.module.css";

const NewLogView = () => {
  return (
    <div className={styles.display}>
      <LogForm />
      <Quote />
    </div>
  );
};

export default NewLogView;
