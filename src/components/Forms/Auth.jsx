import { useState } from "react";
import { Link } from "react-router-dom";
import OuterCard from "../Layout/OuterCard";
import InnerCard from "../Layout/InnerCard";

const Auth = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [register, setRegister] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const baseURL = "http://localhost:5173";

  const body = {
    username,
    password,
  };

  const submitHandler = e => {
    e.preventDefault()

    
  }

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
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="outline-btn">Sign Up</button>
          <button type="submit" className="solid-btn">
            Login
          </button>
        </form>
      </InnerCard>
    </OuterCard>
  );
};

export default Auth;
