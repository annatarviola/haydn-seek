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
        { value },
        {
          headers: {
            authorization: token,
          },
        }
      )
      .then(setValue(""))
      .catch((err) => console.log(err));
  };

  return (
    <div className={styles.addNew_container}>
      <textarea
        rows="2"
        placeholder="What's your new goal?"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <div className={styles.container}>
        <button className="outline-btn" onClick={props.onClose}>
          Cancel
        </button>
        <button
          className="solid-btn"
          type="submit"
          onClick={(e) => {
            props.onClose();
            submitHandler(e);
          }}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default AddGoal;
