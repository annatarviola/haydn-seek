import { useState, useEffect, useContext, useCallback } from "react";
import axios from "axios";
import AuthContext from "../../store/authContext";
import styles from "./Goals.module.css";
import CardHeader from "../UI/CardHeader";
import OuterCard from "../Layout/OuterCard";
import AddGoal from "./AddGoal";
import { baseURL } from "../../App";

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
        <span className={styles.title}>{goal.value}</span>
      </li>
    );
  });

  return (
    <OuterCard>
      <CardHeader
        title="Goals"
        onClick={showAddNewGoal}
        condition={!addingGoal}
      />
      <ul className={styles.list}>{mappedGoals}</ul>
      {addingGoal && <AddGoal onClose={showAddNewGoal} onSave={getGoals} />}
    </OuterCard>
  );
};

export default Goals;
