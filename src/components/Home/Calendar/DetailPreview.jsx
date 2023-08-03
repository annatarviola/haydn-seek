import { useState } from "react";
import styles from "./DetailPreview.module.css";

const DetailPreview = ({ filteredLogs }) => {
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
            <span className="material-icons-round">visibility</span>
          </button>
        </div>
      ))}
    </>
  );
};

export default DetailPreview;
