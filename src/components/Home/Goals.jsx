import { useState, useEffect, useContext, useCallback } from "react";
import axios from "axios";

import OuterCard from "../Layout/OuterCard";
import AddGoal from "./AddGoal";
import styles from "./Dates&Goals.module.css";
import { baseURL } from "../../App";
import AuthContext from "../../store/authContext";

const Goals = () => {
  const { userId, token } = useContext(AuthContext);

  const [addingGoal, setAddingGoal] = useState(false);
  const [goals, setGoals] = useState([]);

  const showAddNewGoal = () => {
    setAddingGoal(!addingGoal);
  };

  const getGoals = useCallback(() => {
    axios
      .get(`${baseURL}/goals/${userId}`, {
        headers: {
          authentication: token,
        },
      })
      .then((res) => {
        setGoals(res.data);
      })
      .catch((err) => console.log(err));
  }, [userId, token]);

  useEffect(() => {
    getGoals();
  }, [userId, token, getGoals]);

  const deleteGoal = (id) => {
    axios
      .delete(`${baseURL}/goals/${id}`, {
        headers: {
          authentication: token,
        },
      })
      .then(() => {
        getGoals();
      })
      .catch((err) => console.log(err));
  };

  const mappedGoals = goals.map((goal) => {
    return (
      <li key={goal.id} onClick={() => deleteGoal(goal.id)}>
        <span className={styles.goal_title}>{goal.value}</span>
      </li>
    );
  });

  return (
    <OuterCard>
      <div className={styles.header}>
        <h3>Goals</h3>
        <button type="button" className="icon-btn" onClick={showAddNewGoal}>
        {!addingGoal ? 'add_circle_outline' : null}
        </button>
      </div>
      <hr />
      <ul>
        {mappedGoals}
        {addingGoal && <AddGoal onClose={showAddNewGoal} onSave={getGoals} />}
      </ul>
    </OuterCard>
  );
};

export default Goals;
