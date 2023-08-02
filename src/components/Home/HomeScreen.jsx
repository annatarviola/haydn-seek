import axios from "axios";
import { useContext, useState, useEffect, useCallback } from "react";
import ImportantDates from "./ImportantDates";
import AuthContext from "../../store/authContext";
import DateContext from "../../store/dateContext";
import { baseURL } from "../../App";
import Goals from "./Goals";
import Counter from "./Counter";
import Calendar from "./Calendar/Calendar";
import styles from "./HomeScreen.module.css";

const HomeScreen = () => {
  const { userId, token } = useContext(AuthContext);

  const {
    prevWeek,
    startOfWeek,
    endOfWeek,
    year,
    nextWeek,
    selectedWeek,
    getEndOfWeek,
  } = useContext(DateContext);

  const [logs, setLogs] = useState([]);
  const [filteredLogs, setFilteredLogs] = useState([]);

  const getLogs = useCallback(() => {
    axios
      .get(`${baseURL}/practicelogs/${userId}`, {
        headers: {
          authentication: token,
        },
      })
      .then((res) => {
        setLogs(res.data);
        console.log("getting logs");
      })
      .catch((err) => console.log(err));
  }, [userId, token]);

  useEffect(() => {
    getLogs();
  }, []);

  useEffect(() => {
    const filteredLogs = logs.filter((log) => {
      const logDate = new Date(log.date.split("-"));
      return logDate >= selectedWeek && logDate < getEndOfWeek(selectedWeek);
    });
    setFilteredLogs(filteredLogs);
  }, [logs, selectedWeek, getEndOfWeek]);

  return (
    <>
      <Calendar
        prevWeek={prevWeek}
        nextWeek={nextWeek}
        startOfWeek={startOfWeek}
        endOfWeek={endOfWeek}
        year={year}
        filteredLogs={filteredLogs}
      />
      <div className={styles.container}>
        <Counter filteredLogs={filteredLogs}/>
        <ImportantDates />
        <Goals />
      </div>
    </>
  );
};

export default HomeScreen;