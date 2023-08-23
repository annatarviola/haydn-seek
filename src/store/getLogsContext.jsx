import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";
import axios from "axios";
import AuthContext from "./authContext";
import { baseURL } from "../App";

const GetLogsContext = createContext();

export const GetLogsProvider = (props) => {
  const { userId, token } = useContext(AuthContext);

  const [logs, setLogs] = useState([]);

  const getLogs = useCallback(() => {
    if (userId && token) {
      axios
        .get(`${baseURL}/practicelogs/${userId}`, {
          headers: {
            authorization: token,
          },
        })
        .then((res) => {
          setLogs(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [userId, token]);

  useEffect(() => {
    getLogs();
  }, [getLogs]);

  return (
    <GetLogsContext.Provider value={{ logs, getLogs }}>
      {props.children}
    </GetLogsContext.Provider>
  );
};

export default GetLogsContext;
