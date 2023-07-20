import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import Header from "./components/Layout/Header";
import HomeScreen from "./components/Home/HomeScreen";
import AuthForm from "./components/AuthForm";
import AddLogForm from "./components/AddLogForm";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Routes>
          <Route index element={<HomeScreen />} />
          <Route path="login" element={<AuthForm />} />
          <Route path="add-new-log" element={<AddLogForm />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
