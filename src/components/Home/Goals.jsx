import OuterCard from "../Layout/OuterCard";
import styles from "./Dates&Goals.module.css";

const Goals = () => {
  return (
    <OuterCard>
      <div className={styles.header}>
        <h3>Goals</h3>
        <button type="button" className="plus-btn">
          <span class="material-icons-round">add_circle_outline</span>
        </button>
      </div>
      <hr />
      <ul>
        <li>
          <span className={styles.title}>Polish Hindemith</span>
        </li>
        <li>
        <span className={styles.title}>Intonation in Brahms</span></li>
      </ul>
    </OuterCard>
  );
};

export default Goals;
