import React from "react";
import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Player from "../Player/Player";
import TodoApp from "../TodoApp/TodoApp";

const Content = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<TodoApp />} />
        <Route path="/player" element={<Player />} />
      </Routes>
    </>
  );
};

export default Content;
