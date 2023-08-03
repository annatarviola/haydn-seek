import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import OuterCard from "../Layout/OuterCard";
import InnerCard from "../Layout/InnerCard";
import AuthContext from "../../store/authContext";
import styles from './Register.module.css'
import { baseURL } from "../../App";

const Auth = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState("")
  const [error, setError] = useState(false)

  const authCtx = useContext(AuthContext);

  const submitHandler = (e) => {
    e.preventDefault();

    setSubmitting(true)

    const body = {
      username,
      password,
    };
    
    axios
      .post(`${baseURL}/login`, body)
      .then((res) => {
        console.log("AFTER AUTH", res.data);
        authCtx.login(res.data.token, res.data.exp, res.data.userId);
        setError(false)
        setSubmitting(false)
      })
      .catch((err) => {
        setError(true)
        setSubmitting(false)
        console.log(err);
        setUsername("");
        setPassword("");
      });
  };

  return (
    <OuterCard>
      <h3>Login</h3>
      <hr />
      <InnerCard>
        <form onSubmit={submitHandler}>
          <div className="input-container">
            <label className="input-label">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              />
          </div>
          <div className="input-container">
            <label className="input-label">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              />
              {submitting && <span className={styles.submitting}>Logging in...</span>}
              {error && <span className={styles.error}>Could not log in. Please check username and password and try again.</span>}
          </div>
          <Link to="/register">
            <button type="button" className="outline-btn" disabled={submitting}>Need to Sign Up?</button>
          </Link>
          <button type="submit" className="solid-btn" disabled={submitting}>
            Login
          </button>
        </form>
      </InnerCard>
    </OuterCard>
  );
};

export default Auth;
