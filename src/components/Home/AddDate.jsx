import { useState, useContext } from "react";
import axios from "axios";
import styles from "./Dates&Goals.module.css";
import AuthContext from "../../store/authContext";
import { baseURL } from "../../App";

const AddDate = (props) => {
  const { token, userId } = useContext(AuthContext);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    axios
      .post(
        `${baseURL}/importantdates`,
        { title, description, date, time, userId },
        {
          headers: {
            authorization: token,
          },
        }
      )
      .then(() => {
        setTitle("");
        setDescription("");
        setDate("");
        setTime("");
        props.onSave();
        props.onClose();
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <form className={styles.addNew_container} onSubmit={submitHandler}>
        <input
          className={styles.addNew_input}
          type="text"
          placeholder="Event Title"
          value={title}
          required={true}
          onChange={(e) => setTitle(e.target.value)}
        />
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
            required={true}
            onChange={(e) => setDate(e.target.value)}
          />
          <input
            className={styles.addNew_input}
            type="time"
            value={time}
            required={true}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>
        <div className={styles.container}>
          <button className="outline-btn" onClick={props.onClose}>
            Cancel
          </button>
          <button className="solid-btn" type="submit">
            Save
          </button>
        </div>
      </form>
    </>
  );
};

export default AddDate;
