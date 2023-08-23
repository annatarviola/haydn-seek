import { useState, useContext } from "react";
import { useNavigate } from "react-router";
import DateContext from "../../../store/dateContext";
import OuterCard from "../../Layout/OuterCard";
import InnerCard from "../../Layout/InnerCard";
import Weekday from "./Weekday";
import styles from "./Calendar.module.css";
import CardHeader from "../../UI/CardHeader";

const Calendar = ({ filteredLogs }) => {
  const navigate = useNavigate();

  const { prevWeek, nextWeek, resetWeek, startOfWeek, endOfWeek, year } =
    useContext(DateContext);

  const [showAllDetails, setShowAllDetails] = useState(false);
  const [toggleFlag, setToggleFlag] = useState(false);
  const [allowNavigate, setAllowNavigate] = useState(true);

  const toggleShow = () => {
    setShowAllDetails(true);
    setToggleFlag(!toggleFlag);
  };

  const toggleHide = () => {
    setShowAllDetails(false);
    setToggleFlag(!toggleFlag);
  };

  return (
    <OuterCard className={styles.outer}>
      <CardHeader
        title="Weekly Practice Log"
        onClick={() => {
          navigate("add-new-log");
        }}
        condition={allowNavigate}
      />
      {/* <h3>Weekly Practice Log</h3>
      <hr /> */}
      <div className={styles.nav}>
        <div className={styles.week_selector}>
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
        <button type="button" className={styles.reset_btn} onClick={resetWeek}>
          Today
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
