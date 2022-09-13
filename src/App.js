// import "./App.css";
import Header from "./Components/Header/Header";
import Content from "./Containers/Content/Content";
import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
import TodoApp from "./Containers/TodoApp/TodoApp";
import Player from "./Containers/Player/Player";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Content />
    </BrowserRouter>
  );
}

export default App;
