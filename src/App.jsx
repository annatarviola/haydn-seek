import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import Header from "./components/Layout/Header";
import HomeScreen from "./components/Home/HomeScreen";
import Auth from './components/Forms/Auth'
import AddLogForm from './components/Forms/AddLogForm'
import Register from "./components/Forms/Register";

export const baseURL = "http://localhost:8080"

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Routes>
          <Route index element={<HomeScreen />} />
          <Route path="register" element={<Register />}/>
          <Route path="login" element={<Auth />} />
          <Route path="add-new-log" element={<AddLogForm />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
