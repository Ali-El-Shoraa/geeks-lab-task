import "./App.css";
import ContextApi from "./components/ContextApi";
// import { Routes, Route } from "react-router-dom";
// import SideBar from "./components/SideBar/SideBar";
// import Header from "./components/Header/Header";
import Home from "./components/Home";

function App() {
  return (
    <ContextApi>
      <Home />
    </ContextApi>
  );
}

export default App;
