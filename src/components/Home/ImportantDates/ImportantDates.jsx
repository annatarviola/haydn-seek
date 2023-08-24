import { useState, useEffect, useContext, useCallback } from "react";
import axios from "axios";

import OuterCard from "../../Layout/OuterCard";
import DateForm from "./DateForm";
import AuthContext from "../../../store/authContext";
import styles from './Dates.module.css'
import { baseURL } from "../../../App";
import DateItem from "./DateItem";
import CardHeader from "../../UI/CardHeader";

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
          Authorization: token,
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
      <CardHeader
        title="Upcoming Dates"
        onClick={showAddNewDate}
        condition={!addingDate}
      />
      <div>
        {addingDate && (
          <DateForm toggleAddNew={showAddNewDate} getDates={getDates} />
        )}
        {dates.length > 0 ? (
          <DateItem dates={dates} getDates={getDates} />
        ) : (
          <p className={styles.empty_dates}>No dates found.</p>
        )}
      </div>
    </OuterCard>
  );
};

export default ImportantDates;
