import { useState } from "react";
import DateForm from "./DateForm";
import styles from "./Dates.module.css";

const DateItem = ({ dates, getDates }) => {
  const [editMode, setEditMode] = useState(
    Array.from({ length: dates.length }, () => false)
  );

  const toggleEditMode = (i) => {
    const updatedEditState = [...editMode];
    updatedEditState[i] = !updatedEditState[i];
    setEditMode(updatedEditState);
  };

  return dates.map((date, index) => {
    let formattedDate = new Date(date.date.split("-")).toLocaleDateString(
      "en-us",
      {
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
      <div key={date.id}>
        <div className={styles.item_container}>
          <div className={styles.details_container}>
            <span className={styles.title}>{date.title}</span>
            <span className={styles.description}>{date.description}</span>
          </div>
          <div
            className={styles.date_container}
            onClick={() => toggleEditMode(index)}
          >
            {formattedDate}
            <span className={styles.time}>
              {hours}:{min} {ampm}
            </span>
          </div>
        </div>
        {editMode[index] && (
          <DateForm
            oldDate={date}
            getDates={getDates}
            editMode={editMode}
            toggleEdit={() => toggleEditMode(index)}
          />
        )}
      </div>
    );
  });
};

export default DateItem;
