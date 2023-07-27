import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import OuterCard from "../Layout/OuterCard";
import InnerCard from "../Layout/InnerCard";
import { baseURL } from "../../App";

import styles from "./AddLogForm.module.css";
import AuthContext from "../../store/authContext";

const AddLogForm = () => {
  const { token, userId } = useContext(AuthContext);
  const navigate = useNavigate()

  const [date, setDate] = useState("");
  const [quality, setQuality] = useState("");
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [scales, setScales] = useState("");
  const [exercises, setExercises] = useState("");
  const [repertoire, setRepertoire] = useState("");
  const [notes, setNotes] = useState("");

  const clearFormHandler = () => {
    setDate("");
    setQuality("");
    setHours("");
    setMinutes("");
    setScales("");
    setExercises("");
    setRepertoire("");
    setNotes("");
  };

  const hourChangeHandler = (e) => {
    const enteredHours = +e.target.value;

    if (enteredHours === "") {
      setHours(0);
    } else {
      setHours(enteredHours);
    }
  };

  const minuteChangeHandler = (e) => {
    const enteredMinutes = +e.target.value;

    if (enteredMinutes === "") {
      setMinutes(0);
    } else {
      setMinutes(enteredMinutes);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const parsedDate = new Date(date);

    const body = {
      parsedDate,
      quality,
      hours,
      minutes,
      scales,
      exercises,
      repertoire,
      notes,
      userId,
    };

    axios
      .post(`${baseURL}/practicelogs`, body, {
        headers: {
          authorization: token,
        },
      })
      .then(console.log(body), navigate('/'))
      .catch((err) => console.log(err));
  };

  return (
    <OuterCard>
      <h3>Add New Practice Log</h3>
      <hr />
      <InnerCard>
        <form onSubmit={submitHandler}>
          <div className="input-container">
            <label className="input-label">Date</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div className="input-container">
            <label className="input-label">
              How did today's practice feel?
            </label>
            <div className={styles.radio_container}>
              <input
                type="radio"
                name="quality"
                value="bad"
                className={`bad ${styles.bad} ${styles.radio}`}
                onChange={(e) => setQuality("bad")}
              />
              <input
                type="radio"
                name="quality"
                value="mid"
                className={`mid ${styles.mid} ${styles.radio}`}
                onChange={(e) => setQuality("mid")}
              />
              <input
                type="radio"
                name="quality"
                value="good"
                className={`good ${styles.good} ${styles.radio}`}
                onChange={(e) => setQuality("good")}
              />
            </div>
            <div className={styles.time_container}>
              <label className="input-label">Practiced for:</label>
              <label>
                <input
                  type="number"
                  min="0"
                  step="1"
                  className={styles.number}
                  value={hours}
                  onChange={hourChangeHandler}
                />
                hr
              </label>
              <label>
                <input
                  type="number"
                  min="0"
                  max="59"
                  step="1"
                  className={styles.number}
                  value={minutes}
                  onChange={minuteChangeHandler}
                />
                min
              </label>
            </div>
            <div className="input-container">
              <label className="input-label">Scales:</label>
              <input
                type="text"
                value={scales}
                onChange={(e) => setScales(e.target.value)}
              />

              <label className="input-label">Exercises:</label>
              <input
                type="text"
                value={exercises}
                onChange={(e) => setExercises(e.target.value)}
              />

              <label className="input-label">Repertoire:</label>
              <input
                type="text"
                value={repertoire}
                onChange={(e) => setRepertoire(e.target.value)}
              />

              <label className="input-label">Practice Notes:</label>
              <textarea
                rows="6"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />
            </div>
          </div>
          <button
            className="outline-btn"
            type="submit"
            onClick={clearFormHandler}
          >
            Clear
          </button>
          <button className="solid-btn" type="submit">
            Save
          </button>
        </form>
      </InnerCard>
    </OuterCard>
  );
};

export default AddLogForm;
