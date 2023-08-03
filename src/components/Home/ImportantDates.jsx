import { useState, useEffect, useContext, useCallback } from "react";
import axios from "axios";

import OuterCard from "../Layout/OuterCard";
import AddDate from "./AddDate";
import styles from "./Dates&Goals.module.css";
import AuthContext from "../../store/authContext";
import { baseURL } from "../../App";

const ImportantDates = () => {
  const { userId, token } = useContext(AuthContext);

  const [addingDate, setAddingDate] = useState(false);
  const [dates, setDates] = useState([]);

  const showAddNewDate = () => {
    setAddingDate(!addingDate);
  };

  const deleteDate = (id) => {
    axios
      .delete(`${baseURL}/importantdates/${id}`, {
        headers: {
          authentication: token,
        },
      })
      .then(() => {
        getDates();
      })
      .catch((err) => console.log(err));
  };

  const getDates = useCallback(() => {
    axios
      .get(`${baseURL}/importantdates/${userId}`, {
        headers: {
          authentication: token,
        },
      })
      .then((res) => {
        setDates(res.data);
      })
      .catch((err) => console.log(err));
  }, [setDates]);

  useEffect(() => {
    getDates();
  }, [getDates]);

  const mappedDates = dates.map((date) => {
    let formattedDate = new Date(date.date.split("-")).toLocaleDateString(
      "en-us",
      {
        // year: "numeric",
        month: "short",
        day: "numeric",
      }
    );

    let time = date.time.split(":");
    let hours = time[0];
    let ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12;
    let min = time[1];

    return (
      <div key={date.id} className={styles.container}>
        <div className={styles.details_container}>
          <span className={styles.date_title}>{date.title}</span>
          <span className={styles.date_description}>{date.description}</span>
        </div>
        <div className={styles.container}>
          <span className={styles.date_container}>
            {formattedDate}
            <span className={styles.time}>
              {hours}:{min} {ampm}
            </span>
          </span>
          <span className="material-icons-round edit-btn">edit</span>
        </div>
      </div>
    );
  });

  return (
    <OuterCard>
      <div className={styles.header}>
        <h3>Important Dates</h3>
        <button type="button" className="icon-btn" onClick={showAddNewDate}>
          <span className="material-icons-round">add_circle_outline</span>
        </button>
      </div>
      <hr />
      <div>
        {mappedDates}
        {addingDate && <AddDate onClose={showAddNewDate} onSave={getDates()} />}
      </div>
    </OuterCard>
  );
};

export default ImportantDates;
