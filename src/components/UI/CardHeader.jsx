import styles from "./CardHeader.module.css";

const CardHeader = (props) => {
  return (
    <>
      <div className={styles.header}>
        <h3 className={styles.title}>{props.title}</h3>
        <button type="button" className="icon-btn" onClick={props.onClick}>
          {props.condition ? "add_circle_outline" : "cancel"}
        </button>
      </div>
      <hr className={styles.line} />
    </>
  );
};

export default CardHeader;
