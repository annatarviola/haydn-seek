import styles from "./Dates.module.css";

const DateFormButtons = ({
  editMode,
  toggleEdit,
  toggleAddNew,
  deleteDate,
}) => {
  const toggle = editMode ? toggleEdit : toggleAddNew;

  const cancelButton = (
    <button
      className={`outline-btn ${styles.button}`}
      type="button"
      onClick={toggle}
    >
      Cancel
    </button>
  );

  const saveButton = (
    <button className={`solid-btn ${styles.button}`} type="submit">
      Save
    </button>
  );

  const editButtons = (
    <div className={styles.btn_container}>
      <button
        type="button"
        className={`solid-btn ${styles.delete_btn} ${styles.button}`}
        onClick={deleteDate}
      >
        delete_forever
      </button>
      <div className={styles.inner_container}>
        {cancelButton}
        {saveButton}
      </div>
    </div>
  );

  const addButtons = (
    <div className={styles.btn_container}>
      {cancelButton}
      {saveButton}
    </div>
  );

  return editMode ? editButtons : addButtons;
};

export default DateFormButtons;
