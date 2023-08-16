import { useState, useContext } from "react";
import axios from "axios";
import styles from "./Dates&Goals.module.css";
import AuthContext from "../../store/authContext";
import { baseURL } from "../../App";

const AddGoal = (props) => {
  const { token, userId } = useContext(AuthContext);

  const [value, setValue] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    axios
      .post(
        `${baseURL}/goals`,
        { value, userId },
        {
          headers: {
            authorization: token,
          },
        }
      )
      .then(() => {
        setValue("");
        props.onSave();
        props.onClose();
        console.log("added goal");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className={styles.addNew_container}>
      <textarea
        className={styles.input}
        rows="2"
        placeholder="What's your new goal?"
        required={true}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <div className={styles.container}>
        <button className={`outline-btn ${styles.button}`} onClick={props.onClose}>
          Cancel
        </button>
        <button className={`solid-btn ${styles.button}`} type="submit" onClick={submitHandler}>
          Save
        </button>
      </div>
    </div>
  );
};

export default AddGoal;
