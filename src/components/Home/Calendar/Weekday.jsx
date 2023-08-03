import { useContext, useState, useEffect } from "react";
import DateContext from "../../../store/dateContext";
import styles from "./Weekday.module.css";
import DetailPreview from "./DetailPreview";

const Weekday = ({ filteredLogs, showAllDetails, toggleFlag }) => {
  const dateCtx = useContext(DateContext);

  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const [detailView, setDetailView] = useState(
    Array(daysOfWeek.length).fill(false)
  );

  const rightArrow = "arrow_right";
  const dropdownArrow = "arrow_drop_down";

  const toggleDetailPreview = (i) => {
    const updatedDetailView = [...detailView];
    updatedDetailView[i] = !updatedDetailView[i];
    setDetailView(updatedDetailView);
  };

  useEffect(() => {
    if (toggleFlag || !toggleFlag)
      setDetailView(
        showAllDetails
          ? Array(daysOfWeek.length).fill(true)
          : Array(daysOfWeek.length).fill(false)
      );
  }, [showAllDetails, toggleFlag]);

  const selectedWeek = new Date(dateCtx.selectedWeek);

  return daysOfWeek.map((day, index) => {
    const date = new Date(selectedWeek);
    date.setDate(selectedWeek.getDate() + index);

    const filteredLogsForDay = filteredLogs.filter((log) => {
      const logDate = new Date(log.date.split("-"));
      return logDate.toDateString() === date.toDateString();
    });

    return (
      <div key={day}>
        <div className={styles.weekday_container}>
          <h4>{day}</h4>
          <div className={styles.date_container}>
            <p>{date.toLocaleDateString()}</p>
            <button
              type="button"
              className="icon-btn"
              onClick={() => toggleDetailPreview(index)}
            >
              <span className="material-icons-round">
                {!detailView[index] ? rightArrow : dropdownArrow}
              </span>
            </button>
          </div>
        </div>
        <div className={styles.details_container}>
          <hr className={styles.break} />
          {detailView[index] && (
            <>
              {filteredLogsForDay.length > 0 ? (
                <DetailPreview filteredLogs={filteredLogsForDay} />
              ) : (
                <p className={styles.empty_details}>No practice logs.</p>
              )}
            </>
          )}
        </div>
      </div>
    );
  });
};

export default Weekday;
