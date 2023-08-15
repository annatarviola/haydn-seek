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
  };

  const toggleHide = () => {
    setShowAllDetails(false);
    setToggleFlag(!toggleFlag)
  };

  return (
    <OuterCard className={styles.outer}>
      <h3>Weekly Practice Log</h3>
      <hr />
      <div className={styles.nav}>
        <button type="button" className="icon-btn" onClick={prevWeek}>
          arrow_left
        </button>
        <h5 className={styles.date_range}>
          {startOfWeek} - {endOfWeek}, {year}
        </h5>
        <button type="button" className="icon-btn" onClick={nextWeek}>
          arrow_right
        </button>
      </div>
      <InnerCard >
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
