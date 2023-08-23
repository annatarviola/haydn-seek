import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AuthContext from "../../store/authContext";
import GetLogsContext from "../../store/getLogsContext";
import LogFormButtons from "../UI/LogFormButtons";
import OuterCard from "../Layout/OuterCard";
import InnerCard from "../Layout/InnerCard";
import { baseURL } from "../../App";

import styles from "./LogForm.module.css";
import QualityRadioButtons from "../UI/QualityRadioButtons";

const LogForm = ({ editMode, log, onClose }) => {
  const { token, userId } = useContext(AuthContext);
  const { getLogs } = useContext(GetLogsContext);
  const navigate = useNavigate();

  const [submitting, setSubmitting] = useState(false);

  const [date, setDate] = useState(editMode ? log.date : "");
  const [quality, setQuality] = useState(editMode ? log.quality : "");
  const [hours, setHours] = useState(editMode ? log.time_hr : 0);
  const [minutes, setMinutes] = useState(editMode ? log.time_min : 0);
  const [scales, setScales] = useState(editMode ? log.scales : "");
  const [exercises, setExercises] = useState(editMode ? log.exercises : "");
  const [repertoire, setRepertoire] = useState(editMode ? log.repertoire : "");
  const [notes, setNotes] = useState(editMode ? log.notes : "");
  
  const clearFormHandler = () => {
    setDate("");
    setQuality("");
    setHours(0);
    setMinutes(0);
    setScales("");
    setExercises("");
    setRepertoire("");
    setNotes("");
  };
  
  const savingMessage = editMode ? "Saving changes..." : "Saving..."

  const formattedDate = new Date(date.split("-")).toLocaleDateString("en-us", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const handleOptionalValue = (value) => {
    return value.trim() === "" || !value ? "None" : value;
  };
  
  const deleteHandler = () => {
    setSubmitting(true)

    axios
      .delete(`${baseURL}/practicelogs/${log.id}`, {
        headers: {
          Authorization: token,
        },
      })
      .then(() => {
        setSubmitting(false)
        getLogs();
        onClose();
      })
      .catch((err) => console.log(err));
  }


  const submitHandler = (e) => {
    e.preventDefault();

    setSubmitting(true);


    const parsedDate = new Date(date.split("-"));

    const optionalFields = {
      quality: handleOptionalValue(quality),
      scales: handleOptionalValue(scales),
      exercises: handleOptionalValue(exercises),
      repertoire: handleOptionalValue(repertoire),
      notes: handleOptionalValue(notes),
    };

    const body = {
      parsedDate,
      hours,
      minutes,
      scales,
      userId,
      ...optionalFields,
    };

    if (!editMode) {
      axios
        .post(`${baseURL}/practicelogs`, body, {
          headers: {
            Authorization: token,
          },
        })
        .then(() => {
          setSubmitting(false);
          getLogs();
          navigate("/");
        })
        .catch((err) => console.log(err));
    } else {
      axios
        .put(`${baseURL}/practicelogs/${log.id}`, body, {
          headers: {
            Authorization: token,
          },
        })
        .then(() => {
          setSubmitting(false);
          getLogs();
          onClose();
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <OuterCard className={styles.outer}>
      {editMode ? (
        <h3>Practice Log — {formattedDate}</h3>
      ) : (
        <h3>Add New Practice Log</h3>
      )}
      <hr />
      <InnerCard>
        <form className={styles.form} onSubmit={submitHandler}>
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
            {editMode ? (
              <label className="input-label">Today's practice felt:</label>
            ) : (
              <label className="input-label">
                How did today's practice feel?
              </label>
            )}
            <QualityRadioButtons quality={quality} setQuality={setQuality} />

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
                  onFocus={(e) => e.target.select()}
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
                  onFocus={(e) => e.target.select()}
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
                onFocus={(e) => e.target.select()}
              />

              <label className="input-label">Exercises:</label>
              <input
                type="text"
                value={exercises}
                onChange={(e) => setExercises(e.target.value)}
                onFocus={(e) => e.target.select()}
              />

              <label className="input-label">Repertoire:</label>
              <input
                type="text"
                value={repertoire}
                onChange={(e) => setRepertoire(e.target.value)}
                onFocus={(e) => e.target.select()}
              />

              <label className="input-label">Practice Notes:</label>
              <textarea
                rows="6"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />
            </div>
          </div>

          <LogFormButtons
            editMode={editMode}
            submitting={submitting}
            onClose={onClose}
            clear={clearFormHandler}
            deleteLog={deleteHandler}
          />

          {submitting && <p className={styles.submitting}>{savingMessage}</p>}
        </form>
      </InnerCard>
    </OuterCard>
  );
};

export default LogForm;


