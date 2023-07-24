import { useState } from "react";

import OuterCard from "../Layout/OuterCard";
import AddGoal from './AddGoal'
import styles from "./Dates&Goals.module.css";

const Goals = () => {
  const [addingGoal, setAddingGoal] = useState(false)

  const showAddNewGoal = () => {
    setAddingGoal(!addingGoal)
  }

  return (
    <OuterCard>
      <div className={styles.header}>
        <h3>Goals</h3>
        <button type="button" className="icon-btn" onClick={showAddNewGoal}>
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
        {addingGoal && <AddGoal onClose={showAddNewGoal}/>}
      </ul>
    </OuterCard>
  );
};

export default Goals;
