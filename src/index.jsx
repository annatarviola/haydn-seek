import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { GetLogsProvider } from "./store/getLogsContext.jsx";
import { AuthContextProvider } from "./store/authContext";
import { DateProvider } from "./store/dateContext.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <DateProvider>
        <GetLogsProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </GetLogsProvider>
      </DateProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
