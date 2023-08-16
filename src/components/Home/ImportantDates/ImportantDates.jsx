import { useState, useEffect, useContext, useCallback } from "react";
import axios from "axios";

import OuterCard from "../../Layout/OuterCard";
import DateForm from "./DateForm";
import styles from "../Dates&Goals.module.css";
import AuthContext from "../../../store/authContext";
import { baseURL } from "../../../App";
import DateItem from "./DateItem";

const ImportantDates = () => {
  const { userId, token } = useContext(AuthContext);

  const [addingDate, setAddingDate] = useState(false);
  const [dates, setDates] = useState([]);

  const showAddNewDate = () => {
    setAddingDate(!addingDate);
  };

  const getDates = useCallback(() => {
    axios
      .get(`${baseURL}/importantdates/${userId}`, {
        headers: {
          authentication: token,
        },
      })
      .then((res) => {
        const data = res.data;
        const sortedData = data.sort((a, b) => {
          const dateA = new Date(a.date);
          const dateB = new Date(b.date);
          return dateA.getTime() - dateB.getTime();
        });
        setDates(sortedData);
      })
      .catch((err) => console.log(err));
  }, [userId, token]);

  useEffect(() => {
    getDates();
  }, [userId, token, getDates]);

  return (
    <OuterCard>
      <div className={styles.header}>
        <h3>Important Dates</h3>
        <button type="button" className="icon-btn" onClick={showAddNewDate}>
          {!addingDate ? "add_circle_outline" : "cancel"}
        </button>
      </div>
      <hr />
      <div>
        {addingDate && (
          <DateForm toggleAddNew={showAddNewDate} getDates={getDates} />
        )}
        <DateItem dates={dates} getDates={getDates} />
      </div>
    </OuterCard>
  );
};

export default ImportantDates;
