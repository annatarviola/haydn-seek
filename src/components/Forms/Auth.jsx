import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import OuterCard from "../Layout/OuterCard";
import InnerCard from "../Layout/InnerCard";
import AuthContext from "../../store/authContext";
import { baseURL } from "../../App";

const Auth = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const authCtx = useContext(AuthContext);

  const submitHandler = (e) => {
    e.preventDefault();

    const body = {
      username,
      password,
    };

    axios
      .post(`${baseURL}/login`, body)
      .then((res) => {
        console.log("AFTER AUTH", res.data);
        authCtx.login(res.data.token, res.data.exp, res.data.userId);
      })
      .catch((err) => {
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
        <form>
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
          </div>
          <Link to="/register">
            <button className="outline-btn">Need to Sign Up?</button>
          </Link>
          <button type="submit" className="solid-btn" onClick={submitHandler}>
            Login
          </button>
        </form>
      </InnerCard>
    </OuterCard>
  );
};

export default Auth;
