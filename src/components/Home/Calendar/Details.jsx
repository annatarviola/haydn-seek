import styles from "./Details.module.css";

const Details = () => {
  return (
    <div className={`${styles.log_preview} ${styles.good}`}>
      <p>Cm, D, Schradieck, Hindemith...</p>
      <button className={styles.view_btn}>View</button>
    </div>
  );
};

export default Details;
