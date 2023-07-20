import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import Header from "./components/Layout/Header";
import HomeScreen from "./components/Home/HomeScreen";
import Auth from './components/Forms/Auth'
import AddLogForm from './components/Forms/AddLogForm'

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Routes>
          <Route index element={<HomeScreen />} />
          <Route path="login" element={<Auth />} />
          <Route path="add-new-log" element={<AddLogForm />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
