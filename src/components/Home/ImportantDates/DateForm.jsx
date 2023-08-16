import { useState, useContext } from "react";
import axios from "axios";
import styles from "../Dates&Goals.module.css";
import AuthContext from "../../../store/authContext";
import DateFormButtons from "./DateFormButtons";
import { baseURL } from "../../../App";

const DateForm = ({
  oldDate,
  toggleAddNew,
  getDates,
  editMode,
  toggleEdit,
}) => {
  const { token, userId } = useContext(AuthContext);

  const [title, setTitle] = useState(editMode ? oldDate.title : "");
  const [description, setDescription] = useState(
    editMode ? oldDate.description : ""
  );
  const [date, setDate] = useState(editMode ? oldDate.date : "");
  const [time, setTime] = useState(editMode ? oldDate.time : "");

  const deleteDate = () => {
    axios
      .delete(`${baseURL}/importantdates/${oldDate.id}`, {
        headers: {
          authentication: token,
        },
      })
      .then(() => {
        console.log("deleteDate ran");
        getDates();
        toggleEdit();
      })
      .catch((err) => console.log(err));
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const requestPromise = editMode
      ? axios.put(
          `${baseURL}/importantdates/${oldDate.id}`,
          { title, description, date, time },
          {
            headers: {
              authorization: token,
            },
          }
        )
      : axios.post(
          `${baseURL}/importantdates`,
          { title, description, date, time, userId },
          {
            headers: {
              authorization: token,
            },
          }
        );

    requestPromise.then(() => {
      setTitle("");
      setDescription("");
      setDate("");
      setTime("");

      getDates();
      editMode ? toggleEdit() : toggleAddNew();
    });
  };

  return (
    <>
      {editMode ? (
        <h3 className={styles.form_header}>Edit Date</h3>
      ) : (
        <h3 className={styles.form_header}>Add Date</h3>
      )}
      <hr className={styles.hr} />
      <form className={styles.addNew_container} onSubmit={submitHandler}>
        <input
          className={styles.input}
          type="text"
          placeholder="Event Title"
          value={title}
          required={true}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className={styles.input}
          rows="2"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <div className={styles.dateTime_container}>
          <input
            className={styles.input}
            type="date"
            value={date}
            required={true}
            onChange={(e) => setDate(e.target.value)}
          />
          <input
            className={styles.input}
            type="time"
            value={time}
            required={true}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>
        <DateFormButtons
          editMode={editMode}
          toggleEdit={toggleEdit}
          toggleAddNew={toggleAddNew}
          deleteDate={deleteDate}
        />
      </form>
    </>
  );
};

export default DateForm;
