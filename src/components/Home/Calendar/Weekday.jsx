import styles from "./Weekday.module.css";
import Details from "./Details";

const Weekday = () => {
  return (
    <>
        <div className={styles.weekday_container}>
          <h4>Monday</h4>
          <div className={styles.date_container}>
            <p>7-17-2023</p>
            <button type="button" className="icon-btn">
              <span className="material-icons-round">arrow_right</span>
            </button>
          </div>
        </div>
      <div className={styles.details_container}>
        <hr className={styles.break} />
        <Details />
      </div>

      <div className={styles.weekday_container}>
        <h4>Tuesday</h4>
        <div className={styles.date_container}>
          <p>7-18-2023</p>
          <button type="button" className="icon-btn">
            <span className="material-icons-round">arrow_right</span>
          </button>
        </div>
      </div>
      <hr className={styles.break} />

      <div className={styles.weekday_container}>
        <h4>Wednesday</h4>
        <div className={styles.date_container}>
          <p>7-19-2023</p>
          <button type="button" className="icon-btn">
            <span className="material-icons-round">arrow_right</span>
          </button>
        </div>
      </div>
      <hr className={styles.break} />

      <div className={styles.weekday_container}>
        <h4>Thursday</h4>
        <div className={styles.date_container}>
          <p>7-20-2023</p>
          <button type="button" className="icon-btn">
            <span className="material-icons-round">arrow_right</span>
          </button>
        </div>
      </div>
      <hr className={styles.break} />

      <div className={styles.weekday_container}>
        <h4>Friday</h4>
        <div className={styles.date_container}>
          <p>7-21-2023</p>
          <button type="button" className="icon-btn">
            <span className="material-icons-round">arrow_right</span>
          </button>
        </div>
      </div>
      <hr className={styles.break} />

      <div className={styles.weekday_container}>
        <h4>Saturday</h4>
        <div className={styles.date_container}>
          <p>7-22-2023</p>
          <button type="button" className="icon-btn">
            <span className="material-icons-round">arrow_right</span>
          </button>
        </div>
      </div>
      <hr className={styles.break} />

      <div className={styles.weekday_container}>
        <h4>Sunday</h4>
        <div className={styles.date_container}>
          <p>7-23-2023</p>
          <button type="button" className="icon-btn">
            <span className="material-icons-round">arrow_right</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Weekday;
