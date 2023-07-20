import { useState } from "react";

import OuterCard from "../Layout/OuterCard";
import InnerCard from "../Layout/InnerCard";

import styles from "./AddLogForm.module.css";

const AddLogForm = () => {
  const [date, setDate] = useState("");
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [scales, setScales] = useState("");
  const [exercises, setExercises] = useState("");
  const [repertoire, setRepertoire] = useState("");
  const [notes, setNotes] = useState("");

  const clearFormHandler = () => {
    setDate('')
    setHours('')
    setMinutes('')
    setScales('')
    setExercises('')
    setRepertoire('')
    setNotes('')
  }

  const submitHandler = (e) => {
    e.preventDefault();

    axios.post('/logs', {date, hours, minutes, scales, exercises, repertoire, notes, userId}, {
      headers: {
        authorization: token
      }
    })

    clearFormHandler()
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
              <input type="radio" name="quality" value="bad" id="bad" />
              <input type="radio" name="quality" value="mid" id="mid" />
              <input type="radio" name="quality" value="good" id="good" />
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
                  onChange={(e) => setHours(e.target.value)}
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
                  onChange={(e) => setMinutes(e.target.value)}
                />
                min
              </label>
            </div>
            <div className="input-container">
              <label className="input-label">Scales:</label>
              <input type="text" value={scales} onChange={(e) => setScales(e.target.value)} />

              <label className="input-label">Exercises:</label>
              <input type="text" value={exercises} onChange={(e) => setExercises(e.target.value)}/>

              <label className="input-label">Repertoire:</label>
              <input type="text" value={repertoire} onChange={(e) => setRepertoire(e.target.value)}/>

              <label className="input-label">Practice Notes:</label>
              <textarea rows="6" value={notes} onChange={(e) => setNotes(e.target.value)}/>
            </div>
          </div>
          <div className={styles.btn_container}>
            <button className="outline-btn" type="submit" onClick={clearFormHandler}>
              Clear
            </button>
            <button className="solid-btn" type="submit">
              Save
            </button>
          </div>
        </form>
      </InnerCard>
    </OuterCard>
  );
};

export default AddLogForm;
