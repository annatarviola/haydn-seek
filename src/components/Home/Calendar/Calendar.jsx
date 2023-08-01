import { useState, useEffect, useContext } from "react";
import OuterCard from "../../Layout/OuterCard";
import InnerCard from "../../Layout/InnerCard";
import Weekday from "./Weekday";
import DateContext from "../../../store/dateContext";
import styles from "./Calendar.module.css";

const Calendar = () => {
  const dateCtx = useContext(DateContext);

  // // You can replace this with your actual event data
  // const events = [
  //   {
  //     id: 1,
  //     title: "Event 1",
  //     date: new Date("2023-08-02"),
  //   },
  //   {
  //     id: 2,
  //     title: "Event 2",
  //     date: new Date("2023-08-03"),
  //   },
  //   // Add more events as needed
  // ];

  // // Filter events for the selected week
  // const filteredEvents = events.filter(
  //   (event) =>
  //     event.date >= selectedWeek &&
  //     event.date < new Date(selectedWeek.getTime() + 7 * 24 * 60 * 60 * 1000)
  // );

  return (
    <OuterCard>
      <h3>Weekly Practice Log</h3>
      <hr />
      <div className={styles.nav}>
        <button type="button" className="icon-btn" onClick={dateCtx.prevWeek}>
          <span className="material-icons-round">arrow_left</span>
        </button>
        <h5 className={styles.date_range}>
          {dateCtx.startOfWeek} - {dateCtx.endOfWeek}, {dateCtx.year}
        </h5>
        <button type="button" className="icon-btn" onClick={dateCtx.nextWeek}>
          <span className="material-icons-round">arrow_right</span>
        </button>
      </div>
      <InnerCard>
        <Weekday />
      </InnerCard>
    </OuterCard>
  );
};

export default Calendar;
