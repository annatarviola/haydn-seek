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
        <Weekday filteredLogs={filteredLogs} />
      </InnerCard>
    </OuterCard>
  );
};

export default Calendar;
