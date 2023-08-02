import { useContext } from "react";
import DateContext from "../../../store/dateContext";
import styles from "./Weekday.module.css";
import Details from "./Details";

const Weekday = ({ filteredLogs }) => {
  const dateCtx = useContext(DateContext)

  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const selectedWeek = new Date(dateCtx.selectedWeek)

  return daysOfWeek.map((day, index) => {
    const date = new Date(selectedWeek);
    date.setDate(selectedWeek.getDate() + index);

    const filteredLogsForDay = filteredLogs.filter((log) => {
      const logDate = new Date(log.date.split('-'))
      return logDate.toDateString() === date.toDateString()
    })

    return (
      <div key={day}>
        <div className={styles.weekday_container}>
          <h4>{day}</h4>
          <div className={styles.date_container}>
            <p>{date.toLocaleDateString()}</p>
            <button type="button" className="icon-btn">
              <span className="material-icons-round">arrow_right</span>
            </button>
          </div>
        </div>
        <div className={styles.details_container}>
          <hr className={styles.break} />
          {filteredLogsForDay.length > 0 ? <Details filteredLogs={filteredLogsForDay} /> : <p className={styles.empty_details}>No practice logs.</p>}
        </div>
      </div>
    );
  });
};

export default Weekday;
