import { useContext, useState, useEffect } from "react";
import ImportantDates from "./ImportantDates";
import AuthContext from "../../store/authContext";
import DateContext from "../../store/dateContext";
import GetLogsContext from "../../store/getLogsContext";
import Goals from "./Goals";
import Counter from "./Counter";
import Calendar from "./Calendar/Calendar";
import styles from "./HomeScreen.module.css";

const HomeScreen = () => {
  const { userId, token } = useContext(AuthContext);
  const { logs } = useContext(GetLogsContext);

  const {
    prevWeek,
    startOfWeek,
    endOfWeek,
    year,
    nextWeek,
    selectedWeek,
    getEndOfWeek,
  } = useContext(DateContext);

  const [filteredLogs, setFilteredLogs] = useState([]);

  useEffect(() => {
    const filteredLogs = logs.filter((log) => {
      const logDate = new Date(log.date.split("-"));
      return logDate >= selectedWeek && logDate <= getEndOfWeek(selectedWeek);
    });
    setFilteredLogs(filteredLogs);
  }, [logs, selectedWeek, getEndOfWeek]);

  return (
    <div className={styles.main_display}>
      <Calendar
        prevWeek={prevWeek}
        nextWeek={nextWeek}
        startOfWeek={startOfWeek}
        endOfWeek={endOfWeek}
        year={year}
        filteredLogs={filteredLogs}
      />
      <div className={styles.container}>
        <Counter filteredLogs={filteredLogs} />
        <ImportantDates />
        <Goals />
      </div>
    </div>
  );
};

export default HomeScreen;
