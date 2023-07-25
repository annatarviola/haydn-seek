import { useState, useContext } from "react";
import axios from "axios";
import styles from "./Dates&Goals.module.css";
import AuthContext from "../../store/authContext";
import { baseURL } from "../../App";

const AddDate = (props) => {
  const { token, userId } = useContext(AuthContext);

  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    axios
      .post(
        `${baseURL}/importantdates`,
        { description, date, time },
        {
          headers: {
            authorization: token,
          },
        }
      )
      .then(() => {
        setDescription("");
        setDate("");
        setTime("");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className={styles.addNew_container}>
      <textarea
        className={styles.addNew_input}
        rows="2"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <div className={styles.dateTime_container}>
        <input
          className={styles.addNew_input}
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          className={styles.addNew_input}
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
      </div>
      <div className={styles.container}>
        <button className="outline-btn" onClick={props.onClose}>
          Cancel
        </button>
        <button
          className="solid-btn"
          type="submit"
          onClick={(e) => {
            props.onClose();
            submitHandler(e);
          }}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default AddDate;
