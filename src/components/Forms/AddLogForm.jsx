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
  const navigate = useNavigate();

  const [date, setDate] = useState("");
  const [quality, setQuality] = useState("");
  let [hours, setHours] = useState(0);
  let [minutes, setMinutes] = useState(0);
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

  const submitHandler = (e) => {
    e.preventDefault();

    let optionalValues = [quality, scales, exercises, repertoire, notes];

    for (let i = 0; i < optionalValues.length; i++) {
      if (optionalValues[i].trim() === "" || !optionalValues[i]) {
        optionalValues[i] = "None";
      }
    }

    if (hours === "") {
      hours = 0;
    }

    if (minutes === "") {
      minutes = 0;
    }

    let sentQuality = optionalValues[0];
    let sentScales = optionalValues[1];
    let sentExercises = optionalValues[2];
    let sentRepertoire = optionalValues[3];
    let sentNotes = optionalValues[4];

    const parsedDate = new Date(date.split('-'));

    const body = {
      parsedDate,
      sentQuality,
      hours,
      minutes,
      sentScales,
      sentExercises,
      sentRepertoire,
      sentNotes,
      userId,
    };

    axios
      .post(`${baseURL}/practicelogs`, body, {
        headers: {
          authorization: token,
        },
      })
      .then(
        navigate("/")
      )
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
              required={true}
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
                onChange={() => setQuality("bad")}
              />
              <input
                type="radio"
                name="quality"
                value="mid"
                className={`mid ${styles.mid} ${styles.radio}`}
                onChange={() => setQuality("mid")}
              />
              <input
                type="radio"
                name="quality"
                value="good"
                className={`good ${styles.good} ${styles.radio}`}
                onChange={() => setQuality("good")}
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
                  onChange={(e) => setHours(+e.target.value)}
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
                  onChange={(e) => setMinutes(+e.target.value)}
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
