import OuterCard from "../Layout/OuterCard";
import styles from "./Dates&Goals.module.css";

const ImportantDates = () => {
  return (
    <OuterCard>
      <div className={styles.header}>
        <h3>Important Dates</h3>
        <button type="button" className="icon-btn">
          <span className="material-icons-round">add_circle_outline</span>
        </button>
      </div>
      <hr />
      <ul>
        <li>
          <div className={styles.container}>
            <span className={styles.title}>Recital</span>
            <span className={styles.date}>Sep 5, 2023</span>
          </div>
        </li>
        <li>
          <div className={styles.container}>
            <span className={styles.title}>Concert</span>
            <span className={styles.date}>Oct 23, 2023</span>
          </div>
        </li>
      </ul>
    </OuterCard>
  );
};

export default ImportantDates;
