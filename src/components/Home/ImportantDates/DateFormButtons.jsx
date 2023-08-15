import styles from "../Dates&Goals.module.css";

const DateFormButtons = ({
  editMode,
  toggleEdit,
  toggleAddNew,
  deleteDate,
}) => {
  
  const toggle = editMode ? toggleEdit : toggleAddNew;

  return (
    <div className={styles.container}>
      {editMode ? (
        <button
          type="button"
          className={`solid-btn ${styles.delete_btn}`}
          onClick={
            deleteDate
          }
        >
          delete_forever
        </button>
      ) : null}
      <button
        className={`outline-btn ${styles.button}`}
        type="button"
        onClick={toggle}
      >
        Cancel
      </button>
      <button className={`solid-btn ${styles.button}`} type="submit">
        Save
      </button>
    </div>
  );
};

export default DateFormButtons;
