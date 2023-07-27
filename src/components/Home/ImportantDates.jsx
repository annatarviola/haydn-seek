import { useState, useEffect, useContext } from "react";
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

  // const getDates = () => {
  //   axios
  //     .get(`${baseURL}/importantdates/${userId}`, {
  //       headers: {
  //         authentication: token,
  //       },
  //     })
  //     .then((res) => {
  //       setDates(res.data);
  //     })
  //     .catch((err) => console.log(err));
  // };

  // useEffect(() => {
  //   getDates();
  // }, []);

  // const mappedDates = dates.map((date) => {
  //   return (
  //     <li key={date.id}>
  //       <div className={styles.container}>
  //         <span className={styles.title}>{date.description}</span>
  //         <span className={styles.date}>
  //           {date.date}, <span className={styles.time}>{date.time}</span>
  //         </span>
  //       </div>
  //     </li>
  //   );
  // });

  return (
    <OuterCard>
      <div className={styles.header}>
        <h3>Important Dates</h3>
        <button type="button" className="icon-btn" onClick={showAddNewDate}>
          <span className="material-icons-round">add_circle_outline</span>
        </button>
      </div>
      <hr />
      <ul>
        {/* {mappedDates} */}
        {addingDate && <AddDate onClose={showAddNewDate} />}
      </ul>
    </OuterCard>
  );
};

export default ImportantDates;
