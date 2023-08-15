import styles from "../Details.module.css";

const PreviewLog = ({ log, index, toggleView }) => (
  <div key={log.id} className={`${styles.logBanner} ${styles[log.quality]}`}>
    <div className={`${styles.previewContainer}`}>
      <p className={`${styles.truncate} ${styles.scales}`}>{log.scales},</p>
      <p className={`${styles.truncate} ${styles.exercises}`}>
        {log.exercises},
      </p>
      <p className={`${styles.truncate} ${styles.repertoire}`}>
        {log.repertoire}
      </p>
    </div>
    <div className={styles.rightContainer}>
      <p className={styles.time}>
        {log.time_hr} hr {log.time_min} min
      </p>
      <button className={styles.viewBtn} onClick={() => toggleView(index)}>
        unfold_more
      </button>
    </div>
  </div>
);

export default PreviewLog