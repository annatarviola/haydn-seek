import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";

import Header from "./components/Layout/Header";
import HomeScreen from "./components/Home/HomeScreen";
import Auth from './components/Forms/Auth'
import AddLogForm from './components/Forms/AddLogForm'
import Register from "./components/Forms/Register";

import AuthContext from './store/authContext'

export const baseURL = "http://localhost:8080"

function App() {
  const authCtx = useContext(AuthContext)

  return (
    <>
      <Header />
      <div className="container">
        <Routes>
          <Route index element={authCtx.token ? <HomeScreen /> : <Navigate to='login'/>} />
          <Route path="register" element={!authCtx.token ? <Register /> : <Navigate to='/' />}/>
          <Route path="login" element={!authCtx.token ? <Auth /> : <Navigate to='/' />} />
          <Route path="add-new-log" element={authCtx.token ? <AddLogForm /> : <Auth />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
