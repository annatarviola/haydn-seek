import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Header from "./components/Layout/Header";
import AuthForm from "./components/AuthForm";
import AddLogForm from "./components/AddLogForm";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <div className="container">
        {/* <AuthForm /> */}
        <AddLogForm />
      </div>
    </>
  );
}

export default App;
