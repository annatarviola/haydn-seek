import styles from "../Details.module.css";

const FullLog = ({ log, index, toggleView }) => {
    
  const practiceQuality = (quality) => {
    if (quality === "good") {
      return <p className={styles.quality}>You had a good practice day!</p>;
    } else if (quality === "mid") {
      return <p className={styles.quality}>You had an average practice day.</p>;
    } else if (quality === "bad") {
      return (
        <p className={styles.quality}>You had a challenging practice day.</p>
      );
    } else {
      return;
    }
  };

  return (
    <div
      key={log.id}
      className={`${styles.full} ${styles[log.quality + "Shadow"]}`}
    >
      <div
        className={`${styles.logBanner} ${styles[log.quality]} ${
          styles.expandedBanner
        }`}
      >
        {practiceQuality(log.quality)}
        <div className={styles.rightContainer}>
          <p className={styles.time}>
            {log.time_hr} hr {log.time_min} min
          </p>
          <button className={styles.viewBtn} onClick={() => toggleView(index)}>
            <span className="material-icons-round">unfold_less</span>
          </button>
        </div>
      </div>
      <div className={`${styles.contentContainer}`}>
        <h4 className={styles.detailHeading}>WORKED ON:</h4>
        <hr className={styles.lineBreak} />
        <p className={styles.content}>
          <span className={styles.title}>Scales: </span>
          {log.scales}
        </p>

        <p className={styles.content}>
          <span className={styles.title}>Exercises: </span>
          {log.exercises}
        </p>

        <p className={styles.content}>
          <span className={styles.title}>Repertoire: </span>
          {log.repertoire}
        </p>

        <p className={styles.title}>Practice Notes:</p>
        <p className={`${styles.content} ${styles.notes}`}>{log.notes}</p>
        <button className={styles.editBtn}>Edit</button>
      </div>
    </div>
  );
};

export default FullLog;
