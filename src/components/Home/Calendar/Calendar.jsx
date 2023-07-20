import { useState } from "react";
import moment from "moment";
import OuterCard from "../../Layout/OuterCard";
import InnerCard from "../../Layout/InnerCard";
import Weekday from "./Weekday"
import styles from "./Calendar.module.css";

const Calendar = () => {
  //   let mondayRef = 1;
  //   let sundayRef = 7;

  //   function adjustMonthlyCalendar() {
  //     var firstDayOfMonth = moment().startOf("month").format("e");
  //     var daysInMonth = moment().daysInMonth();
  //     var lastDayOfMonth = moment().endOf("month").format("e");

  //     for (var day = 0; day <= daysInMonth + (7 % lastDayOfMonth); day++) {
  //       var div = document.createElement("div");

  //       if (day >= firstDayOfMonth - 1 && day <= daysInMonth) {
  //         div.innerHTML = day;
  //       } else if (day > daysInMonth) {
  //         div.innerHTML = moment()
  //           .endOf("month")
  //           .add(day - 1, "day")
  //           .format("D");
  //         div.classList.add("out-of-range");
  //       } else {
  //         div.innerHTML = moment()
  //           .startOf("month")
  //           .subtract(day + 1, "day")
  //           .format("D");
  //         div.classList.add("out-of-range");
  //       }

  //       daysOfMonth.append(div);
  //     }
  //   }

  //   adjustMonthlyCalendar();

  //   function adjustCalendar(monRef, sunRef) {
  //     var monday = moment().day(monRef);
  //     var sunday = moment().day(sunRef);

  //     if (monRef > 0) {
  //       for (var date = monRef; date <= sunRef; date++) {
  //         dateViews[(date - 1) % 7].innerHTML = moment()
  //           .day(date)
  //           .format("M[/]D");
  //       }
  //     } else {
  //       for (var date = -monRef; date >= -sunRef; date--) {
  //         dateViews[-(monRef + date)].innerHTML = moment()
  //           .day(-date)
  //           .format("M[/]D");
  //       }
  //     }

  //     if (monday.format("YYYY") !== sunday.format("YYYY")) {
  //       dateRange.innerHTML = `${monday.format(
  //         "MMMM Do, YYYY"
  //       )} - ${sunday.format("MMMM Do, YYYY")}`;
  //     } else {
  //       dateRange.innerHTML = `${monday.format("MMMM Do")} - ${sunday.format(
  //         "MMMM Do, YYYY"
  //       )}`;
  //     }
  //   }

  //   // Init
  //   adjustCalendar(mondayRef, sundayRef);

  //   const nextHandler = (e) => {
  //     mondayRef += 7;
  //     sundayRef += 7;
  //     adjustCalendar(mondayRef, sundayRef);
  //   };

  //   const prevHandler = (e) => {
  //     mondayRef -= 7;
  //     sundayRef -= 7;
  //     adjustCalendar(mondayRef, sundayRef);
  //   };

  return (
    <OuterCard>
      <h3>Weekly Practice Log</h3>
      <hr />
      <div class={styles.nav}>
        <button type="button" className="icon-btn">
          <span className="material-icons-round">arrow_left</span>
        </button>
        <h5 className={styles.date_range}>Jul 17 - Jul 23, 2023</h5>
        <button type="button" className="icon-btn">
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
