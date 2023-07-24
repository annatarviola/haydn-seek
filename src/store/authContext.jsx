import { useState, useEffect, useCallback, createContext } from "react";

let logoutTimer;

const AuthContext = createContext({
  token: "",
  login: () => {},
  logout: () => {},
  userId: null,
});

const remainingTimeCalculator = (exp) => {
  const currentTime = new Date().getTime();
  const expTime = exp;
  const remainingTime = expTime - currentTime;

  return remainingTime;
};

const getLocalData = () => {
  const storedToken = localStorage.getItem("token");
  const storedExp = localStorage.getItem("exp");
  const storedId = localStorage.getItem('userId')

  const remainingTime = remainingTimeCalculator(storedExp);

  if (remainingTime <= 1000 * 60 * 30) {
    localStorage.removeItem("token");
    localStorage.removeItem("exp");

    return null;
  }

  return {
    token: storedToken,
    duration: remainingTime,
    userId: storedId
  };
};

export const AuthContextProvider = (props) => {
  const localData = getLocalData();

  let initialToken;
  let initialId;

  if (localData) {
    initialToken = localData.token;
    initialId = localData.userId;
  }

  const [token, setToken] = useState(initialToken);
  const [userId, setUserId] = useState(initialId);

  const logout = (token, id) => {
    setToken(null)
    setUserId(null)
    localStorage.remove('token')
    localStorage.remove('token')
    localStorage.remove('userId')

    if (logoutTimer) {
      clearTimeout(logoutTimer)
    }
  };

  const login = (token, exp, userId) => {
    setToken(token);
    setUserId(userId);

    localStorage.setItem("token", token);
    localStorage.setItem("exp", exp);
    localStorage.setItem("userId", userId);

    const remainingTime = remainingTimeCalculator(exp);

    logoutTimer = setTimeout(logout, remainingTime);
  };

  useEffect(() => {
    if (localData) {
      logoutTimer = setTimeout(logout, localData.duration)
    }
  }, [localData, logout])

  const contextValue = {
    token,
    login,
    logout,
    userId,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;