import styles from "./Details.module.css";

const Details = ({ filteredLogs }) => {
  return (
    <>
      {filteredLogs.map((log) => (
        <div
          key={log.id}
          className={`${styles.log_preview} ${styles[log.quality]}`}
        >
          <div className={styles.detail_container}>
            <p className={styles.scales}>{log.scales},</p>
            <p className={styles.exercises}>{log.exercises},</p>
            <p className={styles.repertoire}>{log.repertoire}</p>
          </div>
          <button className={styles.view_btn}>
            <span className="material-icons-round">unfold_more</span>
          </button>
        </div>
      ))}
    </>
  );
};

export default Details;
