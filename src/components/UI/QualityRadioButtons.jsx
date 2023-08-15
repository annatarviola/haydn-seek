import styles from "./QualityRadioButtons.module.css";

const QualityRadioButtons = ({ quality, setQuality }) => {
  return (
    <div className={styles.radio_container}>
      <input
        type="radio"
        name="quality"
        value="bad"
        checked={quality === "bad"}
        className={`bad ${styles.bad} ${styles.radio}`}
        onChange={() => setQuality("bad")}
      />
      <input
        type="radio"
        name="quality"
        value="mid"
        checked={quality === "mid"}
        className={`mid ${styles.mid} ${styles.radio}`}
        onChange={() => setQuality("mid")}
      />
      <input
        type="radio"
        name="quality"
        value="good"
        checked={quality === "good"}
        className={`good ${styles.good} ${styles.radio}`}
        onChange={() => setQuality("good")}
      />
    </div>
  );
};

export default QualityRadioButtons;
