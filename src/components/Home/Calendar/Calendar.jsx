import { useState } from "react";
import OuterCard from "../../Layout/OuterCard";
import InnerCard from "../../Layout/InnerCard";
import Weekday from "./Weekday";
import styles from "./Calendar.module.css";

const Calendar = ({
  prevWeek,
  nextWeek,
  startOfWeek,
  endOfWeek,
  year,
  filteredLogs,
}) => {
  const [showAllDetails, setShowAllDetails] = useState(false);
  const [toggleFlag, setToggleFlag] = useState(false)

  const toggleShow = () => {
    setShowAllDetails(true);
    setToggleFlag(!toggleFlag)
    console.log(toggleFlag)
  };

  const toggleHide = () => {
    setShowAllDetails(false);
    setToggleFlag(!toggleFlag)
    console.log(toggleFlag)
  };

  return (
    <OuterCard>
      <h3>Weekly Practice Log</h3>
      <hr />
      <div className={styles.nav}>
        <button type="button" className="icon-btn" onClick={prevWeek}>
          <span className="material-icons-round">arrow_left</span>
        </button>
        <h5 className={styles.date_range}>
          {startOfWeek} - {endOfWeek}, {year}
        </h5>
        <button type="button" className="icon-btn" onClick={nextWeek}>
          <span className="material-icons-round">arrow_right</span>
        </button>
      </div>
      <InnerCard>
        <div className={styles.toggle_container}>
          <button className={styles.toggle_btn} onClick={toggleShow}>
            Show All
          </button>
          <button className={styles.toggle_btn} onClick={toggleHide}>
            Hide All
          </button>
        </div>
        <Weekday
          filteredLogs={filteredLogs}
          showAllDetails={showAllDetails}
          toggleFlag={toggleFlag}
        />
      </InnerCard>
    </OuterCard>
  );
};

export default Calendar;
