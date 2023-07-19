import OuterCard from "./Layout/OuterCard";
import InnerCard from "./Layout/InnerCard";

import styles from "./AddLogForm.module.css";

const AddLogForm = () => {
  return (
    <OuterCard>
      <h3>Add New Practice Log</h3>
      <hr />
      <InnerCard>
        <form>
          <div className="input-container">
            <label className="input-label">Date</label>
            <input type="date" />
          </div>
          <div className="input-container">
            <label className="input-label">
              How did today's practice feel?
            </label>
            <div className={styles.radio_container}>
              {/* <label htmlFor="bad">
              <span class="material-symbols-rounded">
                sentiment_dissatisfied
              </span>
            </label> */}
              <input type="radio" name="quality" value="bad" id="bad" />
              {/* <label htmlFor="mid">
              <span class="material-symbols-rounded">sentiment_satisfied</span>
            </label> */}
              <input type="radio" name="quality" value="mid" id="mid" />
              {/* <label hrmlFor="good">
              <span class="material-symbols-rounded">sentiment_neutral</span>
            </label> */}
              <input type="radio" name="quality" value="good" id="good" />
            </div>
            <div className={styles.time_container}>
              <label className="input-label">Practiced for:</label>
              <label>
                <input
                  type="number"
                  min="0"
                  step="1"
                  className={styles.number}
                />
                hr
              </label>
              <label>
                <input
                  type="number"
                  min="0"
                  max="59"
                  step="1"
                  className={styles.number}
                />
                min
              </label>
            </div>
            <div className="input-container">
              <label className="input-label">Scales:</label>
              <input type="text" />

              <label className="input-label">Exercises:</label>
              <input type="text" />

              <label className="input-label">Repertoire:</label>
              <input type="text" />

              <label className="input-label">Practice Notes:</label>
              <textarea rows="6" />
            </div>
          </div>
          <div className={styles.btn_container}>
            <button className="outline-btn" type="submit">Clear</button>
            <button className="solid-btn" type="submit">Save</button>
          </div>
        </form>
      </InnerCard>
    </OuterCard>
  );
};

export default AddLogForm;
