import styles from "../Forms/LogForm.module.css";

const LogFormButtons = ({ editMode, submitting, onClose, clear, deleteLog }) => {
  if (editMode) {
    return (
      <div className={styles.btn_container}>
        {/* DELETE BTN */}
        <button
          type="button"
          className={`solid-btn ${styles.delete_btn}`}
          disabled={submitting}
          onClick={deleteLog}
        >
          Delete
        </button>
        {/* UPDATE & CANCEL BTNS */}
        <div className={styles.btn_container}>
          <button
            className="outline-btn"
            type="submit"
            onClick={onClose}
            disabled={submitting}
          >
            Cancel
          </button>
          <button className="solid-btn" type="submit" disabled={submitting}>
            Save
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles.btn_container}>
        <button className="outline-btn" type="submit" onClick={clear}>
          Clear
        </button>
        <button className="solid-btn" type="submit">
          Save
        </button>
      </div>
    );
  }
};

export default LogFormButtons;
