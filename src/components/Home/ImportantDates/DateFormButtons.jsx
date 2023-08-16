import styles from "../Dates&Goals.module.css";

const DateFormButtons = ({
  editMode,
  toggleEdit,
  toggleAddNew,
  deleteDate,
}) => {
  
  const toggle = editMode ? toggleEdit : toggleAddNew;
  const style = editMode ? styles.container : `${styles.container} ${styles.addBtn_container}`

  return (
    <div className={style}>
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
