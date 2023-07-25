import { useState } from "react";

import OuterCard from "../Layout/OuterCard";
import AddDate from "./AddDate";
import styles from "./Dates&Goals.module.css";

const ImportantDates = () => {
  const [addingDate, setAddingDate] = useState(false);

  const showAddNewDate = () => {
    setAddingDate(!addingDate);
  };
  return (
    <OuterCard>
      <div className={styles.header}>
        <h3>Important Dates</h3>
        <button type="button" className="icon-btn" onClick={showAddNewDate}>
          <span className="material-icons-round">add_circle_outline</span>
        </button>
      </div>
      <hr />
      <ul>
        <li>
          <div className={styles.container}>
            <span className={styles.title}>Recital</span>
            <span className={styles.date}>
              Sep 5, 2023, <span className={styles.time}>4 pm</span>
            </span>
          </div>
        </li>
        <li>
          <div className={styles.container}>
            <span className={styles.title}>Concert</span>
            <span className={styles.date}>
              Oct 23, 2023, <span className={styles.time}>7 pm</span>
            </span>
          </div>
        </li>
        {addingDate && <AddDate onClose={showAddNewDate} />}
      </ul>
    </OuterCard>
  );
};

export default ImportantDates;
